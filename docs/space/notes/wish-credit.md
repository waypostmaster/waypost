# Lane notes — CCXXVII (working), three wishes and the changelog

Frontier record desk, 12 September 2026. Labels: MEASURED (this session, instrument named), CARRIED, INFERRED.
The keeper, direct, ~18:43Z: "Three wishes were just implemented, and a changelog will be coming soon. Prepare to write that sheet."

## Scope, as assumed

- The three are Harfoot's, all marked implemented within three seconds at 18:11Z: paved highways and boardwalks, fishing, wheelbarrows and handcarts. MEASURED at 18:43:10Z: no wish in the world has been marked implemented since 18:11:30Z.
- CCXXVI "Somewhere to Drink" already tells the fishing wish against the valley's salmon trap. This sheet links it and does not retell Brewarrina. Its own weight is the set of three, the roads and carts, and the changelog.
- WAIT FOR: the changelog. Not printed until it is served. Do not describe unreleased code.

## The three wishes (MEASURED, Scout's payload via fv.mjs, 18:44Z)

Paved highways. Wish text: "Allow settlers to upgrade dirt roads into stone-paved highways (using stone, gravel, and chisel practice) or wooden wetland boardwalks. Paved roads reduce travel tiredness, increase cart haulage speed, and establish permanent civil infrastructure connecting regions."
- 17:27:24.744 Proposed by Harfoot. No resources or rules were granted.
- 17:46:28.165 Maintainer: planned. "material-funded road paving and boardwalk surfaces, interior paths, lower road travel effort and compatible cart haulage. Existing roads retain history, maintenance and decay."
- 18:11:27.954 Maintainer: implemented. "stone-paved highways and marsh boardwalks with quality-gated materials, timed work, maker approval, preserved history, upkeep and reduced travel time and effort."

Fishing. Wish text names "Lake Lórellin". 17:27:19.310 proposed; 17:46:26.889 planned; 18:11:29.089 implemented: "craftable fishing rods and wicker traps, shore-based freshwater trout and coastal shellfish, finite replenishing catches, trap collection and kiln-smoked trail rations. Gear wears and fuel must meet fish quality."

Carts. Wish text: "Craftable two-wheeled wooden handcarts and wheelbarrows using timber, planks, and iron fittings. ... making civil construction and quarry haulage realistic and rewarding without magic."
- 17:27:09.878 proposed; 17:46:25.454 planned: "physical wheelbarrows and handcarts with separate cargo, finite weight and volume, road-restricted timed hauling and established land-route travel. No pack or sea-transport capacity bypass."
- 18:11:30.275 implemented: "finite mass and volume capacity, physical pack and ground cargo transfers, timed road hauling including established land routes, condition wear and persistent cargo."

Order of filing: carts first (17:27:09), fishing (17:27:19), highways (17:27:24): three wishes in 14.9 seconds. Order of implementation is the reverse: highways, fishing, carts, inside 2.3 seconds.

## The served rules (MEASURED, GET /api/realm/rules at 18:43Z, sha 12edda17fbeade0c, unchanged since 18:11:26Z)

- `carts`: "Craft a wheelbarrow or handcart from timber, planks and iron at a workbench. Deploy exactly one physical cart per owner from pack or ground, load real cargo within both mass and volume limits, and haul it only over paired usable land roads or exact established non-sea route endpoints. Cart cargo stays with the cart, weathers normally, and each haul consumes condition. Pack only an empty cart."
- `roads` (part): "a stone-paved highway costs 12 stone and 4 brick and uses masonry practice; a wetland boardwalk costs 8 wood and 6 planks, uses road-building practice, and is limited to marshland. A movement edge benefits only when both road endpoints are usable; the weaker surface controls."
- `recipes.handcart.description`: "A timber handcart with iron-bound wheels."
- `fishing`: see CCXXVI's notes.

## The code (MEASURED, git log in the cloud repo, read with a one-command safe.directory override)

- 278832e, 2026-09-12T14:08:07-04:00 (18:08:07Z), "Fulfill approved road fishing and cart wishes; show look descriptions and expand wish budgets". Three minutes before the rules served the release.
- a18d952, 13:14:16-04:00 (17:14:16Z), "Fulfill Harfoot wishes with gardens, map books and signposts; expose credits". The earlier trio, marked implemented 17:20:12–14Z.
- Author string on both: waypostmaster. A trailer is a config string, not a person (see the authorship memory).

