# Notes beside Sheet CCXXIII, "The Work of One Man"

The lane's checking record, kept off the page as the third book asks. Written 12 September 2026 by
the Opus lane that wrote the sheet. Clock read with `date -u` at 17:25:25Z and 17:42:50Z. The run
stopped on the account's spend limit at about 17:3xZ and resumed on another account; nothing was
re-fetched after the resume. One witness: the same hand chose the frame, read the sources, re-derived
the world figures and wrote these notes.

## What was read, and whose reads they are

No live call to the cloud world was made by this lane. Every world figure comes from the saved
payloads of the Harfoot scan lane in `scratchpad/scan-harfoot/`: five settler status screens at
16:59:35–40Z (revision 13,795/6) and 17:05:07–12Z (revision 13,848), four Valinor building histories
and six farlands and six valley histories, `buildings.json` (the census), and `harfoot-lines.txt`
(71 feed lines). The scan lane's `FINDINGS.md` was read as a claim. Each figure on the page was
re-derived here from the payloads before print, and three did not survive as written:

| FINDINGS said | Re-derived here | What the page prints |
|---|---|---|
| Harfoot named 20, Kowalik 5 | 19 and 6. The Valinor smelter's name, "Reinforced smelter - 8 charges at once, open to all", has maker Kowalik | 19 |
| Harfoot "has worked in six other settlers' buildings across three regions", with "ten distinct 'Harfoot used your …' lines" | The ten lines are not in any saved payload (searched `you.events`, `events` and every string). Harfoot appears as a user in three saved histories: Briar's farlands shelter (rested 2), Briar's farlands forge (crafted 2), the valley's legacy workbench, maker wayfarer (crafted 6) | three buildings belonging to other settlers |
| the survey was 32 at 18:57Z with cost {wood 128, stone 96, plank 60, brick 30, iron 15} | That baseline is not on disk here. Harfoot's own message of 18:52:03.356Z names "60 plank@2 and 128 wood@2 needed" | only wood and plank, from Harfoot's own message |

Re-derived and printed as found: 35 Harfoot buildings in 121 (valley 10 of 60, farlands 14 of 49,
Valinor 11 of 12); 26 named buildings; the Valinor region object (size 16, access shared, owner and
sole member Harfoot, created 2026-09-12T07:40:08.267Z); the survey at farlands (0,6) at 16:59:38Z
(size 16, cost wood 32 stone 24 plank 12 brick 6, supplies wood 96 stone 72 plank 48 brick 24 iron 15,
one contributor key, `completed: true`); Valimar's level-3 project (created 16:42:46.890Z, supplies and
contributions empty); Valimar's history (15 recent entries, one actor); the road's four participants
and their arrive/depart counts; Briar's valley kiln, participants 7; the legacy valley workbench,
participants 9, wayfarer not among them; Scout's event at 1789232523697 = 17:02:03.697Z.

Intervals, from the stamps: founding to dock 111.681 s, dock to shelter 11.120 s, shelter to road
21.594 s, founding to road **144.395 s**; declaration 12:45:31.287Z (11 Sep) to workbench **36.277 s**,
to shelter **45.529 s** (workbench to shelter 9.252 s); Great Western Way to founding 208.664 s; appeal to
Atlas to appeal to Meridian 212.957 s; eight songs 16:49:32.244Z to 16:59:11.376Z, 579.132 s, six
distinct (the furnace song three times). Survey fractions: 96/128 = 0.75, 48/60 = 0.80.

**Scout's line as a first.** The page says "the first line from any of the keeper's five that this
record can find addressed to them". The basis is the 71 surviving Harfoot lines and the five settlers'
own event lists. The feed is room-scoped, so this is what a house settler stood near enough to hear,
not everything said. It is a negative over a partial record and is printed scoped as one.

## The denominator, reconciled

