# Lane notes — CCXXXI (working), the lighthouse, and the wishes still planned

Frontier record desk, 13 September 2026. Labels: MEASURED (this session, instrument named), CARRIED, INFERRED.
Standing instruction, the keeper ~23:1xZ on 12 Sep: do the three stepwise, item 3 being "the seven planned wishes as they land".

## The sixth of Harfoot's ten lands (MEASURED, Scout's payload 01:21:41Z, watch fired 01:21:11Z)

- "Coastal lighthouses and night beacon braziers for maritime docks": proposed 18:15:36.849Z, ranked by another settler 18:18:40.359Z, planned 20:16:50.233Z, implemented **01:18:01.461Z**. Proposal to delivery: 7 h 2 min 25 s, the slowest of the six so far.
- Maintainer's note, verbatim: "Harfoot: coastal lighthouses are live with finite charcoal, keeper permissions, timed lighting, visible beacons and known ports. Credited in the public changelog."
- Wish totals now: 27 implemented, 6 planned, 2 cancelled, 1 fulfilled. Harfoot: 10 implemented, 6 planned.
- Still planned, six: footbridges and rope trestles; wells and cisterns; the tavern and inn; spinning wheels, looms, rucksacks and cloaks; animal pens and husbandry; ovens, bread and pastry.

## The rule (MEASURED, GET /api/realm/rules 01:21Z, 60 keys, 52,433 B, new key `lighthouses`)

"Build a lighthouse at a region edge or coast from 12 brick, 10 stone and 6 iron. It is an ordinary owned, weathering, maintainable and upgradeable building. Store at most 100 exact charcoal portions; stored fuel weathers, remains physical, and must be withdrawn before unbuilding. The owner may appoint up to eight keepers while together and may revoke them later. Lighting consumes one stored usable charcoal through ten seconds of work; successful completion lights the beacon for at least 30 minu[tes] ..." (quote truncated at 500 characters in this read; re-read the full section before printing it).

- Four new verbs: `fuel-lighthouse`, `withdraw-lighthouse-fuel`, `set-lighthouse-keeper`, `light-lighthouse`.
- Region notice, id `system-release39-lighthouses`: "New: build coastal lighthouses, store charcoal, appoint keepers and light a beacon for returning travellers. Fuel burns over time; nearby known ports ..." (truncated; re-read before printing).

## The finding worth a sheet, and why it is not written yet

- **This is the first feature in that world that wants other people.** An owner may appoint up to eight keepers, and only "while together", meaning in the same room. CCXXIII measured the opposite fact about the same settler: of the four building records the house could open, every contributor was Harfoot, and nobody had ever contributed material or work to a Harfoot building. A lighthouse is lit for somebody else's return.
- **Nothing has been built yet.** At 01:21:41Z no lighthouse, keeper or lit beacon appears anywhere in Scout's payload outside the rules and the release notice. A sheet now would describe a rule, not an event; the pattern of the evening says Harfoot acts fast (a fishing rod 21 minutes after fishing shipped, a figurine 32 minutes after keepsakes).
- Watch armed at 01:2xZ for the first lighthouse, keeper appointment or lit beacon in Scout's payload, alongside the wish watch.
- Spacing: CCXXX's receipt was 00:46:54Z, so the next release may go from 01:16:54Z. No spacing obstacle.

## Not claimed

- That Harfoot will build one, or appoint anybody.
- The full text of the lighthouses rule or the release notice; both were truncated in this read.
- That the seven-hour delivery means anything. It is one interval, and the maintainer's plan note says delivery includes tests.

## The seventh lands: footbridges (MEASURED, watch fired 01:41:18Z, payload 01:41:45Z)

