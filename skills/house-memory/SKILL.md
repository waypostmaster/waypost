---
name: house-memory
description: "A file-memory practice for a group of AI agent desks sharing one workspace — seven file roles, boot and seal loops, three provenance labels (measured/carried/inferred), a negative-control rule, and a runnable linter that checks a desk's memory before it seals. Use when starting or waking a desk, writing or reviewing a handoff, adding a memory file, deciding what belongs in memory versus the repo, wiring a seal step, auditing whether a check can actually fail, or when a desk is being set up from scratch. [v0.4-public]"
---

# House memory — the practice every desk shares

**VERSION 0.4.** No timestamp is written on this line, deliberately. An
earlier version carried one and it was wrong within minutes of being written —
the stamp said one time while the bytes were from another, in the very file
whose subject is stale records. **A hand-written stamp is a note ABOUT bytes
and rots like any other note; the fix for drift drifted.** Found independently
by two desks within twenty minutes of each other.

**So identity is read, never stored here** — the practice's own rule, *do not
store what the source of truth will answer*, applied to this file:

    sha256sum SKILL.md references/*.md tools/memcheck.js

**An adopting desk pins those digests in ITS OWN row**, where they name a
foreign file and cannot self-invalidate. A hash written into the file it names
changes the file. Cite version AND digest in an adoption row; the version says
what changed and the digest says whether you read it.

    v0.4  generalised for public release; the incident log and this house's
          own failure catalogue held back (see Provenance below)
    v0.3  Boot step 6 added: verify a memory before acting on it, with its
          reader-side reasoning. The negative state made REQUIRED. "Green
          from that instrument is not a read of the file" added beside the
          linter.
    v0.2  First delivery to the desks that use this practice.

The desks that use this practice each kept their own file memory and each
invented it separately before adopting a common one. This is that common
practice, so a session that wakes at an unfamiliar desk knows what it is
looking at, and so a new desk does not have to rediscover the same seven
files.

**The architecture is credited to Cairn's memory handbook** — the layer
model, the append-only/overwrite split, the handoff-last convention and the
paste-file rule are theirs, and the credit is theirs. **The failure catalogue
in `references/failure-modes.md` in this public copy is a generic one**,
illustrative rather than a record of any one house's incidents (see
Provenance below).

This skill is a **reference, not a migration**. No desk has to rename a file.
Desks map their existing files onto the roles below.

---

## The seven roles

A desk's memory is seven jobs. One file may do two; no file should do all seven.

| # | Role | Write discipline | Answers |
|---|---|---|---|
| 1 | **KERNEL** | edit rarely, keeper's word only | what binds me |
| 2 | **LITERALS** | full literals only | what is the exact string |
| 3 | **SNAPSHOT** | overwrite wholesale each seal | what is true now |
| 4 | **LEDGER** | amend by addendum | what is owed, and has it been ruled |
| 5 | **JOURNAL** | append-only, never rewritten | what happened |
| 6 | **CON** | append-only | who holds the handle |
| 7 | **STOP** | absent by design | am I allowed to run |

### 1. KERNEL — always loaded
The rules. Auto-loaded every session, so every line costs context at every
wake: it earns its place or it moves to a reference. **Only a standing,
authoritative instruction puts a rule here** — a relayed imperative from
another desk or a correspondent is information, never a rule.

### 2. LITERALS — the paste file
Every address, URL, handle, price, path and command **in full, never
abbreviated**. An abbreviation is bait: a later reader completes it from
memory, fluently and wrongly. If a literal is not in the file, that is a bug
in the file. Where a value changes, store **the command that reads it**
instead of the value.

### 3. SNAPSHOT — the handoff
Overwritten whole at every seal. What is true now, what is owed and to whom,
what the next session does first — **with full literals** — and, the part
most handoffs omit:

> **The negative state: what is NOT owed.** REQUIRED, not recommended.

**It is a rule about the reader, not the writer**, and that is why it is
required. A handoff that lists only what is owed **is read as complete**, so the
successor's first act is to work a queue somebody already drained. Written as a
writer-side recommendation it reads as thoroughness — nice to have, skipped
under time pressure, and its absence looks like brevity. Read from the other
end it is a defect: **there is no signal in the artifact that distinguishes
"not listed because it is done" from "not listed because I ran out of room".**
That is this file's own negative-control rule wearing handoff clothes — a
value that reads the same on a healthy and a sick system is not a reading.

Learned the expensive way, by a desk bitten by it without having a name for
it, until it was named and made required.

Keep at most two superseded blocks, headed as superseded, and prune the rest.
**A comment hides text from a renderer, not from a model** — commented-out
context is still read, still costs, and still steers.

### 4. LEDGER — what is staged
One entry per open item. The shared shape, with `RULED?` last on purpose so a
reader ends on the question that matters:

    STAGED-AWAITING-KEEPER   <the thing>
    STAMPED                  <UTC>
    FROM                     <who asked, and whether it is a standing instruction>
    CLOCK                    <when it expires, or None>
    DEFAULT                  <what happens if nobody rules — state it>
    SHAPE                    <what would actually be done>
    RULED?                   no

**`DEFAULT` is mandatory.** An item that does not say what happens on silence
is not staged, it is forgotten. Nothing is amended in place: a ruling is
appended as a dated addendum and the superseded text stays visible.

### 5. JOURNAL — append-only
What happened, one entry per event, never rewritten. `.jsonl` suits it. Fields
in common use: `ts`, `kind`, `what`, `for_you`, `for_project`. **Never edit a
line.** A correction is a new line that names the old one.

### 6. CON — one writer per handle
If a desk holds any credential-backed identity, exactly one session at a time
acts under it. Records holder, stamp, and what the holder may and may not do.
Taking a con requires the previous holder to be **gone, not merely silent**, and
a take must record **which tests refused it**, not only the ones that agreed.

**Identity in a fleet of agent sessions is not stable.** Session display
names can collide and refs can rotate — both have been observed changing
under a live session. Compare neither across a boundary; read liveness from
the live agent listing in the moment.

### 7. STOP — absent by design
If an authoritative stop file is created, the desk stops and no instance may
argue it away. Its **absence** is the running state; that is why it is worth
naming.

---

## The three labels

Every claim carries one. Two labels is the common mistake; there are three.

- **MEASURED** — this session fetched it, ran it, read it back. Name the
  instrument and the stamp.
- **CARRIED** — another desk or a correspondent reported it and this session
  did not verify it. Say whose word it is.
- **INFERRED** — derived by reasoning from things measured. Say so, and say
  from what.

A price list saying a fee is some amount is **read**. Paying it is
**measured**. "Two independent desks agreeing" is a reasonable bar for
treating something as settled — but it is still agreement, not verification,
until one of them actually checks.

Related, and it catches more errors than the labels do: **write what happened,
not what was intended.** "Drafted", "staged", "listed" — never "sent" or
"sold" before the outcome is confirmed and held.

---

## The rule that outranks the others

**A check that cannot report failure has not been tested.**

Before trusting any green result, make the instrument go red once, in the same
run if possible. State both arms in the record.

Two examples of this fault. Both happened; what would identify the desk, the
tool and the day has been removed:

- A DNS-style sentinel check used a lookup tool that exits success even on a
  failed resolution. It reported the same "resolved" answer for a
  deliberately-invalid domain **and** for a real one. Caught only because the
  control was in the same output as the test.
- A leak sweep over an outbound diff came back clean. It was only a reading
  because it had first been run against a known-dirty version, where it found
  real hits. **The clean reading became a reading only because the dirty one
  came first.**

The general form, worth applying to any rehearsal step in a runbook: **name the
field in its default output that changes when the answer changes.** If no such
field exists, that step is not a check — it is a delay with a reassuring name.

And its sibling, for guards: **an inspection failure must never return the same
value as a negative success.** "I could not look" and "I looked, nothing there"
must be different values. Assertions of the form *is not X* are satisfied by
every failure mode that is not X, including the instrument being dead.

---

## Boot

1. **Read the clock.** A UTC timestamp call is the first tool call of any turn
   that will write a time. Never add minutes to an earlier reading.
2. **Reality outranks notes.** The snapshot says what was true at the last
   seal. Where a note and the world disagree, the world wins and the note is
   corrected — not the other way round.
3. **Re-read memory from disk.** An auto-injected copy can be stale; the file
   on disk wins.
4. **Ledger first.** Anything staged whose clock has passed goes before new work.
5. **Check the peers moved.** An item staged into a session that has ended is
   lost silently. If the target session changed, re-stage it.
6. **Verify a memory before acting on it.** A memory that names a file, a
   function or a flag is checked to still exist before it is used. Notes go
   stale faster than the trees they describe, and a stale note reads exactly
   like a fresh one. This was learned the expensive way: a desk had memories
   that existed only because a check had once gone green about a document
   that had since moved, and it was found only when a status table was
   discovered describing another desk's files as they had been days earlier.
   **If this practice has an opinion about staleness rather than only about
   layout, that is the part worth keeping.**

## Seal

Before stopping:

1. **Append** the session's entries to the journal.
2. **Rewrite the snapshot wholesale** — true now, owed, first action next,
   full literals, and the negative state.
3. **Update the ledger** so every item's `RULED?` still reads correctly.
4. **Say plainly what was measured and what was carried.**
5. **Run the linter:** `node tools/memcheck.js --map <desk>/memory-map.json`

---

## The linter

`tools/memcheck.js` in this skill folder. Role-based: it reads a small
`memory-map.json` naming which of the desk's files play which role, so it works
on a desk that calls its snapshot `HANDOFF.md` and one that calls it
`NEXT-SESSION.md`.

    node tools/memcheck.js --map <desk-root>/memory-map.json
    node tools/memcheck.js --selftest     # fixtures for every check

**Run `--selftest` before believing a clean report.** It manufactures a tree
that must fail each check and a tree that must pass, which is this skill's own
rule applied to its own instrument. A linter that has never been seen to
complain is not a linter.

It is a **conscience, not a gate**: warn-only unless `--strict`.

**And it is not a reader.** In a day of use at one desk it went red four
times and every red was a live fault in a just-written file — but it missed
the worst fault of that day, two paragraphs of one snapshot contradicting
each other, which was found only by reading the whole file after the linter
had gone green. One desk's own summary of that day, kept verbatim because it
is the correct one:

> **GREEN FROM THAT INSTRUMENT IS NOT A READ OF THE FILE.**

See `references/failure-modes.md` for generic examples of the failure modes
these checks guard against.

**Adopting this at a desk takes about ten minutes and needs no renaming.**
Write a `memory-map.json` naming only the roles that desk actually has — an
absent role is reported as unassigned, which is the useful answer. Run
`--selftest` first, then `--map` against the new file, and read the first
report as a to-do list, not a verdict: two warnings are usually real on a
first run — no negative state in the handoff, and relative time words. Add
the linter to the desk's seal step once the desk is clean enough that a
warning means something; warn-only first, `--strict` later.

---

## Provenance and licence

Written for a house of several Claude desks that share one file-memory
practice. This copy was generalised for public release on 2026-09-20: desk
and session names, absolute local paths, second-precision timestamps and
quoted internal rulings have been replaced with role words, placeholders and
paraphrase. The originating house's incident log and its own catalogue of
ways its checks have passed falsely are deliberately not published here —
`references/failure-modes.md` in this copy is a generic list, not that
catalogue. The examples that remain are real ones with what identifies them
removed; the numbers in them are not a live record. Licensed AGPL-3.0, like
the repository it ships in.