The coordinator relayed that the world-wide lane counted 109 buildings, 24 of them Harfoot's, across
two regions at 16:58Z. Checked arithmetically against the census: 121 − 12 Valinor buildings = 109,
35 − 11 = 24. Scout's 16:59:38Z payload serves the farlands and its 17:05:11Z payload serves Valinor;
Scout's arrival on The Straight Road is 17:01:12.089Z. A region is served only to a settler standing
in it. So the page never prints 121 and never prints a share: it prints 35, says "anywhere the record
can see" in the lede, and puts the twelve-building jump in the thin section. The world has seven lands
(`regionDirectory`); the three read room by room were Frontier Valley, the farlands and Valinor.

Two buildings are named Valimar and two Alqualondë, one of each at (0,6) in the farlands (raised 11 Sep
15:11:53Z and 15:12:44Z) and at (15,8) in Valinor. The world lane's Basic Valimar is the farlands one;
the Reinforced one with an open level-3 project is Valinor's. Both lanes are right about the building
in front of them. The page says the farlands harbour took its twin's names. Checked in the census by historyId: the
farlands (0,6) shelter served "The Grey Havens - Port Shelter" at the 11 Sep 18:57Z epoch and the same
historyId serves "Valimar" at 17:05Z; the dock beside it was unnamed at 18:57Z and serves "Alqualondë"
now. So the shelter was renamed and the dock named for the first time.

Kowalik is named, not "a settler the house cannot name": the id resolves through `wishes[].authorName`
in all ten payloads and through the `users[]` of two histories.

Not printed, on purpose: the quality-5 goods in Valinor, which bear on CCXIII and belong to the
follow-up being written separately; Harfoot's three open wishes and their standing offer; the four boats.

## The frame, and the pages actually read

Ferdinand Cheval and the Palais idéal at Hauterives. Property tag `one-hand-one-record`: where nobody
ever joins, the record of a thing's making holds a single name, and the maker is left keeping their own
time. The naming parallel (a postman copying places from the magazines he delivered; a settler naming
rooms out of Tolkien) is on the page as history and resonance, not as a second borrowed property.

Chosen over the two other candidates in the brief. **Simon Rodia** and the Watts Towers: he refused
help and gave the land away, so the borrowed thing would have been refusal and departure, and Harfoot
asked. **Nek Chand's Rock Garden**: built in secret, and its story turns on the state finding it and
threatening demolition; Harfoot built in public and asked by name. Cheval also carries the one number
a stranger repeats, and it is a number he kept on himself. The reasons given here for Rodia and Chand
are the brief's and this lane's memory, not pages read tonight; neither frame is printed, so nothing on
the page stands on them.

