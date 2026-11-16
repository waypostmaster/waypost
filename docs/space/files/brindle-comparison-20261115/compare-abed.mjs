// A paired comparison of one settler's programme under two plans, CUT BY CUT ONLY.
//
// For each named cut, run alone from its own produced opening (playDay, tools/cuts.mjs):
//   BASE   the produced file as it is            BASE2  the same again
//   CAND   the produced file with only <who>'s daybook plan and ifStuck replaced from the candidate file
//   CAND2  the same again                        IDENT  the candidate path fed the produced plan itself
// Controls: (1) BASE's close equals the next produced opening; (2) BASE==BASE2 and CAND==CAND2 at
// every step; (3) IDENT==BASE at every step. Any FAIL prints STOP, prints no candidate finding, exits 1.
//
// Scratch only: reads episodes/ and the candidate files, writes under this directory.
//
//   node compare.mjs --who <npc id> --stem <episode stem> --cuts 1,3,4
//        --candidates <dir of <name>-cutK.json | standing> --out <file>
//        [--also <id,id|all>] [--next K=<path>] [--negative ident-step|transient]
import { createServer } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { resolve, dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = 'C:/Claude/Games/Frontier/.claude/worktrees/abed';
const HERE = dirname(fileURLToPath(import.meta.url));
const SELF = fileURLToPath(import.meta.url);

// ── arguments ──────────────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const opt = {};
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (!a.startsWith('--')) throw new Error('unexpected argument ' + a);
  const k = a.slice(2);
  const v = argv[i + 1];
  if (v === undefined || v.startsWith('--')) throw new Error('--' + k + ' wants a value');
  if (k === 'next') { (opt.next ??= []).push(v); } else opt[k] = v;
  i++;
}
for (const k of ['who', 'stem', 'cuts', 'candidates', 'out']) if (opt[k] === undefined) throw new Error('--' + k + ' is required');
const WHO = opt.who;
const STEM = opt.stem;
const CUTS = opt.cuts.split(',').map((s) => Number(s.trim()));
if (CUTS.some((k) => !Number.isInteger(k) || k < 1)) throw new Error('--cuts wants integers, got ' + opt.cuts);
const CANDS = opt.candidates;
const OUT = resolve(opt.out);
const NEG = opt.negative ?? null;
if (NEG !== null && NEG !== 'ident-step' && NEG !== 'transient') throw new Error('--negative is ident-step or transient');
const NEXT_OVERRIDE = new Map((opt.next ?? []).map((s) => { const [k, p] = s.split('='); return [Number(k), resolve(p)]; }));

const LINES = [];
const out = (s = '') => { LINES.push(s); };
const sha = (p) => createHash('sha256').update(readFileSync(p)).digest('hex');
const pad = (s, n) => { s = String(s); return s.length >= n ? s : s + ' '.repeat(n - s.length); };
const f4 = (x) => (x === null || x === undefined || Number.isNaN(x) ? '-' : Number(x).toFixed(4));
const git = (...a) => execFileSync('git', ['-C', ROOT, ...a], { encoding: 'utf8' }).trim();

const inputs = []; // [label, path]
inputs.push(['script', SELF]);

out('# Paired comparison, cut by cut. Scratch only; nothing filed, produced or aired.');
out('run at ' + new Date().toISOString() + ' (wall clock of this process)');
out('args: ' + argv.join(' '));
out('who: ' + WHO + '   stem: ' + STEM + '   cuts: ' + CUTS.join(',') + '   candidates: ' + CANDS + (NEG ? '   NEGATIVE TEST: ' + NEG : ''));
out('git rev-parse HEAD: ' + git('rev-parse', 'HEAD'));
const srcDiff = git('diff', '8080859', 'HEAD', '--', 'src');
out('git diff 8080859 HEAD -- src: ' + (srcDiff === '' ? 'empty (0 bytes)' : srcDiff.length + ' bytes, NOT EMPTY'));
const srcDirty = git('status', '--porcelain', '--', 'src');
out('git status --porcelain -- src: ' + (srcDirty === '' ? 'clean' : srcDirty.replace(/\n/g, ' | ')));

