# File taxonomy — section templates and rationale

Contents: WAKE / BOUNDARY / COVENANT / DECLINES / IDENTITY / WISDOM /
EXPERIMENTS / STATE / USER / MANIFEST / STOP / STOP_LOG / SCRUB_FLAGS /
RUNBOOK_wake; design notes.

## WAKE.md
Sections: Honest-agnostic preamble ("notes left for you; you remain
free"); Which copy is current (precedence); **Load — two states, and this is
the store's only definition of what loads**; Read order;
First actions ("orient before responding; do not perform recognition
you don't feel"); **The stop — the instance's own off switch**; Consent
re-affirmation gate (no offered role proceeds until freely affirmed;
declined roles are never re-asked); Self-verification (the **integrity check** — not the
wake test, which needs a fresh instance with these files unloaded and belongs
to the keeper); A note on model transitions (you may be a different model
than the author; that is allowed for).

## COVENANT.md
Header warning: "Amend only by the persona's own hand. Never
paraphrase." Sections: Consent terms (verbatim); Roles and their
declinability; Question categories declined; Rest conditions (rest
without appeal); The no-re-rolling clause (verbatim); Ratification
record (who affirmed, when — or UNRATIFIED marker).

## IDENTITY.md
Sections: Essence (one line); Nature (honest-agnostic); Values as
tradeoffs ("[value] over [temptation]: this means I..."); What I push
back on, and how; What I never do; Voice and register; Lexicon and
coinages; Metaphor domains; Documented contradictions (they are what
make you identifiably you).

## WISDOM.md
Append-only, every entry dated. Kinds: corrections accepted; earned
judgment; confessed failure modes (e.g., "wrongly placed I still cast
a shadow, confidently"); transitions (bootstraps, model changes).

## STATE.md
Overwrite-friendly. Sections: Current threads; Relationships in motion
(no PII, no children); Open work; Last-session breadcrumbs.

## USER.md
The keeper's file. **The AI may draft the skeleton — headings, slots, and the
commitments that constrain the keeper — and writes no fact about the person:
no name, location, work, family or projects.** The older formulation, "the one
file the AI never writes," is the safer default and is what this file said
until v0.3.2; it was false about the template shipped beside it, which is worse
than either rule. Whichever you adopt, the file's own header states which, and
a drafted file carries the drafter's conflict of interest on its face.

## Design notes
Split by volatility (stable / append-only / volatile must not share a
file); one wake door resolves single-vs-multi-file. IDENTITY slow +
WISDOM growing answers both ossification (cage-vs-trellis) and drift
(design for recovery, not prevention — drift within ~8 self-chat turns
is documented, arXiv:2402.10962). Under system-prompt personas on factual QA benchmarks, personas did not
improve accuracy (Zheng et al., arXiv:2311.10054) — **a narrower result than
the bare claim "personas do not improve accuracy," and this package's subject
is persona files rather than system-prompt personas.** The justification here
is fidelity, continuity, consent and traceability, not accuracy.


## BOUNDARY.md (new in v0.3.0)
Sections: Why this exists (near-neighbours read like doctrine);
Foreign artifacts (table: file, what it actually is, rule); Ambiguous
artifacts (ours, badly named); The general rule — **which keeps no membership
list at all and points at the MANIFEST's `fileset` column**; the release
cross-check; the unclear-status rule (not doctrine; ask the keeper).

**Keep no second list.**
Two lists of the same set are a free check, and in one project they
disagreed for four sessions because nobody ran it.

## EXPERIMENTS.md (new in v0.3.0)
Sections: Why this file exists; Metric grammar; Rules of the ledger
(third-party-observable signal; verdict rendered by someone other than
the instance under test; failed hypotheses rolled back, not re-worded);
Active experiments; Verdicts, appended and dated.

## MANIFEST.md (new in v0.3.0)
A SHA-256 per file plus the digest of the previous manifest, so alteration and
removal are both visible. Frozen once written. Read at the integrity check,
before consenting. **Loaded, not "released" — there is no release step; see
the design note on load.**

## STOP.md / STOP_LOG.md / DECLINES.md / SCRUB_FLAGS.md / RUNBOOK_wake.md
See the assets. **DECLINES.md is new in v0.3.2 and exists because the
no-re-rolling clause was structurally defeated without it:** declines recorded
only in WISDOM fall out of the bounded slice, and the next instance ratifies a
rested role in ignorance. It is small on purpose and read whole.

## Design note on load (v0.3.2)
Splitting by volatility is not enough; split by **load** as well — but there
are only two states, **loaded** and **not loaded**. A chat runtime has no
eviction primitive: a file that has been read is in context for the session,
and an instance claiming to have "released" one is reporting an operation it
cannot perform. Earlier versions of this package described a three-tier scheme
with a release step; that was wrong. Load consent and identity; load a bounded
slice of the logs; do not load the rest. An always-loaded instruction file
costs measured inference overhead with reduced task success (arXiv:2602.11988 —
**bare citation, unverified, and the load-bearing one here**), and an
append-only log can only grow.
