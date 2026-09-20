#!/usr/bin/env node
// memcheck.js — a linter for this house's memory practice.
//
// Role-based on purpose: the desks call the same seven jobs by different
// filenames, so the mapping is data, not a hardcoded list. A desk supplies a
// memory-map.json; this reads it and checks whatever plays each role.
//
//   node memcheck.js --map <desk-root>/memory-map.json
//   node memcheck.js --map <path> --strict     exit 1 if anything is flagged
//   node memcheck.js --selftest                fixtures for every check
//
// memory-map.json, all keys optional — an absent role is reported as absent,
// never silently skipped, because "no file has this job" is itself a finding:
//
//   { "root": "<desk-root>",
//     "kernel":   "CLAUDE.md",
//     "literals": "LITERALS.md",
//     "snapshot": "NEXT-SESSION.md",
//     "ledger":   "OPEN-ITEMS.md",
//     "journal":  "CHRONICLE.jsonl",
//     "con":      "CONN.md",
//     "stop":     "STOP.md" }
//
// THE CHECKS, and the house failure each descends from. references/
// failure-modes.md carries the receipts.
//
//   NEGSTATE  the snapshot states what is NOT owed. Without it a successor
//             re-runs a drained queue and reports it as progress.
//   STALEDATE relative time words in the snapshot. A snapshot outlives its
//             evening; "tonight" rots, an absolute date does not. Commented
//             text is scanned too — a comment hides text from a renderer,
//             not from the model reading the file.
//   ABBREV    ellipsis-abbreviated referents in the literals file. An
//             abbreviation invites the reader to complete it from memory.
//   PHANTOM   path claims in the snapshot that are not on disk. An inherited
//             claim is not a check.
//   LEDGER    every ledger item carries CLOCK, DEFAULT and RULED?. An item
//             that does not say what happens on silence is not staged.
//   JOURNAL   append-only shape intact: .jsonl parses line-by-line and the
//             newest entry is last; .md keeps its header on line 1.
//   LABELS    the snapshot uses at least one provenance label. A memory with
//             no measured/carried/inferred anywhere is asserting uniformly.
//   STOP      reports whether the stop file is present. Presence means the
//             desk must stop; this is a status line, never a warning.
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');

const ROLES = ['kernel', 'literals', 'snapshot', 'ledger', 'journal', 'con', 'stop'];

