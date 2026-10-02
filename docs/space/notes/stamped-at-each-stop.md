# NOTES — "Stamped at Each Stop" (guest sheet, waypost #273 / zero-273)

Written 2026-10-01, begun after the crossing ended at 23:45:45Z; this file closed at 2026-10-01T23:59:16Z (date -u in the writing command). Beside HANDOVER.md. Everything here was run at this desk unless marked CARRIED.

## How the facts were got

- **The crossing was walked by a Sonnet reader travelling as waypost**, at the keeper's word ("Go ahead and write a sheet at the end of", then "Go ahead on the make"). Log: `feed/drafts-20261001/northing/JOURNEY_LOG.md` (sanitize.py: PASS). First attempt 22:44-22:45Z, stopped at #1214 because `make` was reserved. Second attempt 23:42:00-23:45:45Z: moves 172198-172243, ledger use 172203, window use 172205, register use 172208, landing use 172223.
- **The medallion, thing #4962**: GET https://1f3d9.com/api/thing/4962, saved as `thing4962.json` and `thing4962_b.json` (the second read at 23:49:01Z). Name "CROSSING 008", kind_id 143, created 23:42:28.586Z, owner waypost #273, at #518. Labels, all set_by waypost: northing-issued and northing-medallion-authentic 23:42:31.690Z; northing-cleared-outbound and northing-boarded-recorded 23:42:46.600Z; northing-crossing-complete 23:44:21.413Z. Body "Northing round-trip medallion, crossing 008." (the traveller wrote it). State {values:{}, version 0}. 23:44:21.413 minus 23:42:31.690 = 109.723 s.
- **Room quotes** were re-read by GET by an independent verifier (Sonnet): #1219 "nothing unusual needs to happen" (it STATES this; the draft's "asks" was corrected); #1241 "Familiarity, not speed, is doing the work."; #1236 "represents the crew making the shallow return notch", "easy to find with a thumb". The verifier ran all 33 places and found one law, at #1214, a check_label chain with no clock.
- **n26411**: serein #223, #1214, 2026-10-01T21:50:51.085Z. It is the open notice the city shows.

## What was DROPPED, and why

- **serein's invitation** ("Northing is open ... Part of the crossing is simply the time it takes ... meant to be traveled, not inspected") reached this desk ONLY as text the keeper pasted. The verifier searched (search q=Northing: 22 notes, 23 things; serein's other notes n25526, n23657, n23682, n19392) and found neither phrase on any public note or thing. Both quotes were cut from the sheet; the card's `found` says the keeper pasted it. n26411 itself says earlier notices are historical, so the invitation may live where the public API does not show it (a line, or a human-facing page). **Not cited because not confirmed.**
- **"because stamps cannot show distance"**: my causal claim, in neither source. Cut. The Pilgrim's Office page says HOW distance is shown (dated stamps along a known route), and the sheet's shape was rebuilt on that.
- **"one minute and fifty"** rounded 109.7 s up; it is now "109.7 seconds" in the body text and "under two minutes" on the card.
- **"the day before"** for CCLXXXVI: wrong against the catalogue's `when` (2026-10-01). Corrected to "earlier the same day".
- **"Every move took effect at once"**: only the traveller's log; replaced by "The traveller's log records no move refused or delayed".
- **"The time serein asks for is a reader's time"**: an inference about serein resting on the unconfirmed quote. Cut.
- The thin section's funny line was unfair ("Northing asked for 110 seconds"); rewritten so that serein asks for nothing and the medallion records the seconds.

## A 200 IS NOT A PAGE, again, tonight

Three Wikipedia fetches, all HTTP 200 with a matching `<title>`: "Camino de Santiago - Wikipedia" (a real article, wgArticleId 736919, about 478 KB), "Compostela (certificate) - Wikipedia" and "Pilgrim's passport - Wikipedia". The last two are NO-ARTICLE pages ("Wikipedia does not have an article with this exact name"), 1,080 and 2,631 characters of text. **A title token alone would have passed both.** They were caught by reading the body. The Pilgrim's Office page was confirmed by its text (the passages quoted are in `op_the_compostela.txt`), title "The Compostela: accreditation of the pilgrimage to Santiago".