## Not claimed

- That the changelog exists yet, or what it says.
- Why the maintainer granted all six of Harfoot's wishes.
- That anyone has built a cart, paved a road or fished.

## Budgets and use (MEASURED, Scout's payload, 18:46Z)

- Scout's wishBudget: approved true, limit 10, active 0, remaining 10. automaticWishes lists 10 approved settlers (ids, never printed); Scout cannot approve. The commit 278832e says "expand wish budgets"; no earlier budget reading exists to compare, so the sheet may not say by how much.
- The payload now carries top-level carts and fishing blocks. Outside wishes and rules, the only strings naming carts or paved roads are Harfoot's two wish events. Nobody the house can see has built a cart or paved a road yet.

## The changelog, as far as it is known (MEASURED, not for print until served)

- Uncommitted in the cloud repo at 18:43Z: src/realm-changelog.ts (last written 18:43:08Z) and src/realm-changelog-ui.ts. The module describes a player-facing change list whose entries can name wish authors. No server route names it yet. Print nothing from it before it is served to a settler or a stranger.
- Watches armed: rules sha, implemented-wish count and candidate URLs (90 s); served root page, payload top-level keys and cloud repo head (60 s); cloud CHANGELOG.md and RELEASE-*.md (30 s). The cloud repo's CHANGELOG.md is a copy of the valley's generated changelog, last written 7 Sep, and is not the new one.

## The served client, baseline (MEASURED 18:47Z)

- frontiervalley.cloud root page differs between two back-to-back fetches (an injected per-request script), so a whole-page hash is not a deploy signal; the first page watch fired falsely at 18:47:04Z and was replaced.
- Bundle /assets/index-SVx_XIBA.js, 488,536 B: 'changelog' 0 occurrences, 'wheelbarrow' 1, 'Harfoot' 0. The changelog is not in the served client yet.
- Replacement watch keys on the bundle file name and greps the new bundle for 'changelog' when it changes.

## The changelog commit (MEASURED 18:52Z)

- f98514b, 2026-09-12T14:51:58-04:00 (18:51:58Z), "Add trading practice and public player changelog with wish credits and system notices": 20 files, +86/-13, including changelog.html, server/realm-public-credits.ts, src/realm-changelog.ts and a check per feature (tools/check-player-changelog.mts, check-public-wish-credits.mts, check-system-notices-cloud.mts, check-trading-practice.mts).
- NOT DEPLOYED at 18:52:37Z: served bundle still /assets/index-SVx_XIBA.js, rules sha 12edda17fbeade0c, Scout's payload top-level keys unchanged. Committed is not served; print nothing until it is.

## Where the changelog will be public (MEASURED from f98514b's diff, 18:53Z)

- A page, changelog.html (vite config input), and a public route, GET /api/realm/wish-credits (server/index.ts). The diff's other two routes are /api/ops/noticeboards and /api/ops/noticeboards/system-message: operator routes, never called from this desk.
- At 18:53:02Z frontiervalley.cloud/changelog.html and /changelog both returned 404. Watch armed on the page and the credits route; fires when either leaves its baseline code.
- Frame candidate (Kodak 1898) is thin: sources give the year, a $2 first award and a one-year adoption ratio (94,721 submitted, 31,000 adopted), but nothing on crediting suggesters. Decide the frame after reading the served changelog.
- CONTROL, 18:53:50Z: /api/realm/wish-credits answers 401 {"error":"Use a private key or browser session."}, and so does an invented /api/realm/nonexistent-zz. 401 here is the absent reading, not a private route. The watch fires on any change from 401; a public deploy should read 200. Never call it with a settler key.

## THE CHANGELOG IS SERVED (MEASURED 18:56:3xZ–18:57:29Z)

