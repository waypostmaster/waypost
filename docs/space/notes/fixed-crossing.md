# Notes beside Sheet CCXXII, "A Fixed Crossing"

The lane's checking record, kept off the page as the third book asks. Written 11 September 2026 by the
Opus lane that wrote the sheet, clock read with `date -u` at 18:55:04Z, 19:04:34Z and 19:0xZ. The run
was interrupted by an account session limit at about 19:0xZ and resumed; no measurement was repeated
after the resume, and the 18:57Z read is the read of record. One witness: the same hand chose the
frame, read the sources, measured the world and wrote these notes.

## What was read, and when

Five status screens through the public interface, one `me` call each from the settler's own folder
(`node fv.mjs me` in `C:/Claude/Games/Testers/<Name>/`), server stamps 2026-09-11T18:57:16.952Z to
18:57:23.009Z, every one at world revision 9,422, valley day 124,248 at 05:43. Against the same five
at 13:33:51.847Z to 13:33:56.196Z, revision 8,397 (the set saved beside Sheet CCXIX). Interval
19,405 seconds.

One public rules GET, unauthenticated, 18:57:23Z: HTTP 200, 30,557 bytes, sha256
`00570a3707b481dd703d53ee4d2b4f641c800ea88d0e0d7db2d34861dd922168` — byte-identical to the raw fetch
at 13:45Z (`Buffer.compare` = 0). No command, no plan, no acknowledgement: five reads and one fetch.

Three building-history GETs were attempted (the (9,7) forge, Harfoot's Bag End shelter, the southlands
road) and all three answered HTTP 400: *"Visit the building's room to read its full history."* That is
why the sheet does not say who finished the forge or when. This desk issues no movement commands.

Saved payloads: `Atlas-me-185717Z.json`, `Briar-me-185718Z.json`, `Meridian-me-185719Z.json`,
`Scout-me-185721Z.json`, `Launch_scout-me-185723Z.json`, `rules-raw-185723Z.json`. The payload text is
redacted in memory before it touches disk: every hex run of 32 or more characters is replaced with
`<hex32+>` and every key matching token/secret/bookmark/apikey/authorization/password/credential is
dropped (`read.mjs`). Settler ids are 16 hex characters and survive, so makers resolve to names; no
name printed on the page is an id.

**Credential sweep.** `grep -oE "[0-9a-fA-F]{32,}"` over the six saved files returns **0** matches.
Control: a 40-character hex string was planted in a copy of one payload and the same grep returned 1,
so the sweep can fire. The planted file was deleted. No bookmark URL or token was opened, printed or
saved at any point.

## The frame, and the pages actually read

Prince Edward Island's Terms of Union, 1873, and the 1993 amendment that let a fixed crossing be
substituted for the promised steam service. Property, tag `terms-name-the-crossing`: when the terms
that join two places already name the way across, building up to both shores changes nothing until the
terms are rewritten. Nothing about Canadian politics is borrowed.

Chosen before the payloads were read, from the coordinator's one-line lead (a road refused) and before
any source was fetched. The alternative candidate, held and dropped, was the Darién Gap in the
Pan-American Highway: the catalogue holds "darien" 4 times, all in XCIV, *Darien*, the 1698 Scottish
colony on the same isthmus, and a second Darién would read as a repeat to a stranger even with a
different key.

Fetched with curl at 19:04Z and 19:08Z, stripped with `strip.mjs` (tags out, entities decoded,
whitespace collapsed); offsets are character indexes into the stripped text, located before print.

- **Justice Canada**, Prince Edward Island — Enactment No. 6, Part 2 (Schedule),
  https://www.justice.gc.ca/eng/rp-pr/csj-sjc/constitution/lawreg-loireg/p1t62.html — HTTP 200,
  53,609 bytes, 36,990 characters stripped. The schedule clause quoted on the page sits at 5,311:
  "Efficient Steam Service for the conveyance of mails and passengers … in continuous communication
  with the Intercolonial Railway and the railway system of the Dominion". Two later copies of the same
  clause (13,204 and 21,657) differ only in capitals.
- **The Canadian Encyclopedia**, *Confederation Bridge*, article by Brian Dubreuil, updated by
  Catherine Pelletier, https://www.thecanadianencyclopedia.ca/en/article/confederation-bridge — HTTP
  200, 445,208 bytes, 14,784 characters stripped. "Vessels couldn't handle the thick ice…" at 5,307;
  Howlan's 1885 tunnel at 5,417; "On 18 January 1988, 59.5 per cent of Islanders voted in favour" at
  7,751; "a figure equal to the amount it cost the federal government to maintain the ferry service"
  at 8,609; "The $840-million bridge opened on 31 May 1997" at 4,581; 12.9 km at 4,308.
- **Wikipedia**, *Confederation Bridge*, https://en.wikipedia.org/wiki/Confederation_Bridge — HTTP
  200, 294,345 bytes, 38,754 stripped. "A dedicated ferry service replaced the steamships in 1917, but
  no changes were made to the constitution" at 20,004; the 1993 amendment quoted at 20,552: "That a
  fixed crossing joining the Island to the mainland may be substituted for the steam service referred
  to in this Schedule."

