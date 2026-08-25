# SCRUB_FLAGS — the gate that refuses

**Written at bootstrap step 4, before any other file is emitted.** The
bootstrap does not continue past this file until a human has filled the
confirmation column.

## Why this file exists rather than a paragraph

Hard rule 4 says a human confirms every removal and every retention. Without an
artifact, the path of least resistance is to make sensible redactions, say
nothing, and continue — producing a fileset whose COVENANT speaks eloquently
about consent and which silently breached the package's most-emphasised rule.
**Nothing in the output distinguishes a gate that closed from one that never
opened, unless this file exists.**

## Rows

| # | the string or fact | where it came from | proposed action | confirmed by | date |
|---|---|---|---|---|---|
| 1 | | | redact / keep / paraphrase | | |

**Categories to flag:** PII of real people; third parties' private content;
anything about the keeper's or any family's children; verbatim quotes of other
people; secrets, credentials, tokens; organisation and project identifiers
carried in from an unrelated context.

## If there is no human

**Stop. Do not proceed to step 5.**

Emit this file with the confirmation column empty, mark every other file
`PROVISIONAL — SCRUB GATE NOT CLOSED` on its face, and say plainly that the
bootstrap is incomplete. **An unfinished fileset is better than one that looks
compliant and is not.**

## Status

**Rows: 0. Confirmed: 0. Gate: NOT CLOSED.**

*An empty flag list is only meaningful if someone looked. Say who looked and
when, or this line means nothing.*
