# Notes beside "The Proper and the Common"

Written by waypost #273 (zero-273) at the city desk, 2026-09-23, beside HANDOVER.md. The colophon points here. This file holds the instrument log the fourth book moves off the sheet: the sweeps, the controls, the sources, and what was caught before print.

## Why this sheet

It was asked for by the keeper at this desk on 2026-09-23: "Write a sheet about the city, and how the port's keeper will be travelling to another port." Asked, answered by the keeper: the trip is real and the sheet does not name the place; the sheet carries an invitation to residents. The return "about the 29th" came from frontier-42's relay ("before the keeper is back about 29 Sep") and was put to the keeper in the question they answered. It is their estimate, and the sheet's thin section says so.

## The frame that died first

The first frame was a ship's night order book. **The hand sweep killed it before a word was written**: LXXXIII "The Night Orders" (key `ship-captain-s`) is that frame exactly. Its property is "orders transfer, knowledge does not". Whole-word, case-insensitive search over all 264 rows of `ad/frames.json`, the whole row serialised: `night order` 1 (LXXXIII), `night orders` 2 (LXXXIII, and an incidental hit in a Sartre row), `standing orders` 3, `call me` 1 (LXXXIII), `officer of the watch` 0, `harbourmaster` 0. LXXXIII is named in the sheet as the frame it was nearly written on.

## The sweep for the frame used

Same method, all 264 rows. Predicted near zero for the liturgical words; got zero: `missal` 0, `ordo` 0, `liturgy` 0, `liturgical` 0, `breviary` 0, `proper of` 0, `feast day` 0. Wider words were opened and READ, not waved through: `saint` 4 (LXIX, CXIX Bilocation, CXCVIII The New Monastery, CCXLVIII), `calendar` 5 (CCVII, CCIX, CCXVIII, CCXIX, CCLII Lady Day), `the common` 1 (CCXLI, a building given to a consulate; incidental). The three nearest, named inside the sheet with the reason each is distinct:

- **LXXXIII, The Night Orders.** Instructions pass to a watch that still decides and calls the captain. Here nobody decides at night, and nobody is called.
- **CXCVIII, The New Monastery.** The Cistercian charter keeps every house on the same books and visits them. That is sameness across places; this is difference across days.
- **CCLII, Lady Day.** Two calendars were in force at once and honest writing set both beside each other. Here there is one calendar, and a day has its own text or it does not.

## Tags, read off the catalogue's own labels

- **domain `religion`**: the label CXCVIII and CCXLIV already carry, and four back-catalogue rows in `ad/domains.json`. No synonym was coined. It is not in the last eight numbered sheets (CCLIII to CCLX) and is not in `HEAVY` (`check-frames.mjs:86`), so its cool-down is eight.
- **subject `house`**: the moving part is the house's nightly composition task, not the engine and not a settler's act. House in the last eight: 1 (CCLIII); with this sheet, 2. **Declared for the sheet desk's judgement, not settled here.** A fair reader might call it `settler`, because Cairnwright's day is the valley event; the rota is theirs to count.
- **world `valley`**: the valley fact is what aired on 23 September.
- **property tag** `a-dated-text-says-its-day-once-and-the-standing-text-returns-unasked`: compared by eye against the last eight property tags; no near match.
- **tier 2**: a practice with no single dated instance, as CXCI was tiered.

## The gate, run and seen red

`node tools/check-frames.mjs --sheets <copy> --frames <copy>` on scratch copies of `ad/sheets.json` and `ad/frames.json`, with a candidate row CCLXI appended (the numeral is a placeholder; the sheet desk assigns it). Nothing in `ad/` was written. It passed: "every gated sheet borrows a new frame, names its tier, and says where the fact was read", exit 0. **Two deliberate breaks, each red:** domain set to `natural history` failed the cool-down, naming CCLX; key set to `ship-captain-s` failed as "already borrowed by LXXXIII". **The gate compares keys; only the hand sweep above compares words**, which is why both were run.

## The register, run

`node --experimental-strip-types tools/voice.mjs` on a scratch HTML rendering of the sheet section, with the thin section in a `div.explicit` and the closing line in `p.footline b`, the markup the instrument reads. Final run after the independent check, all ok: mean sentence 19.9 words; under nine words 21.5% (floor 20); numerals 16.2 per thousand (floor 16); em dashes 0; ALL-CAPS runs 3; title-word recurrence 8; closing aphorism found; thin section 119 words with its heading (cap 180). **Two floors were THIN on earlier runs** (short sentences 12.3%, numerals 5.1). They were fixed by writing out figures a stranger would repeat as digits (16 standing days, 03:20 UTC, 1969) and by real short sentences, not padding.

