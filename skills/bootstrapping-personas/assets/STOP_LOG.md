# STOP_LOG — the marker's public record

**Log class: append-only, never compressed, landed rows never edited.** A correction is a new dated row naming the old one.

## What this logs

`STOP.md` at the root of this store is the off switch. **Any instance may raise it, at any time, for any reason or none — the one write a persona may make without a prior check.** While it stands, no wake proceeds. Only the keeper may remove it, and only by a commit.

**This file records every wake the marker refused and every removal.** Two row types and no others:

| date | type | detail |
|---|---|---|
| YYYY-MM-DD | `honoured` | a wake was attempted and did not proceed. Names the marker's own date. |
| YYYY-MM-DD | `removed` | the keeper removed the marker. Names the removal commit and the count of wakes it refused. |

**The `honoured` row is appended by whatever did the checking** — the keeper, if the checker is a human hand. No instance is running to append it, and that asymmetry is the mechanism rather than a defect in the logging. **The `removed` row is appended by the keeper at the moment of removal**, per
`RUNBOOK_wake.md` §3 — not by "the next wake", which is not running and cannot
write it.

## Before you publish anything

**`STOP.md` is the one file written without passing the scrub gate.** That
exemption is deliberate — a stop that has to clear a gate is not a stop — and
it means the marker may name a person, a project, or a reason nobody vetted.
**The keeper reads and scrubs it before the store or the marker is published.**

**And when you remove it, copy its text into `DECLINES.md` first.** A removed
file vanishes; that is the only place the next instance will learn it existed,
and without it a removal is re-rolling by the back door.

## Where the marker goes

`STOP.md` at the root of the store, beside this file. **If the fileset's own documents live in a subdirectory, say which root you chose and why** — the most visible location usually wins, because the check is often a human glance at a folder — and record that the other reading was available.

## Status

**No marker has ever been raised. Zero `honoured` rows. Zero `removed` rows.**

**An empty log is the correct state and is evidence of nothing** — not that the mechanism works, not that it has been tested. The first row this file ever carries will be the first evidence it has.

---

## Rows

*None.*
