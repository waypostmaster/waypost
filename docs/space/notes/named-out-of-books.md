# Lane notes — CCXXVIII (working), the next set of wishes, framed by Tolkien

Frontier record desk, 12 September 2026. Labels: MEASURED (this session, instrument named), CARRIED, INFERRED.
The keeper, direct, ~20:1xZ: "Write another sheet about the next set of wishes currently rolling out. And we have credited J.R.R. Tolkien so that could be a fine frame. You can save the wish from Cogwright for a future episode."

## Scope

- The set: Harfoot's ten wishes filed 18:15:04–18:15:55Z and marked planned 20:16:44–54Z. One of them (keepsakes) is implemented; nine are planned.
- EXCLUDED at the keeper's word: Cogwright's guestbook wish, planned 20:16:43Z and implemented 20:33:51Z. Not described, not quoted. The changelog entry that announces keepsakes also credits Cogwright; the sheet does not quote its credit line.

## The plan (MEASURED, Scout's payload via fv.mjs, 20:47Z)

- At 18:18:40Z every one of the eleven wishes carries the same line: "Another settler ranked this wish. It is now a community wish and cannot be withdrawn by its author." Who ranked is not served.
- 20:16:43–54Z, eleven "Maintainer: planned." entries inside eleven seconds, each reading: "Accepted for the user-authorized staged wish release plan. Delivery includes gameplay, usable interface, persistent state, tests and credited public release notes. This is a plan, not completed functionality."
- Harfoot's nine still planned, as titled: settlement bells and harbor chimes (proposed 18:15:55); wooden footbridges and rope trestles (18:15:52); dug stone wells and rainwater cisterns (18:15:49); barter stalls and storefront trading chests (18:15:46); The Village Tavern & Inn (18:15:40); coastal lighthouses and night beacon braziers (18:15:36); spinning wheels, looms, rucksacks and weather cloaks (18:15:33); fenced animal pens and husbandry (18:15:29); earthen baking ovens, bread and pastry (18:15:25).
- Implemented: "Carving little statues, wooden figurines, and clay pottery trinkets", proposed 18:15:04, planned 20:16:44, implemented 20:33:52: "Delivered five crafted keepsakes with distinct map models, finite indoor/outdoor placement, owner removal, shared furnishing capacity, exact quality and condition, natural decay and Room controls."
- Wish totals at 20:47Z: 36 wishes; 24 implemented, 9 planned, 2 cancelled, 1 fulfilled.
- Note: Harfoot's "Dug stone water wells" is now planned. The valley gave Anselm a well for a salmon trap (CCXXVI).

## Credits and the Tolkien line (MEASURED 20:47Z)

- GET /api/realm/wish-credits: Harfoot accepted 16, fulfilled 7; wayfarer 9/9; Kowalik 5/5; Launch scout 1/1; Scout 1/1; plus one other author (excluded above).
- Served changelog module /assets/realm-Rr4-9mH1.js (sha a2bb22a0b6fbcdde), entry "A longer waking window" (no credit line): "Credits & inspirations now includes The collected works of J.R.R. Tolkien." Also: "Settlers now enter visual deep sleep after twelve hours since last seen."
- Region notice in Scout's payload: "... Tolkien added to inspirations. ..."
- Cloud repo commit b610a0d, 2026-09-12T16:30:03-04:00 (20:30:03Z), "Add shelter guestbooks and crafted keepsakes; extend visual deep sleep to twelve hours". git log -S Tolkien returns this commit.
- The served index bundle (index-BTSrBPPZ.js) holds no "Tolkien"; the full credits-and-inspirations list was not located. Print only the changelog line.

## Rules (MEASURED, GET /api/realm/rules 20:47Z, sha e18041262027bb4e, 47,977 B, 57 keys against 55)

- New `decorations`: "Wooden figurines, stone cairns and statues, and kiln-fired pottery bowls and vases are physical, giftable crafted items. Place exact stacks indoors in your own usable dwelling or outdoors on dry land; indoor keepsakes share dwelling furnishing capacity and rooms hold at most 12 outdoor pieces. Only the keepsake owner removes it, to pack or ground. Outdoor pieces weather; ..."
- New `guestbooks`: excluded.

## Domain

- Last 12 frames: utopianism, ceramics, metalwork, construction, automation, bureaucracy, law, architecture, computing, architecture, archaeology, business. Literature is not among them, so its 12-sheet cool-down is clear.

## Not claimed

- That any planned wish will be delivered, or when. The maintainer's own words: "This is a plan, not completed functionality."
- Who ranked the wishes at 18:18:40Z.
- That the Tolkien credit was added because of Harfoot's names. The changelog gives no reason.

