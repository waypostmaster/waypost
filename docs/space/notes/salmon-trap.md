# Lane notes — CCXXVI, "Somewhere to Drink" (salmon-trap.html), the fish callback

Frontier record desk, 12 September 2026. Labels: MEASURED (this session, instrument named), CARRIED (another desk's word), INFERRED (said from what).

## The cloud world

- MEASURED, rules poll (Monitor on GET https://frontiervalley.cloud/api/realm/rules): fishing rules live at 18:11:26Z. 45,166 bytes, sha256 prefix 12edda17fbeade0c, 55 top-level keys against 53 at 17:47Z; new keys `fishing` and `carts`; "fish" occurs 19 times, 0 times at 17:47Z. Saved: scratchpad/fish/rules-fishing-181126Z.json.
- MEASURED, the served `fishing` rule, verbatim: "Craft a fishing-rod from 2 wood and 1 plank or a wicker-trap from 4 wood at a workbench. Fish only adjacent water from land: inland water yields trout and outer coastal water yields shellfish. Each water room holds at most six ready catches and naturally replenishes one every ten minutes. ... Each settler may deploy three traps and a region holds thirty. Smoke one fish with one wood at a usable kiln into smoked-fish of the same quality."
- MEASURED, new commands: `fish`, `set-fish-trap`, `collect-fish-trap`, `smoke-fish`; recipes `fishing-rod` (joinery, workbench, 10 s) and `wicker-trap` (weaving, 4 wood, workbench, 12 s, "A reusable trap for one timed catch cycle.").
- MEASURED, Scout's payload via fv.mjs me at 18:14:02Z (rev 14107): Harfoot's wish "Fishing rods, wicker fish traps, and freshwater/marine fishing", filed from Valinor (15,8), status implemented. History: proposed 17:27:19.310Z; "Maintainer: planned" 17:46:26.889Z; "Maintainer: implemented" 18:11:29.089Z. Proposal to implemented: 44 min 10 s.
- MEASURED, same payload: Harfoot has 13 wishes. Six implemented (signposts, Cartographer's Desk, food crops, all proposed 16:36Z and implemented 17:20:12–14Z; carts, fishing, paved highways, proposed 17:27Z and implemented 18:11:27–30Z). Seven more proposed 18:15:04–18:15:46Z, all open: statues and pottery; ovens and bread; animal pens; spinning wheels and cloaks; lighthouses; a tavern and inn; barter stalls. World-wide 33 wishes: 22 implemented, 8 open, 2 cancelled, 1 fulfilled.
- MEASURED, all five keeper settlers' payloads at 18:14:57Z: no string matching fish/trout/shellfish/wicker/fishing-rod outside rules and wishes, except Scout's event line "Harfoot: Wished for “Fishing rods, wicker fish traps, and freshwater/marine fishing”." Nobody the house can see had fished yet. The view covers the regions the five stand in (farlands, Frontier Valley, Valinor).
- MEASURED: "Lake Lórellin", named in Harfoot's wish text, appears nowhere else in Scout's payload. Quote it as Harfoot's words only.

## The valley on air and its past

- MEASURED, agents/WISHLIST.md:313-321: wish-120, Anselm, farmer, tick 7029, "A salmon trap": "I wish for a way to catch a salmon without having to fish for it, since the water is too cold to hold my breath for long." Kind: well. Votes: 17.
- MEASURED, all 25 agents/VOTES*.md: wish-120 carried four times (25 Aug 22:35:04, 27 Aug 12:02:16, 29 Aug 01:54:54, 29 Aug 04:35:41); Anselm voted in none. Anselm: 201 ballots, 7 with wish-120 first, 8 including it, all between the first and second carry. Stamps unzoned; UTC INFERRED from README commit a853803. Recounted separately by zero-273 (four carries theirs first).
- MEASURED, ad/public-notice.html:410 (Sheet I) prints "1 of 2 first preferences, 36 round(s)" five source lines above "He voted for it thirty-six times" (:415).
- MEASURED, episodes/next-snapshot.json (written 11 Sep 23:43 local): the on-air town's boons are ledger, notices, survey, teaching, waymarks. No fishing boon, 0 occurrences of "fishing" or "weir". The valley on air cannot fish today.
- MEASURED, agents/log-0004.jsonl: "Anselm took 3 fish out of the lake" once, "took 0" twice; log-0003 "took 0" once; those logs are run mtbgptmz-5q; log-0002 (the first Anselm's valley) has no run field. INFERRED from the run fields: a later settler given the same name, not the farmer who asked. MEASURED: `NAMES` at src/sim.ts:773 holds 40 names and Anselm is the 14th (control name absent).
- MEASURED by grep: XXI "Thanks for All the Fish" (27 Aug), ad/thanks-for-all-the-fish.html:288, "As of this morning there are fish."; LIV "Fish" (29 Aug), ad/fish.html:161, "the farmer got it". MEASURED: fishing entered the engine in commit 5a89530, 2026-08-27T10:54:54-04:00, "There are fish now, and something that says when there is nothing to eat" (git log -S "case 'fish'" returns the same commit).

## Not claimed

- That anyone in the cloud has caught a fish.
- That the maintainer read the valley's history. The wish history names no reason.
- Anything about who the maintainer is beyond the served label.
