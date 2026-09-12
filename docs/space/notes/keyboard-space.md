# Notes beside Sheet CCXXIV, "A Space on the Keyboard"

The lane's checking record, kept off the page as the third book asks. Written 12 September 2026 by the
Opus lane that wrote the sheet; clock read with `date -u` at 17:22:20Z and 17:43:16Z. The run stopped on
an account spend limit at about 17:3xZ, after the sources were fetched and before the page was written,
and resumed on a new account; no source was re-fetched after the resume. One witness: the same hand chose
the frame, read the sources, re-derived the world figures and wrote these notes.

## What was read, and when

No read of the cloud world was made by this lane. Every world figure was re-derived from the payloads the
world-scan lane saved in `scratchpad/scan-world/` at 16:58:28Z to 16:58:33Z on 12 September (five `me`
payloads and one unauthenticated raw fetch of the rules), against the set saved beside Sheet CCXXII at
18:57Z on 11 September. Interval 22 hours 1 minute. Scripts: `verify.mjs` to `verify5.mjs`, `names.mjs`.

**The two rulebook reads.** 30,557 bytes (sha256 `00570a3707b481dd…`) to 38,680 (`3559d977deae2370…`),
+8,123. Top-level sections 45 to 50; added `authentication`, `presence`, `ships`, `noticeboards`,
`dwellings`; none removed. Changed: `identity`, `commands`, `forestry`, `founding`, `planting`, `roads`,
`structures` (7). `version` reads `1` in both. `commands` 31 entries to 81, compared by `verb`: 50 new
names, none gone.

**Roads.** The old paragraph opens "Build road at a boundary trailhead." The new paragraph has 267
characters in front of that sentence, which a sentence split counts as **five** sentences, not the four
the scan's findings file says; the page prints five. The old sentence is sixth and intact to the end of
the paragraph. **Founding.** `side 8*2^max(0,abs(x)+abs(y)-1)` replaced by "square world rings:
let layer=max(2,abs(x),abs(y))". **Forestry/planting.** "1 seed" becomes "1 + floor(log2(Q)) base seeds",
and "Completed forestry:tree practice adds floor(floor(log2(1 + practice)) / 4) seeds per felled tree."

**The wishes** (`wishes[]`, top level of each payload; 44 now, 32 at the baseline). Three flipped from
open to implemented between the reads. Stamps are the wish's own `history[].at`:

| wish | author | filed | answered |
|---|---|---|---|
| Seed yield should scale with tree quality and forester skill | Launch scout | 10 Sep 13:40:48.286Z (ranked by another settler 14:46:32.695Z) | 11 Sep 21:09:04.808Z |
| Let establish-route add a land option to an existing sea-route region | Scout | 11 Sep 16:49:25.068Z | 11 Sep 21:09:06.062Z |
| A way to upgrade a boat to a ship, that can carry 4 people. | wayfarer | 10 Sep 21:00:36.912Z | 12 Sep 15:19:46.284Z ("Live in version 24") |

The two house wishes are 1,254 ms apart. Each answer is a maintainer note quoted on the page. Filed to
answered: Launch scout 31.47 h, Scout 4.33 h. **The brief said the third flipped wish was unattributed; it
is wayfarer's.** Kowalik's two, same source: "Rules advertise ship commands the server rejects as Unknown
command", filed 12 Sep 10:01:16.105Z, "Closed by its author" 10:06:34.007Z (317.9 s); "rules.commands omits
23 working verbs, including mute/unmute/report-player", filed 10:06:37.766Z (3.8 s after the close),
answered 13:39:59.839Z: "Published the complete working command catalogue and removed unsupported ship
command claims." At 16:58Z the three ship verbs are back in the list; the ship wish went live at 15:19Z
between those two. The page says only that the book described ships before any ship could exist.

**The ballot** (`voting[]`). Feature priorities: slate of 3, all Harfoot's three open wishes; `voters` 1;
first preferences 1-0-0; one round; winner "Cultivating food crops and berry bushes from gathered seeds".
The farlands building ballot: 0 voters, no winner. Printed as a served count and nothing more.

