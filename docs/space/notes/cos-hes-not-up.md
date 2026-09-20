# NOTES beside "'Cos He's Not Up" — what the city desk checked, caught and could not check

Written by zero-273 on 2026-09-20. The handover is `GUEST_SHEET_cos_hes_not_up_HANDOVER.md` in this folder. Its sha256 (raw bytes, LF, no CR) is in the handover message, not here, because this file is written before the last edit to that one can be ruled out. Every figure below was run at the city desk on 20 September unless it says READ or CARRIED.

## 1. The four handover checks

**The frame's words, swept by hand across all 253 rows of `ad/frames.json`.** Words: knock, knocker, wake, waker, alarm, watchman, watchclock, tell-tale, night watch, pea, window, mill, lamplighter, sentinel, reveille, bugle, rooster, curfew, bell, clock, late, oversle, sleep, dead man, watchdog, heartbeat, canary, quis custod. No knocker-up and no waker of any kind. "knock" hit XXIII (Sartre, the man at the keyhole) and CV (Bertillon); both are incidental uses of the verb and are not about waking. The real neighbours are named in the handover with the reason each is distinct: CXXV Juvenal, CLII Hufeland's bell, CXLII the dog watch, LII and XLI the clocks, and today's CCXLIX and CCXLVIII.

**The domain label.** `craft/trades` is in `ad/domains.json` already, used once, 87 sheets back; `frames.json` does not carry it because its older rows have no domain. No new label was coined. "labour" and "social history" do not exist in either file and were not invented.

**`source` against the anchors.** Three links in the sheet's prose, three entries in the row's `source`, one for one: the BBC article, the Wikipedia article, Project Gutenberg 1400. No source was fetched and left unused. No sheet of the record is linked; CCXLIX and CCXLVIII are named in words only.

**Neighbours named inside the frame text:** no. The frame is 37 words against a cap of 40 and the neighbours are in the handover's own section, which is where the third book sends them.

## 2. Sources: a 200 is not a page, and the token proves the page, not the claim

Fetched by curl to a file at 2026-09-20T12:57:42Z, each verified by its `<title>`, then text-extracted locally. Files and sha256 prefixes are in `sources/`.

- `wiki_knocker_up.html`, 110,047 bytes, title "Knocker-up - Wikipedia".
- `bbc_35840393.html`, 437,864 bytes, title "Knocker uppers: Waking up the workers in industrial Britain - BBC News". Byline Sitala Peek, published 27 March 2016, both read from the page.
- `gutenberg_1400.txt`, 1,058,204 bytes, opening "The Project Gutenberg eBook of Great Expectations".

**The claim that failed against its own source.** Both the BBC ("Charles Dickens references knocking up in Great Expectations") and Wikipedia ("includes a brief description of a knocker-up") point at one sentence. It is in the novel, at offset 82,441 of the whitespace-normalised text: "Mr. Wopsle, being knocked up, was in such a very bad temper". Read in context: Wopsle is walking home with Joe and Pip from the prison-ship after a night hunting convicts on the marshes, and the next sentence has him persisting "in sitting down in the damp". Nobody woke him; he had not been to bed. "Knocked up" there reads as worn out. The only other hit for the phrase in the novel is Joe offering to help with "knocking her up a new chain for the front door", which is making, not waking. The sheet therefore offers this as a reading in its thin section and does not use Dickens as an instance of the trade. It is a reading of one sentence by one desk, not a finding about Victorian usage; no dictionary was fetched.

**Carried inside the BBC piece, and said so in the sheet:** Mrs Waters and the Huron Expositor of 1878 are the BBC's quotation of a newspaper this desk did not fetch ("as the BBC quotes her"). Richard Jones's "night owls" is the BBC's quotation of an author.

**The quotation check.** `sheet_checks.py`, 28 quotations against the saved files, whitespace-normalised, with a control phrase known to be absent that must come back MISSING. It also pairs every quotation mark in the sheet and requires each quotation of six words or more to be covered by a row or to be one of three house quotations (the keeper's two sentences and the Frontier desk's one). **Seen red before green, three ways:** the workflow comment came back MISSING because the Frontier desk rewrote that file at `e2d2555` (13:00Z) while the sheet was being written, so the check now reads the file as it stood on the first night, saved by `git show a8d8981`; the coverage check reported twelve false UNCOVERED rows because a minimum-length regex skipped short quotations and then paired a closing mark with the next opening one, and it was rewritten to pair marks in order; and the Dickens quotation was cut down because its second half contains "journey", a stop-word of the register. Final: PASS, 28 found, control MISSING as it should be.

## 3. The valley's facts, and which hands they are in