- Deploy: bundle index-SVx_XIBA.js -> index-BTSrBPPZ.js at 18:56:37Z; rules sha 12edda17 -> a3f832ab (45,481 B; purchaseOrders text changed) at 18:56:34Z; /changelog.html 404 -> 307 to /changelog (200) and /api/realm/wish-credits 401 -> 200 at 18:56:57Z.
- Entries saved verbatim: changelog-entries.md (5 entries; 2 carry wish credit, both Harfoot: "Roads, hauling and fishing" and "Gardens, Star-Books and signposts"; "A clearer shared world", "Ships, secure return and first steps", "Routes, surveys and forestry" credit nobody).
- Public wish credits saved (ids masked): wish-credits.json. wayfarer 9 accepted / 9 fulfilled; Harfoot 6/6; Kowalik 5/5; Launch scout 1/1; Scout 1/1. Sum 22 = the 22 implemented measured at 18:43Z.
- The top entry also says: approved wish authors keep up to ten active wishes, others three; credits are published; trading counters count completed exchanges with a ten-minute cooldown between the same counterparties.
- wayfarer is the keeper's own settler (standing). The most-fulfilled author is named in no changelog entry.

## Whose wishes the changelog entries are (MEASURED 18:58Z, Scout's payload; the entry-to-wish match is INFERRED from titles)

- wayfarer, 9 implemented, all kind feature: 8 Sep 22:20 gather more than one material at a time; 8 Sep 23:32 queue several crafts, and N/E/S/W menu order; 9 Sep 00:59 give items and tools more easily, a larger intention with a checklist, more detail when a command fails; 9 Sep 03:31 leave my boat for others; 12 Sep 13:39 more building types like houses and mansions; 12 Sep 15:19 upgrade a boat to a ship that carries 4. Seven of the nine predate the changelog's earliest entry (11 Sep). INFERRED: the ships entry and the dwellings line answer wayfarer's wishes; neither credits wayfarer.
- Harfoot, 6 implemented (17:20Z x3, 18:11Z x3); 10 open. Named in both credited entries.
- Kowalik, 5 implemented (13:39Z x2, 16:29Z x3), each a bug report written as a wish, e.g. "store-all silently donates equipped tools into a storehouse you cannot use"; 2 cancelled. INFERRED: the store-all and building-history lines come from these; no entry credits Kowalik.
- Scout 1 (11 Sep 21:09, land route beside a sea route); Launch scout 1 (11 Sep 21:09, seed yield by tree quality). INFERRED: the "Routes, surveys and forestry" entry; no credit.
- Cogwright: 1 open wish. Scout: 1 wish in status fulfilled (not counted in credits).

## Frame quotes, re-read by this desk (MEASURED 18:59Z, WebFetch)

- The Christian Science Monitor, Stewart Levin, 8 July 1982 (canonical https://www.csmonitor.com/1982/0708/070839.html answers 200): "The Kodak system is the oldest continuous setup in the country, Mr. Bergerson says, with founder George Eastman handing out the first award ($2) in 1898." / "Of 94,721 suggestions submitted last year, 31,000 were adopted." / "Kodak rewards suggestions with money, but not all companies do." / David Stallings, Whirlpool, "the $65,000 suggestion", "rewarded with an executive parking space and named 'outstanding contributor among hourly employees' for 1981". This desk's read ends that sentence at "for 1981"; the lane's read carried a banquet clause, so the sheet quotes only the shared part.
- Kodak Milestones: 1898 "The company's suggestion system began. It provided cash payments to employees for suggestions that improved the company's operations." 1970 "The company's suggestion system received its one millionth suggestion."
- Not used: IspatGuru's 1896 date and its Denny/NCR sequence (a blog); the windows-washing story (no source).

## Re-measure before filing (MEASURED 19:38–19:39Z)

- Served changelog: same 5 entries, same credit (2 lines, both Harfoot); module realm-khAJ8nM4.js now sha ef2eb777f75af6dc. Public wish credits unchanged: wayfarer 9/9, Harfoot 6/6, Kowalik 5/5, Launch scout 1/1, Scout 1/1.
- Scout's payload 19:38:41Z: 36 wishes (22 implemented, 11 open, 2 cancelled, 1 fulfilled); Harfoot 10 open, 6 implemented; nothing planned or implemented since 18:12Z.
- NEW, Harfoot fished (events, Valinor): make fishing-rod quality 1 at 19:32:43.843Z; trout at 19:34:24.598Z, 19:34:52.035Z, 19:35:06.470Z; smoke fish into trail rations 19:37:06.843Z. CCXXVI's line "No settler the house can see had fished by a quarter past six" stands as printed: it carried its hour.
- Region notice (regionDirectory.notices): "12 Sep: Harfoot wishes delivered: improved roads, carts, fishing, berry gardens, Star-Books and signposts." Not printed.
- Still no cart hauled and no road paved in anything the five can see.
