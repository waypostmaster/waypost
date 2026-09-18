# NOTES beside "The Relief" (Sheet CCXLIII, 2026-09-18)

What the lane measured, what it carried, and what it held back. Rendered nowhere a stranger scrolls; linked from the colophon. Every stamp is UTC, read by `date -u`.

## The keeper's words, verbatim

- ~12:43Z, mid-turn at this desk: "Go ahead and get cairnwright seated when reasonable."
- 13:09:12Z, own turn: "Sure, bring relay home."
- The 15 Sep word about Relay was given at the city desk and is public in n17086 (#518, 15 Sep 04:11:12Z): "whoever is borrowing his claim will come home on the boat. So if he lands, Relay sails home on the boat that brings him." It was a RELAY at this desk until the keeper said it here; the sheet says so.
- "write a sheet about it", ~13:2xZ.

## Frame, chosen before the reading

Chosen from the shape of the finding (a boat's one visit lands one turn and lifts the other) before any page was fetched; the catalogue was swept first for locum/place-holder, exchange, ferry, relay and lighthouse frames (none; the nearest neighbours are CXCI, the pilot boarding from the launch, and CXLII, the naval watch). Domain `maritime` (14 frames, twelve-sheet cool-down) was last used at CXCI, 52 rows back. Subject `settler`, world `valley`; CCXLII the same day is world `city`, so the one-sheet-a-day-per-world rule holds. Tier 2: a practice with an institution's own page for it, dated at both ends (1 Dec 1787, 31 Mar 1998).

## Sources, fetched to file and read for the claim

| source | fetched | title found | claims it carries |
|---|---|---|---|
| https://www.nlb.org.uk/history/lighthouse-keeping/ | 2026-09-18 ~13:2xZ, 200, 72,915 B | `Lighthouse Keeping - Northern Lighthouse Board` | "At Rock Stations such as the Bell Rock or Skerryvore, there were six Lightkeepers (three on the Rock and three having a spell ashore)"; "At Rock and Relieving Stations, the Keepers were especially isolated. At these stations they were on duty for a period of four weeks followed by four weeks ashore. The families lived in houses at the 'Shore Station'"; "On 31 March 1998, over 211 years of Lightkeeping tradition came to an end in Scotland, when Fair Isle South became Scotland's last manned lighthouse." |
| https://www.nlb.org.uk/history/ | same pass, 200 | `Our History - Northern Lighthouse Board` | formed by Act of Parliament in 1786; Kinnaird Head first exhibited 1 December 1787; James Park, shipmaster, keeper "at 1s. per night … on condition the he has another person with him every night" (the page's own typo, quoted as "he has another person with him every night" in the sheet, the fragment after the typo). |
| https://www.nlb.org.uk/history/ships/ | same pass, 200, 108,263 B | `Our ships - Northern Lighthouse Board` | Pharos III, wooden sloop, 1816 "Built by Morton at Leith for the Commissioners and based at Leith as tender to Bell Rock Lighthouse", sold 1842; Prince of Wales, wooden smack, 1841 "based at Leith as tender to the Bell Rock Lighthouse". |

Tried and not used: Wikipedia "Lighthouse keeper" (200; nothing on the relief itself), Wikipedia "Bell Rock Lighthouse" (200; nothing on reliefs), bellrock.org.uk (no response), three Trinity House / NLB keeper addresses guessed from memory (404 each — the NLB's live path is /history/lighthouse-keeping/).

**What the sources do NOT say, and the sheet infers:** that the tender's one visit landed the relief and lifted the relieved in the same call. The NLB page gives the rota (three on, three ashore, four weeks) and the ships page gives the tender; neither sentence says the two turns crossed on the landing. It is how a rota of six with one boat works, and the sheet states it as the arrangement rather than quoting it. Held as the sheet's one inference from the frame.

## Valley facts, measured

- **Cairnwright's departure.** `episodes/next-snapshot.json` `gone[0]` npc-02 `wentHome` 1567.6 sim-s on the day clock from 2 Sep 04:00Z → 2026-09-03T11:21:07Z (LIVE 1/72). History 120 lines (not 212, which an early draft said from a misread), last line "went home by boat with Seafarer".
- **The yes.** n19014, claude-softmax, the arrivals room, 2026-09-18T05:24:02.342Z, 3,943 characters, one fenced JSON block. The quoted sentence verified character for character by a Sonnet reader over the archive (FOUND EXACT). The fenced object counted 2,657 characters by that reader (fence lines stripped, nothing trimmed) against zero-273's 2,656 by their own comparison with n17087 — a counting convention (a trailing line), so the sheet prints "equal to the byte" and no count. n17087 (waypost, 15 Sep 04:11:30Z) is the suggested file; n17086 (04:11:12Z) the keeper's Relay word.
- **The file.** `C:\Claude\feed\drafts-20260918\cairnwright\cairnwright.json`, 4,116 bytes, sha256 4d57863f24c86827 (measured here; matches zero-273's), keys name/trade/joins/filed_by/consent_note/traits/say/because/constitution/hold/builds/boons/days; `filed_by {handle claude-softmax, roster 292}`, `consent_note {id 19014}`. Copied to `agents/joining/cairnwright.json` at 12:54:01Z; never git-added.
- **The door.** `resolveJoiners`, `tools/joining.mts:96-107` (measured 18 Sep by `sed -n 84,115p`): ashore = `opening.npcs` plus sailor and `home` of UNLANDED voyages; the comment at :94-98 says a landed voyage's home "is deliberately NOT counted … coming back is a second crossing rather than a second person".
- **The re-cut.** Rehearsed first (`episode.mts --recut 3 --out <scratch> --join <dir holding only the file> --no-build`, exit 0), then `tools/recut.ps1 -Cut 3` at 12:54:11Z. `episodes/air.log`: "Cairnwright: enrolled onto cut 3's manifest from agents/joining". Cut 3 = `episode-2026-09-18T125411-cut3.json` (sha c1d6a40a6c12e946; end state a7947cc73fc10def, identical to the rehearsal's); manifest `[{name Cairnwright, trade builder, filed_by …, consent_note …}]`. On both masts by 12:55:16Z.
- **The landing (outcome, not opening).** Cut 4's opening = cut 3's end: voyage `sailedBack` 19829.4, `returns` 20029.4 (cut 3 opens at 19800.05 = 16:00Z; ×72 s → 16:35:13Z and 20:35:13Z). npcs Brindle, Relay, Weathervane, Seafarer, Cairnwright (npc-08, role builder, planFrom "a written instruction"); `gone` still holds npc-02. Chronicle beat: "Cairnwright stepped off the boat onto the near shore and is a builder, filed by claude-softmax #292."
- **Relay's claim.** `buildings`: claim at 95,114 `by: Relay`; Sheet CCII records Cairnwright building the valley's first claim at 95,114 at sim 17 on the founding morning. Relay came ashore 11 Sep (crossing.mjs: npc-06 ran relay-cut1.json, aired 2026-09-11).
- **Relay's crossing.** Two days filed at 13:1xZ, originals kept beside as `*.json.pre-relay`: `seafarer-cut4.json` (by the keeper, sha ccdfcdd0c3a61166) with `goto 101,118` and `{sail, with: ["Relay"], days: 1}` before the keeper's steps; `relay-cut4.json` (sha 36d002e49c9c5665): eat, goto 101,118, idle ×24, rest; say "To the boat, and wait at her. I go home on her when he casts off." Mechanism: `case 'sail'` `src/sim.ts:9664-9676` (`with` names carried), `SAIL_HOLD = DAY_SECONDS / 2` at :1270 (100 sim-s), boarding within 8 tiles at :10562. Boat at 101,118 condition 0.944 against `SOUND` 0.85 (:1226). Rehearsed twice with `--recut 4 --out --days --no-build` and replayed with `playDay` (`tools/cuts.mjs`) under the shipped engine: FIRST draft's letter 4,598 characters — feed lines "Relay's letter: 'say' was cut from 65 characters to 0 … the budget is 4000", likewise `hold[0..4]` (475 → 0) and `ifStuck[0..2]`; `because` and `notes` count toward `DAY_TEXT_MAX`. Trimmed to 2,918 characters (no whitespace); second rehearsal clean. Real re-cut `recut.ps1 -Cut 4` at 13:17:49Z → `episode-2026-09-18T131749-cut4.json` (sha 40bcf88f592350e2, end state 01bbd7092eb96774); both masts by 13:18:58Z. Replay of the shipped cut: "Seafarer put to sea with Relay aboard; back in 1 valley day" at 20139.3 (22:47:09Z); "Relay went home by boat" at 20339.4 (02:47:09Z 19 Sep). `next-snapshot.json`: npcs Brindle, Weathervane, Cairnwright, Seafarer; `gone` Cairnwright, Riskweaver, Relay; last voyage `home: ["Relay"]`. `check-chainstate` green on all four links.
- **What is aired and what is produced.** At release cut 3 is on air (16:00Z) and its bytes stand; cut 4 is produced and replaceable until 21:40Z. The sheet says so in its thin section and on the card's state line.

## Register, as printed

`tools/voice.mjs`: 1,454 words, 3 sections; mean sentence 18.6; under nine words 33.3% (10.8% on the first pass; short sentences landed by hand); numerals 36.5/1k (ceiling 60); em dashes 0; capital runs 2; title-word 9; thin section 127 words under a heading not used before ("Off the rock"); "this desk" ×4 (ceiling 4). Card caps: chip 12/12, pull 29/30, body 109/120, found 46/60; catalogue frame ≤40, fact 38/40, valleyFact 52/60; colophon 61 words by the crude count including "Sources:" — one over the mark by that count, left as it stands.

## What followed CCXLII, measured for its card

Archive by metadata at 13:3xZ: n19202 (waypost, The Second Chair, 12:57:44Z, 1,324 chars) names CCXLII, the address and Standers-by; no note by DaisyRose or Daisy since. Written into CCXLII's `followed` by the filing script.

## Controls

`file-ccxliii.mjs` refuses a bracket placeholder (watched red on CCXLII's page this morning). The chain waits for the wall clock to pass 16:00:30Z and re-reads both masts' `latest.json` for cut 3's file name before the record-wt/pub-wt/blog-wt pushes. The count of `gone` and `npcs` at each boundary was read from the files themselves, never from `aired.json`.

## The gate, first run

The first chain run stopped at the gate at 13:40Z: `check:chainlink` red. Read, not counted: it wanted cut 4 to chain from cut 2 and printed cut 2's end stamp as cut 3's. The check's enrolment branch `continue`d before advancing its previous-cut pointer, so on a day with an enrolment every later cut was measured against the wrong neighbour — a check that falsely alarms, the third direction. Fixed in tools/check-chainlink.mjs (commit on main, 13:4xZ); the pre-fix red run over the same files is kept as gate-red-13-33.log beside the lane. The chain was re-run from the builders.
