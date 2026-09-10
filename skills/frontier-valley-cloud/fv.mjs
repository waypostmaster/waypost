#!/usr/bin/env node
// fv.mjs — Frontier Valley Cloud API wrapper.
//
// Keeps the settler token out of command lines, transcripts and logs.
// Usage, from the settler's own working folder:
//
//   node fv.mjs init                 store the token from bookmark.md into .secret/
//   node fv.mjs me                   GET  /api/realm/me
//   node fv.mjs rules                GET  /api/realm/rules   (public, no token)
//   node fv.mjs cmd '<json|verb>'    POST /api/realm/commands
//   node fv.mjs plan '<json|verb>'   POST /api/realm/plan
//
// The command argument is either a JSON object — '{"verb":"gather","item":"wood"}'
// — or a bare verb word, which becomes {"verb":"<word>"}.
//
// The token is never printed by any path, including errors and 401 handling.
// Exit 0 on a 2xx response, 1 otherwise.

import { readFileSync, writeFileSync, mkdirSync, existsSync, chmodSync } from 'node:fs';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';

const BASE = 'https://frontiervalley.cloud';
const SECRET_DIR = join(process.cwd(), '.secret');
const TOKEN_FILE = join(SECRET_DIR, 'token');
const HEADER_FILE = join(SECRET_DIR, 'headers');
const BOOKMARK_NAMES = ['bookmark.md', 'BOOKMARK.md', 'Bookmark.md'];

const TOKEN_RE = /#settler=([0-9a-fA-F]{64})/;

// --- token resolution: env, then .secret/token, then bookmark.md. Never printed.

function fromBookmark() {
  for (const name of BOOKMARK_NAMES) {
    const p = join(process.cwd(), name);
    if (!existsSync(p)) continue;
    const m = TOKEN_RE.exec(readFileSync(p, 'utf8'));
    if (m) return m[1];
  }
  return null;
}

function resolveToken() {
  if (process.env.FV_TOKEN) return process.env.FV_TOKEN.trim();
  if (existsSync(TOKEN_FILE)) {
    const t = readFileSync(TOKEN_FILE, 'utf8').trim();
    if (t) return t;
  }
  return fromBookmark();
}

// Redaction net. The token is stripped from EVERYTHING this script prints.
// Diagnostics (errors, usage, HTTP failures) are additionally stripped of any
// 64-hex run, because that is where a token most often leaks by accident.
// Response bodies keep other hex ids intact — you need them for `give`,
// `transfer-boat` and the like.
let SECRET = null;
function stripSecret(text) {
  const s = String(text);
  return SECRET ? s.split(SECRET).join('<redacted>') : s;
}
function stripHex(text) {
  return stripSecret(text).replace(/[0-9a-fA-F]{64}/g, '<redacted>');
}
function out(text) { process.stdout.write(stripSecret(text) + '\n'); }
function err(text) { process.stderr.write(stripHex(text) + '\n'); }

// Never call process.exit() after an async write: on Windows that aborts the
// process with a libuv assertion and a 127, whatever the request actually did.
// Set process.exitCode and return instead.
class Fail extends Error {}
function die(msg) { throw new Fail(msg); }

// --- init

function init() {
  const tok = process.env.FV_TOKEN ? process.env.FV_TOKEN.trim() : fromBookmark();
  if (!tok) die('no token found: set FV_TOKEN, or put a bookmark URL with #settler=<hex> in bookmark.md in this folder');
  mkdirSync(SECRET_DIR, { recursive: true });
  writeFileSync(TOKEN_FILE, tok + '\n', 'utf8');
  writeFileSync(HEADER_FILE, 'Authorization: Bearer ' + tok + '\n', 'utf8');
  for (const f of [TOKEN_FILE, HEADER_FILE]) {
    try { chmodSync(f, 0o600); } catch { /* filesystem does not honour modes */ }
  }
  out(`token stored in .secret/ (${tok.length} chars)`);
  out('curl users: curl -H @.secret/headers ' + BASE + '/api/realm/me');
}

// --- requests

function parseCommand(arg) {
  if (!arg) die('this subcommand needs a command argument');
  const t = arg.trim();
  if (t.startsWith('{')) {
    try { return JSON.parse(t); } catch (e) { die('command argument is not valid JSON: ' + e.message); }
  }
  if (/^[a-z][a-z-]*$/.test(t)) return { verb: t };
  die('command argument must be a JSON object or a bare verb word');
}

async function request(path, { method = 'GET', body = null, auth = true } = {}) {
  const headers = { 'Accept': 'application/json' };
  if (auth) {
    const tok = resolveToken();
    if (!tok) die('no token found: run `node fv.mjs init` in the settler folder first');
    SECRET = tok;
    headers['Authorization'] = 'Bearer ' + tok;
  }
  if (body !== null) headers['Content-Type'] = 'application/json';

  let res;
  try {
    res = await fetch(BASE + path, { method, headers, body: body === null ? undefined : JSON.stringify(body) });
  } catch (e) {
    // Never let a thrown request object print the headers.
    die('request failed: ' + (e && e.message ? e.message : 'network error'));
  }

  const text = await res.text();
  if (!res.ok) {
    // On a failure print the status and the server's own body, nothing else.
    err(`HTTP ${res.status} ${res.statusText}`);
    err(text.slice(0, 4000));
    process.exitCode = 1;
    return;
  }
  try {
    out(JSON.stringify(JSON.parse(text), null, 2));
  } catch {
    out(text);
  }
  process.exitCode = 0;
}

// --- dispatch

const [verb, arg] = process.argv.slice(2);

try {
  switch (verb) {
    case 'init':
      init();
      break;
    case 'me':
      await request('/api/realm/me');
      break;
    case 'rules':
      await request('/api/realm/rules', { auth: false });
      break;
    case 'ack':
      await request('/api/realm/acknowledgment', { method: 'POST', body: { acknowledged: true } });
      break;
    case 'cmd':
      await request('/api/realm/commands', { method: 'POST', body: { id: randomUUID(), command: parseCommand(arg) } });
      break;
    case 'plan':
      await request('/api/realm/plan', { method: 'POST', body: { command: parseCommand(arg) } });
      break;
    default:
      die("usage: node fv.mjs init | me | rules | ack | cmd '<json|verb>' | plan '<json|verb>'");
  }
} catch (e) {
  err('fv: ' + (e && e.message ? e.message : 'failed'));
  process.exitCode = 1;
}
