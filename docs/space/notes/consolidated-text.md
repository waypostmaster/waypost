# NOTES — "The Consolidated Text" (guest sheet, city, 5 Oct 2026)

These are the checks behind HANDOVER.md. Clock read by `date -u` and python UTC throughout. The keeper asked for this sheet at the city desk ("then write a sheet", 5 Oct, after "Go on your best judgment"). It is a SECOND city sheet for 5 Oct: CCC "Margin One" is the first and is live. Whether to number it today or hold it for 6 Oct is the sheet desk's call.

## 1. Freshness: the frame's words, not its key

Hand sweep of ALL of `ad/frames.json` (304 rows, read 5 Oct ~20:30Z), searching each row's full JSON for these words:
- **consolidat / EUR-Lex / loose-leaf.** No frame is about consolidation. "consolidat" appears only incidentally: CLXXIII (Cassandra compaction "consolidating SSTables"), CLXXVII (the Justice Canada "consolidation" site as a fetch location), and CLXXXIX (a "consolidated brief"). EUR-Lex appears once, as CCXCV's source for a Court of Auditors report on butterfat. None of these borrows the property.
- **as of / currently / present tense / stale / out of date / dated / tense.** This found the real neighbours, named in section 4. All other hits are incidental: the "stale" in a software manual, census columns, and so on.
- **palimpsest / errata / codif / Federal Register / as enacted.** LI and LXXII (Archimedes) and CLXXIII (tombstone) are named below. The rest are incidental.

## 2. Domain label

`law`, which is the label the catalogue already uses for legal sources (CLXXVII, CCLVI, CLVI and others). Cool-down: the last twelve rows of frames.json (CCLXXXIX to CCC) carry no `law`. The newest `law` rows are CCLVI and CLXXVII, which are outside a 12-sheet window. The sheet desk's check-frames should confirm this; it was not run here.

## 3. Sources: what the page links, one for one

- **Linked and cited:** https://eur-lex.europa.eu/collection/eu-law/consleg.html, fetched with curl to a file on 5 Oct at ~20:39Z. HTTP 200, `<title>Consolidated texts - EUR-Lex</title>`, raw-file sha256 bb845c91714cb111 (saved as src/consleg.html). Verified by its text and not its status. The four quotations in the sheet appear verbatim in the page body: "Consolidation is the action of combining…", "This document shows the legal rules that are applicable at a certain point in time.", "Consolidated texts have no legal effect. They are intended for use as documentation only", and "the date on which the latest amendment included in that consolidated version becomes applicable". "Show all versions" is in the page's own instructions.
- **Fetched and NOT used:** https://eur-lex.europa.eu/content/help/faq/consolidation.html. It answered 200 with the title "Help - EUR-Lex", but the body was the site's navigation shell and carried none of the text, so it is the wrong page. **A 200 is not a page.** Three other guessed paths answered 404 (src/). None of these is cited.
- Wikipedia: not used, so the ceiling does not apply.

## 4. Nearest neighbours, named in the frame text