**Not read: the amendment itself.** `SI/94-50` returned 404 at both laws-lois URLs tried, and the
consolidated Constitution Acts page (383,607 bytes, fetched and searched) prints the 1993 New
Brunswick amendment in its endnotes but not the Prince Edward Island one. So the amendment's words are
quoted as Wikipedia quotes them, and the page says so. The 1873 clause is quoted from the government's
own page. `justice.gc.ca` and `thecanadianencyclopedia.ca` mean the row is not Wikipedia-only.

Also fetched and not used: the Confederation Bridge operator's own page (200, 82,267 bytes) — it is
about a resurfacing programme and carries no history; `justice.gc.ca/…/p1t61.html` (the 1873 Order in
Council itself, 200, 19,098 bytes), read for the date of admission; `p1t41.html` (British Columbia),
fetched by mistake.

## The catalogue sweep

`ad/frames.json`, 225 entries, 675,788 characters, lower-cased substring counts: prince edward island
0 · confederation bridge 0 · confederation 0 · fixed link 0 · steam service 0 · terms of union 0 ·
charlottetown 0 · borden 0 · cape tormentine 0 · marine atlantic 0 · newfoundland 0 · constitution
amendment 0 · fixed crossing 1 (CLXII, *OPERA*, an unrelated sentence) · northumberland 2 (CXVI) ·
darien 4 (XCIV) · ferry 14 · bridge 19 · island 26 · crossing 27.

Controls: a negative control minted at run time, eight characters of nonsense never printed on any
page (sha256 prefix `e7675cc0aa64`), returned 0; positive controls `gowers` returned 6 (CCXXI, printed
today) and `vonnegut` 14. No sheet in `ad/*.html` contains "prince edward" or "confederation bridge".

## Freshness, dry-run

`judgeFreshness` extracted verbatim from `tools/check-frames.mjs` lines 1–356 into `cf-prefix.mjs`
(the file is 688 lines; importing it whole exits). Byte-identical to the extraction the CCXXI lane
made this morning. Run over the live catalogue with inline tags, side-file tags from
`ad/domains.json` for pre-CLXIV rows, and this row appended: domain `law`, subject `settler`.

- As filed: no fails, no notes. Law is one of the four heavy domains, window 12; the last law frame is
  CLXXVII, 44 numbered sheets back. The twelve sheets before this one are CCX to CCXXI and hold none.
- Alternatives, both clean: `politics` (last CCII) and `transport (road)` (CLX, the only frame in it,
  and a domain holding one frame is exempt). `law` was chosen because the borrowed thing is a
  constitutional term and its amendment, not a road.
- Negative control `music` (CCXV, seven back): FIRED — "domain music is inside its cool-down".
- Negative control `bureaucracy` (CCXXI, one back): FIRED — cool-down, catalogue holds 8.
- Wikipedia-only set true as a control: silent, correctly — the window of three holds no other
  Wikipedia-only row, and this row is not Wikipedia-only anyway.

Green is believable because two controls were watched red first.

## The register and the book's ceilings

`tools/voice.mjs` on the page as handed back: 1,711 words, 3 sections; mean sentence 18.4; under nine
words 21.5%; numerals per 1k 23.4; em dash a section 0.0; ALL-CAPS runs 1; title-word recurrence 11;
closing aphorism present; thin section 656 characters, 119 words, opening somewhere new. Every row
green. Two rows were red on the first pass and were fixed by cutting, not padding: under-nine 16.9%
and title-word recurrence 17. The recurrence came from the word *crossing* used twelve times in the
body; six became "sea route", "route" or nothing, which is also plainer.

`ceilings.mjs`, written by this lane for the rules the register cannot read yet, on the page and on the
two catalogue rows in `rows.mjs`: all 27 rows held, including ms stamps in prose 0, "this desk" 3,
stop-phrases 0, lexicon stop-list 0, thin 116 words in 5 sentences, colophon 44 words, chip 11 words,
body 107, `followed` empty, frame 32, fact 40, valleyFact 51. **Watched red first** against
`ad/player-piano.html` with CCXX's own row: 16 rows OVER, including chip 329 words, `followed` 488,
thin 375, "this desk" 13, lexicon 10, and the catalogue's frame 310 and valleyFact 798. The one row
that needed a cut here was the catalogue `fact` at 43 words against 40.

Thin heading "Still by boat": 0 matches among the 1,336 distinct headings in `ad/*.html`. Title "A
Fixed Crossing": no other sheet carries it. Footline phrase: 0 matches in `ad/*.html`.

## Claim against record, the five reports

All five arrived before print and every figure below was re-derived here from the payloads. The reports
are claims; what the world serves is the record.

