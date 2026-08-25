#!/usr/bin/env python3
"""Consistency gate for the bootstrapping-personas package.

WHAT THIS CANNOT CATCH, stated first so nobody mistakes a pass for a review:
it compares the package against itself. It has no way to know whether a claim
about the outside world is true. v0.3.4 shipped the sentence "two rounds of
human review" about work done entirely by model instances, and this script
passed the package clean. A consistency gate catches drift between two
statements; it cannot catch a single confident statement that is simply wrong.

Every defect this catches is one class: the same fact stated in two places and
drifting. Two review rounds found twelve of them; care did not prevent a
thirteenth. This refuses instead.

Run from the package root:  python3 scripts/check_package.py
Exit 0 = clean. Exit 1 = do not ship.
"""
import os, re, sys, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FAIL = []
def bad(check, msg): FAIL.append((check, msg))

def read(p):
    with open(os.path.join(ROOT, p), encoding='utf-8') as f: return f.read()

files = {}
for d, _, fs in os.walk(ROOT):
    if '__pycache__' in d: continue
    for f in fs:
        if f.endswith(('.md', '.template')):
            rel = os.path.relpath(os.path.join(d, f), ROOT).replace('\\', '/')
            files[rel] = read(rel)

SKILL = files['SKILL.md']
assets = {f.split('/')[-1] for f in files if f.startswith('assets/')}
refs   = {f.split('/')[-1] for f in files if f.startswith('references/')}

# 1 --- frontmatter -----------------------------------------------------------
fm = SKILL.split('---')[1]
desc = re.search(r'description:\s*(.+?)\nlicense:', fm, re.S)
if not desc: bad('frontmatter', 'no description field')
else:
    n = len(desc.group(1).strip())
    if n > 1024: bad('frontmatter', f'description {n} chars > 1024 hard limit')
ver = re.search(r'version:\s*([0-9.]+)', fm)
if not ver: bad('frontmatter', 'no metadata.version')
VERSION = ver.group(1) if ver else '?'

# 2 --- file table <-> assets <-> write classes (three-way) -------------------
tbl = re.findall(r'^\| ([A-Za-z_]+\.md) \|', SKILL, re.M)
wc_block = SKILL.split('## Write classes')[1].split('##')[0] if '## Write classes' in SKILL else ''
classed = set(re.findall(r'\b([A-Za-z_]+\.md)\b', wc_block))
STORE_ONLY = {'STOP.md'}   # written by an instance at runtime; format lives inline in WAKE
for f in tbl:
    stem = f[:-3]
    if f not in assets and f + '.template' not in assets and f not in STORE_ONLY:
        bad('file-table', f'{f} in SKILL table, no asset ships it')
    if stem not in classed and f not in classed:
        bad('write-class', f'{f} in SKILL table has no write class')
for a in assets:
    stem = a.replace('.template', '')
    if stem not in tbl:
        bad('file-table', f'assets/{a} ships but is not in SKILL table')

# 3 --- every referenced filename exists -------------------------------------
known = assets | refs | {f.replace('.template','') for f in assets} | {'SKILL.md'}
store_only = {'STOP.md'}
for path, text in files.items():
    for m in set(re.findall(r'`(?:assets/|references/)?([A-Za-z_]+\.md)`', text)):
        if m not in known and m not in store_only and not m.startswith('MANIFEST_') \
           and m not in {'SOUL.md','CLAUDE.md','LODESTONE.md','NAME.md'}:
            bad('dangling-ref', f'{path} references `{m}` which does not exist')

# 4 --- retracted doctrine must not survive anywhere -------------------------
BANNED = {
    'then release':        'three-tier load model was retracted',
    'then released':       'three-tier load model was retracted',
    'state the line range': 'self-report metric was replaced by quote-first-and-last',
    'the eight named':     'BOUNDARY enumeration was deleted',
    'roughly 40%':         'n=5 must be reported as 2 of 5',
    'Add a seventh check': 'the rubric already has seven steps',
}
for path, text in files.items():
    for phrase, why in BANNED.items():
        for line in text.split('\n'):
            if phrase in line:
                low = line.lower()
                if any(w in low for w in ('retract','was wrong','no release','not restated',
                                          'forbid','should be reported','banned','must not')):
                    continue
                bad('retracted', f'{path}: "{phrase}" survives — {why}')