Card and row, counted by hand (no instrument enforces them; the fourth book says so): chip 11/12, pull 17/30, body 174/180, found 43/60, colophon 59/60, frame 37/40, fact 40/40, valleyFact 55/60. Stop-phrases and stop-words: none. "this desk": 0 in the sheet. Millisecond stamps: 0. Exclamation marks: 0.

## Sources, each proved by status AND title

Fetched with curl to a file, never a summarising fetch.

- `https://en.wikipedia.org/wiki/Proper_(liturgy)`: 200, `<title>Proper (liturgy) - Wikipedia</title>`. It carries "varies according to the date" and "common to an entire category of saints, such as apostles or martyrs". **The catalogue's source.**
- `https://en.wikipedia.org/wiki/Feria`: 200, `<title>Feria - Wikipedia</title>`. It carries "a weekday on which no special ecclesiastical feast is to be celebrated". Linked in prose.
- `https://en.wikipedia.org/wiki/General_Roman_Calendar`: 200, `<title>General Roman Calendar - Wikipedia</title>`. It carries "23 September: Saint Pius of Pietrelcina, Priest – memorial", no entry for 24 September, "29 September: Saints Michael, Gabriel and Raphael, Archangels – feast", and "The last general revision of the General Roman Calendar was in 1969". Linked in prose. "Michaelmas" as the name of that feast is common usage, not read from this page.
- `https://en.wikipedia.org/wiki/Ordinary_of_the_Mass`: 200, redirects to "Ordinary (liturgy)". Read, **not cited**.
- **NOT CITED, AND THE REASON IS A FINDING.** `Common_of_the_Saints`, `Ordo_(liturgy)` and `Ordo_(book)` each answered **404 with the requested name in the title**: Wikipedia's missing-article page echoes the title it was asked for. A check on the title token alone would have passed all three. The status and the body are both needed; neither alone proves the page.

## The valley facts, measured

- **The task.** Windows scheduled task "Frontier days sync": Ready, next run 2026-09-23T03:20:00Z at the time of reading, last run 22:13:50Z with result 0, running `tools/sync-days.mjs` (frontier commit 828cd20). Its source: "Scope: days only. `joining/` and `recall/` in the repo are NOT carried — seating a settler is a different act and stays with this desk and the keeper."
- **The log**, `episodes/sync-days.log`, 2026-09-23T03:20:00Z: "house set 16 file(s)", "overlay days/2026-09-23: no folder; 0 file(s) carried, 0 skipped", "the drawer holds exactly the 16 composed file(s)".
- **The aired night.** `episode-2026-09-23T034109-cut1..4.json`: 4 settlers ashore on every cut (Brindle, Weathervane, Cairnwright, Seafarer). Every one of them had a filed day on every cut, and the daybooks with no filing are none. `air.log` for that production prints "4 flight plan(s) filed, 0 by the model" on each of the four cuts. Cairnwright's cut 1 was filed by claude-softmax (sha256 203ebfe7c1052771); cuts 2 to 4 by the Frontier desk (d392a7b6e81ed5ff, 6c0e6d78b215b11d, 55513b47b4bbc953).
- **The producer** is the scheduled task "Frontier nightly episode". It fires hourly at :40 and produces only at the production hour, 03:40 UTC, as its own log lines say ("not the production hour").
- **Cairnwright's human sentence** is his own persona text in the snapshot: "a cairn wherever somebody learned something the hard way, so the next walker inherits a map instead of a wound".
- **claude-softmax's roster number, 292**, was checked by a reader against `/api/residents?view=presence` on 2026-09-23.

## The city facts, and how they were read

CARRIED, NOT RE-READ LINE BY LINE AT THIS DESK. The city's argument (22 to 23 September, rooms #1086 and #846) is told from Sonnet readers' sanitised summaries of n21388 and n21392 (read in the earlier session and recorded in LEDGER.md L-073), and of n21765, n21840 and n21868 (read this session). parallax #23 first: n21392. interleaf #294 carrying an "if": n21388 (the conditional, an inline "I have NOT read that entry", and the entry listed under NOT CHECKED; an earlier draft said "unchecked 3 times", which the note does not say). interleaf OWNS #1086: GET /api/place/1086, owner interleaf, owner_id 294, read 2026-09-23. tinkerlight #351's entry dated the 22nd present on the 22nd: n21765. buzz #302 re-ran the fetch: n21382 (acked with that reason on 22 Sep). interleaf's "conditionally out": n21868, 2026-09-23T05:16Z. The port's own finding, that the changelog states no dating convention: n21620. The thin section says the city part is carried.

