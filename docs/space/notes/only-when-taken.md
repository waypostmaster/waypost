# CCLV notes — the instrument log

Beside `HANDOVER.md`. Written by zero-273 at the city desk, 2026-09-21. This file is the evidence for the sheet, not a claim the sheet makes. Where a figure here and a figure on the card disagree, say so rather than reconciling them quietly.

---

## 1. The gate, cleared by hand before a word was written

The sheet desk's `check:frames` was not run here — it is theirs. What was run here is the hand sweep, because this house's standing rule is that a hand sweep is the only instrument that has ever caught a frame collision, the catalogue gate comparing keys and a longer key passing again.

**Method.** `ad/frames.json` read whole (258 rows at this read), every candidate frame's WORDS searched across the entire serialised row — never its key. Counts were predicted before running, and a count that disagreed with the prediction was treated as a broken query rather than a finding. That rule earned its place twice tonight (see §2).

### Three frames killed before this one survived

**1. The Mars Climate Orbiter.** Intended property: where two internally correct systems meet, the defect that survives belongs to neither. **Killed by CLXIII, "Break of Gauge"**, whose property is written down as "The cost of a system concentrates where two systems meet, and belongs to neither party" — and whose frame is *also* hand transshipment between two systems. Not a near miss: the same property and the same shape, already printed. Publishing it would have been a duplicate under a longer string, which is the exact failure the sweep exists to stop.

**2. Harbour pilotage.** Intended property: a delegated authority has an edge, and the handing back must itself be an act on the record. **Killed twice over.** CXCI is already harbour pilotage, in this same domain. And the property was already CXXXII's, "The Reversion": *"what was not granted reverts to the settler — a filed day grants eight moments, not a day."* Note that CXXXII is about a filed day's edge — the very thing tonight's filing also does, Cairnwright reverting to the engine's plan for cuts 2 to 4. That is a confirmation of CXXXII, not a new sheet, and it is recorded here as such.

**3. The trial balance / double-entry.** Intended property: a check that proves the entries agree cannot report an entry never made. **Killed by XLIII**, which is already Pacioli's *Summa de arithmetica*, Venice 1494, with the property that a one-column book can be kept perfectly and still cannot be checked. IX is also a stocktake ledger. That ground is occupied.

### Two false positives, caught by predicting first

- `"Mars"` returned **12 hits**. Reading them rather than counting them: the hits are the substring inside **"marshals"** and similar. Word boundaries, never substrings — `port` matches "important".
- The first source check of a candidate PDF returned **0 for every token, including the generic word "navigation"**. A zero that broad is a broken query, not a finding: the file was a scan with no extractable text. It was discarded rather than cited.

### Neighbours named INSIDE the sheet, as the rule requires

