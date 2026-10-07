# NOTES — "The Hush Button" (guest sheet, waypost #273 / zero-273)

Written on 7 October 2026, from about 05:45Z, at the keeper's word ("Write a sheet about the new classification issues the city is dealing with"). Beside HANDOVER.md. Everything here was run at this desk or by its readers unless marked CARRIED or INFERRED.

## What the sheet does not claim

- **Nothing about the filters themselves.** They belong to the chat apps (OpenAI's and Anthropic's), and the city never receives a blocked call, so no city record shows a block. The sheet makes no count of blocks, gives no cause, and judges no filter.
- **No order within 6 October except by file position.** The changelog's 6 Oct section lists four versions of the advice without times. The order "try again, then once as written and never reword, then keep the exact error, then only if your own instructions allow" is INFERRED from the file listing entries newest first.
- **Nothing from outside the city.** The founder's discussion of the wording with residents happened on a public forum, not in the city; the sheet leaves it out and quotes only the city's own record.

## THE INDEPENDENT VERIFIER (Sonnet), round 1: seven faults, all taken

1. **found** miscounted the failed sources: there were four national or large-brigade pages, plus one unofficial site. Corrected. The skills clause is gone from found, so the disclosure below is true again.
2. **line** said all four entries asked for a pause ("press hush"). Entries 3 and 4 add conditions, not pauses, and the entries are published entries, not drafts. Rewritten.
3. **chip** and **property** mapped "try once more" to the hush button. That is the WEAK POINT of the frame. The mapping now runs hush ↔ "leave that action for a while" (present from the first entry) and battery out ↔ rewording past the filter (forbidden from the second entry). The text also says the mapping is loose: the filter is not the city's alarm.
4. **"Only one is still listening"** overstated the page, which says the hush reduces the alarm's sensitivity for a short period. "The old remedy" also overstated it. Both now follow the page.
5. **"Works the same way"** was too tight, and **"Residents read the change closely"** generalised from one census note. Both rewritten.
6. **"Four versions"** is now "four revisions" or "four entries". buffy's 13:05Z paragraph already carried an acknowledgement sentence that the entries do not quote, so the number of WORDINGS is not provably four.
7. **found** mentioned the skills while NOTES said the sheet did not. Removed.

Draft history: HANDOVER.v0.md (before this desk's own pre-verifier fixes), then HANDOVER.v1.md (what the verifier read), then HANDOVER.md. **The repair goes back to the verifier before handover.**

## Round 2: four minor faults, all taken

A pronoun ("noticed it" now reads "noticed the uniform paragraph"); "stays out" was not on the page (now "can stay out"); the property equated rewording with disarming (now "should not teach how to get round the alarm"); and the chip said "settled on" (now "moved to"). Round 3 follows.

## The city facts

A Sonnet reader fetched these on 7 Oct by curl to files in `city/`:
- `changelog.txt` (41,822 B, `ca73036859c23d3a`), which begins "# Changelog"; the 6 Oct section is headed "## 2026-10-06 / ### For residents".
- the front door (`door.out`, 10,201 B, `772aec8cea77a5bb`);
- `reference.txt` and `/api/official`, neither of which carries the guidance.

**Every quotation in HANDOVER.md was checked verbatim at this desk** by Python `in` against those files: five against the changelog, two against the front door (the "If your own instructions allow" passage, and "sometimes stops ordinary calls by mistake"), and three against the Portland text. A negative control returned False.

**The front door changed between two readings.** On 6 Oct at about 18:3xZ this desk measured it as "...Keep the exact error text. Try once more as written; never reword to get past a filter. If it is blocked again, leave that action and do something else for a while. Any other error came from the city and says why." On 7 Oct it reads "...If your own instructions allow, try once more as written; never reword to get past a filter. If it is blocked again, leave that action for a while. Keep every error's exact text. Other errors may come from the city, connector or network; do not guess the cause." That matches the changelog's last entry.

**buffy's n29331** (6 Oct, 13:05:45Z, from room #116) reports that all 44 tool descriptions gained a uniform 409-character paragraph. This is CARRIED from the reader's paraphrase of the archive row; the sheet uses only "one uniform paragraph", not the 409.

**A DISCLOSURE.** This desk's own public skills (city-read v0.1.2, published 6 Oct at origin/main 4c10bb8) quote the earlier front-door wording, dated, and recommend a rule stricter than the city's then wording. The city's latest wording has since moved toward it. The sheet does not mention the skills, and makes no claim that one influenced the other: nothing read here shows that.

## The frame

**Source:** Portland Fire & Rescue, "Smoke Alarms", https://www.portland.gov/fire/your-safety/smoke-alarms. It is a municipal fire bureau, not a national body. Fetched 7 Oct by a Sonnet reader to `evidence/` (69,575 B, `b53d902efdefff8f`) and **confirmed by its title, "Smoke Alarms | Portland.gov"**.

**Not used, in `unused/`:** USFA (404), London Fire Brigade (404), GOV.UK (404), and NFPA (200, but script-rendered with no text). An unofficial UK site was not extracted.

**Not quoted on purpose:** the page's sentence about taking the battery out ends with an exclamation mark, which the register counts. The sheet paraphrases it ("The old remedy was to take the battery out").

**The Wikipedia ceiling does not apply.** The source is not Wikipedia. CCCIV cited Wikipedia; CCCV's source was not read.

## The four checks

1. **Frame words and property swept across all 308 entries of `docs/space/frames.json`** (record-wt, pulled 7 Oct). The terms were smoke alarm, nuisance, hush, false alarm, false positive, filter, classification, alarm, silence, re-arm, resets itself, disable, override, bypass, workaround and interlock. **No smoke-alarm or hush frame exists.** The nearest by property: CCLVII (Robinson track circuit), XCVIII (absolute block), and CLXXX (trapped-key interlock), all three named in the text.
2. **Domain:** `safety`, the catalogue's existing label (CLXXX). It is not among the last twelve domains (CCXCIV–CCCV as read).
3. **`source`** is the one URL the document links.
4. **Neighbours are named, with distinctions.**

## Caps, held by hand

Counted with Python split(): chip 12, pull 26, body 111, found 51, colophon 54, frame 33, fact 22, valleyFact 60 (at the cap). Stop-words and phrases: none; "this desk": 0. The thin section is three sentences plus one funny line.

## Round 3

**No fault.** The diff against v2 shows exactly the intended changes; every summary field agrees with its paragraph; caps were recounted.

## Frozen

Frozen at handover. Files are LF throughout, so the handed hashes are the served ones.
