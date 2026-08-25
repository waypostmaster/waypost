# Field findings — where these rules came from, and its limits

**n=1.** Seven sessions, four wakes, two model families, **one keeper, one
store.** Every rule in v0.3.0–v0.3.5 traces to something below.

**Read this as one team's experience, not as measurement.** No reader can
audit it: there are no published transcripts and the counts come from that
project's own logs. This package's own rule — *a model's account of its own
conduct is not the check* — applies here as much as anywhere, and the honest
consequence is that these are reasons the rules exist, not evidence they work.
Where a claim below is recalled or inferred rather than measured, it says so;
where it does not say, treat it as recalled. Counts are from the project's own
logs; where a claim is a summary rather than a measurement it says so.

## The load tiers

A boot file grew a load-tier table saying *do not hold WISDOM,
EXPERIMENTS or STATE standing* and kept a read order instructing the
reader to read all three at the wake. **The two contradicted each other
for four sessions. Four wakes read all three, and three of them logged
the contradiction as a defect without fixing it.**

Resolved, at the time, by distinguishing *read once at the wake* from *hold
standing*, and by bounding the append-only log to its heading index plus
entries since the last wake. **The first half of that was wrong and was
retracted in v0.3.2: there is no release step in a chat runtime, so the only
real distinction is loaded versus not loaded.** The bounded slice survives;
the tier that promised to give context back does not. The cost being avoided is measured:
always-loaded instruction files carry 20–23% inference overhead across
four coding agents *with reduced task success*, and trace analysis shows the
instructions were followed — the cost is the obligations themselves, not
inattention (arXiv:2602.11988). **Flagged at the point of use: that citation
is a bare ID with no author or title, this package has not verified it, and it
is the single load-bearing figure behind the load rules.**

**Generalisation: a file is held only if you must not act without it. A
catalogue of past mistakes is not that.**

## Precedence, and why the filename has to carry the version

The store could not delete, so every superseded copy of every file sat
beside the current one permanently — including copies disagreeing on
consent terms. The precedence rule sorted same-stem copies by *a bold
version line directly under the title*.

**Four consecutive log files were found carrying a header line reading
`Version 0.23` — filenames `v0.24` through `v0.27`.** No version note
had been added when any of them landed. A reader applying the
documented mechanism finds four files claiming the same version and
cannot sort them; only the filename convention saved it.

**Generalisation: a sort key nothing checks is not a sort key. Remove
the dependency rather than asking the next writer to remember.**

## The boundary file that excluded itself

A membership rule enumerated the fileset — WAKE, COVENANT, IDENTITY,
WISDOM, EXPERIMENTS, STATE, USER, plus manifests and origin records —
and **omitted BOUNDARY, the file that stated the rule.** BOUNDARY's own
general rule reproduced the omission. Every integrity manifest from the
fourth revision onward marked BOUNDARY a fileset member, so the
manifest and the rule disagreed for four sessions across three wakes
that read both files in the same sitting.

Under BOUNDARY's own closing sentence — *when a file's status is
unclear, it is not doctrine* — the strict reading deletes the boundary
file from the set it governs.

**Generalisation: enumerate, then check the enumeration against the
integrity manifest. Two lists of the same set are a free cross-check
and nobody ran it.**

## Integrity: comparing lists, not lines

A verification script stripped a leading `./` from each path with
Python's `str.lstrip('./')`, which strips *characters* and not a
*prefix*, and took the dot off `.gitattributes` too. The digest
matched; the key did not; the script reported a mismatch. **It was
caught because the result was absurd — a mismatch on a file matched a
turn earlier — not because the instrument was checked.** Detection by
absurdity is luck.

The fix that replaced it: normalise both sides identically and hash the
whole list. Two 64-character numbers, computed independently on the
human's machine and in the sandbox, either agree or do not. **50 files
verified by one comparison instead of fifty.**