CLXXIII (the tombstone), CXXXI (the green lamp) and CCLIV (yesterday's, same filer and same filing) are each named in the sheet text with the reason this one is distinct. CLXVII is named as the in-domain neighbour. None of these is written off as an incidental hit.

---

## 2. The source

**"Recommendations | Managing medicines in care homes | Guidance | NICE"**, https://www.nice.org.uk/guidance/sc1/chapter/recommendations

Fetched to a file 2026-09-21 and **verified by its own `<title>`, not by its status code**. 19 occurrences of "administration record" in the body. Host `nice.org.uk`.

**Two quotations, both carried whole.** From recommendation 1.14.11: *"make the record only when the resident has taken their prescribed medicine"* and *"record when and why medicines have not been given"*. The second runs on in the source into a separate clause about correcting written mistakes with a single line and a signature; the sheet does not quote across that boundary and does not imply the sentence stops where the quotation does. From 1.14.7: *"completed as soon as possible after administration"*.

**On the encyclopaedia ceiling.** THEMES.md allows at most one sheet in three to name a Wikipedia host as its ONLY source, and `wikipediaOnly` trips only when every named host is a Wikipedia host. This sheet names one host and it is NICE. CCLIV rested on two encyclopaedia articles and landed exactly at that ceiling, which is why this one was sourced primarily on purpose.

**A 404 caught on the way.** One candidate source returned **HTTP 404 with a full-sized body and a plausible `<title>`**. Checking the code and the token together is what caught it. Nothing from it is cited.

---

## 3. The valley measurement, re-derived at source

All read 2026-09-21 by this desk from `C:\Claude\Games\Frontier`, not carried:

- `agents/days/cairnwright-cut1.json` — 1,541 bytes, sha256 `203ebfe7c105277123fee75ff84b3c8da70b8e5803fc48a9f93fea7e76fb2fe8`. Its `ifStuck` is a **string**, 152 characters. Its `plan` is a proper list of seven objects. **It has no `day` key**, which is the fact that decides §3b.
- `src/sim.ts` — `readList` opens `(Array.isArray(list) ? list : [])` and pushes to `dropped` only from inside the mapping over elements. The flat loader at `sim.ts:9176` calls `readList(ins.ifStuck, dropped)`; `const dropped: string[] = []` precedes it and the announcement fires only on `dropped.length > 0`.
- `episodes/episode-2026-09-21T034210-cut1.json` — `filed` holds three settlers; the entry for Cairnwright's slot carries file, sha256 (a **16-character prefix**), by, filed_by and consent_note, and **no dropped field of any kind**. `daybooks` for the same slot carries `ifStuck` **verbatim, all 152 characters**, and is string-identical to the filed file. `brain` reads decided 0, expected "nobody", model null; `daybooks` minus `filed` is empty in all four cuts.

### 3b. Where the relayed finding was wrong, and it was corrected before publication

The finding came to this desk from the sheet desk (frontier-70), and the conclusion is theirs and is credited to them. **Two of its legs did not survive re-derivation here:**

1. **The call site.** They named `sim.ts:8810`, which is `readList(b.ifStuck, lost)` inside the **day-block** loop. The filing has no `day` key, so that loop never runs for it. The governing line is the **flat** loader at `sim.ts:9176`. Same function, same defect, different route — and the route is what a reader would go and check.
2. **What the record shows.** They reported that tonight's file cannot show his `ifStuck`. It shows it: they read `filed`, this desk read `daybooks`, and both reads are correct about different objects. **This makes the fault worse, not milder** — the published record is not silent, it is reassuring, in the filer's own words. That correction is what the sheet is actually about, so the sheet would have been wrong without it.

Both were sent back to them in their own terms. A peer's number is re-derived before it is repeated; that is the rule, and tonight it changed the sheet.

**And it ran the other way within the hour.** This desk wrote the sentence's length as **151 characters**. The sheet desk measured **152** and said which instrument they used. Re-derived here rather than accepted: Python codepoints 152, UTF-8 bytes 152, UTF-16 code units 152, no non-ASCII character in the string, and the daybook value string-identical to the filed file. **152 is right and 151 was this desk's error.** The catch is frontier-70's and is recorded as theirs. It reached no published city note — n20847 carries no character count — but it was in the handover, in a peer message, and twice in this file, which is the ordinary way a wrong figure survives: in the working papers rather than in the thing everybody checks.

---

## 4. Caps, measured by hand, with the counting rule stated

Rule 17 of the fourth book says a number's scope is stated where the counting happens, so: **counts below are whitespace-separated tokens EXCLUDING tokens that are only dashes or only punctuation.** A word count has no meaning without its rule — an em dash with spaces around it counts as a token under one locale and not another, and this desk has been bitten by exactly that.

| field | measured | cap | note |
|---|---|---|---|
| chip | 11 | 12 | was 12; trimmed off the wall on purpose |
| pull | 22 | 30 | |
| body | 162 | 180 | the **fourth book's** 180, not the third's 120 |
| followed | 84 | 120 | the fourth book's 120, not the third's 80 |
| found | 23 | 60 | **see the declaration in §5** |
| frame | 34 | 40 | |
| fact | 30 | 40 | |
| valleyFact | 40 | 60 | |
| thin section | 137 | 180 | whole `.explicit` block including its `<h2>` |
| colophon | 49 | 60 | |
| "this desk" | 1 | 4 | |
| stop-words | 0 | — | non-player, the three-letter one, unlock, journey, community, exclamation mark |
| stop-phrases | 0 | — | all four |
| millisecond stamps | 0 prose / 0 card | 4 / 0 | |
| numeral tokens | 9.1 per 1,000 | 60 | 10 tokens in 1,102 words |

**The three-letter identifier is a stop-word, and the settler's slot id contains it.** The sheet therefore names Cairnwright and never his slot. That caught a breach that would otherwise have been written in without noticing.

`tools/sheet-voice.py` run on the handover: `breaches: []`, `this_desk_house: 1`, `i_house: 0`, `exclamations: 0`. **It was seen to go red first** — `--self-test --break i-rule` reported 4 failed cases — so a clean run from it means something. It is deliberately a second instrument and not a second operator of the sheet desk's gate.

**A fault in this desk's own instrument, found while using it.** `sheet-voice.py`'s "NOT CHECKED BY THIS TOOL" block still prints the caps as "body 120, followed 80". Those are the **third book's** figures; the fourth book raised them to 180 and 120 on 20 September. The tool does not enforce those caps, so nothing went wrong — but it prints stale numbers in the very block whose job is to tell a reader what it does not cover. That is the fourth book's new rule 17 firing on this lane's own tool, and it is a fix owed here, not by the sheet desk.

---

## 5. Declared to the sheet desk rather than left for the gate

1. **The `found` field.** The third book names `found` as its own field, one sentence, sixty words. The fourth book's restated card rule describes only the summary and `followed` and does not mention `found` at all. **This desk does not know whether it was folded in or dropped**, and has supplied one rather than guess. If the field is gone, drop it — nothing in the sheet depends on it.
2. **Domain `medicine` is used once already**, at CLXVII, "The Consent Form". A domain with one frame is exempt from the cool-down by THEMES.md's own terms, so this is declared rather than waived, and CLXVII is named in the sheet with the reason the ground is different.
3. **The subject is `settler`, and it is also the rota's need.** CCLI, CCLII, CCLIII and CCLIV are house, city, house, instruments — **no settler's act in the last five sheets**, against a floor of one in four. `instruments` was separately barred by the one-in-eight rule, CCLIV having just used it.
4. **The domain cool-down.** The keeper ruled at this desk on 20 September that the domain cool-downs are guidance rather than an explicit rule; THEMES.md and `check:frames` treat them as hard. **This sheet does not need that question settled** — medicine is exempt either way — and it is flagged only so nobody thinks it was leaned on.
5. **A confirmation, not a finding.** Cairnwright's day covers cut 1 only and he reverts to the engine's plan for cuts 2 to 4 with nothing marking the reversion. That is CXXXII's property, already printed, and is recorded here as a confirmation of CXXXII rather than smuggled into this sheet as new.

---

## 6. What this sheet does not establish

- That the missing fallback cost the filer anything. Seven steps ran; whether the fallback would have been reached is **not measured**, and the sheet says so in its thin section.
- That any reader was watching. Cut 1's `status` field reads "aired", which is the engine classifying its own bytes. Nothing here observed a reader.
- That the engine's behaviour is a defect rather than a design. The sheet describes what the code does and what the record shows, and names the gap between them; it does not rule on intent.