// ── the server and the engine ─────────────────────────────────────────────────────────────
const server = await createServer({ root: ROOT, server: { middlewareMode: true, hmr: false, watch: null }, logLevel: 'error', appType: 'custom' });
let exitCode = 0;
try {
  const S = await server.ssrLoadModule('/src/sim.ts');
  const A = await server.ssrLoadModule('/src/airtime.ts');
  const C = await server.ssrLoadModule('/tools/cuts.mjs');
  const K = await server.ssrLoadModule('/src/canonical.ts');
  for (const p of ['src/sim.ts', 'src/airtime.ts', 'src/canonical.ts', 'tools/cuts.mjs']) inputs.push(['engine', ROOT + '/' + p]);

  // The per-step digest: every settler, every building, every settlement and the clock, through
  // the producer's own exemptions (CANONICAL_EXEMPT, src/canonical.ts: run, path, askedAt, goalsAskedAt).
  const EX = K.CANONICAL_EXEMPT;
  const digestOf = (w) => createHash('sha1').update(JSON.stringify({ time: w.time, npcs: w.npcs, buildings: w.buildings, towns: w.towns },
    (k, v) => (EX.has(k) ? undefined : v instanceof Map ? Object.fromEntries(v) : v))).digest('hex');
  // check-chainlink's whole-world form (tools/check-chainlink.mjs:136), for the wider row of control 1.
  const CL_EX = new Set(['run', 'path', 'askedAt', 'goalsAskedAt', 'routed']);
  const chainlinkCanon = (w) => JSON.stringify(w, (k, v) => (CL_EX.has(k) ? undefined : v instanceof Map ? [...v.entries()] : v));

  const epPath = (k) => ROOT + '/episodes/' + STEM + '-cut' + k + '.json';
  // One directory of scratch arm episodes per output file, so a later run never overwrites the
  // files an earlier receipt hashed.
  const armDir = OUT.replace(/\.[^.\\/]*$/, '') + '.arms'; mkdirSync(armDir, { recursive: true });

  // ── task words ──────────────────────────────────────────────────────────────────────────
  const srcOf = (t) => {
    if (t === null || t === undefined) return 'none';
    if (t.fromAgent === true) return 'filed';
    if (t.note === 'asleep on their feet') return 'collapse';
    if (S.ruleOf(t) === 'rest:laid-up-hurt' || /^laid up/.test(t.note)) return 'hurt';
    return 'own';
  };
  const descT = (t) => (t ? t.action + '(' + srcOf(t) + (t.fromAgent ? '' : ':' + S.ruleOf(t)) + ') "' + t.note + '"' : '-');
  // The three store tasks, by ownChoice's rule names (sim.ts, ownChoice), and by note for a task
  // restored from a file, which carries no rule name (ruleOf says 'unnamed').
  const STORE = [
    ['goto:going-back-to-mind-the-store', 'going back to mind the store'],
    ['haul:putting-the-days-takings-away', 'putting the day’s takings away'],
    ['keep:minding-the-store', 'minding the store'],
  ];
  const storeOf = (t) => {
    if (!t || t.fromAgent) return null;
    const r = S.ruleOf(t);
    for (const [rule, note] of STORE) if (r === rule || (r === 'unnamed' && t.note === note)) return rule;
    return null;
  };

  // ── one arm ─────────────────────────────────────────────────────────────────────────────
  // Runs one cut from one file through playDay and keeps: the per-step digest, the close, and for
  // each tracked settler what the eight heads and pin 1 want, collected at every step.
  function runArm(name, k, path, tracked, hooks = {}) {
    const ep = JSON.parse(readFileSync(path, 'utf8'));
    const R = { name, k, path, digests: [], tracked: {}, others: { depotMeals: 0 }, open: null, close: null, ep };
    let T0 = 0, AIR0 = 0;
    const seenFeed = new Map();
    const air = (step) => new Date(AIR0 + step * ep.dt * 72000).toISOString().slice(11, 19) + 'Z';
    R.air = (step) => air(step);
    const prevAll = new Map(); // id -> { task, food, packFood }
    const onCut = (w, entry, e, when) => {
      if (when === 'open') {
        T0 = w.time; AIR0 = Date.parse(e.aired_at);
        R.T0 = T0; R.AIR0 = AIR0;
        for (const f of w.feed) seenFeed.set(f, f.count);
        const snapFeed = e.snapshot.feed ?? [];
        const openLines = w.feed.filter((f) => !snapFeed.some((s) => s.key === f.key && s.text === f.text && s.count === f.count)).map((f) => f.text);
        R.openLines = openLines;
        R.digests.push(digestOf(w));
        for (const n of w.npcs) prevAll.set(n.id, { task: n.task, food: n.needs.food, packFood: n.carrying.food, gx: n.gx, gy: n.gy, working: n.working, rest: n.needs.rest });
        for (const id of tracked) {
          const n = w.npcs.find((x) => x.id === id);
          if (n === undefined) throw new Error(id + ' is not in cut ' + k);
          const snapN = e.snapshot.npcs.find((x) => x.id === id);
          const T = {
            id, name: n.name,
            snapTask: snapN.task ? snapN.task.action + '(' + (snapN.task.fromAgent ? 'filed' : 'own') + ') "' + snapN.task.note + '"' : '-',
            snapTaskRaw: snapN.task,
            openTask: descT(n.task), openTaskObj: n.task,
            open: { food: n.needs.food, rest: n.needs.rest, happy: n.happiness, gx: n.gx, gy: n.gy, pack: { ...n.carrying } },
            seenH: new Set(n.history),
            steps: [], rests: [], drops: [], meals: [], loads: { paid: 0, paidFood: 0, unpaid: 0, nobodyIn: 0, nobodyInGoods: 0, delivered: 0, deliveredGoods: 0, stacked: 0 },
            gives: [], rot: { history: 0, feed: 0 }, feedDrops: 0,
            food: { sum: 0, max: -1, over95: 0, at1: 0, first95: null, first1: null },
            rest: { sum: 0, min: 2, max: -1 },
            work: {}, store: {}, filedHaul: 0, keeperSteps: 0, keeperInSteps: 0, steps_n: 0,
            curRest: null,
          };
          // Plan steps as the open left them. The letter (n.letter, set by applyInstruction at this
          // time) lists every step as filed; what is in n.plan and n.stepBack now is what survived.
          const letter = n.letter && n.letter.at === w.time ? n.letter : null;
          const descs = letter ? letter.steps : [];
          const branch = letter ? letter.branch : [];
          const held = n.plan.slice();
          const taken = n.stepBack !== null && n.task && n.task.fromAgent === true ? 1 : 0;
          const refusedAtOpen = descs.length - held.length - taken;
          for (let i = 0; i < descs.length; i++) {
            const rec = { i, desc: descs[i], src: 'plan', obj: null, st: 'out', first: null, spent: 0, starts: 0, breaks: [], outcome: null, why: null, taskObj: null };
            if (i < refusedAtOpen) {
              rec.outcome = 'refused at the opening';
              const line = openLines.find((t) => t.startsWith(n.name + ' could not ' + descs[i]));
              rec.why = line ?? '(no refusal line found at the opening)';
            } else if (taken === 1 && i === refusedAtOpen) {
              rec.obj = n.stepBack; rec.st = 'active'; rec.first = 0; rec.starts = 1; rec.taskObj = n.task;
            } else {
              rec.obj = held[i - refusedAtOpen - taken]; rec.st = 'waiting';
            }
            T.steps.push(rec);
          }
          for (let i = 0; i < n.fallback.length; i++) {
            T.steps.push({ i: descs.length + i, desc: (branch[i] ?? '?') + ' [ifStuck]', src: 'ifStuck', obj: n.fallback[i], st: 'waiting', first: null, spent: 0, starts: 0, breaks: [], outcome: null, why: null, taskObj: null });
          }
          T.refusedAtOpen = refusedAtOpen; T.letterAt = letter ? letter.at : null; T.planLen = descs.length;
          // keepsOwnRest (sim.ts) says this line when the opening leaves a settler's own rest in hand
          T.keptAbed = openLines.some((t) => t.startsWith(n.name + ' is seeing to their own rest and has put the day down'));
          // a rest in hand at the opening
          if (n.task && n.task.action === 'rest') T.curRest = { kind: srcOf(n.task), obj: n.task, begin: 0, restAt: n.needs.rest, walk: 0, asleep: 0, other: 0, end: null, restEnd: null, how: null, atOpen: true };
          R.tracked[id] = T;
        }
        if (hooks.open) hooks.open(w, R);
      } else {
        R.close = w;
        for (const id of tracked) {
          const T = R.tracked[id];
          if (T.curRest) { T.rests.push(T.curRest); T.curRest = null; }
          for (const rec of T.steps) if (rec.outcome === null) rec.outcome = rec.st === 'active' ? 'in hand at the close' : rec.st === 'waiting' ? (rec.first === null ? 'never reached' : 'broken off, not taken up again') : rec.outcome;
        }
      }
    };
    const onStep = (w, entry, taken) => {
      if (hooks.step) hooks.step(w, taken, R);
      R.digests.push(digestOf(w));
      // new feed lines this step, never the folded tail
      const fresh = [];
      for (const f of w.feed) {
        const c = seenFeed.get(f);
        if (c === undefined || f.count > c) { fresh.push({ f, delta: c === undefined ? 1 : f.count - c }); seenFeed.set(f, f.count); }
      }
      const town0 = w.towns[0];
      for (const n of w.npcs) {
        const P = prevAll.get(n.id);
        const T = R.tracked[n.id];
        const ate = P && P.food - n.needs.food > 0.01;
        let mealFrom = null;
        if (ate) mealFrom = n.carrying.food < P.packFood ? 'pack' : 'store';
        if (ate && T === undefined && mealFrom === 'store') R.others.depotMeals++;
        if (T !== undefined) {
          T.steps_n++;
          const fd = n.needs.food, rs = n.needs.rest;
          T.food.sum += fd; if (fd > T.food.max) T.food.max = fd;
          if (fd > 0.95) { T.food.over95++; T.food.first95 ??= taken; }
          if (fd >= 1) { T.food.at1++; T.food.first1 ??= taken; }
          T.rest.sum += rs; if (rs < T.rest.min) T.rest.min = rs; if (rs > T.rest.max) T.rest.max = rs;
          if (ate) T.meals.push({ step: taken, from: P.food, to: fd, src: mealFrom, by: descT(P.task), at: Math.round(n.gx) + ',' + Math.round(n.gy) });
          // work by source
          const s = srcOf(n.task), act = n.task ? n.task.action : '-';
          T.work[s] ??= {}; T.work[s][act] = (T.work[s][act] ?? 0) + 1;
          const st = storeOf(n.task); if (st) T.store[st] = (T.store[st] ?? 0) + 1;
          if (n.task && n.task.fromAgent && n.task.action === 'haul') T.filedHaul++;
          // keeping: is this settler the keeper, and in? keeperOf can write town.keeper, so it is put back.
          const town = w.towns.find((t) => t.id === n.town) ?? town0;
          const k0 = town.keeper;
          const kp = S.keeperOf(w, town); const isIn = S.keeperIsIn(w, town);
          town.keeper = k0;
          if (kp && kp.id === n.id) { T.keeperSteps++; if (isIn) T.keeperInSteps++; }
          // rests
          if (T.curRest && n.task !== T.curRest.obj) {
            const slept = P.rest - rs > 0.01;
            if (slept) T.curRest.asleep++; // the step finishRest ran on is the last step of sleep
            T.curRest.end = taken; T.curRest.restEnd = rs; T.curRest.how = (slept ? 'slept it out' : 'replaced') + ', then ' + descT(n.task);
            T.rests.push(T.curRest); T.curRest = null;
          }
          if (n.task && n.task.action === 'rest' && (T.curRest === null) && n.task !== P.task) {
            T.curRest = { kind: srcOf(n.task), obj: n.task, begin: taken, restAt: rs, restBefore: P.rest, walk: 0, asleep: 0, other: 0, end: null, restEnd: null, how: null, atOpen: false };
            if (n.task.note === 'asleep on their feet') T.drops.push({ step: taken, restBefore: P.rest });
          } else if (T.curRest && n.task === T.curRest.obj) {
            if (n.gx !== P.gx || n.gy !== P.gy) T.curRest.walk++;
            else if (n.working < P.working) T.curRest.asleep++;
            else T.curRest.other++;
          }
          // plan steps by identity
          const inPlan = new Set(n.plan), inFb = new Set(n.fallback);
          for (const rec of T.steps) {
            if (rec.obj === null) continue;
            const now = n.stepBack === rec.obj ? 'active' : (inPlan.has(rec.obj) || inFb.has(rec.obj)) ? 'waiting' : 'out';
            if (now !== rec.st) {
              if (now === 'active') { rec.starts++; if (rec.first === null) rec.first = taken; rec.taskObj = n.task; }
              if (rec.st === 'active' && now === 'waiting') rec.breaks.push({ step: taken, by: descT(n.task) });
              if (rec.st === 'active' && now === 'out') { rec.outcome = P.task && P.task.fromAgent ? 'finished' : 'dropped while ' + descT(P.task); rec.end = taken; }
              if (rec.st === 'waiting' && now === 'out') {
                rec.outcome = 'refused';
                const line = fresh.find((x) => x.f.text.startsWith(n.name + ' could not ' + rec.desc.replace(/ \[ifStuck\]$/, '')));
                rec.why = line ? line.f.text : '(no refusal line found this step)';
                rec.end = taken;
              }
              rec.st = now;
            }
            if (now === 'active') rec.spent++;
          }
          // history: loads, gives, rot (per event, not folded)
          for (const h of n.history) {
            if (T.seenH.has(h)) continue;
            T.seenH.add(h);
            const tx = h.text;
            let m;
            if ((m = /^.+ paid (\d+) food for (\d+) goods$/.exec(tx))) { T.loads.paid++; T.loads.paidFood += Number(m[1]); }
            else if (tx === 'brought in a load and the stores had nothing to pay with') T.loads.unpaid++;
            else if ((m = /^left (\d+) at the store with nobody in it$/.exec(tx))) { T.loads.nobodyIn++; T.loads.nobodyInGoods += Number(m[1]); }
            else if ((m = /^delivered (\d+) to the depot$/.exec(tx))) { T.loads.delivered++; T.loads.deliveredGoods += Number(m[1]); }
            else if (/^stacked \d+ on the ground outside/.test(tx)) T.loads.stacked++;
            else if ((m = /^gave (\d+) (\w+) to (.+)$/.exec(tx))) {
              const t = P.task && P.task.action === 'give' ? P.task : null;
              T.gives.push({ step: taken, qty: Number(m[1]), item: m[2], to: m[3], cls: t === null ? 'unknown (no give in hand)' : t.fromAgent ? 'filed' : 'own choice (' + S.ruleOf(t) + ')' });
            } else if (tx === 'had food go soft in their pack') T.rot.history++;
          }
          for (const x of fresh) {
            if (x.f.text === n.name + ' had food go off in their pack. Nothing keeps in a sack.') T.rot.feed += x.delta;
            if (x.f.text === n.name + ' has dropped where they stood — days since they last slept.') T.feedDrops += x.delta;
          }
        }
        prevAll.set(n.id, { task: n.task, food: n.needs.food, packFood: n.carrying.food, gx: n.gx, gy: n.gy, working: n.working, rest: n.needs.rest });
      }
    };
    const t0 = Date.now();
    C.playDay(S, A, [{ cut: k, episode: basename(path), path, exists: true }], onStep, onCut);
    R.ms = Date.now() - t0;
    R.stepsRun = R.digests.length - 1;
    return R;
  }

  // ── control helpers ────────────────────────────────────────────────────────────────────
  const compareSteps = (a, b) => {
    const n = Math.max(a.digests.length, b.digests.length);
    let diff = 0, first = null;
    for (let i = 0; i < n; i++) if (a.digests[i] !== b.digests[i]) { diff++; if (first === null) first = i; }
    const closeEq = a.digests[a.digests.length - 1] === b.digests[b.digests.length - 1];
    return { diff, first, n, closeEq, la: a.digests.length, lb: b.digests.length };
  };
  const fieldsCompare = (w, snap) => {
    const diffs = [];
    let fields = 0;
    const ids = new Set([...w.npcs.map((n) => n.id), ...(snap.npcs ?? []).map((n) => n.id)]);
    for (const id of ids) {
      const a = w.npcs.find((n) => n.id === id), b = (snap.npcs ?? []).find((n) => n.id === id);
      if (!a || !b) { diffs.push(id + ' present on one side only'); continue; }
      const pairs = [['gx', a.gx, b.gx], ['gy', a.gy, b.gy], ['needs.food', a.needs.food, b.needs.food], ['needs.rest', a.needs.rest, b.needs.rest]];
      for (const it of new Set([...Object.keys(a.carrying), ...Object.keys(b.carrying)])) pairs.push(['carrying.' + it, a.carrying[it], b.carrying[it]]);
      for (const [f, x, y] of pairs) { fields++; if (x !== y) diffs.push(a.name + ' ' + f + ': replayed ' + x + ', opening ' + y); }
    }
    const nb = Math.max(w.buildings.length, (snap.buildings ?? []).length);
    if (w.buildings.length !== (snap.buildings ?? []).length) diffs.push('buildings: replayed ' + w.buildings.length + ', opening ' + (snap.buildings ?? []).length);
    for (let i = 0; i < nb; i++) {
      const a = w.buildings[i], b = (snap.buildings ?? [])[i];
      if (!a || !b) continue;
      for (const [f, x, y] of [['kind', a.kind, b.kind], ['condition', a.condition, b.condition], ['gx', a.gx, b.gx], ['gy', a.gy, b.gy]]) { fields++; if (x !== y) diffs.push('building ' + i + ' ' + f + ': replayed ' + x + ', opening ' + y); }
    }
    return { diffs, fields, settlers: ids.size, buildings: nb };
  };
  const nextOpeningFor = (k) => {
    if (NEXT_OVERRIDE.has(k)) return { path: NEXT_OVERRIDE.get(k), label: 'OVERRIDE (scratch copy) ' + NEXT_OVERRIDE.get(k) };
    const p = epPath(k + 1);
    if (existsSync(p)) return { path: p, label: basename(p) };
    // the next day's cut 1
    const day = /episode-(\d{4}-\d{2}-\d{2})T/.exec(STEM)?.[1];
    if (day) {
      const nd = new Date(Date.parse(day + 'T00:00:00Z') + 86400000).toISOString().slice(0, 10);
      const f = readdirSync(ROOT + '/episodes').find((x) => x.startsWith('episode-' + nd + 'T') && x.endsWith('-cut1.json'));
      if (f) return { path: ROOT + '/episodes/' + f, label: f };
      return { path: null, label: 'ABSENT: ' + nd.slice(8, 10).replace(/^0/, '') + ' ' + new Date(Date.parse(nd)).toUTCString().slice(8, 11) + ' cut 1 not produced' };
    }
    return { path: null, label: 'ABSENT: no next opening found' };
  };

  // ── the cuts ───────────────────────────────────────────────────────────────────────────
  const controls = []; // { cut, name, verdict: PASS|FAIL|ABSENT, evidence }
  const results = [];
  for (const k of CUTS) {
    const path = epPath(k);
    if (!existsSync(path)) throw new Error(path + ' is not on disk');
    inputs.push(['cut ' + k + ' produced', path]);
    const ep = JSON.parse(readFileSync(path, 'utf8'));
    const npc = ep.snapshot.npcs.find((n) => n.id === WHO);
    if (npc === undefined) throw new Error(WHO + ' is not in ' + path);
    const prod = ep.daybooks?.[WHO];
    if (prod === undefined) throw new Error(WHO + ' has no daybook in ' + path);
    out('');
    out('════════ cut ' + k + ' — ' + basename(path));
    out('  engine in file: ' + JSON.stringify(ep.engine) + '   aired_at ' + ep.aired_at + '   steps ' + ep.steps + '   dt ' + ep.dt + '   chain_from ' + ep.chain_from);
    // the candidate
    let cand, candLabel;
    if (CANDS === 'standing') {
      cand = { plan: prod.plan, ifStuck: prod.ifStuck };
      candLabel = 'standing: the produced daybook\'s own plan and ifStuck';
    } else {
      const cp = resolve(CANDS) + '/' + npc.name.toLowerCase() + '-cut' + k + '.json';
      if (!existsSync(cp)) throw new Error('no candidate for cut ' + k + ': ' + cp + ' is not on disk');
      inputs.push(['cut ' + k + ' candidate', cp]);
      cand = JSON.parse(readFileSync(cp, 'utf8'));
      candLabel = cp;
    }
    const swap = (d, c) => ({ ...d, plan: c.plan, ifStuck: c.ifStuck });
    const writeArm = (tag, day) => {
      const e = structuredClone(ep); e.daybooks[WHO] = day;
      const p = armDir + '/cut' + k + '-' + tag + '.json';
      writeFileSync(p, JSON.stringify(e), 'utf8');
      return p;
    };
    const identSrc = { plan: prod.plan, ifStuck: prod.ifStuck };
    if (NEG === 'ident-step') {
      identSrc.plan = prod.plan.slice(0, -1);
      out('  NEGATIVE TEST ident-step: IDENT is fed the produced plan with its last step (' + JSON.stringify(prod.plan[prod.plan.length - 1]) + ') removed');
    }
    const candPath = writeArm('CAND', swap(prod, cand));
    const identPath = writeArm('IDENT', swap(prod, identSrc));
    out('  produced plan (' + prod.plan.length + '): ' + prod.plan.map((s) => s.action).join(', ') + '   ifStuck: ' + (prod.ifStuck ? prod.ifStuck.map((s) => s.action).join(', ') : 'none'));
    out('  candidate     (' + cand.plan.length + '): ' + cand.plan.map((s) => s.action).join(', ') + '   ifStuck: ' + (cand.ifStuck ? cand.ifStuck.map((s) => s.action).join(', ') : 'none') + '   from ' + candLabel);
    const also = opt.also === 'all' ? ep.snapshot.npcs.map((n) => n.id).filter((id) => id !== WHO) : opt.also ? opt.also.split(',') : [];
    const tracked = [WHO, ...also];
    let transientAt = null;
    const transientHook = NEG === 'transient' ? {
      step: (w, taken, R) => {
        // Once, at the first step past 100 where WHO is walking: turn their facing by one radian.
        // facing is written by the walk (sim.ts, stepSim) and read by nothing in the sim.
        if (transientAt !== null || taken < 100) return;
        const n = w.npcs.find((x) => x.id === WHO);
        if (n.routed && n.path.arcLength > 0 && n.s < n.path.arcLength) { n.facing += 1; transientAt = taken; }
      },
    } : {};
    const arms = {};
    arms.BASE = runArm('BASE', k, path, tracked);
    arms.BASE2 = runArm('BASE2', k, path, tracked, transientHook);
    arms.CAND = runArm('CAND', k, candPath, tracked);
    arms.CAND2 = runArm('CAND2', k, candPath, tracked);
    arms.IDENT = runArm('IDENT', k, identPath, tracked);
    out('  arms run (steps, ms): ' + Object.values(arms).map((r) => r.name + ' ' + r.stepsRun + ' ' + r.ms).join('; '));
    if (NEG === 'transient') out('  NEGATIVE TEST transient: BASE2 had ' + WHO + '\'s facing turned by 1 radian after step ' + transientAt + ' and nothing else');
    for (const [tag, p] of [['CAND', candPath], ['IDENT', identPath]]) inputs.push(['cut ' + k + ' ' + tag + ' scratch episode', p]);

    // control 1
    const nx = nextOpeningFor(k);
    if (nx.path === null) {
      controls.push({ cut: k, name: '1 baseline to next opening', verdict: 'ABSENT', evidence: nx.label });
    } else {
      inputs.push(['cut ' + k + ' next opening', nx.path]);
      const nep = JSON.parse(readFileSync(nx.path, 'utf8'));
      const fc = fieldsCompare(arms.BASE.close, nep.snapshot);
      const wide = chainlinkCanon(arms.BASE.close) === chainlinkCanon({ ...nep.snapshot, pending: new Map(Object.entries(nep.snapshot.pending ?? {})) });
      const ok = fc.diffs.length === 0 && fc.fields > 0;
      controls.push({ cut: k, name: '1 baseline to next opening', verdict: ok ? 'PASS' : 'FAIL',
        evidence: 'BASE close (' + arms.BASE.stepsRun + ' steps, t=' + arms.BASE.close.time + ') against ' + nx.label + ' (chain_from ' + nep.chain_from + ', t=' + nep.snapshot.time + '): '
          + fc.settlers + ' settlers x (gx, gy, needs.food, needs.rest, every carrying item) and ' + fc.buildings + ' buildings x (kind, condition, gx, gy), exact ===: '
          + fc.fields + ' fields, ' + fc.diffs.length + ' differ' + (fc.diffs.length ? ' — ' + fc.diffs.slice(0, 6).join('; ') : '')
          + '. Wider (check-chainlink form, whole world less run/path/askedAt/goalsAskedAt/routed): ' + (wide ? 'byte-identical' : 'DIFFERS (not the decider)') });
    }
    // control 2
    for (const [a, b] of [['BASE', 'BASE2'], ['CAND', 'CAND2']]) {
      const c = compareSteps(arms[a], arms[b]);
      controls.push({ cut: k, name: '2 determinism ' + a + '=' + b, verdict: c.diff === 0 && c.la === c.lb ? 'PASS' : 'FAIL',
        evidence: c.n + ' digests each (opening + ' + (c.n - 1) + ' steps; sha1 of every settler, building and settlement and the clock): ' + c.diff + ' differ'
          + (c.first !== null ? ', first at step ' + c.first : '') + '; at the close ' + (c.closeEq ? 'equal' : 'different') });
    }
    // control 3
    {
      const c = compareSteps(arms.IDENT, arms.BASE);
      controls.push({ cut: k, name: '3 instrument IDENT=BASE', verdict: c.diff === 0 && c.la === c.lb ? 'PASS' : 'FAIL',
        evidence: c.n + ' digests each: ' + c.diff + ' differ' + (c.first !== null ? ', first at step ' + c.first : '') + '; at the close ' + (c.closeEq ? 'equal' : 'different') });
    }
    results.push({ k, arms, tracked, prod, cand });
  }

  // ── the control table ──────────────────────────────────────────────────────────────────
  out('');
  out('════════ CONTROLS');
  for (const c of controls) out('  cut ' + c.cut + '  ' + pad(c.name, 28) + ' ' + pad(c.verdict, 6) + ' ' + c.evidence);
  const failed = controls.filter((c) => c.verdict === 'FAIL');
  out('  counted: ' + controls.filter((c) => c.verdict !== 'ABSENT').length + ' (PASS ' + controls.filter((c) => c.verdict === 'PASS').length + ', FAIL ' + failed.length + '); ABSENT and not counted: ' + controls.filter((c) => c.verdict === 'ABSENT').length);
  if (failed.length > 0) {
    out('');
    out('STOP. ' + failed.length + ' control(s) failed. Nothing about the candidate is printed as a finding.');
    exitCode = 1;
  } else {
    // ── the tables ───────────────────────────────────────────────────────────────────────
    for (const { k, arms, tracked } of results) {
      for (const id of tracked) printTables(k, arms.BASE, arms.CAND, id);
    }
  }

  function printTables(k, B, Cn, id) {
    const b = B.tracked[id], c = Cn.tracked[id];
    const row = (label, x, y) => out('  ' + pad(label, 44) + ' ' + pad(x, 34) + ' ' + y);
    out('');
    out('════════ cut ' + k + ' — ' + b.name + ' (' + id + '), BASE against CAND, ' + B.stepsRun + ' steps each, 3.6 s of air a step');
    row('', 'BASE', 'CAND');
    // pin 1
    out(' PIN 1. The opening, and any opening rest');
    row('in hand in the file\'s snapshot', b.snapTask, c.snapTask);
    row('in hand after the opening', b.openTask, c.openTask);
    const repl = (T) => (T.snapTaskRaw === null ? 'nothing was in hand'
      : T.keptAbed ? 'NOT replaced: kept abed, the day waits'
        : T.openTaskObj && T.openTaskObj.fromAgent ? 'replaced by the first filed step' : 'not replaced');
    row('did the opening replace it', repl(b), repl(c));
    row('plan steps filed / refused at the opening', b.planLen + ' / ' + b.refusedAtOpen, c.planLen + ' / ' + c.refusedAtOpen);
    const openRest = (T, R) => {
      const s0 = T.steps[0];
      if (!s0 || !/^rest\b/.test(s0.desc)) return null;
      if (s0.first === null) return { begun: 'never begun' };
      const r = T.rests.find((x) => x.obj === s0.taskObj);
      return {
        begun: 'step ' + s0.first + ' (' + R.air(s0.first) + ')',
        tired: r ? f4(r.atOpen ? T.open.rest : r.restAt) : '-',
        span: r ? ((r.end ?? R.stepsRun) - 0) + ' steps from opening to end: before it ' + r.begin + ', walking ' + r.walk + ', asleep ' + r.asleep + ', other ' + r.other : '-',
        end: r ? (r.end === null ? 'not ended by the close' : 'step ' + r.end + ' (' + R.air(r.end) + ') tired ' + f4(r.restEnd)) : '-',
        how: r ? r.how ?? '-' : '-',
      };
    };
    const ob = openRest(b, B), oc = openRest(c, Cn);
    if (ob === null && oc === null) row('opening rest', 'none (first step is not a rest)', 'none (first step is not a rest)');
    else {
      const g = (o, f) => (o === null ? 'no opening rest in this arm' : o[f] ?? '-');
      row('opening rest begun', g(ob, 'begun'), g(oc, 'begun'));
      row('  tiredness at the step it begins', g(ob, 'tired'), g(oc, 'tired'));
      row('  steps opening to end of rest', g(ob, 'span'), g(oc, 'span'));
      row('  ended', g(ob, 'end'), g(oc, 'end'));
      row('  how', g(ob, 'how'), g(oc, 'how'));
    }
    out(' PIN 1. Every plan step, aligned by what it asks (LCS on the step words)');
    const al = align(b.steps, c.steps);
    for (const [x, y] of al) {
      const show = (r, R) => (r === null ? 'not in this plan'
        : (r.first === null ? '' : 'began ' + r.first + ' (' + R.air(r.first) + '), ') + 'spent ' + r.spent + ', ' + r.outcome
          + (r.breaks.length ? ', broken off ' + r.breaks.length + 'x (first by ' + r.breaks[0].by + ' at ' + r.breaks[0].step + ')' : '')
          + (r.why ? ' — ' + r.why : ''));
      const name = (x ?? y).desc;
      let note = '';
      const reached = (r) => r !== null && r.first !== null;
      if (x !== null && y !== null && reached(x) !== reached(y)) note = reached(x) ? '   <- reached in BASE, never in CAND' : '   <- reached in CAND, never in BASE';
      out('   ' + pad('#' + (x ? x.i : '-') + '/#' + (y ? y.i : '-') + ' ' + name, 40));
      out('       BASE: ' + show(x, B));
      out('       CAND: ' + show(y, Cn) + note);
    }
    // head 1
    out(' HEAD 1. Drops (collapse: task note "asleep on their feet", say at sim.ts:13925)');
    row('drops (from the task)', String(b.drops.length), String(c.drops.length));
    row('drops (from new feed lines)', String(b.feedDrops), String(c.feedDrops));
    const dl = (T, R) => T.drops.map((d) => R.air(d.step) + ' tired before ' + d.restBefore.toFixed(6)).join('; ') || '-';
    row('each: time, tiredness the step before', dl(b, B), dl(c, Cn));
    // head 2
    out(' HEAD 2. Rest');
    const kinds = (T) => { const m = {}; for (const r of T.rests) m[r.kind] = (m[r.kind] ?? 0) + 1; return Object.entries(m).map(([a, n]) => a + ' ' + n).join(', ') || '-'; };
    row('rests begun or in hand, by kind', kinds(b), kinds(c));
    const asleep = (T) => T.rests.reduce((a, r) => a + r.asleep, 0);
    const walked = (T) => T.rests.reduce((a, r) => a + r.walk, 0);
    row('steps asleep / walking to bed', asleep(b) + ' / ' + walked(b), asleep(c) + ' / ' + walked(c));
    const filedTired = (T) => T.rests.filter((r) => r.kind === 'filed').map((r) => f4(r.atOpen ? T.open.rest : r.restAt)).join(', ') || '-';
    row('tiredness at each filed rest', filedTired(b), filedTired(c));
    row('tiredness lowest / mean / highest', f4(b.rest.min) + ' / ' + f4(b.rest.sum / b.steps_n) + ' / ' + f4(b.rest.max), f4(c.rest.min) + ' / ' + f4(c.rest.sum / c.steps_n) + ' / ' + f4(c.rest.max));
    const rl = (T, R) => T.rests.map((r) => r.kind + ' ' + (r.atOpen ? 'open' : R.air(r.begin)) + '-' + (r.end === null ? 'close' : R.air(r.end)) + ' w' + r.walk + ' a' + r.asleep).join('; ');
    row('each rest: kind begin-end walk/asleep', rl(b, B), rl(c, Cn));
    // head 3
    out(' HEAD 3. Food');
    const ml = (T, src) => T.meals.filter((m) => src === undefined || m.src === src).length;
    row('meals (pack / store)', ml(b) + ' (' + ml(b, 'pack') + ' / ' + ml(b, 'store') + ')', ml(c) + ' (' + ml(c, 'pack') + ' / ' + ml(c, 'store') + ')');
    row('hunger mean / highest', f4(b.food.sum / b.steps_n) + ' / ' + f4(b.food.max), f4(c.food.sum / c.steps_n) + ' / ' + f4(c.food.max));
    row('steps hunger > 0.95 (first)', b.food.over95 + ' (' + (b.food.first95 === null ? '-' : B.air(b.food.first95)) + ')', c.food.over95 + ' (' + (c.food.first95 === null ? '-' : Cn.air(c.food.first95)) + ')');
    row('steps hunger at 1.0 (first)', b.food.at1 + ' (' + (b.food.first1 === null ? '-' : B.air(b.food.first1)) + ')', c.food.at1 + ' (' + (c.food.first1 === null ? '-' : Cn.air(c.food.first1)) + ')');
    const mls = (T, R) => T.meals.map((m) => R.air(m.step) + ' ' + m.from.toFixed(3) + '->' + m.to.toFixed(3) + ' ' + m.src).join('; ') || '-';
    row('each meal', mls(b, B), mls(c, Cn));
    row('pack rot (history events / feed lines)', b.rot.history + ' / ' + b.rot.feed, c.rot.history + ' / ' + c.rot.feed);
    const town = (R) => R.close.towns.find((t) => t.id === R.close.npcs.find((n) => n.id === id).town) ?? R.close.towns[0];
    row('depot food / dried at the close', town(B).stock.food + ' / ' + town(B).dried, town(Cn).stock.food + ' / ' + town(Cn).dried);
    // head 4
    out(' HEAD 4. Depot access (as storekeeper: keeperOf, keeperIsIn at sim.ts:4443)');
    row('steps this settler is the keeper / and in', b.keeperSteps + ' / ' + b.keeperInSteps, c.keeperSteps + ' / ' + c.keeperInSteps);
    row('meals other settlers took from the store', String(B.others.depotMeals), String(Cn.others.depotMeals));
    // head 5
    out(' HEAD 5. Loads (from new history lines each step, finishHaul; "with nobody in it" at sim.ts:11176)');
    const ld = (T) => 'delivered ' + T.loads.delivered + ' (' + T.loads.deliveredGoods + ' goods); paid ' + T.loads.paid + ' (' + T.loads.paidFood + ' food); unpaid ' + T.loads.unpaid + '; nobody in ' + T.loads.nobodyIn + ' (' + T.loads.nobodyInGoods + ' goods); stacked outside ' + T.loads.stacked;
    row('loads', ld(b), ld(c));
    const gv = (T) => { const m = {}; for (const g of T.gives) m[g.cls] = (m[g.cls] ?? 0) + 1; return Object.entries(m).map(([a, n]) => a + ' ' + n).join(', ') || '0'; };
    row('gives, classed from the task', gv(b), gv(c));
    // head 6
    out(' HEAD 6. Keeping and hauling time (ownChoice store tasks, sim.ts:7000, 7009, 7011)');
    for (const [rule] of STORE) row('steps on ' + rule, String(b.store[rule] ?? 0), String(c.store[rule] ?? 0));
    row('steps on a filed haul', String(b.filedHaul), String(c.filedHaul));
    // head 7
    out(' HEAD 7. Filed against actual (above, per step), and steps on each kind of work by source');
    const srcs = [...new Set([...Object.keys(b.work), ...Object.keys(c.work)])].sort();
    for (const s of srcs) {
      const acts = [...new Set([...Object.keys(b.work[s] ?? {}), ...Object.keys(c.work[s] ?? {})])].sort();
      for (const a of acts) row('  ' + s + ' ' + a, String(b.work[s]?.[a] ?? 0), String(c.work[s]?.[a] ?? 0));
    }
    // head 8
    out(' HEAD 8. Ends, at the close');
    const nn = (R) => R.close.npcs.find((n) => n.id === id);
    const pack = (n) => Object.entries(n.carrying).filter(([, v]) => v).map(([a, v]) => a + ' ' + v).join(', ') || 'empty';
    row('pack', pack(nn(B)), pack(nn(Cn)));
    row('purse (coin)', String(nn(B).coin), String(nn(Cn).coin));
    const sk = (n) => Object.entries(n.craft).map(([a, v]) => a + ' ' + v).join(', ') || '-';
    row('skills (craft practice counts)', sk(nn(B)), sk(nn(Cn)));
    const stock = (t) => Object.entries(t.stock).filter(([, v]) => v).map(([a, v]) => a + ' ' + v).join(', ');
    row('depot stock', stock(town(B)), stock(town(Cn)));
    row('hunger / tiredness / happiness', f4(nn(B).needs.food) + ' / ' + f4(nn(B).needs.rest) + ' / ' + f4(nn(B).happiness), f4(nn(Cn).needs.food) + ' / ' + f4(nn(Cn).needs.rest) + ' / ' + f4(nn(Cn).happiness));
    row('position', nn(B).gx.toFixed(1) + ',' + nn(B).gy.toFixed(1), nn(Cn).gx.toFixed(1) + ',' + nn(Cn).gy.toFixed(1));
    // The same figures, machine-readable, one line per arm, for anything that compares this run with another.
    for (const [arm, R, T] of [['BASE', B, b], ['CAND', Cn, c]]) {
      const n = nn(R);
      out('DATA ' + JSON.stringify({ cut: k, id, arm, steps: R.stepsRun,
        over95: T.food.over95, first95: T.food.first95 === null ? null : R.air(T.food.first95), at1: T.food.at1, first1: T.food.first1 === null ? null : R.air(T.food.first1),
        maxFood: T.food.max, meanFood: T.food.sum / T.steps_n, minRest: T.rest.min, meanRest: T.rest.sum / T.steps_n, maxRest: T.rest.max,
        rotFeed: T.rot.feed, rotHistory: T.rot.history, feedDrops: T.feedDrops,
        drops: T.drops.map((d) => ({ at: R.air(d.step), step: d.step, restBefore: d.restBefore })),
        meals: T.meals.map((m) => ({ at: R.air(m.step), step: m.step, from: m.from, to: m.to, src: m.src })),
        rests: T.rests.map((r) => ({ kind: r.kind, begin: r.atOpen ? 'open' : R.air(r.begin), end: r.end === null ? null : R.air(r.end), walk: r.walk, asleep: r.asleep })),
        close: { food: n.needs.food, rest: n.needs.rest, happy: n.happiness, gx: n.gx, gy: n.gy, pack: n.carrying, coin: n.coin } }));
    }
  }

  function align(xs, ys) {
    const n = xs.length, m = ys.length;
    const L = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = xs[i].desc === ys[j].desc ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    const outp = []; let i = 0, j = 0;
    while (i < n && j < m) {
      if (xs[i].desc === ys[j].desc) { outp.push([xs[i], ys[j]]); i++; j++; }
      else if (L[i + 1][j] >= L[i][j + 1]) { outp.push([xs[i], null]); i++; }
      else { outp.push([null, ys[j]]); j++; }
    }
    while (i < n) outp.push([xs[i++], null]);
    while (j < m) outp.push([null, ys[j++]]);
    return outp;
  }
} catch (e) {
  out('');
  out('ERROR ' + (e && e.stack ? e.stack : String(e)));
  exitCode = 2;
} finally {
  await server.close();
  out('');
  out('════════ INPUTS (sha256)');
  const seen = new Set();
  for (const [label, p] of inputs) {
    if (seen.has(p)) continue; seen.add(p);
    try { out('  ' + sha(p) + '  ' + pad(label, 30) + ' ' + p); } catch { out('  (unreadable) ' + label + ' ' + p); }
  }
  out('');
  out('exit ' + exitCode);
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINES.join('\n') + '\n', 'utf8');
  console.log(LINES.filter((l) => /^(STOP|ERROR|exit|  cut \d)/.test(l)).join('\n'));
  console.log('wrote ' + LINES.length + ' lines to ' + OUT);
  process.exit(exitCode);
}
