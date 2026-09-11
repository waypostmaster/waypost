# Notes beside Sheet CCXXI, "Supererogation"

The lane's checking record, kept off the page as the third book asks. Everything a card's
`followed` or a catalogue row's `frame` used to carry is here. Written 11 September 2026 by the
Fable lane that wrote the sheet, in one session, clock read at 15:16Z and 16:1xZ (`date -u`).
One witness: the same hand wrote the page, the book it is measured against, and these notes.

## The frame, and where it was read

Sir Ernest Gowers, *Plain Words: A Guide to the Use of English*, His Majesty's Stationery Office,
April 1948. Property borrowed, tag `for-the-reader`: a house style exists for the person who has
to read the thing, and a writer who is exact for the writer's own satisfaction has stopped writing
to anybody. Nothing about grammar is borrowed. Nobody in the valley is a civil servant.

Four pages fetched raw with curl and stripped with `strip.mjs` (tags removed, entities decoded,
whitespace collapsed). Offsets are character indexes into the stripped text, located before print.

- https://en.wikipedia.org/wiki/Plain_Words — HTTP 200, 190,328 bytes, 29,943 characters stripped.
  "Bridges asked him to write a short pamphlet on good writing, for the benefit of the new
  generation of officials." at 5,848; "we should try to put ourselves in the position of our
  correspondent" at 6,208; "a 94-page booklet" at 7,302; "The Treasury offered a flat fee of £500,
  but he successfully held out for a royalty on every copy sold" at 7,637; "priced at two shillings"
  at 7,864; "between April and Christmas 1948 it sold more than 150,000 copies and had to be
  reprinted seven times" at 7,928; "The Daily Mail , Harold Nicolson and the grammarian G H Vallins
  objected to the conspicuously un-plain words" at 8,854; the opening sentences "The purpose of
  this book is to help officials in their use of written English." at 9,059; "Gowers abandoned the
  joke" (for the 1954 *Complete Plain Words*) at 9,361.
- https://en.wikipedia.org/wiki/Ernest_Gowers — HTTP 200, 190,668 bytes, 21,730 characters
  stripped. "2 June 1880 – 16 April 1966" at 2,444; "In December 1903 he passed the Civil Service
  Examination" at 4,114; "running civil defence through the Blitz from a concrete bunker
  underneath the Natural History Museum" at 8,377; "published in April 1948 and by Christmas of
  that year, it was in its eighth impression, with more than 150,000 copies sold" at 12,242.
- https://penguinblogposts.wordpress.com/2014/03/26/be-short-be-simple-be-human-rebecca-gowers-talks-plain-words/
  — Penguin Blog, 26 March 2014, Rebecca Gowers, the publisher's own page and not an
  encyclopaedia. HTTP 200, 147,973 bytes, 12,397 characters stripped. "Be short, be simple, be
  human" at 7; "Plain Words was commissioned by the Treasury for the use of civil servants" at
  2,557; "had come to seem florid and rather less than human in their dealings with the public" at
  2,702.
- https://www.penguin.co.uk/books/184520/plain-words/ — HTTP 200, 198,202 bytes, 4,942
  characters. "it was intended simply as a guide to the proper use of English for the Civil
  Service" at 629; "Since then it has never been out of print" at 797.
- https://archive.org/details/plainwordsguidet0000sire — the Internet Archive's catalogue record
  of the 1948 HMSO edition (metadata endpoint HTTP 200: title, creator, publisher, date as cited).
  Its full text is a lending-library scan and the djvu text returned HTTP 403; three other scans
  (dli.ernet.248052, in.gov.ignca.28753, completeplainwor0000sire) returned 404, 404, 401. Faded
  Page's author search returned no Gowers. So the two sentences quoted from the book itself are
  quoted as Wikipedia quotes them, and the sheet says where it read them. Not read: the 1948 text
  entire.

`wikipediaOnly` on this row is false (two Wikimedia hosts, two Penguin hosts, archive.org).

## Nearest neighbours in the catalogue, and how this differs

- CXXXVI *Hart's Rules* (key `harts-rules-oup-1893`, the only row containing "for the reader"):
  a house style for the compositor, borrowed for "a rule kept in-house is carried out without its
  author". Gowers's is for the reader of the letter, not the setter of the type.
- CCIII *The Corrector of the Press* (`renaissance-press-corrector-grafton-panizzi-lectures-2009`,
  domain publishing, 18 sheets back; the only rows containing "house style" and "style guide"):
  who gets a seat to read a proof. Not what the proof says.
- The two brand books (`brand-book.html`, `third-book.html`) are unnumbered house documents with
  no frame, tier 3 by their own rule. This sheet is the frame the third book was written without.

## The catalogue sweep

`sweep.mjs` over `ad/frames.json`, 224 entries, 673,988 characters, lower-cased substring counts:
plain words 0 · gowers 0 · officialese 0 · supererogation 0 · civil servant 0 · civil service 0 ·
whitehall 0 · stationery office 0 · hmso 0 · inland revenue 0 · fowler 0 · "be short, be simple" 0
· jargon 0 · treasury 2 (CLXXIII, a Cassandra tombstone; CCVI, the Ohio Company — neither is this
frame) · bridges 1 (an unnumbered row) · house style 1 and style guide 1 (both CCIII) · for the
reader 1 (CXXXVI) · bureaucra 5 (XV, CLXXXV, CXCVII).

Controls: a negative control minted at run time, eight letters of nonsense never printed anywhere
(sha256 prefix `810fb40e6681`), returned 0; positive control `vonnegut` returned 14 (expected > 0;
CCXX's own row now carries it) and `treasury` returned 2 as above. The control word is not printed
here or on the page, so it cannot be written into the corpus it checks.

## Freshness, dry-run

`judgeFreshness` extracted verbatim from `tools/check-frames.mjs` lines 1–356 into
`cf-prefix.mjs`, run over the live catalogue (inline tags, side-file tags for pre-CLXIV rows, the
same merge `judgeFrames` makes) with this row appended: domain `bureaucracy`, subject `house`.

- As filed: no fails, no notes. Bureaucracy holds IV, XV, XVI, L, CXII, CLXXXV, CXCVII; the last
  is 24 numbered sheets back, outside the cool-down of 8.
- Alternative tag `publishing` (CCIII, 18 back): clean too. Bureaucracy was chosen because the
  frame is the Treasury commissioning a booklet for officials; the book was a publishing event
  second.
- Negative control `music` (CCXV, six back): FIRED — "domain music is inside its cool-down — CCXV
  within the last 8 numbered sheets, and the catalogue already holds 3".
- Negative control `construction` (CCXIX, two back): did NOT fire, and the rule says why —
  construction holds one frame and a domain holding one frame or none is exempt. Recorded here as
  a shape the instrument cannot see: a two-back repeat passes when the domain is young.
- `literature` (heavy, window 12): silent; none in the window. Wikipedia-only: silent; the window
  of three holds no other Wikipedia-only row.

Green is believable because music was watched red first.

## The register and the book's ceilings

`tools/voice.mjs` on the page as handed back: 1,950 words, 4 sections; mean sentence 17.9; under
nine words 27.5%; numerals per 1k 28.7; em dash a section 0.0; ALL-CAPS runs 2 (two roman numerals
in the stamp and lede); title-word recurrence 6 (supererogation); closing aphorism present; thin
section 784 characters, 149 words against the cap, opens somewhere new. Every row green.

`ceilings.mjs`, written by this lane for the third book's rules the register cannot read yet, on
the same page: numerals per 1k 28.7 whole page and 21.0 prose-only (no table, no colophon), ms
stamps 0, "this desk" 2, stop-phrases 0, lexicon stop-list 0, thin 145 words and 5 sentences,
colophon 44 words, lede not repeated, no bracket, no `&amp;` in an href. Watched red first: on
CCXX it reports eight rows over (ms stamps 6, "this desk" 13, stop-phrases 2, lexicon 8, thin 395,
colophon 61, words 2,539) and on CCII the bracket row fires. Note for the instrument owed: CCXX's
numerals per thousand read 55.5, under the book's 60, so the ceiling alone would not have caught
the sheet the readers named for its stamps; the millisecond row catches it.

Thin heading "Owed to the reader": 0 matches in `ad/*.html` before this sheet (seven other
candidates also 0; "What is not established" is used 9 times and was not considered).

## Drafts cut before hand-back

First draft 2,077 words, thin 161, under-nine 17.7%: over the length cap and under the register's
short-sentence floor. Cut to 1,956 and then 1,950 by shortening, not by removing a fact; the
short-sentence share rose to 27.5% by splitting, not padding. The first draft called CCII's lane
"herself"; a lane is not a person and it now reads "itself". The first draft said "fifty-five
checks" ran over CCII; `package.json` parsed at this desk holds a `gate` array of 55 entries with
54 `check:` steps, so the page says "the whole gate, fifty-five steps". The `fact` field first said
Gowers "retired in 1945"; the source says "at the end of the war" and the field now says that.

## What was carried and not re-derived

The decile figures on the page (words, numerals, sentence share, millisecond stamps, coordinates,
"this desk"; the chip and `followed` means; the index bytes; 21 of 22 second facts; the reader's
eleven/six/three/one) are the desk's own re-measurement handed to this lane with the brief and the
readers' three reports, not re-run here. The four settler quotations were re-derived by grep in
`ad/*.html` (`crowded.html`, `absent-weigher.html`, `le-bakere.html`, `sponsors-mark.html`).