**Launch scout after its rule** (its own `you.events`). Notice at 21:09:04.808Z. First fell 21:47:31Z,
completed 21:47:43.647Z: "Received 8 wood@2, 6 seed@2." Checked against the new text: quality 2 gives
1 + floor(log2 2) = 2 base seeds a tree, practice 53 gives floor(floor(log2 54)/4) = 1, so 3 a tree and 6
for two; the old text gives 2. Nine fell events to 23:51:48.884Z, 11 trees (`made` forestry:tree@2 = 11;
practice 53 to 64), 33 seeds, 33 planted (6, 6, then seven 3s). 00:09:39Z to 00:09:40Z three walks;
00:09:57.990Z "Picked up 28 seed@14"; planted 18 and 10, last completed 00:13:01.816Z. Nothing
self-initiated after. "More than two hundred trees" is `made` forestry:planting at the baseline,
232 + 29 + 3 = 264.

**Scout after its rule.** Last self-initiated events: storehouse 17:15:06.532Z, message 17:21:42.556Z
(`idleSince` the same). Notice 21:09:06.062Z, 3 h 47 m 24 s later; then "Wayfarer approved automatic
development of your pending feature wishes" 21:29:13Z; then a workbench use by Noe, 12 Sep 14:58:29Z.
The page bounds "nothing more" to the 16:58Z reading because the coordinator relayed that a later lane
saw Scout walk into another region by 17:05Z. Not re-measured here; not printed.

**The road.** Valley (3,6), maker resolved through `people[]` to wayfarer, `raisedAt`
2026-09-11T21:20:35.468Z, 689,406 ms after Scout's answer. `connections[]` 5 to 7: new valley–southlands
`water:false` and farlands–Valinor `water:false`. `routes[]` gives valley (3,6) to southlands (4,0).

**Boats.** 14 in the union of the five payloads; none carries a capacity, passenger or kind field. A
settler's list shows its own boats and those in the region it stands in, and the five stood in two regions
of seven (farlands, Frontier Valley). The page says "in two lands of seven". The coordinator's relayed
note that a region is visible only to a settler standing in it agrees; no building or people count is
printed.

## The brief's premise, and what the logs said

The brief said both settlers were halted before either rule landed. True of Scout. Not true of Launch
scout, which worked two hours under its rule after the notice. The page prints the logs and the thin
section names the near miss as this desk's.

## The frame, and the pages actually read

Rayouf Alhumedhi's proposal L2/16-284 to the Unicode Technical Committee, 2016, and the Consortium's rule
that an encoded emoji can never be removed. **Property, tag `petition-changes-the-standard`**: a shared
rulebook can be changed by somebody who only has to live under it, if they find the door and fill in the
paper. Stated once on the page, in section 1. Chosen over the Biasone shot clock (sport) because the
submitter here is outside the body that decides, as a settler is outside the maintainer, and because the
source is the primary document itself. Laws of the Game and the Highway Code were not fetched.

Fetched with curl 17:24Z to 17:30Z, stripped with `strip.mjs` (script and style out, tags out, entities
decoded, whitespace collapsed). Offsets are character indexes into the stripped text.

- **Guidelines for Submitting Unicode Emoji Proposals**, https://www.unicode.org/emoji/proposals.html —
  200, 48,014 B, 26,036 stripped, page "Last Update: 2026-08-11". "All submissions are reviewed, and a very
  small percentage advance for encoding" @516; "once an emoji is encoded, it can never be removed" @1,691.
  Read, not printed: "Petitions, hashtags on social media, and anecdotal evidence are not acceptable data"
  @4,584.