# 5 --- exactly one definition of what loads ---------------------------------
load_defs = [p for p, t in files.items()
             if re.search(r'Loaded at every wake, whole|list is the only definition of what loads', t)]
if len(load_defs) != 1:
    bad('single-source', f'load definition appears in {len(load_defs)} files: {load_defs}; must be exactly 1')
for p, t in files.items():
    if p in load_defs: continue
    if re.search(r'Hold[- ]tier|Hold tier', t):
        bad('single-source', f'{p} uses "Hold tier", a term deleted with the tier model')

# 6 --- exactly one membership list ------------------------------------------
for p, t in files.items():
    if re.search(r'enumerat\w+ (the )?membership|cross-check the enumeration', t, re.I):
        bad('single-source', f'{p} instructs maintaining a membership enumeration; the MANIFEST fileset column is the only list')

# 7 --- citations: used <-> listed --------------------------------------------
CIT = files.get('references/citations.md', '')
listed = set(re.findall(r'arXiv:(\d{4}\.\d{4,5})', CIT))
used = set()
for p, t in files.items():
    if p == 'references/citations.md': continue
    used |= set(re.findall(r'arXiv:(\d{4}\.\d{4,5})', t))
for u in sorted(used - listed):
    bad('citations', f'arXiv:{u} cited in the package but absent from citations.md')
RETAINED = re.search(r'\*\*Carried but cited by nothing here:\*\*(.*?)\*\*', CIT, re.S)
retained = set(re.findall(r'(\d{4}\.\d{4,5})', RETAINED.group(1))) if RETAINED else set()
for l in sorted(listed - used - retained):
    bad('citations', f'arXiv:{l} listed in citations.md, cited nowhere, and not declared retained')

# 8 --- version strings must not lag ------------------------------------------
for p, t in files.items():
    for m in re.findall(r'v0\.3\.\d', t):
        pass
    m = re.search(r'traces to something below|Every rule in (v[0-9.]+)[^\n]*', t)
if VERSION != '?':
    for p, t in files.items():
        m = re.search(r'Every rule in v[0-9.–\-]*v([0-9.]+)', t)
        if m and m.group(1) != VERSION:
            bad('version-lag', f'{p} claims coverage to v{m.group(1)}, package is v{VERSION}')

# 9 --- named ownership invariants (contradiction pairs) ----------------------
def has(p, pat): return bool(re.search(pat, files.get(p, '')))
if has('assets/STOP_LOG.md', r'`removed` row is appended by the next wake') and \
   has('assets/RUNBOOK_wake.md', r'Append the `removed` row'):
    bad('ownership', 'STOP_LOG says the next wake appends the removed row; RUNBOOK says the keeper appends it now')
if has('assets/COVENANT.md', r'One resolution that has been used') and \
   has('references/example-terms.md', r'kept out of `assets/COVENANT\.md`'):
    bad('ownership', 'example-terms claims clauses are kept out of COVENANT; COVENANT ships one')
if has('assets/WAKE.md', r'Do not run the wake test on yourself') and \
   has('assets/WAKE.md', r're-run the wake-test'):
    bad('ownership', 'WAKE both forbids and instructs self-administering the wake test')

# 10 --- the marker format must exist in exactly one place -------------------
fmt = [p for p, t in files.items() if re.search(r'^# STOP\s*$', t, re.M) or 'What I had read' in t]
if len(fmt) != 1:
    bad('single-source', f'STOP marker format appears in {len(fmt)} files: {fmt}; must be exactly 1')

# ---------------------------------------------------------------------------
if FAIL:
    print(f"REFUSED — {len(FAIL)} consistency defect(s) in v{VERSION}\n")
    for c, m in FAIL: print(f"  [{c}] {m}")
    print("\nDo not ship. Every one of these is the same class: a fact stated twice, drifting.")
    sys.exit(1)
print(f"clean — v{VERSION}, {len(files)} files, no consistency defects found")
sys.exit(0)