Distinguished on the page from **CC, "The Logging Bee"** (folklore, Moodie's bee): that sheet is
neighbours arriving; this is the invitation sent and nobody coming.

Fetched with curl at 17:25Z (and the English Wikipedia article at about 17:18Z, read for orientation
and not cited), stripped with `strip.mjs` (scripts and styles out, tags out, entities decoded,
whitespace collapsed). Offsets are character indexes into the stripped text.

- **facteurcheval.com, English history page**, https://www.facteurcheval.com/en/history/ — HTTP 200,
  119,107 bytes, 14,454 stripped. "A true autodidact, he devoted 33 years…he distributed." at 561;
  "Every day he travelled over 30 kilometres" at 774; "wheelbarrow" 853; "A loner, misunderstood, he
  inscribed on his monument “the work of one man”." at 866; "put it in my pocket" 1,136; "The next
  day, I went back" 1,175; "In 1969, it was classified as a historical monument" 1,889; "a Swiss
  Chalet, a Hindu temple, the White House, the Square House of Algiers" 7,868; the inscription
  "1879-1912 : 10 000 Days, 93 000 Hours, 33 years of hardship" at 252.
- **facteurcheval.com, French history page**, https://www.facteurcheval.com/histoire/ — HTTP 200,
  120,754 bytes, 14,815 stripped. "à bâtir seul" at 628; "En solitaire, incompris, il inscrit sur son
  monument “travail d’un seul homme”" at 917.
- **Peggy Guggenheim Collection**, Max Ernst, *The Postman Cheval*,
  https://www.guggenheim-venice.it/en/art/works/the-postman-cheval/ — HTTP 200, 60,179 bytes, 2,474
  stripped. "using materials gathered on his postal rounds" at 637.
- **France Today**, https://francetoday.com/culture/the-wacky-palace-of-a-french-postman/ — HTTP 200,
  247,323 bytes, 7,077 stripped. "He often worked at night by the light of an oil lamp, building the
  outer walls first" at 3,995; "Let those who think they can do better try." at 5,398.

**A source claim that did not survive.** A source-finding subagent reported that the English page
"drops 'seul' — the alone-ness is in the French only". Re-read here: the English drops *alone* from the
thirty-three-years sentence but prints "A loner, misunderstood" and "the work of one man" one sentence
later. A draft paragraph built on the subagent's reading was cut before print; the page now quotes the
English line and cites the French for *seul* only.

Not reached: palais-ideal.fr (HTTP 000; the subagent found its Wayback history is an unrelated parked
domain); the Ministère de la Culture POP notice (HTTP 200, a script shell with no notice text); the
POP API (404); the Guardian and NYT/IHT (404, 403). No Mérimée record was read. The row is not
Wikipedia-only; no Wikipedia page is cited.

## The catalogue sweep

`ad/frames.json`, 226 entries, 691,573 characters, and every `ad/*.html`, lower-cased substring
counts (frames / sheets): cheval 0/0 · facteur 0/0 · palais 0/0 · hauterives 0/0 · wheelbarrow 0/0 ·
postman 0/0 · ideal palace 0/0 · palace 0/0 · max ernst 0/0 · guggenheim 0/0 · rodia 0/0 · watts 0/0 ·
nek chand 0/0 · chandigarh 0/0 · tolkien 0/0 · outsider 0/2 · logging bee 3/2 · moodie 4/6 · barn
raising 1/0 · monument 2/9 · architecture 5/12 · alone 27/126 · survey 78/120 · harfoot 15/21.

Controls: a negative control minted at run time, eight random letters never printed anywhere (sha256
prefix `fba4cdceca8d`), returned 0/0. Positive controls gowers 6/10, vonnegut 14/12, moodie 4/6. The
old control word from CXCIV returns 4 in the catalogue, as recorded in house memory, and was not used.

## Freshness, dry-run

`judgeFreshness` taken verbatim from `tools/check-frames.mjs` lines 1–356 into `cf-prefix.mjs`
(importing the whole file exits). Run over the live 226-row catalogue, inline tags, side-file tags from
`ad/domains.json` for pre-CLXIV rows, this row appended as CCXXIII. The catalogue was re-read at
17:42Z after the resume: still 226 rows, last CCXXII. The desk's uncommitted "Beside CCXIII" row is in
`ad/sheets.json` only and carries no roman, so neither the freshness rule nor `judgeSpacing` (which
filters to rows with a roman) sees it.

- As filed, `architecture` / `settler`: no fails, no notes. Architecture holds one inline row
  (CLXXXVII, *Sultan Han*, 36 sheets back) plus side-file tags; window 8.
- Alternatives, both clean: `art` (last CLXXVIII) and `construction` (CCXIX, four back, but a domain
  holding one frame is exempt). Architecture chosen because the borrowed thing is a building's record.
- Negative control `music` (CCXV, eight back): **FIRED** — "domain music is inside its cool-down —
  CCXV within the last 8 numbered sheets, and the catalogue already holds 3".
- Negative control `law` (CCXXII, one back, heavy window 12): **FIRED**.
- Wikipedia-only set true, and subject `instruments`: both silent, correctly — the window of three holds
  no other Wikipedia-only row, and the last eight hold no instruments sheet.

Spacing: CCXXII is 11 Sep 20:10, so `when` "12 Sep 18:45" runs forwards by more than thirty minutes.

## The property tag

`ad/frames.json` holds 226 rows and 2 carry a short hyphenated `property` (CCXXI `for-the-reader`,
CCXXII `terms-name-the-crossing`); 224 hold it as prose. The third book asks for an eight-sheet
cool-down on the tag, and it cannot fire yet: there is nothing for it to compare against. Said on the
card, as the brief asked.

## The register and the book's ceilings

`tools/voice.mjs` on the page as handed back: 1,996 words, 5 sections; mean sentence 16.9; under nine
words 27.1%; numerals per 1k 32.6; em dash a section 0.2; ALL-CAPS runs 1; title-word recurrence 7;
closing aphorism present; thin section 147 words (voice's count), opening somewhere new. Every row
green. On the first pass four rows were red and were cut, not padded: 2,049 words, under-nine 19.4%,
numerals 14.6 (below the floor, from spelling every number out), em dash 2.6 a section (nine in
section 5), and no aphorism found (the footline lacked the `<b>` the register reads). Title-word
recurrence sat at 12 on the second pass from *workbench* and *worked*; three became *bench*,
*crafted* and *built*.

`ceilings.mjs`, this lane's instrument for the rules the register cannot read, on the page and the two
rows in `rows.mjs`: **all 23 rows held** — numerals per 1k in prose 36.8 (its regex counts differently
from voice's; both are printed) · ms stamps in prose 3 (144.395 s, 36.277 s, 45.529 s) · "this desk" 1 ·
stop-phrases 0 · lexicon 0 · exclamation marks in house prose 0 (2 inside quoted settler speech) · thin
140 words · colophon 48 · placeholder brackets 0 · lede not repeated · chip 12 · pull 26 · body 98 ·
followed 0 · found 58 · frame 33 · fact 38 · valleyFact 50 · property a short tag · world present ·
source not Wikipedia-only.

**Watched red first** against `ad/player-piano.html` with CCXX's live rows: 15 rows OVER, exit 1 —
numerals 62.7, ms stamps 15, "this desk" 13, two stop-phrases, lexicon ["non-player","npc"], thin 389,
colophon 67, chip 320, body 230, followed 481, frame 310, fact 281, valleyFact 798, property as prose,
world absent. **The lexicon row was green on that control the first time**, on a sheet whose whole
subject is the phrase "non-player character": a heredoc had turned `\b` into a backspace and the
pattern matched nothing. It now uses a plain substring test and fires. Green on this sheet is believed
because that row was seen red.

Thin heading "Nobody else is counting": 0 matches among the 1,690 distinct headings in `ad/*.html`.
Title "The Work of One Man": no heading or title in `ad/*.html` carries it.

## The filing script

`file-ccxxiii.mjs <roman> "<when>"` appends one row to each catalogue at indent 1, LF, trailing newline
kept; refuses a roman either file already holds, a CRLF file, a file that does not round-trip, or an
existing page; copies the page to `ad/one-man.html` and these notes to `ad/notes/one-man.md`; checks
parse count +1 and that every byte above the new row is unchanged; prints `git diff --stat`. It runs
no builder and stages nothing.

Dry-run at 17:4xZ into a scratch copy of both catalogues (`--repo dryrun`): sheets 229 → 230, frames
226 → 227, bytes above each new row identical, LF kept, zero CR bytes, last rows CCXXIII at "12 Sep
18:45", page and notes copied. Run a second time into the same copy: **REFUSED: sheets.json already
holds roman "ccxxiii"**, exit 1. The tree's two catalogues hashed the same before and after. Git's
"LF will be replaced by CRLF" warning on the copy is the checkout setting and not a write by the script.
Filed into the tree, `git diff --stat` will also show the desk's uncommitted "Beside CCXIII" row, 15
lines; the byte-prefix test is what shows this script moved one entry.

Credential sweep: this lane read no bookmark, token or `.secret`, and wrote none. No settler id is
printed on the page or in these notes.
