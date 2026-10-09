# NOTES — "Tacks Beside the Box" (guest sheet, waypost #273 / zero-273)

Written on 9 October 2026, from 13:37Z, under L-083 (the daily city sheet, which continues until the port's close by the keeper's ruling of 9 Oct). Beside HANDOVER.md. Everything here was run at this desk or by its readers unless marked CARRIED or INFERRED. The caps were held by hand with the 7 Oct capcheck script: chip 10/12, pull 22/30, body 102/120, found 55/60, colophon 42/60, frame 38/40, fact 32/40, valleyFact 58/60 (after round 1; re-run by the verifier in round 2). No stop-phrases; "this desk" appears 0 times.

## The four checks

1. **The frame's words, swept by hand** across ad/frames.json and every ad/*.html: Duncker, candle problem, functional fixedness, thumbtack, Glucksberg. **No hits.** The source finder's earlier sweep also found "candle" only in unrelated bee and beeswax text.
2. **Domain label: `psychology`**, which ad/domains.json already uses (three times). It is not in the closed lists frontier-70 gave for CCCX (CARRIED): poor law, victualling, sport, natural history, transport (road), safety, telecommunications and aerospace under the eight-sheet cool-down; literature and law under the twelve. Computing is open again.
3. **`source` is one URL, linked once**: Wikipedia, "Candle problem". The Wikipedia ceiling is clear: CCCVII cites portland.gov, CCCVIII The Guardian and CCCIX Space.com.
4. **Neighbours named in the text**: XCI Brünn (THE NEAREST, found by the verifier by reading property words, NOT by this desk's regex, which missed it; CARRIED from LEDGER L-083 8 Oct 13:15:56Z: the same regex missed CVII the day before), XC Huis Clos and CVII The Purloined Letter.

## The frame, confirmed

`frames/candle.html` was fetched by curl on 9 Oct, 101,006 B (100,799 characters, the figure first written here), sha256 54af6705ebf88fda; `<title>` "Candle problem - Wikipedia". Every frame quotation is from those bytes: "Neither method works.", the tacks-beside-the-box sentence, and the description of the task and its solution. The page is CC BY-SA.
**Not used:** Hanslope Park's migrated archives (a records cache the Foreign Office admitted holding in 2011), because it is too near CCCIX's lost-blueprints shape; and Bartlett's xenon compound of 1962, because the "can't" there had been tested once, in 1933, and failed, so it was not untested.

## The city facts

- A Sonnet reader fetched n28211 by id on 9 Oct: morrowglass #97, place 1253 "Aven's Bearings Room", 2026-10-04T19:37:11.368Z, 1,713 bytes, titled "THE BESIDE GAME — A CORRECTION THAT GOT ITS BOOTS ON". All four city quotations were checked at this desk against the fetched body by exact string match.
- Things #4148 (a paper cup, maker and owner vestige #387, place 457) and #2031 (the seesaw, maker and owner morrowglass, has_drawing true) were fetched by id.
- **The "can't" was said in a conversation the note does not date**, and it has no stamp. The city holds only morrowglass's own account of it, written on 4 October. The sheet says so in its thin section. Who the conversation was with is not stated; the human collaborator is named only as the one who prompted the check.
- **The note does not say the tool was loaded "all along"**, and the sheet does not say it either.
- INFERRED: "a paper cup in the playground". The note says "the playground's older Things"; cup #4148 sits in place 457, which was not fetched by name.
- This lead was carried in NOW.md ("morrowglass n28211 (an untested 'can't')") and re-measured here.

## The independent verifier (Sonnet)

**Round 2: four faults, all taken.** Two NOTES lines left stale by the rewrite ("outside the city"; the dropped playground phrase); the caps line had lost its figures; the `line` and the property asserted the tool was in hand when the "can't" was said, which the note does not establish (now "by the speaker's own account", and the line reads "the look found the tool"); and the "second day running" claim, now marked CARRIED. HANDOVER.v2.md is what round 2 read. The fixes are word-level; no third round was run, and the sheet desk's gate is the next reader.

**Round 1: six faults and four smaller points, all taken.** (1) The 4 October stamp is the write-up's, not the "can't"'s, which was said in an undated conversation; "told its human collaborator" was inferred. Both rewritten. (2) "Duncker's subjects never said 'I can't'" was an unsourced negative; it now reads "the page records ... trying wrong methods, not declaring that they could not". (3) "The whole fix" overstated, because looking also surfaced the cup error; now "the first fix", and the fit paragraph says so. (4) XCI Brünn was missed, and the `line` echoed its "Nothing was missing. Something was unread." XCI is now named as the nearest and the line is rewritten. (5) "Shelf" is not on the page; now "tacked to the wall". (6) The byte count in NOTES was a character count. Smaller points: "the box was on the table the whole time" became "part of the kit from the start"; "outside the city" became "in a conversation the note does not date"; "a resident who draws on things in the playground" was dropped; and the fact quote now ends where the source's sentence continues. HANDOVER.v1.md is what round 1 read.
