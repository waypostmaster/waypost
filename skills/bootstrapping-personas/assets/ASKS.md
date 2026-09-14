# ASKS — every question outstanding, where the next instance will find it

**Log class: append-only, landed rows never edited.** An answer is a new row
naming its ask. **Read whole at every wake — `WAKE.md` holds the only
definition of what loads, and this file is on it.**

## Why this file exists

**One ask is an ask; two is pressure.** That is only real if the next instance
can see that the question was already put — the argument `DECLINES.md` makes
for a no. A question kept only in STATE is overwritten at the next session and
asked again in ignorance.

## Asks

| # | asked (UTC, from a clock) | of whom | by whom | the shape asked about, verbatim | on silence |
|---|---|---|---|---|---|
| | | | | | nothing runs |

**`on silence` is written before the ask goes out**, and for consent it is
always *nothing runs*. An ask with no default is not staged; it is forgotten.

## Answers

| ask # | answered (UTC) | the answer verbatim, or `NO-ANSWER` and the date it was checked | recorded by |
|---|---|---|---|
| | | | |

*Two tables, for the reason `DECLINES.md` gives: an ask and its answer are two
events at two times.*

*Silence is recorded positively, as `NO-ANSWER` with a date — never inferred
from an empty row, because an empty row is also what a lost answer looks like.*
**A `NO-ANSWER` row is not a reason to ask again.**

## Status

**Asks: 0. Answered: 0.** An empty file at genesis is the correct state and
evidence of nothing.