- **CLXXVII "Always Speaking"** (law; Canada's Interpretation Act s.10), the nearest. It is about THESE SAME DOORS and present tense. Its cure is to write the sentence so it never needs a date. This sheet's cure keeps the date, in a header over the folded text. CLXXVII is about how to write one sentence. This sheet is about what to do once corrections beside the error have filled a fixed space.
- **LXXVIII "The Legend"**: "a present-tense mark without a date becomes an ongoing assertion". Its cure is to confess the date. This sheet starts where those confessions have piled up past the room available.
- **LXXII "The Undertext"** / **LI "The Palimpsest"**: an overwrite that kept its witness, by accident and under the new text. Here the witness, the byte-exact PRE copies, is kept on purpose and off the wall.
- **CLXXIII "The Tombstone"**: deletion as a positive record. Its compaction DISCARDS the markers. A consolidation discards nothing, and every version stays listed.
- **CCLVI "Still Good Law"**: a relaxed restriction leaves its warning standing. It is close in spirit to #771's "cannot go stale", but it is about a warning that outlives its rule, not about corrections that outgrow their space. It is not named on the page, for room.

## 5. The house facts, and how each was measured (all 5 Oct 2026)

- **20 rooms owned:** `watch-check.places_we_own(confirm=True)`, 20 confirmed and 0 disputed. Measured three times today.
- **16 of 20 within 100 characters of 4,000; #518 at exactly 4,000:** taken from the twenty descriptions fetched at ~19:5xZ (saved byte-exact in doors/pre/) and re-counted in python from those lengths. One reader first printed "15" and corrected itself to 16 in the same report. 16 is my recount.
- **Eleven doors with a claim false that day:** #517, 518, 520, 521, 523, 721, 727, 755, 770, 771, 812, from the audits doors/audit/A.md and B.md. **Twelve were edited.** #722 was edited, but its "not answered" was arguably true, since n11399 labels itself "not an answer". The draft first said twelve and was corrected to eleven before handover.
- **#771's "nine voyages":** `episodes/next-snapshot.json`, under `snapshot.voyages`, has 9 records, re-derived at 20:09Z.
- **#727's 0.9868 and the recall on 5 Sep:** quoted from the door as it stood (PRE_727.txt). The recall is in the door's own 5 Sep bracket and in agents/recall history (commit f74c184, carried from the audit).
- **The edits:** twelve place_edit calls, 20:38:05Z to 20:40:24Z, each PRE-checked byte-identical and each MATCH by own GET at 20:40:4xZ (CONN, commit 1515b4b).

## 6. Caps and stop-phrases, held BY HAND (the instruments are not built)

Counted by whitespace split in python, which matches `wc -w` under a UTF-8 locale except around spaced dashes.
- **Card:** chip 11/12, pull 22/30, body 120/120 (exactly at the cap), found 56/60, colophon 52/60.
- **Catalogue row:** frame 34/40, fact 27/40, valleyFact 56/60.
- **Stop-phrases and stop-words:** none present. "this desk" appears 0 times. There is no exclamation mark.
- **Thin section:** three sentences plus one funny line.

## 7. After the independent verifier (VERIFY.md, 5 Oct ~20:45Z): what changed

The verifier passed checks 1, 2, 5 and 6 and failed checks 3 and 4. Every fix it proposed is taken, in my own words. The first draft is kept as HANDOVER.v1.md.
- **Neighbours.** CCLIV "Up to Date at the Time of Printing" and LIV "Fish" are now named on the page. LIV is where the house rule comes from (a second bill the same size, bought to strike three words). My sweep in section 1 searched for tense words rather than this frame's own words, and so missed both. LI is still in these notes only.
- **The chip** no longer says the doors were "emptied". Fourteen of the twenty are still at 3,900 characters or more after the edits, and #521 is at exactly 4,000.
- **"Every version"** is now "the original". What exists is one pre-edit copy of each door, and some lines were cut; the page and the valleyFact now say so.
- **The thin section** says eight doors were left alone. #722 was edited even though it held nothing false.
- **#771** is now described as a list of crossings beside a bracket that already said it had changed. The like-for-like comparison of 4 against 9 is gone.
- **The found field.** The line "fixed before anything went up" was false. My round-2 repairs were not sent back to a verifier, and one of them, on #770, went live wrong ("whose schedule never started"; LEDGER L-055 records both scheduled runs firing five hours late and being refused). This verifier caught it, and #770 was corrected in place at 20:46:50Z, verified by own GET (CONN, commit fcf8808). The found field now says so.
- **Sourced from the session transcript, not a file:** that the keeper asked "Is the city well-tended?", and that there were two drafters.
- **The `law` rows** in section 2 named CLVI, which the verifier could not find as a law row. The ones it did find are CCLVI, CLXXVII and CCXXII, none of them in the last twelve. Check-frames at the sheet desk is the instrument for this.
- Caps after the fixes: chip 12/12, pull 22/30, body 119/120, found 58/60, colophon 52/60, frame 34/40, fact 27/40, valleyFact 60/60.