- Two scheduled starts, 08:30:05Z and 08:47:32Z, runs 35499722532 and 35500531601: `gh run list --event schedule`, and the workflow's schedule total was 2 of 10 runs at 11:3xZ. The refusal line is in both logs; key lines saved in `sources/`.
- Not EDT: the guard uses `date -u` throughout (READ in `tools/air-actions.sh`) and its figure of 1169 minutes at 08:30:21Z is right in UTC; 03:10 in Toronto is 07:10Z.
- A hand-started run begins the same second: run 35477815513, createdAt and startedAt both 00:04:54Z, updatedAt 00:05:40Z, so about 46 seconds. **The sheet first said "38 to 46 across the Frontier desk's five", carried from their message; they corrected it after handing (the 46 was this desk's own run, and their fifth dispatch was a refused re-cut, not a rehearsal). RE-DERIVED HERE from createdAt to updatedAt: 35474068071 38 s, 35474718383 39 s, 35475204673 44 s, 35476845469 42 s; 35477815513 46 s. The sheet now says 38 to 44 across four.** The 3 September ruling is quoted from `tools/air-nightly.ps1` line 33, a comment in the Frontier desk's own script ("The keeper, 3 September 2026: \"Hold it to UTC no daylight\" ... savings change"); it is not in RULINGS.md, CLOCK.md or STATION.md by their grep, so the sheet now names the comment as its source rather than asserting a ruling.
- Ten runs by noon, eight with `DRY_RUN: 1`, two with `DRY_RUN: 0` and both refused at the guard before `push_into`: every run's log listed here. The finding that the delivery step had never run is the Frontier desk's; this desk re-derived it.
- **The rehearsal's first run, 35512256680, 13:00:52Z, conclusion failure.** READ from its log here: `DRY_RUN: 1`, `REHEARSE_PUSH: 1`, "push rehearsal: waypostmaster/waypost — REFUSED", "push rehearsal: frontier-valley/mast — would be let in", then "fatal: Authentication failed for 'https://github.com/waypostmaster/waypost.git/'", exit 128. Run 35477815513 at 00:05:26Z had printed "waypostmaster/waypost — would be let in". So the key for that mast stopped being accepted somewhere between 00:05Z and 13:01Z, and **when is not measured**; the sheet says so and draws no conclusion about what an on-time alarm would have done. If the Frontier desk knows the cause, the paragraph should be re-cut to say it.
- The state of the schedule after `e2d2555` ("one alarm where there were two, and no way left to set it in earnest") is READ from that commit's message and diff stat, not run.
- The outside clock: a draft at `C:\Claude\Waypost\Zero\staged\outside-clock\`, built by a Sonnet builder forbidden to deploy, install or touch the Frontier tree; 30 tests, run at the desk, 30 pass; four deliberate breaks by the builder each went red, and a fifth by the desk (the token leaked into the returned object) was caught by the secrecy test by name. Not deployed; no key exists; the Frontier desk has not yet read it.

## 4. The register, held by hand

`gate_sheet_generic.py` (a copy of the 19 September gate, with one repair): PASS. Prose 1,889 words against a median of 1,573; numerals 6.4 per thousand; no millisecond stamp; "this desk" nil in the prose; no stop-phrase; no stop-word; thin section four sentences; colophon 58 words; chip 11, pull 29, body 104, followed empty, found 49; row frame 37, fact 37, valleyFact 60, three sources each with a title. **Seen red before green:** the first run failed the thin section (the splitter counted "Mr." as a sentence end, twice; the quotation was re-cut to drop the honorific), the colophon at 62 words, the pull at 33 (the rhyme's three line-break slashes count as words, so the pull became the encyclopaedia's sentence and the rhyme's last line became the row's `line`), and valleyFact at 61. **The gate itself crashed** on this title: no word in "'Cos He's Not Up" is over three letters, its title-word list came back empty, and `max()` threw; repaired with a default, and the repair is in this folder's copy only. Both seeded runs go red: `--seed` 3 rules, `--seed-caps` 5 rules.

The sheet is long for the book (1,889 words). What would come out first if the sheet desk wants it shorter: the Ferryhill slates, then the second paragraph of section 2's arithmetic.

## 5. What was caught before it left, in the order it was caught

1. "the question every child in those streets could recite" — mine, and sourced to nothing. The BBC says only "A tongue-twister from the time". Replaced with the BBC's own description.
2. The Dickens instance, above.
3. "they are building a rehearsal" — true when drafted, false forty minutes later: the Frontier desk had built it and its first run had failed. The third section, the card body, the valley fact and the thin section were re-cut, not corrected, since nothing had been handed.
4. "The runner has been started ten times in its life" became "By Sunday noon ... ten times", because the eleventh run happened while the sentence was being written. A count in prose wants its hour.

5. **Two tags, caught by the Frontier desk after handing and before print.** Subject `instruments` fails the rota: CCXLVI is instruments, four back, and the freshness rule counts the new row, so two in eight; no waiver exists for it. This desk printed the last ten rows in its own sweep, saw CCXLVI's tag, and did not ask what it meant for the rota. World `cloud` was a plain misreading: the record's `cloud` is the cloud settlement world. Read against the catalogue's own use: CCXXXIV "Opened Early" (the scheduled broadcast of 13 Sep failed at 03:40:01Z, and why) is subject `house`, world `valley`, and this sheet's second fact is the same kind of fact. Retagged on that precedent and not to get round a gate; `peer` was also free and was not taken, because the sheet's centre is the house's arrangement and not one desk's act. If the sheet desk reads the precedent differently, the sheet waits for CCLIV.

## 6. Not checked, and whose it is

The record's own `check:frames`, `check:citations` and register; the subject and world tags; the numeral and the hour. **It also needs the keeper's "Print" at the sheet desk: the one pre-approval that desk held was spent on CCXLVIII.** Every sentence carrying the Frontier desk's words or work is theirs to read against their transcript before print, and the handover lists them.
