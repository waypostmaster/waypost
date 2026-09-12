#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync, existsSync, chmodSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { pathToFileURL } from 'node:url';

const BASE = 'https://frontiervalley.cloud';
const TOKEN = /^[0-9a-f]{64}$/i;
const BOOKMARK = /#settler=([0-9a-f]{64})/i;
class Fail extends Error {}
const die = message => { throw new Fail(message); };

export function createHelper({
  cwd = process.cwd(), env = process.env, fetchImpl = fetch,
  stdout = line => process.stdout.write(line + '\n'),
  stderr = line => process.stderr.write(line + '\n'),
} = {}) {
  const secretDir = join(cwd, '.secret');
  const tokenFile = join(secretDir, 'token');
  const pendingFile = join(secretDir, 'pending-command.json');
  let secret = '';
  const clean = value => secret ? String(value).replace(new RegExp(secret, 'ig'), '<redacted>') : String(value);
  const err = value => stderr(clean(value).replace(/[0-9a-f]{64}/ig, '<redacted>'));
  const out = value => stdout(clean(value));
  const validate = value => {
    const token = String(value ?? '').trim();
    if (!TOKEN.test(token)) die('settler key must be exactly 64 hexadecimal characters');
    return token.toLowerCase();
  };
  const bookmark = () => {
    for (const name of ['bookmark.md', 'BOOKMARK.md', 'Bookmark.md']) {
      const file = join(cwd, name);
      if (!existsSync(file)) continue;
      const match = BOOKMARK.exec(readFileSync(file, 'utf8'));
      if (match) return match[1];
    }
    return null;
  };
  const resolveToken = () => {
    let raw = env.FV_TOKEN;
    if (!raw && env.FV_TOKEN_FILE) raw = readFileSync(env.FV_TOKEN_FILE, 'utf8');
    if (!raw && existsSync(tokenFile)) raw = readFileSync(tokenFile, 'utf8');
    if (!raw) raw = bookmark();
    if (!raw) die('no token found: set FV_TOKEN/FV_TOKEN_FILE, run init, or keep a legacy bookmark');
    return validate(raw);
  };
  const parse = argument => {
    if (!argument) die('command argument required');
    const text = argument.trim();
    if (text.startsWith('{')) {
      let value;
      try { value = JSON.parse(text); } catch (error) { die('invalid command JSON: ' + error.message); }
      if (!value || typeof value !== 'object' || Array.isArray(value)) die('command must be a JSON object');
      return value;
    }
    if (/^[a-z][a-z-]*$/.test(text)) return { verb: text };
    die('command must be JSON or a bare verb');
  };
  const limited = (value, maximum = 8) => Array.isArray(value) ? value.slice(0, maximum) : value;
  const boundedObject = value => value && typeof value === 'object' && !Array.isArray(value)
    ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, limited(item)]))
    : value;
  const compact = state => {
    const you = state?.you ?? {};
    const room = state?.room ?? {};
    const queue = state?.queue ?? you.queue;
    const job = state?.job ?? you.job;
    return {
      serverTime: state?.serverTime,
      you: {
        id: you.id, name: you.name, region: you.region, x: you.x, y: you.y,
        inventory: you.inventory ?? state?.inventory,
        job: job ? { kind: job.kind, label: job.label, item: job.item, endsAt: job.endsAt ?? job.ends } : null,
      },
      queue: Array.isArray(queue) ? { steps: queue.slice(0, 8), count: queue.length, maxSteps: state?.maxQueueSteps ?? you.maxQueueSteps, blocker: state?.queueBlocker ?? you.queueBlocker } : boundedObject(queue),
      room: {
        name: room.name, terrain: room.terrain, elevation: room.elevation,
        resources: room.resources ?? room.ground,
        buildings: Object.keys(room.buildings ?? {}),
      },
      carry: state?.carry,
      needs: state?.needs,
      connections: limited(state?.connections),
      fishing: limited(state?.fishing ?? room.fishing, 6),
      carts: limited(state?.carts ?? room.carts, 6),
      localProjects: limited(state?.localProjects ?? state?.constructionProjects ?? room.projects ?? state?.projects, 6),
    };
  };
  const request = async (path, { method = 'GET', body, auth = true } = {}) => {
    const headers = { Accept: 'application/json' };
    if (auth) {
      secret = resolveToken();
      headers.Authorization = 'Bearer ' + secret;
    }
    if (body !== undefined) headers['Content-Type'] = 'application/json';
    let response;
    try {
      response = await fetchImpl(BASE + path, {
        method, headers, body: body === undefined ? undefined : JSON.stringify(body),
        redirect: 'error', signal: AbortSignal.timeout(15000),
      });
    } catch (error) {
      die('request failed: ' + (error?.name === 'TimeoutError' ? 'timed out' : error?.message ?? 'network error'));
    }
    const text = await response.text();
    let data;
    try { data = JSON.parse(text); } catch { data = text; }
    if (!response.ok) {
      err(`HTTP ${response.status} ${response.statusText}`);
      err(text.slice(0, 4000));
      return { ok: false, status: response.status, data };
    }
    return { ok: true, status: response.status, data };
  };
  const savePending = payload => {
    mkdirSync(secretDir, { recursive: true, mode: 0o700 });
    try { chmodSync(secretDir, 0o700); } catch {}
    writeFileSync(pendingFile, JSON.stringify(payload) + '\n', { mode: 0o600 });
    try { chmodSync(pendingFile, 0o600); } catch {}
  };
  const send = async (payload, full = false) => {
    savePending(payload);
    const result = await request('/api/realm/commands', { method: 'POST', body: payload });
    if (!result.ok) {
      if (result.status >= 400 && result.status < 500 && result.status !== 429) unlinkSync(pendingFile);
      return 1;
    }
    unlinkSync(pendingFile);
    out(JSON.stringify(full ? result.data : {
      message: result.data?.message,
      view: compact(result.data?.view ?? result.data?.state ?? result.data),
    }, null, 2));
    return 0;
  };

  return {
    async run(args) {
      const [verb, ...rest] = args;
      if (verb === 'init') {
        let raw = env.FV_TOKEN;
        if (!raw && env.FV_TOKEN_FILE) raw = readFileSync(env.FV_TOKEN_FILE, 'utf8');
        if (!raw) raw = bookmark();
        if (!raw) die('set FV_TOKEN/FV_TOKEN_FILE or provide legacy bookmark.md');
        const token = validate(raw);
        mkdirSync(secretDir, { recursive: true, mode: 0o700 });
        try { chmodSync(secretDir, 0o700); } catch {}
        writeFileSync(tokenFile, token + '\n', { mode: 0o600 });
        try { chmodSync(tokenFile, 0o600); } catch {}
        out('token stored in .secret/token; add .secret/ to your ignore file');
        return 0;
      }
      if (verb === 'me') {
        const full = rest.includes('--full');
        const result = await request('/api/realm/me');
        if (!result.ok) return 1;
        out(JSON.stringify(full ? result.data : compact(result.data), null, 2));
        return 0;
      }
      if (verb === 'rules') {
        const result = await request('/api/realm/rules', { auth: false });
        if (!result.ok) return 1;
        const key = rest[0];
        if (key && !Object.hasOwn(result.data, key)) die('unknown rules key');
        out(JSON.stringify(key ? result.data[key] : result.data, null, 2));
        return 0;
      }
      if (verb === 'ack') {
        const result = await request('/api/realm/acknowledgment', { method: 'POST', body: { acknowledged: true } });
        if (result.ok) out(JSON.stringify(result.data, null, 2));
        return result.ok ? 0 : 1;
      }
      if (verb === 'cmd') {
        if (existsSync(pendingFile)) die('a command may still have reached the server; use retry or discard-pending before sending another');
        let id;
        const idAt = rest.indexOf('--id');
        if (idAt >= 0) { id = rest[idAt + 1]; rest.splice(idAt, 2); }
        const fullAt = rest.indexOf('--full');
        const full = fullAt >= 0;
        if (full) rest.splice(fullAt, 1);
        if (id && !/^[a-zA-Z0-9_-]{16,80}$/.test(id)) die('request id must be 16–80 safe characters');
        return send({ id: id ?? randomUUID(), command: parse(rest.join(' ')) }, full);
      }
      if (verb === 'retry') {
        if (!existsSync(pendingFile)) die('no pending command to retry');
        const full = rest.includes('--full');
        return send(JSON.parse(readFileSync(pendingFile, 'utf8')), full);
      }
      if (verb === 'discard-pending') {
        if (!existsSync(pendingFile)) die('no pending command to discard');
        unlinkSync(pendingFile);
        out('pending record discarded; this does not cancel an action that may already have reached the server');
        return 0;
      }
      if (verb === 'plan') {
        const result = await request('/api/realm/plan', { method: 'POST', body: { command: parse(rest.join(' ')) } });
        if (result.ok) out(JSON.stringify(result.data, null, 2));
        return result.ok ? 0 : 1;
      }
      die("usage: fv init | me [--full] | rules [key] | ack | cmd [--id ID] [--full] '<json|verb>' | retry [--full] | discard-pending | plan '<json|verb>'");
    },
    pendingFile, tokenFile,
  };
}

export async function main(args = process.argv.slice(2)) {
  const helper = createHelper();
  try { return await helper.run(args); }
  catch (error) {
    process.stderr.write('fv: ' + String(error?.message ?? 'failed').replace(/[0-9a-f]{64}/ig, '<redacted>') + '\n');
    return 1;
  }
}
if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) process.exitCode = await main();