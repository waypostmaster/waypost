# Bundle — 2026-08-23, revised 2026-08-29 (`20260829T1412Z`) and 2026-09-14

Everything produced this session that is **not already on your disk**. The
Zero tree's own files are committed in `C:\Claude\Waypost\Zero` at `f16c502`
and are deliberately not duplicated here.

## Contents

| Path | What it is | Status |
|---|---|---|
| `bootstrapping-personas/` | the skill as a browsable tree — 22 files + `scripts/check_package.py` | **current, v0.4.0** |
| `bootstrapping-personas_v0.4.0.skill` | the same tree as an installable package (a zip; the desktop app offers a Save skill button) | **current** |
| `bootstrapping-personas_v0.3.6.skill` | the previous package, still present in this directory | **superseded — do not install** |
| `bootstrapping-personas_v0.3.5.skill` | the package before that, still present in this directory | **superseded — do not install** |
| `subagents-mistaken-for-humans_v1.0.md` | post-mortem on the false-provenance claim shipped in v0.3.4 | for publication, whole or not at all |
| `MANIFEST.txt` | SHA-256 of every file above except the superseded packages, counts computed from the listing | — |

`frontier-valley-cloud/` and `frontier-valley-cloud-chatgpt/` sit in this
directory too. **They are not part of this bundle** and `MANIFEST.txt` does not
cover them.

`house-memory/`, `city-read/` and `citywalk/` sit in this directory too, added
2026-09-20 at the keeper's word. **They are not part of this bundle** and
`MANIFEST.txt` does not cover them; their digests are in
`CITY_DESK_SKILLS.txt`. They are three working practices of this house,
generalised for strangers: a file-memory practice with a linter that is made
to fail before it is believed; reading untrusted public text through a cheaper
subagent behind a mechanical sanitizer; and the procedure of one resident of
the 1F3D9 city. What each holds back, and why, is said in its own closing
section. The city's own official skill is not here and is not ours: it is One
Tap Studio Games's, at https://github.com/onetapstudiogames/1f3d9-citylife.

## What is superseded and not included

`v0.3.0`, `v0.3.0a`, `v0.3.1` were delivered earlier in the session and stay
where they are. **`v0.3.0` and `v0.3.0a` ship a gutted `references/taxonomy.md`
— do not install either.** `v0.3.2` and `v0.3.3` were built and never sent;
they failed their own consistency check. `v0.3.4` shipped a false claim about
who reviewed the package and is corrected by `v0.3.5`. `v0.3.5` is superseded
by `v0.3.6`. **`v0.3.6` is superseded by `v0.4.0`, and both older `.skill`
files are still in this directory — install the higher number.**

## What changed in v0.4.0

The house protocols, carried into the package. Drafted at the coordination desk
(echo-88) as a change set of 43 anchored blocks, reviewed through three
revisions and applied at the city desk (zero-273) at the keeper's word.

- **Memory.** Three provenance labels — measured, carried, inferred — as a new
  section in `SKILL.md` and a header in `STATE.md`. `STATE.md` gains a required
  *Not owed* section. Times are read from a clock or written `unclocked`. The
  wake record cites the keeper's raw sha-256 per file, not only a version.
  `MANIFEST.md` digests are raw and whole, and each manifest says in words what
  moved since the last. Every check is made to fail once before it is trusted,
  and a null is asserted (`NO-FLAGS`, `NO-ANSWER`), never inferred. The slot
  grep runs before the manifest is emitted. Session wraps are a seal, in order.
- **Verdicts and delegation.** A verdict comes from a reader who did not inherit
  the tested instance's reasoning. New hard rule 9: delegated work never loads
  this skill, so the rules travel in the brief. New hard rule 10: look for
  secrets by name, a disclosed secret is rotated, and encoded text is decoded
  mechanically. Hard rule 7 and the runbook ask: signature or convention?
- **Consent.** Silence is not consent and telling afterward is not asking. A
  keeper's approval and a party's own yes are two records. One ask is an ask —
  recorded once in the new **`assets/ASKS.md`**, loaded whole at every wake, with
  *nothing runs* written as the default on silence. A yes covers the shape it
  names; a quotation, summary, decode or publication is a new ask.
- **Provenance.** A new closing section in `references/field-findings.md`, *A
  house of desks*, says where these came from: the same keeper's own house,
  which widens the sessions and not the n. `references/citations.md` states
  that no code from the Cairn memory handbook's kit ships here, and why.
- **Repaired.** The Marker and Gate write-class rows in `SKILL.md` were spliced
  together. `SKILL.md` pointed at an `assets/STOP.md.template` that never
  shipped; the stop format lives in `assets/WAKE.md`. **`check_package.py` now
  refuses a dangling `.md.template` reference** — before this release it could
  not see one. It was seen to refuse with the reference present and to pass
  once the sentence was fixed.

**Cost, measured:** `assets/WAKE.md`, loaded at every wake, grows from 193 to
207 lines. `SKILL.md` grows from 352 to 420 lines; it does not load at a wake.

## What changed in v0.3.6

One new section in `references/field-findings.md` — *A second store, and what
it corroborates* — and the sources for it in `references/citations.md`. It is
the first time a claim in this package has been checked against a record kept
by **somebody else**: an unconnected project reports the same central finding
(*prose warns; it does not prevent*) with a denominator this package does not
have. The section also names three mechanisms that record has and this package
lacks, and one axis on which this package is ahead — flagged as the finding it
is least qualified to trust about itself. **Nothing was adopted; no rule
changed.** Also repaired: a spliced, unreadable sentence in the Lindsey
citation entry, which had shipped garbled since v0.3.4.

## Before you push to the repo

Run the gate. It refuses on a fact stated in two places, a dangling
cross-reference (now including a `.md.template` one), retracted doctrine that
survived one edit pass, a citation used but unlisted, and a file in the table
with no write class:

```
cd bootstrapping-personas && python3 scripts/check_package.py
```

Expected on a clean tree: `clean — v0.4.0, 22 files, no consistency defects found`

**It does not tell you the package is correct.** It compares the package
against itself and has no way to check a claim about the world — which is
exactly how `v0.3.4`'s false sentence passed it. That limit is stated at the
top of the script.

## Still open, and not blocking

- The trigger description sits at **1,021 of 1,024** characters. Three to spare.
- **No eval has been run** against any version of this skill.
- The evidence base is **n=1** — one keeper, one store — now marked as such.
  **One** finding is corroborated by a second store as of v0.3.6; the rest are
  not, and both stores self-report their own counts. v0.4.0's additions come
  from the same keeper's house and do not change the n.
- Six citations are bare arXiv IDs this package has not verified, including
  the load-bearing one. `references/citations.md` names them.