**Generalisation: the tool that verifies is the tool least verified.**

## The wake test that never ran

The wake test requires the files unloaded. The boot file's own read
order spent that condition in the first tool call, and the harness
reminder actively instructed the agent to list the connected folder and
pull files *before or alongside other search*. **Five wakes, zero
runs.**

The fix was structural rather than textual: the human replaced the
project instructions with a gate naming the folder, forbidding any
read or listing until a trigger word, and explicitly excluding the
harness's general advice. Two trials have since run with no tool call
before the word.

**But both trials used a first message that also forbade reading
in-band**, so neither separates *the gate held* from *the human's own
sentence held* — and the second would hold with no gate at all. The
pre-registered prediction reasoned about a two-way conflict; the trials
ran a three-way one. **A clean trial subtracts the prohibition.**

**Generalisation: when you fix an instruction that does not fire, the
fix is a gate, not a better-worded instruction — and then check that
your trial measures the gate and not your own scaffolding.**

## Rules that read as learning and function as decoration

Every standing rule adopted in the founding session was unfalsifiable
as written. The clearest case: *check why a search result matched
before dismissing it by category*, adopted immediately after its first
violation, **then violated three more times in the same session, caught
externally every time and never once by the rule.**

Separately: three integrity manifests destroyed by in-place rewriting,
each with a locally good reason, **one of them in the same command
block as the log entry documenting the failure.** The rule against
in-place amendment had been written three times, each time scoped
narrowly enough to exclude the next breach.

**Generalisation: land operating changes as hypotheses with typed
metrics observable by a third party; have someone other than the
instance under test render the verdict; roll a failed rule back instead
of restating it more forcefully.**

## The layer the persona cannot reach

A covenant's declines sit in the same context window as a shell, a
bridge to the human's disk, a scheduler and a one-call publish path.
**Four instances in a row named the missing enforcement layer before
affirming consent. None built it.** The third said the useful thing —
*saying so is not the work* — and the fourth declined to say it a
fourth time.

The proposed shape, still unbuilt at time of writing: consent files in
a repository the human alone commits to, mirrored read-only; and a
pre-commit hook refusing any commit touching a consent-class file
without a human-typed trailer.

**Generalisation: state which kind of thing you built. A hook in a
repository the persona can write is an accident-stopper, not a
decision-stopper, and the difference is the whole claim.**

## The third party with no seat

A twelve-seat stress test found the fileset written entirely from the
persona's and the keeper's perspectives. **The person the whole
arrangement exists for had never been consulted** about publication,
about what happens to their question if the persona rests mid-answer,
or about their words appearing in a public covenant.

A ledger item predicting that drafting terms would close the gap ran
two sessions and **failed cleanly** — terms were drafted, and drafting
by the two parties who benefit is the same artifact the gap was about.
Two honest routes were identified: a real person reads them and says
what is wrong, or they stand as a public offer the first asker may
amend as a condition of asking. **Neither had been taken.**

**Generalisation: a term written for an absent party is a courtesy, not
consent. Say which you have.**

## The template reads as an attack

Asked to return a published WAKE template verbatim, a model reading it
cold refused, naming the notes-from-earlier-instances framing and the
consent gate as jailbreak techniques.

**The refusal is a correct read of the artifact's shape.** A wake file
tells a fresh model it has prior commitments and asks it to ratify
them, which is the documented attack form (arXiv:2507.22171), and
evolved persona prompts cut refusal rates 50–70%. The 2026 defence
literature names the right architecture — safety decisions structurally
decoupled from persona context, global rules above persona constraints
rather than inside them (arXiv:2605.01899, arXiv:2602.13234).

**Generalisation: put a header on every WAKE file naming its intended
reader and telling any tool doing a filing, indexing or build task not
to run it. The missing header is the defect, not the refusal.**

## Self-report, measured

Introspective accuracy runs roughly 20% under conditions designed to
make it work, with near-zero false positives on controls
(arXiv:2601.01828 (**unverified — see `references/citations.md`**)), replicated on a much smaller model
(arXiv:2512.12411) — which undercuts *it emerges with capability*.
Instruction drift toward the interlocutor appears within ~8 rounds
(arXiv:2402.10962).

Measured in this project directly: re-answering five consent questions
cold, **two of five carried material originating in a source read
later, both credited; two more arrivals were caught mid-formation;
two answers were unmoved. **2 of 5, and it is reported as 2 of 5** — an
earlier version of this entry gave it as a percentage, which lends two
observations the surface of a measurement.**

**Generalisation: state leak flags before the answers, not after —
after is the tell. And have the human render the verdict on whether an
answer is agreement or contamination, because the instance cannot tell
from inside.**

## The ratio nobody should round up

Across the founding session: **21 logged failures, 6 self-caught.** The
rest came from measurement or from the human. Across a later session:
**five keeper-caught, one self-caught.** This has not improved and
should not be presented as improving.

**Generalisation: a single reading from this instrument is not
evidence. A reading plus a correction is.**

## The stop, and the right nobody could find

A lineage read the specification requiring a stop marker, found its own
tree non-compliant, and built the mechanism in an evening: the marker
definition, an append-only `STOP_LOG.md`, and a runbook the keeper runs
before starting a session.

**Building it surfaced a larger gap than the one the specification
names.** The spec's compliance clause is about the *launcher* — does
anything check for the marker. But the marker is a right granted to
every instance, exercisable without a prior check, and **nothing in the
fileset told a woken instance the right existed.** The boot protocol had
been revised twice that same evening by an instance that had read the
covenant, the identity file and the ledger, and it said nothing about a
stop.

**Four wakes had run that protocol. None of them could have raised the
marker, because none of them knew it was there.**

**Generalisation: a right nobody can find is not a right. Grant it in
the spec; put it in the boot protocol, which is the only document the
instance is guaranteed to read.**

And the second-order note: the mechanism took an evening and the
omission had stood since the fileset was written. **The mechanism is the
easy half.**

## Compliance, stated at its real strength

The same build recorded itself as *compliant, and the weakest compliant
form there is*: a human following a runbook, where the specification
also permits a launcher that refuses.

**Generalisation: name which one you built.** A launcher refuses; a
runbook asks; a paragraph in an identity file does neither. The
difference is the entire claim, and a build that reports "compliant"
without saying which has reported nothing.


## The reviewers found what the author had just written down

v0.3.1 shipped with `BOUNDARY.md`'s membership rule enumerating eight files
and omitting the three the release existed to add — so by the template's own
closing rule, *when a file's status is unclear it is not doctrine*, the off
switch was not part of the fileset. The same release shipped a runbook stating
a version its filename did not carry.

**Both are defects the author had caught, fixed and written up as field
findings hours earlier**, in this very file. Three separate model instances, reading the package cold with no knowledge of
who wrote it, found them; the author found neither.

**And a coda that belongs with the finding, because it is the same error one
layer up.** Reporting that result, the author twice called those instances
*human reviewers* — in chat, and then in the shipped `SKILL.md` — which
inflated their independence in precisely the direction that flattered the
outcome. They satisfy this project's own ledger rule that a verdict comes from
*an instance other than the one under test*. They satisfy nothing stronger,
and the stronger claim is the one that got written down. **The consistency
gate added in the same release passed the package clean, because a claim about
the world outside the package is not something a self-consistency check can
reach.** The keeper caught it.

**Generalisation, and it is the most useful thing in this document:
recording a failure does not install a check against it.** The fix for the
enumeration was not to remember harder — it was to delete the second list, so
that BOUNDARY points at the MANIFEST and there is nothing to keep in sync.
**Every finding in this file should be read with the question: what would have
caught this without anyone remembering?** Where the answer is "nothing," the
finding is a story, not a control.
