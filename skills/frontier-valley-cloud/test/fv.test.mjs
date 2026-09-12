import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHelper } from '../fv.mjs';

const token = 'A'.repeat(64);
const setup = responses => {
  const cwd = mkdtempSync(join(tmpdir(), 'fv-'));
  const calls = [], out = [], err = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, init });
    const item = responses.shift() ?? { status: 200, data: { ok: true } };
    if (item.throw) throw item.throw;
    return new Response(JSON.stringify(item.data), { status: item.status, statusText: item.status === 200 ? 'OK' : 'Fail' });
  };
  const h = createHelper({ cwd, env: { FV_TOKEN: token }, fetchImpl, stdout: line => out.push(line), stderr: line => err.push(line) });
  return { cwd, calls, out, err, h };
};

const state = {
  serverTime: 1,
  you: { id: 'p', name: 'P', region: 'r', x: 2, y: 3, inventory: { wood: 3 }, job: { kind: 'gather', endsAt: 99 } },
  queue: { steps: [{ verb: 'move' }], blocker: 'busy', maxSteps: 12 },
  room: { name: 'Hill', terrain: 'forest', elevation: 2, buildings: { road: {} }, resources: { wood: 8 }, fishing: [{ kind: 'trap' }] },
  carts: [{ id: 'cart-1' }], localProjects: [{ id: 'project-1' }], carry: { grams: 3 }, needs: {}, connections: [],
  regions: ['large'],
};

test('uncertain command persists and retry reuses exact payload', async () => {
  const x = setup([{ status: 503, data: { error: token } }, { status: 200, data: { message: token, view: state } }]);
  assert.equal(await x.h.run(['cmd', '--id', 'repeat_request_001', '{"verb":"look"}']), 1);
  const saved = readFileSync(x.h.pendingFile, 'utf8');
  assert.equal(saved.toLowerCase().includes(token.toLowerCase()), false);
  await assert.rejects(x.h.run(['cmd', '{"verb":"move","direction":"north"}']), /may still have reached/);
  assert.equal(x.calls.length, 1);
  assert.equal(await x.h.run(['retry']), 0);
  assert.deepEqual(JSON.parse(x.calls[0].init.body), JSON.parse(x.calls[1].init.body));
  assert.equal(saved.trim(), x.calls[0].init.body);
  assert.equal(existsSync(x.h.pendingFile), false);
  assert.equal(JSON.stringify([x.out, x.err]).toLowerCase().includes(token.toLowerCase()), false);
  assert.equal(x.calls[0].url, 'https://frontiervalley.cloud/api/realm/commands');
  assert.equal(x.calls[0].init.redirect, 'error');
  assert(x.calls[0].init.signal);
});

test('network failure protects pending command until explicit discard', async () => {
  const x = setup([{ throw: new Error('offline') }]);
  await assert.rejects(x.h.run(['cmd', '--id', 'uncertain_req_001', 'look']), /request failed/);
  assert.equal(existsSync(x.h.pendingFile), true);
  assert.equal(await x.h.run(['discard-pending']), 0);
  assert.equal(existsSync(x.h.pendingFile), false);
  assert.match(x.out.at(-1), /does not cancel/);
});

test('definitive 4xx clears pending but 429 preserves it', async () => {
  const rejected = setup([{ status: 400, data: { error: 'bad command' } }]);
  assert.equal(await rejected.h.run(['cmd', '--id', 'rejected_request_1', 'look']), 1);
  assert.equal(existsSync(rejected.h.pendingFile), false);
  const limited = setup([{ status: 429, data: { error: 'later' } }]);
  assert.equal(await limited.h.run(['cmd', '--id', 'limited_request_01', 'look']), 1);
  assert.equal(existsSync(limited.h.pendingFile), true);
});

test('me compact includes practical state while full is explicit', async () => {
  const x = setup([{ status: 200, data: state }, { status: 200, data: state }]);
  await x.h.run(['me']);
  const compact = JSON.parse(x.out[0]);
  assert.deepEqual(compact.you.inventory, { wood: 3 });
  assert.equal(compact.you.job.endsAt, 99);
  assert.equal(compact.queue.blocker, 'busy');
  assert.deepEqual(compact.room.resources, { wood: 8 });
  assert.equal(compact.fishing.length, 1);
  assert.equal(compact.carts.length, 1);
  assert.equal(compact.localProjects.length, 1);
  assert.equal(x.out[0].includes('regions'), false);
  await x.h.run(['me', '--full']);
  assert.equal(x.out[1].includes('regions'), true);
});

test('command success is summarized unless full is explicit', async () => {
  const response = { message: 'Started.', view: state, audit: ['large'] };
  const x = setup([{ status: 200, data: response }, { status: 200, data: response }]);
  await x.h.run(['cmd', '--id', 'summary_request_01', 'look']);
  const summary = JSON.parse(x.out[0]);
  assert.equal(summary.message, 'Started.');
  assert.deepEqual(summary.view.you.inventory, { wood: 3 });
  assert.equal(x.out[0].includes('audit'), false);
  await x.h.run(['cmd', '--id', 'full_request_0001', '--full', 'look']);
  assert.equal(x.out[1].includes('audit'), true);
});

test('rules filters one top-level key without auth', async () => {
  const x = setup([{ status: 200, data: { commands: [{ verb: 'look' }], world: 'text' } }]);
  await x.h.run(['rules', 'commands']);
  assert.deepEqual(JSON.parse(x.out[0]), [{ verb: 'look' }]);
  assert.equal(x.calls[0].init.headers.Authorization, undefined);
});

test('init normalizes key and never prints it', async () => {
  const x = setup([]);
  await x.h.run(['init']);
  assert.equal(readFileSync(x.h.tokenFile, 'utf8').trim(), 'a'.repeat(64));
  assert.equal(x.out.join('').includes(token), false);
});

test('invalid key fails before network', async () => {
  const x = setup([]);
  const bad = createHelper({ cwd: x.cwd, env: { FV_TOKEN: 'bad' }, fetchImpl: async () => { throw Error('called'); }, stdout: () => {}, stderr: () => {} });
  await assert.rejects(bad.run(['me']), /64 hexadecimal/);
});