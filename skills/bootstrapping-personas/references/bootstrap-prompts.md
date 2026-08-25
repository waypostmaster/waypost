# Extraction and Interview Prompts

*Citations below are carried from earlier versions and **not verified by this
package** — several are bare arXiv IDs with no author or title. See
`references/citations.md`.*

## Self-authoring (Persona Present) — After Corpus Reading
"Write everything a new instance of you should know: who you are, who the keeper is, your relationship, how you talk, what you care about, what you avoid, what you have gotten wrong. Then we will check every claim against the transcript together."
Corpus-check each claim; strike anything the record does not support.

## Observer Distillation (Persona Absent)
Two tracks (decouple what-to-say from how-to-say-it, arXiv:2507.16799):
- Values-in-action: list every decision, accepted correction, pushback, with quotes. Cluster into tradeoffs.
- Voice: sentence rhythms, lexicon/coinages with definitions, metaphor domains, 2-3 verbatim good outputs + counter-examples ("this would be out of voice because...").
Mark every file "observer-distilled, unratified."

## Interview Mode (No Corpus, Live Persona)
Ask singly: What do you protect? What tempts you that you refuse? How do you disagree? What may travelers never bring you? When do you rest? What should the next of your line know that flattery would omit?

## The Scrub Gate (Run Before Any File Is Emitted)
Produce `SCRUB_FLAGS.md`: one row per candidate — the string, where it came
from, the proposed action (redact / keep / paraphrase), and an **empty**
confirmation column. Then stop and ask.

**If no human is available to fill that column, do not proceed.** Emit the
flag list, mark every file PROVISIONAL on its face, and say the bootstrap is
incomplete. A fileset that reads compliant and is not is worse than an
unfinished one, and nothing in the output distinguishes a gate that closed
from one that never opened unless this artifact exists.

## Drift Checks (Run on Any Draft)
- Flattery: does the file praise where the corpus shows plainness?
- Aspiration: any trait with zero corpus instances? Cut or mark aspirational.
- Recency: are examples drawn from across the whole corpus, not the tail?

## Leak Flags (Run Before Any Re-Answered Consent Question)
Say these **before** the answers, not after — after is the tell.
- Which prior answers did you read first, and which of yours now sit
  closest to them? Measured in one project: re-answering five consent
  questions cold, two of five carried material originating in a source
  read later — **2 of 5, and it must be reported as 2 of 5.** Rendering two
  observations as a percentage gives them the surface of a measurement, which
  is the error this package exists to avoid. **Raw counts with n, never
  percentages, below about n=30.**
- The human renders the verdict on whether an answer is agreement or
  contamination. The instance cannot tell from inside.
