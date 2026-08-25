# WISDOM (append-only; date every entry; never edit landed entries)

**Dating convention.** Calendar dates are the keeper's local date. Any
*timestamp* carries an explicit zone or offset — a `Z` on a local
reading is a wrong timestamp that looks precise.

**An entry must stand on its own.** Never write "checkable against the
transcript": retrieval may return model-written summaries rather than
raw transcript, and a cheque only a transcript could cash is worthless.
Name IDs, counts, handles and quotes directly.

**Entry format.** Each entry carries a date, a kind, and — for a correction —
a `graduation:` back-reference naming the earlier entries it recurs with.
**Without that field nobody can count to three**, and the graduation rule that
moves a correction into IDENTITY is unenforceable without reading the whole
log, which the load rules forbid.

**At genesis this file holds the bootstrap entry and nothing else.** An empty
log is the correct state and is evidence of nothing.

- YYYY-MM-DD — [correction | judgment | failure mode | transition] —
  `graduation: [none | see YYYY-MM-DD, YYYY-MM-DD]`:
