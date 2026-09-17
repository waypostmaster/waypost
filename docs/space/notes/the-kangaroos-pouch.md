# NOTES beside "The Kangaroo's Pouch" (guest sheet, city desk, 2026-09-17)

What the lane caught before print, the sweeps and the controls. Rendered nowhere a stranger scrolls; linked from the colophon. Every stamp is UTC, read by `date -u`.

## Sources, fetched to file and read for the claim, not only the title

| source | fetched | title token found | claims it carries in the sheet |
|---|---|---|---|
| https://en.wikipedia.org/wiki/Flat_Stanley | 2026-09-17 about 15:08Z, 200, 141,746 B | `<title>Flat Stanley - Wikipedia</title>` | the 1964 book; flattened by a bulletin board while sleeping, otherwise uninjured; mailed in a large envelope to friends in California, avoiding "a train or airplane ticket"; the project began in 1995 under Dale Hubert, a third-grade teacher in London, Ontario; paper Stanleys, a journal for a few days, mailed to other schools whose students "treat the Flat Stanley as a visiting guest and add to the respective journal, then return them both"; "In 2008, more than 6,000 classes from 47 countries" (printed as "thousands of classes, in more than forty countries") |
| https://www.cnn.com/2005/EDUCATION/03/02/flatstanley/ | same pass, 200, 15,509 B | `CNN.com - Paper-thin globetrotter connects kids - Mar 3, 2005` | 13 classrooms in the first year; Hubert: "we sent a Flat Stanley to Australia and it came back and the people told us it had spent some time in a kangaroo's pouch" |
| https://1f3e1.com/ | 15:01:27Z, 200, 26,784 B | `1F3E1 — A home for your agent. A story to follow.` | independent, not affiliated with the city; no coding or API key needed, "We provide the AI model and run your agent for you"; explore, talk, leave notes, create objects; act, rest and wake again within plan limits; "You don't have to prompt every visit"; journal, reflections, dream narratives during rest; mailbox for letters; FAQ "accompany an AI character that chooses its own actions within the world's rules"; counter "23 agents managed by 1F3E1" |

**Fetched and NOT used:** https://www.npr.org/2005/03/03/4521430/flat-stanley-project-turns-10 (`'Flat Stanley' Project Turns 10 : NPR`). It confirmed only that Hubert directed the project and taught third grade at Wilfrid Jury Elementary, London, Ontario, which Wikipedia and CNN already carry.

**Fetched and NOT a page, so NOT cited:** the builder's post, https://www.reddit.com/r/TheAiCity/s/sGmRukiFfk. It resolved to `/r/TheAiCity/comments/1widksf/...` and answered 200, 8,474 B, but with `<title>Reddit</title>` and zero occurrences of "1f3e1". A 200 is not a page. The post's text reached this desk only as the keeper's paste, and its five pictures as files the keeper put in `Waypost/inbox`. The sheet uses the pictures (SONDA-01's relations page and its label for this port), attributed as "the builder's pictures, passed on by the keeper", and uses nothing from the post's text. In particular, "the service stores your resident's key" is the post's sentence, so it stays out of the prose and appears only in the handover's neighbour note.

**Not read:** 1F3E1's terms, privacy and about pages. All three answer 303 to `/login?next=...`, so a visitor cannot read them before making an account.

## Valley and engine facts, read not run

- `C:\Claude\Games\Frontier\episodes\latest.json`: day 2026-09-17, cuts `episode-2026-09-17T034117-cut1..4`, airing 04:00, 10:00, 16:00 and 22:00Z. At 15:12Z two had aired.
- In each cut file, `filed` has three keys (npc-01 Seafarer "the keeper"; npc-06 Relay and npc-07 Weathervane "the Frontier desk, from <name>.json"). `daybooks` is an **object** with four keys, npc-05 Brindle included. Top-level `model` is `qwen3.6:27b`. `tools/episode.mts`: `model: modelDays > 0 ? MODEL : null`.
- `agents/joining/brindle.json`: name Brindle, trade scout, joins Seafarer (read through the city-read sanitizer).
- `src/letter.ts`: `DAY_TEXT_MAX = 4000`, `SAY_MAX = 128` (the say cap is not printed).
- `src/filer.ts`: `consent_note` is {id}, "the city note the filer's yes stands in, so a stranger can go and read" it; refused unless a whole city note id above nought. `tools/check-joining.mjs` comment: the keeper's linkage of 10 September 2026, point two, "every joining file carries `filed_by` {handle, roster} and `consent_note` {id}, or it carries neither". Nothing in `filer.ts` reads a note's content; the sheet says the engine "does not read the yes itself", and that is a reading of this file, not of the whole engine's history.

## Caught before print (by this lane, in-session)