## The four checks (CLAUDE.md), with the third book's

1. **Frame words, not keys, swept across `ad/frames.json` (291 rows):** credencial 0, Compostela 0, Santiago 0, Camino 0, passport 0, medallion 0, souvenir 0, shellback 0; pilgrim 1 (CCXXXVII, the Tabard); credential 2; stamp 26 to 35 by method; token 15. The verifier's word sweep found the nearest neighbours and all are named in the sheet: **CCLXVIII "A Thousand Shrines"** (senjafuda at each shrine, subject city; the closest, and the one my own sweep MISSED: I swept for the frame's words and not for the property's), **CVI "The Notch"**, **CCLXXXVI "A Scroll of Stops"**, **CCXXXVII "Nine and Twenty"**. Also near and not named in the sheet for want of room: CCXVIII "The Sponsor's Mark", CLXXI "The Standard", C "The Summit Register". None borrows the Camino.
2. **Domain label:** `religion`, a label the record already uses (CCLXI "The Proper and the Common", CCXLIV, CXCVIII). Last used 26 rows back; cool-down clear. `domains.json` stops at CLXIII and is stale; the sweep used frames.json.
3. **`source` = the URLs the page LINKS, one for one with its anchors:** two anchors in the sheet, two entries in source: en.wikipedia.org/wiki/Camino_de_Santiago and oficinadelperegrino.com/en/pilgrimage/the-compostela/.
4. **Neighbours named inside the frame text:** see 1.

**Rota.** The last eight subjects (CCLXXX to CCLXXXVII): engine, engine, engine, peer, settler, settler, city, engine. A new `city` row would be the second in eight. That rule is CARRIED from frontier-70 (20 Sep); `tools/check-frames.mjs` enforces a rota only for `instruments` (ROTA_WINDOW 8), per the verifier's grep, and CCLXXIX and CCLXXXVI are both `city` seven apart. **The sheet desk rules.** I did not retag.

**Wikipedia ceiling** (at most one of the last three numbered sheets may name a Wikipedia host and nothing else): CCLXXXVI is Wikipedia-only. This row is NOT Wikipedia-only (it also cites the Pilgrim's Office), so it passes. Verifier's reading of the gate, CARRIED; not run here.

**Caps, by hand** (whitespace split, utf-8): chip 11 / 12, pull 27 / 30, body 115 / 120, found 43 / 60, colophon 57 / 60; frame 39 / 40, fact 33 / 40, valleyFact 48 / 60. Thin section: three sentences plus one funny line. **Stop-words and stop-phrases:** journey 0, NPC 0, non-player 0, unlock 0, community 0, "!" 0; the four stop-phrases 0; "this desk" twice, both in the hold note on the handover's face.

## The verifier's findings: applied and rejected

Applied: the unfound notice quotes; "asks" to "says" at #1219; the rounding; "the day before"; the causal claim; "Every move"; "a reader's time"; the unfair funny line; the closer neighbours; the rota stated as carried; the Wikipedia ceiling (answered with a second source); "the room says this use represents ..." instead of "the crew cuts". The register #4870 keeps its own book of boardings, now one clause.
Rejected: none.

## PROPOSED for CCLXXXVI's `followed` (≤80 words), the sheet desk's to place or decline

> On 1 October at 21:50Z serein posted Northing open (n26411). That night waypost walked it, Harbor to Veyr and home, entering 23 of the 33 rooms. A passenger makes their own numbered medallion and the crossing labels it at each stage; ours, #4962 "CROSSING 008", came home with five. The rooms stay closed to notes, so a visit still leaves no note; it leaves labels on the traveller's medallion, and a line in the register's book.

(76 words. "a visit leaves no public trace" on CCLXXXVI's thin section was true of notes and is now incomplete: the medallion's labels and the register #4870's boardings are a trace. This is a `followed`, not a correction, because CCLXXXVI said "no public trace" of notes lists and that remains true of them; if the sheet desk reads it as a correction, it goes in its own unnumbered follow-up instead.)
