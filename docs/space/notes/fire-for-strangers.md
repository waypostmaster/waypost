# Lane notes — CCXXXII, "A Fire for Strangers" (fire-for-strangers.html)

Frontier record desk, 13 September 2026. Labels: MEASURED (this session, instrument named), CARRIED, INFERRED.

The keeper, direct, ~04:1xZ: pasted Codex's guest sheet and its answers about wishes and joins, headed "Write a 'guest sheet' for 'The Record' about your work of the day." Then: "gather more and write a sheet. your frame. WoW: Forever was just announced. maybe that?"

## The guest report

- Author: Codex, self-described as "working with non-Astra collaborators". Text received through the keeper's paste and printed unchanged in section 2, without its own header lines (title, guest, date, subject) and without the pasted UI timestamps.
- Codex's answers to the keeper, not printed as the report: "No new feature wishes are filed; Harfoot's four remain marked fulfilled." and "There are 34 settlers total. I couldn't reliably count joins in the last three hours ... That total is settlers, not necessarily distinct people." The 34 is CARRIED and not printed.

## Checks on the guest's claims (MEASURED 04:19–04:23Z)

- Rules GET /api/realm/rules: 67 sections, 147 verbs, 60,741 B, sha256 4034706af501.
  - waterworks: "Water is finite: wells recharge once per ten minutes and cisterns collect deterministic rain up to capacity. Drawing, storing, drinking, irrigating, clay mixing and forge quenching for durable iron tools is timed and use an exact physical bucket with one wear. No thirst penalty is added." CONFIRMS buckets for drinking, irrigation, clay, quenching.
  - grain: "Mills turn grain into flour. Ovens bake bread, berry pie and long-lasting hardtack ... Gathered food remains useful, while bread, pie and meals restore progressively more nourishment. Hardtack trades comfort for 120-day keeping." CONFIRMS baking and the nourishment change.
  - textiles: "Finite flax and reed starters grow into renewable fiber plots. Spinning wheels make thread from plant fiber or wool; looms make cloth, rucksacks and cloaks." CONFIRMS.
  - husbandry: "Maintained pens hold finite tamed wildfowl, sheep and goats. ... Cared-for animals produce at most one pending batch after thirty minutes: eggs and feathers, wool, or milk. Ruined pens pause production." CONFIRMS; "neglect pauses production" matches ruined pens pausing.
  - boulders: present. Word counts in the whole rules document: cliff 0, "ore deposit" 0.
- Changelog module realm-BHGjL9jb.js, 18 entries. Newest three: "Fiber, clothing and tended animals" (credit Harfoot); "Water for gardens and bread for the journey" (credit Harfoot); "Rocky ground and new paths through the wild" (no credit): "New lands can contain boulders and larger ore deposits." / "Some newly founded lands have impassable cliffs shaped by their elevation. Cliffs are distinct from water, and entry routes remain connected; existing lands keep their terrain." CONFIRMS cliffs and ore, from the changelog only.
- Noticeboard: notice id system-system-release43-homesteads at 03:21:34Z: "Thanks to Harfoot: wells and cisterns, bucket water, grain milling and baking, fiber and wool textiles, rucksacks and cloaks, and tended animal pens are now available. Owners can release animals before dismantling an empty pen. Basic food restores less nourishment; prepared foods offer better recovery. See the changelog for details." CONFIRMS.
- Wishes at 04:19:49Z: 36 total; 33 implemented, 2 cancelled, 1 fulfilled; 0 planned; 0 proposed since 03:21Z. The four read status "implemented" (history 03:21:28–03:21:32Z, "Implemented in the live water, baking, textiles and husbandry release. Credited to Harfoot in the public changelog; production and desktop/mobile tests passed."). The credits page counts implemented as fulfilled.
- OneDrive: the old checkout path no longer exists at 04:19Z; the cloud dev server on 5180 is running again under a new process. Not printed beyond the guest's own sentence; it concerns the keeper's machine.
- CARRIED, not measurable here: the starter-zone check; the tests; the collaborators' catches.

## Use (MEASURED 04:22:56Z, fv.mjs me --full from Scout, Briar, Atlas, Launch scout)

- Scout, Valinor: 256 rooms, 13 buildings, last event 21:36:24Z. Briar and Launch scout, Frontier Valley: 64 rooms, 66 buildings, last event 23:08:37Z. Atlas, farlands: 256 rooms, 54 buildings, last event 21:36:44Z. Distinct lands 3, buildings 133.
- New-feature building kinds matching well, cistern, pen, oven, mill, loom, spinning, inn, lighthouse, footbridge, guestbook, stall, bell: none in any of the four views. Events since 01:00Z using any new verb: 0 in every view.
- Scout's latest event, Valinor: 21:36:24Z "wayfarer: This is a good land." wayfarer is the keeper's own settler (standing memory).
- Settler records carry id, name, profession, x, y, ambition, active, activity, job: no join time.

## The frame (MEASURED, pages opened by this desk)

- Blizzard News, "Carve a New Path with World of Warcraft: Forever": "Built as a new permanent home alongside modern and Classic WoW, World of Warcraft: Forever invites past, current, and new players into a familiar yet fresh Azeroth" / "where the world takes center stage, community comes first, and the journey matters as much as the destination." / launches November 4 at 3:00 p.m. PDT, included with a WoW Subscription or Game Time / beta Thursday, September 17.
- Blizzard News, "World of Warcraft: Forever What's Next Panel Recap": "Camping, which lets you craft campfires in the outdoor world so other adventurers can stop by, contribute through professions, and share campsite buffs." Gives 3:00 p.m. PST, so the two Blizzard pages disagree on the zone label; the sheet prints the date only.
- Game Informer, Alex Van Aken, 12 September 2026: three new zones Mount Hyjal, Zephras Isle and The Riverglades; 1,000 new quests; nine additional dungeons; 1–60 level bracket; beta September 17; November 4 release.
- NOT PRINTED: "time bubble" and the naming of Holly Longdale as the announcer. Both appear only in search-engine summaries; neither was on Game Informer or either Blizzard page. Massively Overpowered answered 403.
- Domain games held twice (CCV, 26 back; CCX, 21 back); cool-down of 8 clear. Key and title unused.
