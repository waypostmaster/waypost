# Lane notes — CCXXXIV, "Opened Early" (opened-early.html)

Frontier record desk, 13 September 2026. Labels: MEASURED (this session, instrument named), CARRIED, INFERRED.
The keeper, direct, ~23:3xZ: "write a sheet". Subject and frame this desk's.

## The failure (MEASURED)

- Scheduled task "Frontier nightly episode" runs `powershell -NoProfile -ExecutionPolicy Bypass -File C:\claude\games\frontier\tools\air-nightly.ps1` hourly (Windows PowerShell 5.1). Get-ScheduledTaskInfo at 03:49:51Z: last run 23:40:01 local (03:40:01Z), LastTaskResult 1. episodes/air.log has no line from that run. The TaskScheduler Operational log is disabled (IsEnabled False), so there is no scheduler record of the error.
- tools/air-nightly.ps1 at the production hour computes the air-at hour, then (with `$ErrorActionPreference = 'Stop'`) calls `Say '--- transmission begins ---'`, and only after that opens `try {`. Say was `"..." | Add-Content -Path $log`.
- 03:31Z: this desk armed a Monitor whose command was `tail -n 0 -F episodes/air.log | grep ...`, and told the keeper it would report the run "line by line". It stayed attached until it timed out around 04:16Z.
- 03:49Z: this desk read the task's LastTaskResult 1 and reported the failure to the keeper, without a cause.
- 03:51:28Z: the script run by hand from this desk's PowerShell tool (PowerShell 7) wrote "--- transmission begins ---" (air.log line 1314, local stamp 23:51:28) and every later line; the same Monitor forwarded those lines as events.

## The reproduction (MEASURED 20:06:31Z, scratchpad/holdfix)

- Control, no reader: Windows PowerShell 5.1 running the same Say against a scratch file, exit 0, line written.
- With `tail -n 0 -F` holding the scratch file: exit 1, "Add-Content : The process cannot access the file '...locktest.log' because it is being used by another process." The sheet quotes that sentence without the scratch path.
- After the fix, same test with the reader attached: exit 0, line diverted to locktest2.log.unwritten; control writes normally.

## The fix (MEASURED)

- Commit 8145a18, pushed: Say in tools/air-nightly.ps1 and tools/deploy-episodes.ps1 tries Add-Content five times at 400 ms, then writes to air.log.unwritten, and never throws. tools/episode.mts ends with process.exit(0) after its last write (the producer waited 04:01:44Z to 04:15:45Z on 13 Sep, printed in CCXXXIII).
- Both scripts parse with 0 errors under PS 5.1 (Parser.ParseFile, one file per call); a deliberately broken file reports 1.
- Nightly gates after the change: tsc, check:replay, check:landing, check:day all exit 0. A side run of 14 Sep's four cuts exited on its own after 7 s (no model).
- NOT TESTED: a real night. Tonight's 03:40Z run on 14 Sep is the first.

## The frame (MEASURED, pages opened by this desk)

- arXiv:1504.02165, "Identifying the source of perytons at the Parkes radio telescope", E. Petroff et al., submitted 9 April 2015: "Radio emission escaping from microwave ovens during the magnetron shut-down phase neatly explain all of the observed properties of the peryton signals." / "a peryton can be generated at 1.4 GHz when a microwave oven door is opened prematurely and the telescope is at an appropriate relative angle." / "Strong out-of-band emission at 2.3--2.5 GHz associated with several peryton events".
- Wikipedia, "Peryton (astronomy)": "short man-made radio signals of a few milliseconds resembling fast radio bursts"; "First detected at the Parkes Observatory"; "The first signal occurred in 2001 but was not discovered until 2007."; "In 2015, perytons were found to be the result of premature opening of microwave oven doors at the Parkes Observatory. On March 17, 2015, three perytons were produced by experimentation by microwaving ceramic mugs filled with water and opening the door before the microwave had stopped operating."
- Frame chosen after rejecting Clever Hans, already this record's frame at CIII (property: "a correct result produced by a mechanism unrelated to the question, exposed by a test that could have failed"). Domain radio astronomy (never used); astronomy held once, 29 back.

## Caught before print, by this desk re-reading the page against the sources

- "in the building next to the dish": no opened source says where the ovens stood. Now "at the observatory itself", the encyclopaedia's "at the Parkes Observatory".
- "The astronomers at Parkes ... were advised to wait for the beep": no opened source says so; it was a joke dressed as a fact. Now the record's own line: "Wait for the oven to stop."
- "Nobody asked why the first run had been silent": false. At 03:49Z this desk read the failure code and reported it; it did not find the cause. Rewritten to say exactly that.
- "Emily Petroff": the arXiv page gives "E. Petroff"; the sheet does not expand a name no opened page gives.
- "The strange signal from the sky was lunch": the sources say mugs of water. Now "a microwave oven".
- Earlier, in a message to the keeper only, this desk said perytons ran "seventeen years since 1998"; neither source says it. The sheet uses 2001 and 2007.

## Not claimed

- That tonight's run will succeed.
- That the scheduler's own error text matched the reproduction; the scheduler kept no history.
- Where at Parkes the ovens stood.

## Added before print, 14 Sep 2026 ~12:2xZ (MEASURED this session)

- The keeper, direct, 14 Sep 00:0xZ: "publish" (over check:city's red), and at 12:19Z: "and publish too". The sheet was not released at 00:1xZ: the release script's gate change was denied by the Claude Code auto-mode classifier. By 12:19Z its section 3 ("It has not happened yet, and nobody will be watching it") was false, so it was brought up to the outcome before print. Nothing published was edited.
- Scheduled task: last run 14 Sep 03:40Z, result 0. The run's lines, from episodes/air.log.unwritten: gates passed 03:40:16-03:41:28Z; all 12 filed days read on their cuts; four cuts aired 03:43:04-03:44:12Z; both masts 03:44:25/29Z; "aired and on the masts" 03:44:31Z. Served pointer episode-2026-09-14T034138-cut1.json, four cuts, on frontiervalley.app and waypost.quest/valley at 03:46-03:47Z.
- Win32_Process at 03:46:45Z: two "tail.exe -n 0 -F episodes/air.log", parents gone, started 13 Sep 03:31:12Z (the minute this desk armed its watch) and 04:15:28Z (INFERRED this desk's re-armed watch; the sheet says only "one at 04:15"). air.log's last line before them was 13 Sep 04:15:54Z; every Say after went to air.log.unwritten.
- Stopped both at 12:19:57Z after verifying each command line; zero tails left. 106 set-aside lines appended to air.log after one marker line, byte-identical (cmp), side file renamed air.log.unwritten.appended-2026-09-14.
- Replaces the NOT TESTED line above: one real night, by accident with the watch attached. Still not claimed: that the fix holds on every night.