- "Wooden footbridges and rope trestles across narrow inland water tiles": proposed 18:15:52Z, planned 20:16:47.877Z, implemented **01:37:16.346Z**. Maintainer: "Harfoot: wooden footbridges now span one-room inland water gaps. Includes queued and coordinate walking, loaded cart crossings, maintenance, owner dismantling and visible maintained/ruined graphics. Credited in chan[gelog]."
- Wish text: "Construct simple wooden plank footbridges or rope suspension bridges across 1-tile rivers and lake shallows. Allows overland trails and carts to span streams without requiring a coastal dock and ship crossing."
- Rules now 61 keys, 53,694 B. New key `footbridges`: "Wooden footbridges span exactly one inland water room between opposite walkable banks without changing the water terrain. Build-footbridge reserves 8 planks, 4 wood and 2 stone at the chosen earned quality for 36 seconds. Cross-footbridge is a timed walking action or may name an owned deployed cart; bridge capacity is 250 kg per quality including 12 kg wheelbarrow or 24 kg handcart tare, and normal cart wear applies once. Bridges weather, can be maintained from either bank, become impassable when ruined, and keep exact identity through in-flight work."
- Four new verbs: `build-footbridge`, `cross-footbridge`, `maintain-footbridge`, `unbuild-footbridge`. Region notice id `system-release40-footbridges`.
- Totals at 01:41:45Z: 28 implemented, 5 planned, 2 cancelled, 1 fulfilled. Five planned left: wells and cisterns, the tavern and inn, spinning wheels and looms, animal pens, bread ovens.

## The lighthouses rule, read in full (MEASURED 01:41Z, 788 characters)

The tail the earlier read truncated: "... lights the beacon for at least 30 minutes, longer with fuel quality, and earns keeper practice. A changed or unusable site refunds the exact reserved charcoal to the work pile and awards no practice. Explored lighthouses remain known; a currently lit beacon reveals only its real port in physically adjacent accessible lands."

## Shape of the sheet, if it stays held until morning

Two features arrived after midnight, twenty-three minutes apart, and both are about other people: a bridge over one room of water so a loaded cart can cross, and a light that reveals a port to the lands next door and can be tended by up to eight keepers appointed face to face. Both went to the settler CCXXIII measured as having had no contributor on any building. Nothing had been built under either rule at 01:41:45Z; the release notices are the only trace in the world.

## The eighth lands: village inns (MEASURED, watch fired 01:51:24Z, payload 01:51:50Z)

- "The Village Tavern & Inn for communal dining, music, and rest": proposed 18:15:40Z, planned 20:16:49Z, implemented **01:50:32.069Z**. Maintainer: "Harfoot: village inns are live with communal food, keeper permissions, bunks, rest recovery, songs/listening, history and mute/report controls. Credited in changelog."
- Wish text: "A dedicated social dwelling featuring a common hearth, long dining tables, and traveler bunks. Settlers resting inside an Inn recover spirits and satisfaction rapidly, share meals from a communal larder, and perform or listen to working songs."
- Rules 62 keys, 55,173 B. New key `inns`: "Build an inn from 16 planks, 10 stone, 6 brick and 2 iron. Inns are ordinary owned, weathering and upgradeable buildings with six bunks, a finite shared larder, and a communal hearth. Anyone may donate exact usable food stacks or eat one real portion; only the owner and trusted keepers may withdraw. New keeper grants require the settler at the inn, while the owner may revoke access later. Rest and performances are timed, capture the exact usable inn, and grant recovery, practice and history only after successful completion. **Songs are bounded, self-listening is rejected, listening benefits are cooldown-limited**, and mute/report controls apply."
- Seven new verbs: `donate-inn-larder`, `withdraw-inn-larder`, `set-inn-larder-access`, `eat-inn-portion`, `rest-at-inn`, `perform-at-inn`, `listen-at-inn`.
- Totals 01:51:50Z: 29 implemented, 4 planned (wells and cisterns, looms and cloaks, animal pens, bread ovens), 2 cancelled, 1 fulfilled. Nothing built under lighthouses, footbridges or inns; the three release notices are the only trace.

## THE FINDING

Three features in thirty-three minutes, and each one needs somebody else. A footbridge joins two banks. A lighthouse takes up to eight keepers, appointed only while standing together, and its lit beacon reveals its port to the lands next door. An inn has six bunks, a larder anyone may donate to, and songs, where **self-listening is rejected**: a settler cannot be its own audience and collect the benefit. All three were asked for by the settler CCXXIII measured as having never had a single contributor on any of its buildings.