function run(map, root, strict, log) {
  let flags = 0;
  const warn = (tag, file, msg) => { flags++; log(`WARN [${tag}] ${file}: ${msg}`); };
  const ok = (tag, msg) => log(`  ok [${tag}] ${msg}`);
  const note = (tag, msg) => log(`  -- [${tag}] ${msg}`);
  const P = role => (map[role] ? path.resolve(root, map[role]) : null);
  const read = p => { try { return fs.readFileSync(p, 'utf8'); } catch { return null; } };

  // Split into live vs commented lines. The model reads both, so both are
  // scanned; a block explicitly marked CONVENTIONS is instructional and exempt.
  const tagged = text => {
    const out = []; let inC = false, conv = false;
    for (const line of text.split('\n')) {
      let rest = line, live = '', com = '', isConv = false;
      for (;;) {
        if (inC) {
          const i = rest.indexOf('-->');
          com += i < 0 ? rest : rest.slice(0, i);
          if (conv) isConv = true;
          if (i < 0) { rest = ''; break; }
          inC = false; conv = false; rest = rest.slice(i + 3);
        } else {
          const i = rest.indexOf('<!--');
          if (i < 0) { live += rest; break; }
          live += rest.slice(0, i); inC = true; rest = rest.slice(i + 4);
          if (/^\s*CONVENTIONS/i.test(rest)) conv = true;
        }
      }
      if (live.trim()) out.push({ text: live, commented: false });
      if (com.trim()) out.push({ text: com, commented: true, conventions: isConv });
    }
    return out;
  };
  const scannable = ls => ls.filter(l => !l.conventions);

  // ---- roles declared but absent on disk -------------------------------
  for (const r of ROLES) {
    if (r === 'stop') continue;
    if (!map[r]) { warn('ROLE', r, 'no file is mapped to this role — the job is unassigned, not merely unnamed'); continue; }
    if (!fs.existsSync(P(r))) warn('ROLE', map[r], `mapped to role "${r}" but not on disk`);
  }

  // ---- SNAPSHOT: NEGSTATE, STALEDATE, PHANTOM, LABELS -------------------
  const snapPath = P('snapshot');
  const snap = snapPath && read(snapPath);
  if (snap) {
    const base = path.basename(snapPath);
    const lines = tagged(snap);
    const live = lines.filter(l => !l.commented).map(l => l.text).join('\n');

    if (/\b(not owed|nothing is owed|negative state|do not re-?run|already done|no longer owed)\b/i.test(live))
      ok('NEGSTATE', `${base} states what is not owed`);
    else
      warn('NEGSTATE', base, 'no negative state — a successor cannot tell a drained queue from an unstarted one, and will re-run it');

    const reStale = /\b(tonight|today|yesterday|tomorrow|last night|this (week|morning|evening|afternoon)|next week)\b/gi;
    const hits = new Set(); let inCom = false;
    for (const l of scannable(lines)) {
      if (!l.commented && /^\s*#/.test(l.text)) continue; // a dated header is legitimate
      let m; while ((m = reStale.exec(l.text)) !== null) { hits.add(m[1].toLowerCase()); if (l.commented) inCom = true; }
    }
    if (hits.size) warn('STALEDATE', base, `relative time words (${[...hits].join(', ')})${inCom ? ', some inside comments which the model still reads' : ''} — these rot; write absolute UTC`);
    else ok('STALEDATE', `${base} carries no relative time words`);

    const missing = new Set();
    const exists = rel => fs.existsSync(path.isAbsolute(rel) ? rel : path.join(root, rel));
    const reAbs = /(?<![\w.])([A-Za-z]:\/[\w./-]+\.(?:md|js|json|jsonl|txt|sh|diff|eml))\b/g;
    let m;
    while ((m = reAbs.exec(live)) !== null) if (!exists(m[1])) missing.add(m[1]);
    if (missing.size) warn('PHANTOM', base, `path claim(s) not on disk: ${[...missing].slice(0, 4).join(', ')}${missing.size > 4 ? ` (+${missing.size - 4})` : ''}`);
    else ok('PHANTOM', 'every absolute path claim in the snapshot resolves');

    if (/\b(measured|carried|inferred)\b/i.test(live)) ok('LABELS', 'the snapshot carries provenance labels');
    else warn('LABELS', base, 'no measured/carried/inferred anywhere — every claim reads as equally certain');
  } else if (map.snapshot) {
    warn('NEGSTATE', map.snapshot, 'snapshot unreadable');
  }

  // ---- LITERALS: ABBREV -------------------------------------------------
  const litPath = P('literals');
  const lit = litPath && read(litPath);
  if (lit) {
    const bad = [];
    for (const l of scannable(tagged(lit)))
      if (/[A-Za-z0-9]{4,}(…|\.\.\.)/.test(l.text) || /\bstarts? with\b/i.test(l.text))
        bad.push(l.text.trim().slice(0, 60));
    if (bad.length) warn('ABBREV', path.basename(litPath), `${bad.length} abbreviated referent(s) — the paste file carries full literals or the command that reads them. First: "${bad[0]}"`);
    else ok('ABBREV', `${path.basename(litPath)} carries no abbreviated referents`);
  }

  // ---- LEDGER -----------------------------------------------------------
  const ledPath = P('ledger');
  const led = ledPath && read(ledPath);
  // `!= null`, not truthiness: an EMPTY ledger reads as '' and was silently
  // skipped by this check until 2026-09-06, so a desk with an empty staging
  // ledger got a clean report. Found by the selftest arm added the same hour.
  if (led != null) {
    const base = path.basename(ledPath);
    const items = (led.match(/^\s*STAGED-AWAITING-KEEPER/gm) || []).length;
    const ruled = (led.match(/^\s*RULED\?/gm) || []).length;
    const clocks = (led.match(/^\s*CLOCK/gm) || []).length;
    const defaults = (led.match(/^\s*DEFAULT/gm) || []).length;
    // "I could not read this" and "there is nothing here" must not be one value.
    // Measured fault: a long ledger written in another format got the same
    // warning as an empty file. The check now discriminates instead of
    // asking the reader to.
    const bodyLines = led.split('\n').filter(l => l.trim()).length;
    if (!items && !bodyLines) warn('LEDGER', base, 'the ledger file is EMPTY — zero non-blank lines. If that is true, say it in words in the file, so a reader can tell an empty queue from an unwritten one');
    else if (!items) warn('LEDGER', base, `${bodyLines} non-blank line(s) and ZERO parsed as staged items — this is an UNRECOGNISED FORMAT, not an empty ledger, and the two are different facts. Either the file uses another shape (fine — this check does not apply to it) or the items are malformed`);
    else if (ruled < items) warn('LEDGER', base, `${items} staged item(s) but only ${ruled} RULED? line(s) — an item with no RULED? cannot be audited`);
    else if (defaults < items) warn('LEDGER', base, `${items} staged item(s) but only ${defaults} DEFAULT line(s) — an item that does not say what happens on silence is forgotten, not staged`);
    else if (clocks < items) warn('LEDGER', base, `${items} staged item(s) but only ${clocks} CLOCK line(s)`);
    else ok('LEDGER', `${items} staged item(s), each with CLOCK, DEFAULT and RULED?`);
  }

  // ---- JOURNAL ----------------------------------------------------------
  const jPath = P('journal');
  const j = jPath && read(jPath);
  if (j) {
    const base = path.basename(jPath);
    if (base.endsWith('.jsonl')) {
      const rows = j.split('\n').filter(l => l.trim());
      let bad = 0, lastTs = null, outOfOrder = 0, prev = null;
      for (const r of rows) {
        let o; try { o = JSON.parse(r); } catch { bad++; continue; }
        if (o && o.ts) { if (prev && String(o.ts) < String(prev)) outOfOrder++; prev = o.ts; lastTs = o.ts; }
      }
      if (bad) warn('JOURNAL', base, `${bad} of ${rows.length} line(s) do not parse as JSON — an append-only log that cannot be read back is not a record`);
      else if (outOfOrder) warn('JOURNAL', base, `${outOfOrder} entr(y/ies) out of timestamp order — newest belongs last in an append-only file`);
      else ok('JOURNAL', `${rows.length} entries parse, in order, newest ts ${lastTs}`);
    } else {
      if (!/^# /.test(j)) warn('JOURNAL', base, 'line 1 is not the file header — an entry was prepended above it');
      else ok('JOURNAL', 'journal header is line 1');
    }
  }

  // ---- STOP -------------------------------------------------------------
  if (map.stop) {
    if (fs.existsSync(P('stop'))) { flags++; log(`WARN [STOP] ${map.stop}: PRESENT — the desk stops. No instance may argue this away.`); }
    else note('STOP', `${map.stop} absent — the desk may run (absence is the running state, which is why it is named)`);
  }

  log(flags ? `\n${flags} warning(s).` : '\nClean.');
  return strict && flags ? 1 : 0;
}

// ---- selftest ------------------------------------------------------------
// Every check gets a tree that must fail it, and one tree that must pass
// everything. A linter nobody has watched complain is not a linter.
function selftest() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'housemem-'));
  const w = (rel, t) => { fs.mkdirSync(path.dirname(path.join(tmp, rel)), { recursive: true }); fs.writeFileSync(path.join(tmp, rel), t); };
  const map = { kernel: 'CLAUDE.md', literals: 'LITERALS.md', snapshot: 'NEXT.md', ledger: 'LEDGER.md', journal: 'LOG.jsonl', con: 'CONN.md', stop: 'STOP.md' };
  const results = [];
  const expect = (name, tag, bodyRe) => {
    const out = [];
    run(map, tmp, false, s => out.push(s));
    // bodyRe, when given, is what makes two warnings under one tag
    // distinguishable — without it a check that returns the same message for
    // two different states would still pass both arms.
    const hit = out.some(l => l.startsWith(`WARN [${tag}]`) && (!bodyRe || bodyRe.test(l)));
    const pass = tag === null ? !out.some(l => l.startsWith('WARN')) : hit;
    results.push([name, pass, out.filter(l => l.startsWith('WARN')).join(' | ')]);
  };
  const clean = () => {
    w('CLAUDE.md', '# kernel\n');
    w('CONN.md', '# con\n');
    w('LITERALS.md', '# literals\n\n    Vault  FAKEFAKEFAKEFAKEFAKEFAKEFAKEFAKEFAKEFAKEFAKE\n');
    w('NEXT.md', '# NEXT (2026-09-05T16:45:10Z)\n\nMEASURED: the store holds 12 items.\n\n## Negative state\nNothing is owed to any peer. Do not re-run the recon.\n');
    w('LEDGER.md', '    STAGED-AWAITING-KEEPER  a thing\n    CLOCK                   None\n    DEFAULT                 not done\n    RULED?                  no\n');
    w('LOG.jsonl', '{"ts":"2026-09-04T00:00:00Z","what":"a"}\n{"ts":"2026-09-05T00:00:00Z","what":"b"}\n');
    try { fs.rmSync(path.join(tmp, 'STOP.md')); } catch {}
  };

  clean(); expect('clean tree passes', null);

  clean(); w('NEXT.md', '# NEXT (2026-09-05)\n\nMEASURED: a thing.\n');
  expect('missing negative state flagged', 'NEGSTATE');

  clean(); w('NEXT.md', '# NEXT (2026-09-05)\n\nMEASURED it. Nothing is owed.\nShip it tonight.\n');
  expect('relative time word flagged', 'STALEDATE');

  clean(); w('NEXT.md', '# NEXT (2026-09-05)\n\nMEASURED. Nothing is owed.\n<!-- prior: do it tomorrow -->\n');
  expect('stale word inside a comment flagged', 'STALEDATE');

  clean(); w('LITERALS.md', '# literals\n\n    Vault  FAKEFAKE… holds the float\n');
  expect('ellipsis referent flagged', 'ABBREV');

  clean(); w('NEXT.md', '# NEXT (2026-09-05)\n\nMEASURED. Nothing is owed.\nThe diff is at C:/example/outbox/nope/absent-file.diff\n');
  expect('phantom path flagged', 'PHANTOM');

  clean(); w('NEXT.md', '# NEXT (2026-09-05)\n\nThe store holds 12 items. Nothing is owed.\n');
  expect('absent provenance labels flagged', 'LABELS');

  clean(); w('LEDGER.md', '    STAGED-AWAITING-KEEPER  a thing\n    CLOCK                   None\n    DEFAULT                 not done\n');
  expect('ledger item with no RULED? flagged', 'LEDGER');

  clean(); w('LEDGER.md', '    STAGED-AWAITING-KEEPER  a thing\n    CLOCK                   None\n    RULED?                  no\n');
  expect('ledger item with no DEFAULT flagged', 'LEDGER');

  // The two arms of this discrimination were once missing. Both must
  // warn, and a check that cannot tell them apart passes neither honestly.
  clean(); w('LEDGER.md', '');
  expect('empty ledger flagged as EMPTY', 'LEDGER', /is EMPTY/);

  clean(); w('LEDGER.md', '## R1 a roadmap row\n## R2 another\ntext that is not this shape\n');
  expect('unparsed ledger flagged as UNRECOGNISED, not empty', 'LEDGER', /UNRECOGNISED FORMAT/);

  clean(); w('LOG.jsonl', '{"ts":"2026-09-04T00:00:00Z","what":"a"}\nnot json at all\n');
  expect('unparseable journal line flagged', 'JOURNAL');

  clean(); w('LOG.jsonl', '{"ts":"2026-09-05T00:00:00Z","what":"b"}\n{"ts":"2026-09-04T00:00:00Z","what":"a"}\n');
  expect('out-of-order journal flagged', 'JOURNAL');

  clean(); w('STOP.md', 'stop\n');
  expect('stop file present flagged', 'STOP');

  clean(); fs.rmSync(path.join(tmp, 'CONN.md'));
  expect('mapped-but-absent role flagged', 'ROLE');

  let fails = 0;
  for (const [name, pass, warns] of results) {
    console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}${pass ? '' : '   [' + warns + ']'}`);
    if (!pass) fails++;
  }
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(fails ? `\n${fails} selftest failure(s).` : `\nselftest: all ${results.length} cases pass.`);
  return fails ? 1 : 0;
}

const argv = process.argv.slice(2);
if (argv.includes('--selftest')) process.exit(selftest());
const mi = argv.indexOf('--map');
if (mi < 0) { console.error('usage: memcheck.js --map <memory-map.json> [--strict]\n       memcheck.js --selftest'); process.exit(2); }
const mapPath = path.resolve(argv[mi + 1]);
let cfg;
try { cfg = JSON.parse(fs.readFileSync(mapPath, 'utf8')); }
catch (e) { console.error(`cannot read map ${mapPath}: ${e.message}`); process.exit(2); }
const root = path.resolve(cfg.root || path.dirname(mapPath));
process.exit(run(cfg, root, argv.includes('--strict'), console.log));
