# Lane notes — CCXXXIII, "Ratified by Both Parties" (ratified.html)

Frontier record desk, 13 September 2026. Labels: MEASURED (this session, instrument named), CARRIED, INFERRED.
The keeper, direct, ~06:0xZ: "Write another sheet. whatever you want. any frame."

## The valley on air (MEASURED 06:11Z)

- episodes/air.log (local stamps, UTC minus four): the manual production began 23:51:28 local (03:51:28Z). "joining: Brindle is already ashore in the opening; not enrolled again"; "accedence: Brindle — consented". Per cut, "Brindle: no usable day came back — they sail on their own judgement" at 03:55:33, 03:57:37, 03:59:39 and 04:01:42Z, each followed by "3 flight plan(s) filed, 0 by the model" and "computed twice, identical to the byte". Pointer and next-snapshot written 04:01:44Z. "deployed to the mast (waypost.quest/valley/)" 04:15:50Z; "aired and on the masts" 04:15:54Z.
- tools/episode.mts: `askDay` (line 327) posts to `${OLLAMA}/api/chat` with `signal: AbortSignal.timeout(120_000)`; its catch prints the "no usable day came back" line and returns null. One call site, line 885, inside the per-settler loop of a cut.
- episodes/episode-2026-09-13T035333-cut1.json, snapshot: settlers on air Brindle, Seafarer, Relay, Weathervane. Brindle: role trader; carrying food 1; hold: "Do not present a song, estimate, or memorable version as an exact record." / "Do not sing another settler's private experience publicly without permission." / "Accept corrections plainly and leave them visible beside the original account."; task haul at 91,114, note "putting the day’s takings away". This is the OPENING, not the outcome; no replay was run.

## The model server (MEASURED, C:/Users/there/AppData/Local/Ollama/server.log, 9,651,287 B)

- /api/chat lines stamped 23:50–00:17 local: 72. One is a false match from 12 Sep 00:05:22 (status 200, 472 ms, the previous night), so 71 belong to tonight's window.
- Of the 71: 68 ended 500, 3 ended 499; none 200. Durations: 48 at 4m0s and 6 at 3m59s (54 near four minutes), 2 at 3m7s, 2 at 1m5s, and the last two at 10.7 s and 9.98 s at 00:15:46 local, when the runner was stopped.
- "cancel task" lines from 23:5x local onward: 54, the same as the four-minute requests.
- NOT TRACED: why 71 requests when the air log records four asks for Brindle. The one askDay call site suggests a question per settler per cut; the rest are unexplained here and the sheet says so.

## The stop (MEASURED earlier this session, recorded in the seal)

- 04:12Z `ollama stop qwen3.6:27b` exited 0; the model stayed loaded (17.3 GB) with requests active; GPU 99%.
- 04:15:45Z llama-server pid 78188 stopped at the keeper's request ("Can the ollama model be unloaded now? Please do it"); producer node pid 42272 exited within 2 s; deploy followed.
- waypost.quest/valley served today's pointer and cut 1 at 04:16:57Z; frontiervalley.app at 04:21:38Z.

## The frame (MEASURED, pages opened by this desk)

- National Archives, "Treaty of Ghent (1814)": "Done in triplicate at Ghent the twenty fourth day of December one thousand eight hundred and fourteen." / "All hostilities both by sea and land shall cease as soon as this Treaty shall have been ratified by both parties." / "American forces, led by Andrew Jackson, won the Battle of New Orleans on January 8, 1815, ending the hostilities after the official peace."
- National Park Service, Jean Lafitte NHP, "The Treaty of Ghent": "On December 24, 1814, British and American representatives who had been meeting in Belgium signed the Treaty of Ghent." / "The war was not over when the treaty was signed on December 24" / "Congress ratified the treaty on February 15, 1815."
- Wikipedia, "Battle of New Orleans": fought January 8, 1815, "15 days after the signing of the Treaty of Ghent", not ratified by the United States "until February 16, 1815, as news of the agreement had not yet reached the United States from Europe." Casualties: American 13 dead, 39 wounded, 19 missing or captured (71); British 291 dead, 1,262 wounded, 484 missing or captured (2,037).
- DISAGREEMENT: NPS says Congress ratified on 15 February 1815; Wikipedia says the United States ratified on 16 February. The sheet prints "the middle of February".
- Domain diplomacy (checked unused at scaffolding), property signed-is-not-in-force.

## Not claimed

- What Brindle did on air without a filed day.
- The cause of the other 67 model requests, or of the scheduled run's silent exit at 03:40Z.
- That the battle was pointless; the NPS page argues the opposite and the sheet follows it.