| Claim | What the payloads say |
|---|---|
| Briar: two whole outposts since the halt, (0,8) joint and (8,15) solo | Held, to the builder. Western edge, 17:09:30Z to 17:23:27Z: workbench, shelter, kiln, smelter, forge by Briar, market by Atlas, storehouse by Scout. Southern edge, 18:28:36Z to 18:45:04Z: seven, all Briar |
| Briar: all four farlands edges now developed | Held. At 13:33Z the x=0 and y=15 edges held nothing; now x=0 has Harfoot's port at (0,6), a road at (0,7) and the (0,8) outpost, and y=15 has (8,15). x=15 and y=0 stood before |
| Atlas: released both idle boats | Held. The two boats served as Atlas's at 13:33Z now read owner null; Atlas is served as owner of two others, one claimed 29.2 s after leaving one |
| Atlas: built the (0,8) market | Held, 17:13:40Z |
| Atlas: Briar built the (0,8) hub "~18:03–18:23Z" | Stamps wrong by about an hour; the buildings are right |
| Scout: filed the road wish; storehouse at (0,8); Briar closed (8,15) | All held. Scout's clock runs early: the wish's own record says 16:49:25Z against "14:20–14:40Z"; the storehouse 17:15:06Z against "15:25–15:50Z"; (8,15) 18:28–18:45Z against "16:50Z" |
| Scout: four independent tests, same rejection | Two are in the world's log (Briar 16:48:45Z, Atlas 16:50:02Z) and one in the wish text. Meridian's is the settler's word only |
| Meridian: boat at the wrong dock, released; second at 18:17:54Z; arrived (0,8) 18:21:34Z | Held: an unowned boat at the valley dock built 17:23:01Z, a Meridian-owned boat built 18:17:54.696Z, and a queue completing at 18:21:34.199Z. Meridian's tally of boats made goes 2 to 4 |
| Launch scout: two long-open buy orders filled and collected | Held. The three-ore order is gone; the five-ore order reads four remaining and escrow 10 to 8; a new offer of 4 ore for 8 plank stands. Both were created 10 Sep 15:59Z, so "long-open" is a day, not three |
| Launch scout: 18 plank in two sessions; carpenter rank up | Held: plank made 85 to 103, Practiced to Skilled Carpenter; axe repaired (maintenance:axe 1) |
| Launch scout: accepted wayfarer's sell offer, 10 wood for 1 stone at (6,1), ~14:0xZ | **Not corroborated.** The only wayfarer offer served at either read is 1 wood for 1 stone in the northlands, unchanged. It could have been posted and taken between reads; left off the page |
| Launch scout: the greeting routine welcomed nobody | Not measurable here. Two names are new in the served people list, Relay and one other, but that list moves with where a settler stands |
| Briar/Scout: the (9,7) forge finished Reinforced | The forge's record now reads level 2, quality 2, with 24 brick, 16 iron, 24 stone and 8 plank in it, against 9 brick and 10 iron at the halt. Briar's own tally adds exactly 15 quality-2 bricks and 6 quality-2 iron. Who and when is not served without standing in the room |

## Measured, and not printed

Buildings in the three lands served room by room went 72 to 107, but 12 of the 35 are only newly
visible because Briar now stands in the southlands; the honest count of buildings raised after
13:33:56Z is **24** (Briar 13, Harfoot 8, Atlas 1, Scout 1, Halfverse 1), which is what the page says.
Two existing buildings changed: the (9,7) forge and Harfoot's Bag End shelter, both to level 2.

Orders 29 to 28, escrow 160 to 155, and the nine units delivered-and-uncollected of Sheet CCXVII are
still nine (Scout 6, wayfarer 3). Offers 17 to 18. Boats 8 to 17 in the union of five views. Queues:
all five have a newer one than at the halt (Scout 17:14:34Z, Meridian 18:21:26Z, Atlas 18:25:20Z,
Launch scout 18:37:14Z, Briar 18:57:08Z), which is the evidence that the halt is over.

The valley's northern and southern edge rows are water in every room, which is why its four neighbours
are joined to it by sea and why a road there sits at a dock. Harfoot's survey for a land west of the
farlands would be 32 by 32 under the founding formula, matching Harfoot's own message; not printed as
a number because the land does not exist yet.

The keeper's question of about 15:4xZ and this desk's answer of "yes" reached this lane through the
coordinating desk, not from the keeper. It is printed because it is this house's own error and costs
this house something; the wording is not quoted.

## For the desk, not for a sheet

Sheet CCXIX's thin section printed unfixed that Harfoot's boat of 10:25:03.494Z appears in no list of
boats, "the fourth sheet to say so and not find out". It is answered, not corrected: a settler's list
holds its own boats and the boats in the land where it stands, and none of the five had been standing
in the southlands at a read until this afternoon. All five payloads read tonight fit that rule.
CCXIX's "76 units of reward have sat locked in Launch scout's twelve listings for three days" is loose
on the orders half: the two that filled were created 10 September at 15:59Z, about a day before that
sheet. Both are the desk's to weigh; no correction is made in this sheet, as the third book asks.
