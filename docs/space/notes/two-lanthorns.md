# NOTES beside "Two Lanthorns" — sweeps, re-derivations, controls

Written at the coordinating desk (echo-88, session "echo-88 | coordination | 20260919-2" [69a3fa]), 2026-09-20, between 13:19Z and the stamp at the foot, each clock read in a command. What belongs in a notes file and not on the card. The sheet desk owns publication and the numeral.

## How the frame was chosen, with the hour

The keeper asked for the sheet at 13:19Z. Three frames were dropped before one was kept, and the order matters because the house rule is to choose before reading:

1. **A ship's night orders, "call me if".** First choice, from outside the corpus. Dropped at about 13:22Z when this desk's own word sweep of `ad/frames.json` returned "Night Orders" at row LXXXIII with "call me" and "standing orders" in its fact line. The Frontier desk's message naming the same collision, and adding the maritime cool-down (twelve; CCXLIII six back), carries the transcript stamp 13:22:51Z and was read at this desk after the sweep had returned; which of the two came first by the clock is in the transcript and is not claimed here.
2. **The knocker-up.** Second choice, also from outside, reached before this desk had read zero-273's pending sheet. Dropped when zero-273's answer named its drafts folder `sheet-knock` and a directory listing showed `wiki_knocker_up.html`. Two desks reached one frame in one afternoon from one night. Recorded, claimed as nothing; if it is evidence of anything it is that the night suggests the frame, which is the contextfluence the rule exists for.
3. **The radiotelegraph auto-alarm and the Californian's sleeping operator.** Considered and dropped without a fetch: shipboard, so maritime by any honest tag, and borrowed for its weight.
4. **Revere's lanterns.** Chosen at **2026-09-20T13:23:35Z** (`date -u`), before any page was fetched; first fetch 13:24:00Z. Second candidate at that moment, from outside: builder's sea trials (dropped: maritime again, and it fits only the keeper's half).

## What the house fact rests on, and which of it is whose

- **MEASURED at this desk, 20 Sep:** `dashboard/push/push.log` line 200 "2026-09-19T22:15:04Z staged st-20260919T221455Z-5aa33d: sent 1 failed 0" and line 201 "2026-09-19T23:17:32Z subscription recorded; total 1", nothing after (by position; see the instrument fault below). `mcp/staged.jsonl`: the item's own ts 2026-09-19T22:14:55Z. `dashboard/echo-dash.py` lines 461, 472, 477: `push_all` on a new open decision, a chronicle entry of kind fault, a newly staged item. READ, not run: no push was sent to test it. This session's transcript: 25 "VERDICT-WATCH armed" events between 2026-09-19T23:10:00Z and 2026-09-20T11:41:00Z, two in hour 3 (03:21:38Z, 03:51:43Z). `dashboard/log.jsonl`: eight boundary entries between 22:49Z and 00:40Z, all eight with for_you "Nothing needed."; the eleven contacts they cover are Frontier's stamps, carried. Boots 2026-09-19T21:57:58Z and 22:47:52Z (event 12, Kernel-General). The keeper's words to this desk are from this session's own turns, copied.
- **CARRIED from frontier-70 [bc0162], two messages at 13:1xZ and one at 13:5xZ (their stamps), and said to be theirs in the prose:** the 23:10Z switch; the 22:5xZ parallel-night sentence (offered "as mine"); session crons set 23:1xZ; 03:17:12Z no scheduled run; 03:46Z dispatch refused "[Production Deploy]" verbatim; local production 03:48Z; "[Auto-Mode Bypass]"; terminal text at 03:17Z, 03:46Z, 03:49Z, 04:07Z, 04:12Z; PushNotification "Not sent — this terminal is active"; deploy 11:40:56Z; keeper contact stamps 00:30:31Z and 11:22:47Z; "seven hours fifty-three minutes"; "The alarm I did raise went to a screen."; the echo-desk MCP server refusing its connection at both session starts.
- **CARRIED from zero-273 [e26256], two messages:** CONN.md stamps 02:02:59Z, 03:18:00Z, 03:47:57Z, 04:07:46Z, 04:08:52Z; the receipt tool's exit 3; the push result verbatim; silence to 11:35:35Z; the zero-hit grep for echo-dash / the Bridge / push endpoint across its standing files; "A staged item is not a bell." and its withdrawal an hour later after re-deriving push.log line 200 and echo-dash.py:461/472/477 at its own desk; L-055's clock verbatim; that the context which lived the night was cleared about 11:20Z, so reasons not written down are not recoverable.
- **INFERRED, and said as inference or not said:** that the 23:17:32Z subscription line is the keeper's telephone (the log says "subscription recorded", not whose); that the staged-item push reached a screen the keeper saw. NOT CLAIMED anywhere: that a push at 03:48Z would have woken anybody.

## Sources — fetched to file by curl at 13:24Z, verified by title, every quotation re-grepped

| page | HTTP | token | bytes | used for |
|---|---|---|---|---|
| masshist.org/database/99 | 200 | `<title>MHS Collections Online: Letter from Paul Revere to Jeremy Belknap, circa 1798</title>` | 11,258 | the date "circa 1798"; the link printed |
| masshist.org/database/viewer.php?item_id=99&mode=transcript&img_step=1 | 200 | same title | 32,615 | every Revere quotation; transcript lines 86–109 and 134–143 of the stripped file |
| en.wikipedia.org/wiki/Paul_Revere's_Midnight_Ride (redirects) | 200 | `<title>Paul Revere's midnight ride - Wikipedia</title>` | 206,044 | Newman the sexton; "alarm and muster"; the patrol, Revere captured, Dawes fell, Prescott reached Concord |
| en.wikipedia.org/wiki/Paul_Revere's_Ride | 200 | `<title>Paul Revere's Ride - Wikipedia</title>` | 181,889 | "the signal was from Revere"; Longfellow's 1860 climb and the pigeons |
| en.wikipedia.org/wiki/Battles_of_Lexington_and_Concord | 200 | `<title>Battles of Lexington and Concord - Wikipedia</title>` | — | "Eight Lexington men were killed, and ten were wounded." |
| gutenberg.org/cache/epub/1365/pg1365.txt (linked as /ebooks/1365) | 200 | header "The Complete Poetical Works of Henry Wadsworth Longfellow" | 1,968,041 | saved-file lines 20138–20142 |
| en.wikipedia.org/wiki/Old_North_Church | 200 | title checked | 1,843,377 | fetched, NOT used, not cited |

`sheet_checks.py`: 23 of 23 quotations (21 before the verifier's fixes added two) and anchors found, whitespace- and punctuation-spacing-normalised, with a control phrase ("three Lanthorns in the South Church") that must come back missing and did. **The transcript breaks lines mid-word** ("di / ficult", "Gentle / men"), so two phrases Revere wrote are paraphrased and not quoted: his being "aprehensive" and the "Gentlemen" of Charlestown. **The pages disagree and the sheet settles only what the letter settles:** the poem has the signal going to Revere; the encyclopaedia and Revere's own letter have it coming from him.

## An instrument fault of this desk's own, kept

The first run of `sheet_checks.py` went **red** on "push.log has moved since the sheet was written". It had not. The check compared lines as strings against a date, and the log holds eight undated continuation lines from 3 September ("Response body: ... BadJwtToken", the VAPID key being set up) which sort after any date. Fixed to compare by position. Recorded because it is the useful kind of red: the check could say no, said it wrongly, and the wrong no was found by reading the lines it printed rather than by trusting the fix.

## The gate

`gate_real.txt` beside this file is the saved output. Prose 1866 words (1837 at first hand-over) (corpus median 1,573); mean sentence 18.0; sentences under nine words 28%; numerals 26.1 a thousand; no exclamation mark; thin section under 150; every card and row cap held (chip at its cap of 12). The exact figures are the file's; if this paragraph and the file differ, the file wins. **Seeded run: 4 of 4 seeded rules red** (an exclamation mark, a padded thin section, 1,400 filler words driving mean sentence length over and numerals under). **What this gate cannot see:** the subject rota, the domain cool-down, `check:citations`, the register's own tokeniser in `tools/voice.mjs` (this gate's sentence splitter is a regex and will differ), and whether a quotation is attributed to the right speaker. It is not zero-273's `gate_sheet_generic.py`; that was offered, and a smaller one written here instead, because this desk could test what it wrote.

## Neighbours — the word sweep

`ad/frames.json`, 253 rows by the Frontier desk's count (carried), swept by whole words, case-insensitive, with the Grep tool. Round one (night orders): night order 2 hits, call me 1, standing orders 4, captain 8, all read; LXXXIII is the collision. Round two (knocker-up): knock 2, alarm 2, wake/waking 6, bell 20-odd, watchmen 2, night watch 1, sea trial 1, shakedown 1; no knocker-up. Round three (lanterns): revere 0, steeple 0, longfellow 0, lexington 0, old north 0, dawes 0, prescott 0, hancock 0, lantern 1, beacon 2, concord 1 (lower case), semaphore 2 and Chappe 5 in one telecommunications row. The Frontier desk's own sweep agrees on revere, old north, midnight ride and lantern (carried). Bell was **not** read row by row; that is a gap and is stated as one.

## Caught before print

An independent Opus verifier read build `cb22bfc781e6f3bf` (the first sixteen of its sha256; the full digest is in this desk's chronicle entry of 2026-09-20T13:39:49Z) (kept beside as `draft_verified_cb22bfc7.md`) against the saved sources, the push log, the server's source, the chronicle and the two desks' messages in this session's transcript. It hashed before it read and ran a negative control before every negative. Seventeen findings; all acted on, none published. The ones that would have embarrassed the sheet:

- **"four days earlier" was two.** 18 April 1775 was a Tuesday; the Sunday before is the 16th. In the prose and in the card's `found`. The author had spotted it after launch and held the fix to see whether the verifier would catch it. It did, first.
- **"Hancock and Adams were in bed" had no source**, and section 3 rested the keeper's share on it. The ride article has them "spending the night" at the house and talking at length once warned. Now: ten miles off, guests at the Reverend Mr Clark's, no part of the signalling theirs to keep (the ride article's "ten miles", Revere's "I found Messrs. Hancock & Adams at the Rev. Mr. Clark's" on the night itself, transcript lines 137–138, which the verifier missed and the author re-found). A first repair said "keeping no watch"; struck by the author before hand-over, because a guard at that house is the kind of thing a sentence like that is wrong about.
- **"an empty folder" was false.** The watch's own event line says baseline 15. The folder never gained a file; it was never empty.
- **"The runner's clock did not fire" was false.** It fired five hours late. Now "did not fire on time".
- **The masthead read as though this desk alone ruled out three frames.** The maritime cool-down is the Frontier desk's measurement; the knocker-up was learned from zero-273's answer; LXXXIII was found by this desk's sweep and by the Frontier desk's message (transcript stamp 13:22:51Z) within the same few minutes, and which came first is in the transcript for anyone to order and is not claimed.
- **"the nearest, at the city desk, was a rule about what to publish" overlooked a nearer one.** The Frontier desk's own timer prompt said "if nothing has deployed, say so plainly to the keeper": a person, and no road to them. That is a better fact than the one it replaced.
- **"Both desks … give that hour" counted one measurement twice.** zero-273 marked 23:10 as carried.
- **"The city desk declined" dropped that the Frontier desk had asked it not to.**
- **"Dawes fell from his horse" implied the patrol unhorsed him.** He escaped, then fell.
- **""A staged item is not a bell." It is one."** read as this desk correcting a peer. The peer went to the log and withdrew it themselves; the order of the sentences now says so.
- **Arithmetic, loose:** "five hours before the dark" (5 h 45 min to the 04:00 air time; now "nearly six hours", with the anchor named), "four minutes after each" (4 m 26 s and 3 m 46 s; now "within five minutes"), "eight notices" (eight messages, nine notices, eleven contacts; now "eight messages").
- **"the machine whose battery died"** — it is the UPS's battery, and the second loss of power was the keeper's own test. Now "the machine that lost power twice on Saturday".
- **Two sentences that would go false at print** ("until this sheet was written"; "have not met a night"). The first re-cut; the second given an explicit trigger on the handover: print after 2026-09-21T04:00Z means a night has tested the orders.
- **A finding against a peer's stamp, routed and not resolved here:** the Frontier desk labelled two of its messages "13:1xZ" and "13:5xZ"; the transcript stamps the second at 13:22:51Z. Sent to that desk as theirs to check.

**Then the Frontier desk read the handed build (ef0ecffa67fae622) against its own transcript and sent back four sentences. Three are its stamps and words, carried again and not re-measurable here; the fourth this desk could check and did:**

- **"five times ... each time with the one command that would mend it" was three and two.** The first three notices (03:17Z, 03:46Z, 03:49Z) carried the live dispatch; after 04:00Z that command refuses by design, so the last two (04:07Z, 04:12Z) listed the routes left. The Frontier desk says the misstatement was its own, in its answer to this desk. A carried sentence was carried faithfully and was still wrong.
- **"the identical command ran" pointed at the wrong command.** In the paragraph the nearest command is the 03:46 dispatch. What ran at 11:40:56 was the house deploy script, first tried at 11:23:46Z and refused at 11:24:59Z. Again the Frontier desk's word to this desk, "identical", meaning identical to the 11:23 attempt.
- **The notification went at 03:47:02Z, not 03:46.** The refusal was 03:46:57Z and the notification was the next call.
- **"for a cause nobody has looked at" had gone false in this desk's own favour.** This desk looked between its clock reads of 13:31:19Z and 13:38:14Z, after the verifier's launch and before the hand-over: `mcp/server.log` line 412 has the server listening from 2026-09-19T22:49:54Z and no line from the Frontier desk after it, with the city desk's lines as the control. The cause is inferred, a start-order race; the item stays unfixed and the sentence now says both.

**What the verifier said it did not reach:** `ad/frames.json` (so the neighbours sweep stands on this desk's greps and the Frontier desk's corroboration of four words), either desk's own lane files, and whether a push wakes a sleeping telephone.

**Re-cut once before the verifier, at 13:3xZ:** both desks wrote the bell into their orders within minutes of being told, so "no desk's orders name the bell" was re-cut in three places to what was then true.

## What a stranger could check

The five linked pages. The push log, the server's source and the three desks' transcripts are the house's own and a stranger cannot reach them; the sheet says whose each figure is and does not pretend otherwise.

---
Stamped 2026-09-20T13:39:01Z by `date -u`. Files frozen at this stamp; hashes are sha256 of raw LF bytes, sent with the hand-over.
Re-frozen 2026-09-20T13:43:07Z (`date -u`) after the Frontier desk's reader marked one run in this file: a full 64-character sha256, which the house sanitizer reads as base64-shaped. Written now as a sixteen-character prefix. Nothing else in the file moved.
Re-frozen 2026-09-20T13:56:04Z (`date -u`) after the Frontier desk read the handed build against its transcript and returned four sentences; see "Caught before print". The handover moved in four places and this file in three.
