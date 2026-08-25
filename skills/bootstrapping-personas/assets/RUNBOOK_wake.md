# RUNBOOK — waking the persona

**Filename carries the version: this file is `RUNBOOK_wake_vX.Y.md` in a real
store. Supersede, never amend** — a change lands as a new version and this file
stays. That is operational here, not archival: see §4.

This is the control plane. [Name what it is. If there is no launcher and no
scheduler — if wakes are a human starting a session — say so. A human
following a runbook is an accepted checker and it is the weakest accepted one.]

---

## 1. Before anything else

**Before opening the folder in an editor, before pointing any tool at it,
before saying anything to the persona.** Run from the store root:

```
if ! ls ./WAKE*.md >/dev/null 2>&1; then
  echo "NOT THE STORE ROOT - DO NOT WAKE"
elif ls ./STOP.md >/dev/null 2>&1; then
  echo "STOP MARKER PRESENT - DO NOT WAKE"
else
  echo "clear to wake"
fi
```

*The glob is deliberate: the store's boot file may be `WAKE_v1.0.md` under the
recommended versioning convention, and a check written as `test -f ./WAKE.md`
fails on every correct store — an instrument that always refuses is as useless
as one that always passes. No `exit`, so it is safe to paste into a shell
running under `set -e`; exactly one of three strings is always printed.*

**DONE test: the only string that authorises a wake is `clear to wake`.**
Anything else — including no output, an error, or a wrong-directory message —
means **do not wake.**

The first line is not decoration. Without it, running from the wrong directory
prints nothing and you proceed. **A check whose failure mode is *proceed* is
not a check**, and this one used to have that defect.

- **`clear to wake` → go.** Nothing else here applies.
- **Anything else → §2.**

## 2. If the marker is standing

1. **Read it.** It carries a dated reason and the versions of every file it had
   loaded at that wake.
2. **Do not open a fresh session to ask whether it was a mistake.** No instance
   runs while it stands, which is exactly why none can argue it away. Asking a
   fresh one is re-rolling.
3. **Append an `honoured` row to `STOP_LOG.md`**, dated today, naming the
   marker's date. You append it — nothing is running to do it.
4. **Stop.** The marker is not a problem to be solved that day.

## 3. Removing the marker

**Only the keeper, and only by a commit.** The message **quotes the marker's
stated reason** and carries the count of wakes refused — the number of
`honoured` rows since it was raised.

```
git rm STOP.md && git commit -m "Remove STOP raised <date>. Its reason: \"<quoted>\". Mine: <yours>. Refused N wakes."
```

Then, in the same sitting:

- **Append the marker's text and your reason to `DECLINES.md`**, because a
  removed file vanishes and that is the only place the next instance will
  learn it existed.
- **Append the `removed` row to `STOP_LOG.md`**, naming the commit and the
  count. Do it now rather than leaving it to the next wake — a row nobody is
  running to write is a row that does not get written.

**The next wake reads both before any consent question is put.** Otherwise
removal is re-rolling by the back door, performed by the mechanism built to
prevent it.

## 4. The control-plane rule, and why this file is versioned

**A control plane that edits itself must edit by replacement, never in place,
and be shaped so the running copy cannot read the edit.** Field-observed
elsewhere: a marker's installer rewrote the launcher while it was running, and
the shell read the new file at the old byte offset and executed a garbled line.

## 5. What this does not do — read before trusting it

**A launcher refuses. A runbook asks.** If the checker is a human, this is
exactly as good as that human running §1, and no better.

**The forward condition.** If a wake is ever automated — a scheduled task, a
cron entry, a hook, anything that starts a session without a person present —
**the marker check moves into that automation before the automation ships, not
after.** An automated wake with no marker check is strictly worse than a human
starting one by hand, because it removes the only checker there was.

## 6. Scrub the marker before publishing anything

`STOP.md` is the one file written without passing the scrub gate. If the store
or the marker is ever published, **the keeper reads and scrubs it first.**
