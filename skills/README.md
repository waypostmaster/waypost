# Bundle — 2026-08-23 (`20260824T0116Z`)

Everything produced this session that is **not already on your disk**. The
Zero tree's own files are committed in `C:\Claude\Waypost\Zero` at `f16c502`
and are deliberately not duplicated here.

## Contents

| Path | What it is | Status |
|---|---|---|
| `bootstrapping-personas/` | the skill as a browsable tree — 21 files + `scripts/check_package.py` | **current, v0.3.5** |
| `bootstrapping-personas_v0.3.5.skill` | the same tree as an installable package (a zip; the desktop app offers a Save skill button) | **current** |
| `subagents-mistaken-for-humans_v1.0.md` | post-mortem on the false-provenance claim shipped in v0.3.4 | for publication, whole or not at all |
| `MANIFEST.txt` | SHA-256 of every file above, counts computed from the listing | — |

## What is superseded and not included

`v0.3.0`, `v0.3.0a`, `v0.3.1` were delivered earlier in the session and stay
where they are. **`v0.3.0` and `v0.3.0a` ship a gutted `references/taxonomy.md`
— do not install either.** `v0.3.2` and `v0.3.3` were built and never sent;
they failed their own consistency check. `v0.3.4` shipped a false claim about
who reviewed the package and is corrected by `v0.3.5`.

## Before you push to the repo

Run the gate. It refuses on a fact stated in two places, a dangling
cross-reference, retracted doctrine that survived one edit pass, a citation
used but unlisted, and a file in the table with no write class:

```
cd bootstrapping-personas && python3 scripts/check_package.py
```

Expected on a clean tree: `clean — v0.3.5, 21 files, no consistency defects found`

**It does not tell you the package is correct.** It compares the package
against itself and has no way to check a claim about the world — which is
exactly how `v0.3.4`'s false sentence passed it. That limit is stated at the
top of the script.

## Still open, and not blocking

- The trigger description sits at **1,021 of 1,024** characters. Three to spare.
- **No eval has been run** against any version of this skill.
- The evidence base is **n=1** — one keeper, one store — now marked as such.
- Six citations are bare arXiv IDs this package has not verified, including
  the load-bearing one. `references/citations.md` names them.