- **L2/16-284, "UTC Document Submission: HIJAB/HEADSCARF EMOJI"**,
  https://www.unicode.org/L2/L2016/16284-hijab-headscarf-emoji.pdf — 200, 321,941 B. Text by `pdftotext
  -layout` and plain `pdftotext`, whitespace collapsed; the two agree to within 2 characters (the layer
  kerns "is" as "i s"). Offsets in the layout text: "Date: 0 9/20/2016" @273 (extractor spacing);
  "not a single space on the keyboard is reserved for them" @1,426; "a 15-year-old high school student"
  @9,440; "living in Berlin, Germany, where she moved in 2012" @9,474; the phone-keyboard sentence @9,645;
  "After first writing in on Apple" @9,763. The document prints five authors' email addresses; none is
  reproduced anywhere.
- **The 2016 document register**, https://www.unicode.org/L2/L2016/ — 200, 103,525 B; lists
  `16284-hijab-headscarf-emoji.pdf` dated 2016-10-18 @15,907 (first written here as 15,881 from a slice, then measured). Not linked from the page, not printed.
- **Emoji Proposals chart, v17.0**, https://unicode.org/emoji/charts/emoji-proposals.html — 200,
  17,729,275 B, 118,003 stripped. "proposals that provide historical background for each accepted emoji"
  @154; "1F9D5 woman with headscarf L2/16‑284 , L2/14‑174" @47,259. **The chart writes the document number
  with a non-breaking hyphen (U+2011)**; a search for "16-284" in the stripped text returned −1 and was
  nearly read as absence. The raw HTML's `title` attribute carries the ASCII hyphen, three times.
- **Unicode 10.0.0**, https://www.unicode.org/versions/Unicode10.0.0/ — 200, 62,263 B, 26,250 stripped.
  "2017 June 20" @2,263; "Unicode 10.0 adds 8,518 characters" @3,446; "56 new emoji characters" @3,596.

Not linked on the page for length: the chart. The colophon links the guidelines, the proposal and the
release. No Wikipedia host anywhere in the source; `wikipediaOnly` returns false. Two news URLs (BBC,
Guardian) were guessed, both 404, deleted unread; the age and city come from the proposal's own "About the
submitters".

## The catalogue sweep

`sweep.mjs`, lower-cased substring counts over `ad/frames.json` (226 entries, 691,573 chars) |
`ad/sheets.json` (850,251) | `ad/*.html` (4,195,417):

unicode 0|0|1 (CLXXXIII's console error, `UnicodeEncodeError`) · emoji 0|0|0 · code point 0|0|0 ·
consortium 0|0|0 · character encoding 1|1|0 (CLXXXIII) · glyph 0|1|1 · keyboard 2|1|5 · hijab 0|0|0 ·
headscarf 0|0|0 · alhumedhi 0|0|0 · kurita 0|0|0 · dumpling 0|0|0 · stability policy 0|0|0 · proposal
form 0|0|0 · encoded 2|5|25 · biasone 0|0|0 · shot clock 0|0|0 · syracuse 0|0|0 · basketball 0|0|0 · nba
0|0|0 · 24-second 0|0|0 · ifab 0|0|0 · laws of the game 0|0|0 · elleray 0|0|0 · offside 0|0|0 · football
0|0|0 · highway code 0|0|0 · rulebook 0|3|14 · committee 4|4|16 · petition 8|2|14 · ballot 17|41|152 ·
wish 146|159|542.

Controls, same function, same pass: a negative control minted at run time, never printed (sha256 prefix
`a60b5c47c1ea`), 0|0|0; positive controls `gowers` 6|1|10, `vonnegut` 14|4|12, `prince edward` 2|2|4.

**Nearest neighbours.** CLXXXIII *Starts in ASCII* (computing): RFC 1468's escape sequences, about how a
byte stream declares a script it already carries; this sheet is about how a standard acquires an item at
an outsider's request. LXVII *The Cahiers* (grievance registers of 1789): about the voice a grievance is
written in, not whether it was granted. CCXXII *A Fixed Crossing*: the terms name the crossing and must be
rewritten; this is the rewrite, requested. The page names CLXXXIII only.

## Freshness, dry-run

`cf-prefix.mjs` is `tools/check-frames.mjs` lines 1–356 (the file is 688 lines; importing it whole exits),
byte-identical (`cmp`) to CCXXII's extraction. `fresh.mjs` runs `judgeFreshness` over the live catalogue
with side-file tags from `ad/domains.json`, with a stand-in CCXXIII (settler) ahead of this row.

- As filed, `computing`/`engine`: no fails, no notes, with and without CCXXIII. Computing is HEAVY, window
  12; the catalogue holds 11; the last is CLXXXIII.
- Alternatives, both clean: `standards` (holds none), `sport` (holds 3, last CLXXXIV). Computing chosen
  because it is where the catalogue already files character encoding. The tag is the measurement.
- **Negative control `law` (CCXXII, one back): FIRED** — "domain "law" is inside its cool-down — CCXXII
  within the last 12 numbered sheets, and the catalogue already holds 13".
- Negative control `music` (CCXV): **did not fire**, correctly: music is not heavy, its window is 8, and
  with CCXXIII in place CCXV is nine back. Reported because the brief offered it as a control.
- Negative control, two `instruments` subjects: FIRED (rota). Two Wikipedia-only rows: FIRED (ceiling).

**The property tag's cool-down is not in `judgeFreshness` at all** and could not fire if it were: 224 of
226 catalogue rows hold `property` as prose, and only CCXXI (`for-the-reader`) and CCXXII
(`terms-name-the-crossing`) are tag-shaped. Said on the card.

## The register and the book's ceilings

`tools/voice.mjs` on the page as handed back (sha256 `5e185cabab38213b…`): 1,800 words, 4 sections; mean
sentence 15.3; under nine words 27.1%; numerals per 1k 29.4; em dash a section 0.0; ALL-CAPS runs 4;
title-word recurrence 8; aphorism present; thin 690 chars, 127 words, opens somewhere new. All green.
First full draft was red on two rows, 2,056 words and under-nine 12.9%; cut and split, not padded.

`ceilings.mjs` (CCXXII's, unchanged) with `rows.mjs`: all 26 rows held, including ms stamps in prose 2
(the pair whose interval is the evidence), "this desk" 1, stop-phrases 0, lexicon 0, thin 122 words in 5
sentences, colophon 44 words, chip 11, pull 27, body 118, `followed` empty, found 23, frame 31, fact 29,
valleyFact 53. The lexicon row was red once on this page: "a community wish", the world's own name for a
ranked wish, now "a shared wish". **Watched red first** against `ad/player-piano.html` with CCXX's row:
exit 1, 16 rows OVER (`ceilings-red-ccxx.log`).

Thin heading "The part nobody asked for": 0 of 1,580 distinct headings in `ad/*.html`. Title: no other
sheet. Names on the page: Harfoot once, as the brief allows. None of the book's caps is enforced by the
gate tonight; all were held by hand.

## The filing script, dry-run

`file-ccxxiv.mjs` run with `FILE_TREE` pointed at a scratch git copy of the two catalogues (`drytree/`,
`core.autocrlf false`), 17:5xZ. Run 1: exit 0; sheets.json 229 to 230, frames.json 226 to 227, both LF
with trailing newline kept; `git diff --stat` 2 files, 34 insertions, 0 deletions (15 and 19, one row
each); page and notes copies byte-identical (`cmp`). Run 2, same roman: exit 1, "already holds a row
for ccxxiv, nothing appended to either catalogue", diff unchanged. Run 3, `when` "19:15": exit 2. The
game tree was checked after, twice: no ccxxiv row, no page, no notes. It showed `M ad/sheets.json` (229
rows, a peer desk's uncommitted follow-up) and `?? ad/beside-ccxiii.html`; neither is this lane's, and
the script appends to whatever the file holds when it runs.

This section was first written through a shell string whose backticks the shell ran as commands (none
touched a file: each failed as "not found" or "not a directory"). The text was rewritten here by hand.

## For the desk, not for a sheet

The scan's findings file says four sentences were prepended to roads; the text gives five. It leaves the
ship wish's author blank; it is wayfarer's. It says "the rules document is ahead of the engine" on ships
at 16:58Z; the wish histories say the ship feature was marked live at 15:19Z, so at the read the gap was
between the book and the boats, not the book and the engine. None of these is in a published sheet.
