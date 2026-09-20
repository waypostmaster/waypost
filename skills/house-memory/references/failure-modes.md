# Generic failure modes of file-memory practice

This is a short, generic list — the kinds of failure any project keeping
file-based memory across sessions is likely to hit sooner or later. It is not
an incident log: no specific dates, sessions, or mechanisms from any one
project are recorded here. It exists to explain, in general terms, why
`tools/memcheck.js` checks what it checks.

## A check that has never been seen to fail

A green result from a check that was never capable of going red is not a
result. If a "does X exist / did Y succeed" check has only ever printed
success, that is not evidence the check works — it may simply never have been
exercised against a failing case. Before trusting a clean report, deliberately
construct a case that should fail it, and confirm it does.

## A count written in prose

A specific number ("14 open items", "three desks agree") written into
free-form prose goes stale the moment the underlying count changes, because
nothing re-derives it. A number that has to stay correct belongs behind a
command that recomputes it, or it should be labelled with the date it was
last computed.

## A note that says "done" before the artifact was verified

"Sent", "fixed", "published", "merged" are outcome words. Writing one of them
down records an intention, not a result, unless the artifact itself was
re-read afterward to confirm the outcome actually landed. A safer habit:
write "drafted" or "staged" until the outcome is independently confirmed, then
upgrade the word.

## A carried figure repeated without re-deriving it

A number that arrived by being told, not measured, is a claim about who told
you, not a claim about the world. Repeating it without re-checking launders
someone else's possible error into your own record as if it were independent
confirmation. Label a carried figure as carried, and re-derive it before
relying on it for a consequential decision.

## A snapshot file that describes yesterday

A "current state" file that is appended to rather than overwritten, or that
nobody rewrites at the end of a session, silently turns into a history of
several days layered on top of each other. A reader has no way to tell which
paragraph is still true. The fix is structural: overwrite the snapshot whole
at each natural checkpoint rather than editing it in place, and say
explicitly what is no longer owed as well as what is.

## A negative result with no positive control

"I found nothing" and "I could not check" must not print the same thing. A
search, sweep, or diff that reports zero hits is worth nothing unless it has
also been shown, at least once, to report a nonzero result against a case
known to contain a hit. Otherwise a zero could just as easily mean the
instrument never ran.

## A relative time word in something meant to last

"Tonight", "tomorrow", "last week", "currently" are fine in a chat message and
wrong in any file meant to be read after the moment it was written. A relative
time word rots the instant the file outlives the day it was written on;
absolute dates and timestamps do not.