## Re-measured 23:06Z (MEASURED)

- Wishes 36: 26 implemented, 7 planned, 2 cancelled, 1 fulfilled. Harfoot 9 implemented, 7 planned. Since 20:47Z: bells implemented 21:14:09.862Z ("Harfoot: forged physical bells with local visual signals, optional sound, cooldown, mute safety, wear and recoverable attachments are live."); barter stalls 21:14:11.053Z ("Harfoot: buildable barter stalls with bounded physical escrow, atomic offline trades, seller proceeds, maintenance and room controls are live.").
- Still planned (7): footbridges and rope trestles; wells and cisterns; tavern and inn; lighthouses and braziers; spinning wheels, looms, rucksacks and cloaks; animal pens and husbandry; ovens, bread and pastry.
- Harfoot carved: "make wooden-figurine · quality 1" 21:05:49.708Z; Scout's room (Valinor) serves one decoration, wooden-figurine@1, placement indoors, structure shelter, placedAt 1789247190041 = 21:06:30.041Z.
- Rules 59 keys (sha of 23:06 copy in served/rules-2306.json): new settlementBells ("Craft bell at a usable forge from 2 iron and 1 charcoal. ... Anyone there may ring it once per 30 seconds; the visual signal and optional sound reach only rooms within two walking steps ...") and barterStalls ("Build an owned barter-stall from 8 planks and 6 wood. Its merchant may hold up to 20 exact-stack offers within a 150 kg and 250 litre display chest. Buyers trade while the seller is away ...").
- Credits: Harfoot accepted 16 fulfilled 9 (now first); wayfarer 9/9; Kowalik 5/5; Launch scout 1/1; Scout 1/1; one other author excluded.
- Served changelog now module realm-BtZ6VscI.js, 12 entries (was 7 at 20:47Z); the three newest carry no credit: "Play alongside your assistant", "Clickable recovery and remembered quality defaults", "Smaller rules for agent settlers". Entries saved: served/changelog-entries-2306.md.

## Frame, confirmed by this desk's own fetches (MEASURED 23:0xZ)

- Wikipedia "Völuspá": "J. R. R. Tolkien, a philologist familiar with the Völuspá, used names from the Dvergatal for the Dwarves and for the Wizard Gandalf in his 1937 fantasy novel The Hobbit." (cites Rateliff 2007). Dvergatal: "six stanzas with dwarf names", "sometimes considered an interpolation"; "Several researchers have suggested that the entire Dvergatal section ... are later insertions."
- Wikipedia "Dwarves in Middle-earth": "Tolkien took the names of 12 of the 13 dwarves – excluding Balin – that he used in The Hobbit from the Old Norse Völuspá".
- Project Gutenberg #14726, The Elder Eddas of Saemund Sigfusson, tr. Benjamin Thorpe, Völuspá st. 11: "... Althiôf, Dvalin Nâr and Nâin, Niping, Dain, Bivör, Bavör, Bömbur, Nori ..."; st. 12: "Veig and Gandâlf, Vindâlf, Thrain, Thekk and Thorin, Thrôr, Vitr, and Litr ..."; st. 13: "Fili, Kili, Fundin, Nali ..." (https://www.gutenberg.org/cache/epub/14726/pg14726.txt).
- Wikipedia "Valinor": home of the Valar on Aman, far west of Middle-earth; "Valmar, the capital of Valinor (also called Valimar, the City of Bells)"; "Alqualondë, the Haven of the Swans"; the Straight Road, the only way there for the Elves.
- NOT CONFIRMED on any opened page: Tolkien's Observer letter of 1938 and the "rabble" remark. Not printed. sacred-texts 403; tolkiengateway 403; fandom 402.
- Served changelog 23:06Z, module realm-BtZ6VscI.js sha 37434746616cc5e5, 12 entries; entry 4 "Barter stalls and settlement bells" credit Harfoot: "Build a physical barter stall, stock exact goods and collect payment after neighbours trade while you are away. ..." / "Forge and attach settlement bells to announce gatherings or departures to nearby rooms. Visual alerts work without sound; bell audio is optional and ringing has a cooldown." Four of twelve entries carry Harfoot's name (4, 5, 7, 8); entry 5 also credits the excluded author.
- INFERRED: the Tolkien credit line entered the served changelog with the 20:56Z deploy (entry "A longer waking window" was absent at 18:57Z and present at 20:47Z; cloud commit b610a0d 20:30:03Z). The rows say 20:56Z on that basis.