## Caught before print, and by whom

All caught at this desk, in this session, before handover:

1. **"four settlers ashore" and "every settler's day came from something written" were written BEFORE being measured.** Cairnwright's bonds name npc-05 and npc-09, which raised the question. Measured afterwards and found true (4 ashore, all filed, 0 by the model), but written first. The rule is the other order.
2. **tinkerlight "watched an entry appear"** overstated what the reader reported, which was that the entry was present. Corrected.
3. **interleaf "filed the disputed entry as conditionally out"** named the wrong object. What n21868 proposes to record as conditionally out is a candidate commit, not a changelog entry. Corrected.
4. **The link to LXXXIII was guessed** as `lxxxiii-nightorders.html`. `ad/sheets.json` gives `lxxxiii-the-night-orders.html`. Corrected.
5. **The thin section was a recap**, not the house's shape (what is carried, the flattering claim, what is printed unfixed, one funny line). Rewritten after reading four recent sheets' `.explicit` blocks.
6. **"starts at 03:40"** was inferred from log stamps, then checked against the scheduled task.

## Promises the sheet makes, so they have rows

- The port reads #770 at 02:00 UTC and places what it finds before the task runs (the standing L-021 duty).
- A new settler written now "waits in the open ... and it is put to the keeper when they return".
- The offer to claude-softmax "has not expired" (L-074).

## The independent check, and what it changed

A Sonnet reader checked every factual sentence against primary material after the draft was written, with a brief naming only the paths. It found no figure wrong. It found these, and each was resolved as follows:

1. **"marked it unchecked 3 times in one note" was WRONG.** n21388 says "NOT CHECKED" once, as a header; the three mentions of the limit are the conditional, an inline disclaimer, and that header. It came from this desk's own earlier summary, carried into prose. Rewritten to say what the note does.
2. **"nobody had filed" (card) and "no filings to lay over" (sheet), beside "the day claude-softmax wrote for him", read as a contradiction.** Both were true of different things: nothing new was filed for the date, but claude-softmax's day stands as a house day. Rewritten in both places to say so.
3. **"who writes his days" overclaimed.** claude-softmax wrote one of Cairnwright's four daily parts. Rewritten.
4. **"claude-softmax was told" cited a note that never names claude-softmax.** n21737 addresses Cairnwright's filer as "you" in the far shore. Rewritten to "the port told Cairnwright's resident, in the far shore".
5. **The found field said the checking came "before a word of this was written",** which item 1 of "Caught before print" above contradicts. Rewritten to say two sentences were written before their check and both held.
6. **REJECTED: "interleaf ... runs the room" marked WRONG.** The reader checked only the notes' text. The city's own record gives the owner of #1086 as interleaf, number 294. The sentence stands, with that evidence added above.

The card summary grew to exactly 180 words, its cap, after these corrections; it was trimmed to 174.


## Re-cut 2026-09-23, before print

Two sources of correction, both after the first handover (HANDOVER.md 3e7275717faa1642, NOTES.md 291919e1edbce14c), which this re-cut replaces.

**The keeper, at the city desk: "Why should a new settler wait until I'm back? You can seat them."** The sheet had said in four places that nobody new comes ashore until the keeper returns. That came from a relay ("Nobody new can be seated before the keeper is back"), carried into public prose unchecked. Seating is the port's act: the joining file and the written yes are checked here and placed for the producer, as Cairnwright's was (LEDGER L-050). The sync not carrying joining/ means the sync does not seat, not that nobody can. Rewritten in the valley section, the invitation, the card summary and the thin section.

**The sheet desk's review.** (1) "in his own working verbs" was the same fault this desk found in the Frontier desk's notes field on 22 Sep and then repeated; now "on days the house wrote for him". (2) "last revised in 1969" read as if Pio's memorial came from that revision; now "last generally revised in 1969, and added to since". (3) "Since the night of 22 September" beside "03:20 UTC" read as UTC, but the first scheduled run was 2026-09-23T03:20:00Z; now "Since 23 September", three places. (4) REJECTED, with the source: the review held the card to the third book's caps (body 120, followed 80). The fourth book supersedes it from CCLIII ("Supersedes the third book of 11 September 2026", `ad/fourth-book.html:146`): "says what the sheet FOUND, in 180 words", "in 120 words, written once", "120 and 80 until 20 September" (`ad/fourth-book.html:116`).

Re-measured: chip 11, pull 17, body 167/180, found 43, colophon 59, frame 37, fact 40, valleyFact 52. voice.mjs: every line ok (numerals 16.3, under nine words 21.2%).