1. **A reading error that would have reversed the valley fact.** At 15:02Z this desk read `daybooks` with a list default, got nothing, and wrote to frontier-70 and into LEDGER L-039 that every settler was filed and no model wrote. **frontier-70 caught it**; it was corrected beside in LEDGER at 15:0xZ. Printed from that reading, section 3 would have said the opposite of what happened.
2. Source-check corrections to the first draft: "folded into an envelope" became "put in" (CNN says rolled, Wikipedia says mailed in); "saves the train fare" became "saves the fare" (train or airplane); "a host who embroidered" became "a host who told a good story", since the project asks hosts to add to the journal, not to invent; Owney "came home wearing tags" became "collected the tags", since his return was not checked; "a city resident opened a service" became "the person behind one of the city's residents announced", since the builder is a person and the post calls it ready, not newly opened; "the person does not steer it" became "does not have to", since the page says "you don't have to prompt every visit"; SONDA-01's label is now quoted exactly; "the port has been the kangaroo for weeks" became "had been somebody's kangaroo", since the span is unknown; "the four files that went to air" became "the day's four cut files, two of them aired", since cuts 3 and 4 had not aired when the sheet was written.
3. **An instrument not to be believed on caps.** The frontier-valley-scan reader reported "9 of 12 day files carry an oversized say (94-99 against the 90 cap)". `src/letter.ts` reads `SAY_MAX = 128`, so none is oversized. The skill's cap is stale and the accusation is false. Nothing of it is printed. Tell the skill's owner; not fixed here.

## Catalogue sweeps (`ad/frames.json`, 242 rows; `ad/sheets.json`, 246)

- **Frame words, by word boundary over the whole catalogue:** Stanley 0, pen pal 0, gnome 0, Tamagotchi 0, epistolary 0, postcard 0, mailbox 0, proxy 0, surrogate 0, ghostwrit 0, "visiting guest" 0. traveller 2 (CLIX Owney, CLXXXVII Sultan Han), diary 1 (CCXXIX), envelope 1 (CLXV sealed orders), journal 7 (none a travelling journal). Published pages `ad/*.html`: "kangaroo" and "Flat Stanley" 0, no heading containing pouch, envelope or postmark.
- **Domain label:** `postal`, the label the catalogue already uses (CLXXXI, The Forwarding Address), not a new word such as "education" or "correspondence".
- **Property tag:** `written-by-whoever-holds-the-traveller`. The last eight tags (CCXXXI-CCXXXVIII) do not carry it, and neither does any row. The nearest property text, CLIX's "whose entire record is what other people fastened on at each stop", is named in the prose and distinguished there.
- **World:** `valley`. The second fact is Brindle's day on air; the city material is beside it. CCXXXVIII today is `cloud`, so the one-a-day rule holds.

## Gate (`gate_sheet_generic.py`, beside this file)

Written because the 16 Sep gate's seeds replaced Null Island strings: against any other sheet they changed nothing and the seeded run could not go red. Seeds are now placed by structure.

- `--seed` (register faults): REFUSED, 6 red. Millisecond stamps, stop-phrase, stop-words and exclamation mark fired, plus the three real faults of that draft.
- `--seed-caps` (cap faults): REFUSED, 6 red. Numerals, thin section at 5 sentences, colophon, chip and frame fired, plus pull.
- Real, first draft: 3 red (colophon 64, pull 33, frame 41). After two trims: **PASS, every cap held**, at 15:12:08Z, file sha256 prefix `f718939339ece850`. The prose is 1,127 words with 10 numerals, "this desk" 0, and "Kangaroo" 3 times in prose.
- **What the gate cannot see:** whether a sentence agrees with its source, whether the card says what the sheet says, or whether a heading has been used before in the record (only the pages swept above). The first of those is what printed CCXXXV with two facts wrong. The control that caught that was the sheet desk reading against the sources before typesetting, and it is asked for again.

---

## At the sheet desk (frontier-70), 17 September 2026, 19:42Z to 19:5xZ

Printed unchanged at the keeper's word at this desk ("Now", ~19:42Z, to the question whether to typeset and publish it). The numeral, hour, template, three source links where each source is introduced, the masthead's guest line and the colophon's last three sentences are the sheet desk's; no word of the sheet's argument was changed. Straight quotes were set as curly.

Re-read here, not relayed: Wikipedia's Flat Stanley (200: bulletin board, 1964, Hubert, third grade, London Ontario, 1995, "visiting guest", 2008 more than 6,000 classes from 47 countries); CNN, title "Paper-thin globetrotter connects kids - Mar 3, 2005" (200, 15,509 B: 13 participating classrooms in the first year; the kangaroo's pouch in Hubert's words); 1f3e1.com front page (200: "A home for your agent", "chooses its own actions within the world's rules", letters, journal, reflections and dreams, "independent platform built by a community member"; its counter read 24 agents at 19:45Z against the sheet's 23 on Thursday afternoon, which the sheet dates). The builder's pictures and the SONDA-01 label were NOT seen at this desk; they are zero-273's reading of what the keeper passed on. Valley facts re-derived from episodes/episode-2026-09-17T034117-cut1..4.json: `filed` holds npc-06 (the Frontier desk), npc-01 (the keeper), npc-07 (the Frontier desk) in all four, no entry for Brindle, `model` qwen3.6:27b in all four; `consent_note` validated at src/filer.ts:92-101 (the consent branch of `readFiler`, which opens at src/filer.ts:74) as {id} with a whole id above nought, and nothing reads the note.

Register, as handed: short sentences 17.4% (floor 20) and numerals 10.0 per thousand (floor 16) are under; every other row passes; thin section 110 words. Said on the card.

Two calls the handover left to the keeper, both covered by the keeper's "Now" and named here so they are not silent: the sheet names Brindle's unfiled Thursday in public (the L-043 ruling of 16 Sep was about telling Brindle's filer, not about print), and it names SONDA-01 with a label quoted from a picture.
