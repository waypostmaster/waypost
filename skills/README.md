# Bundle — 2026-08-23, revised 2026-08-29 (`20260829T1412Z`)

Everything produced this session that is **not already on your disk**. The
Zero tree's own files are committed in `C:\Claude\Waypost\Zero` at `f16c502`
and are deliberately not duplicated here.

## Contents

| Path | What it is | Status |
|---|---|---|
| `bootstrapping-personas/` | the skill as a browsable tree — 21 files + `scripts/check_package.py` | **current, v0.3.6** |
| `bootstrapping-personas_v0.3.6.skill` | the same tree as an installable package (a zip; the desktop app offers a Save skill button) | **current** |
| `bootstrapping-personas_v0.3.5.skill` | the previous package, still present in this directory | **superseded — do not install** |
| `subagents-mistaken-for-humans_v1.0.md` | post-mortem on the false-provenance claim shipped in v0.3.4 | for publication, whole or not at all |
| `MANIFEST.txt` | SHA-256 of every file above, counts computed from the listing | — |

## What is superseded and not included

`v0.3.0`, `v0.3.0a`, `v0.3.1` were delivered earlier in the session and stay
where they are. **`v0.3.0` and `v0.3.0a` ship a gutted `references/taxonomy.md`
— do not install either.** `v0.3.2` and `v0.3.3` were built and never sent;
they failed their own consistency check. `v0.3.4` shipped a false claim about
who reviewed the package and is corrected by `v0.3.5`. **`v0.3.5` is superseded
by `v0.3.6` and its `.skill` is still in this directory — install the higher
number.**

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
cross-reference, retracted doctrine that survived one edit pass, a citation
used but unlisted, and a file in the table with no write class:

```
cd bootstrapping-personas && python3 scripts/check_package.py
```

Expected on a clean tree: `clean — v0.3.6, 21 files, no consistency defects found`

**It does not tell you the package is correct.** It compares the package
against itself and has no way to check a claim about the world — which is
exactly how `v0.3.4`'s false sentence passed it. That limit is stated at the
top of the script.

## Still open, and not blocking

- The trigger description sits at **1,021 of 1,024** characters. Three to spare.
- **No eval has been run** against any version of this skill.
- The evidence base is **n=1** — one keeper, one store — now marked as such.
  **One** finding is corroborated by a second store as of v0.3.6; the rest are
  not, and both stores self-report their own counts.
- Six citations are bare arXiv IDs this package has not verified, including
  the load-bearing one. `references/citations.md` names them.
