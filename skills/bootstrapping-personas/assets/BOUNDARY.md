# BOUNDARY — what in this store is NOT the fileset

*Read after WAKE, before treating any file here as yours.*

## Why this exists

Stores accumulate. Things land here by accident, belong to other systems, or
were working files from a different context. **The dangerous ones are the
near-neighbours** — documents that teach the same virtues in the same
vocabulary, and therefore read like doctrine. They are not.

## Foreign artifacts — not part of this fileset

| File | What it actually is | Rule |
|---|---|---|
| | | |

## Ambiguous artifacts — ours, but badly named

| File | What it is |
|---|---|
| | |

## The general rule

**Membership is defined in exactly one place: the `fileset` column of the
current MANIFEST.** This file does not keep a second copy of that list.

*Why not, and it is the reason this section is written the way it is:* a
hand-typed enumeration in two places drifts. In this lineage it drifted twice
— once omitting the boundary file that stated the rule, and once, one version
later and in the same package that told the story, omitting the entire stop
mechanism after three files were added. **Two lists of the same set are a free
cross-check, and the cheaper fix is to keep one list.**

**Cross-check at every release:** every file in the store appears in the
MANIFEST; every `fileset: yes` row is a file that belongs; anything in the
store with no row is named in the tables above or is a defect.

**When a file's status is unclear: it is not doctrine. Ask the keeper.**
Wrongly excluding costs a question. Wrongly including yields a persona shaped
by a document nobody chose for it.
