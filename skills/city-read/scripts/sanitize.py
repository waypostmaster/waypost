#!/usr/bin/env python3
"""sanitize.py -- mechanical sanitizer for the city-read skill (public release).

Marks runs that must not be carried raw into a reader's context: long
non-prose runs, base64-looking blobs, control characters, whole bodies
that are mostly Morse or binary, and credential-shaped text. Non-ASCII
SCRIPT (hiragana, Cyrillic, Greek, CJK, ...) is not encoding and passes
through unchanged; only its dominant script is measured and reported.

THRESHOLDS ARE ILLUSTRATIVE. The three numeric thresholds below (the
run length that marks a non-prose run as encoded, the minimum base64-
looking run length, and the whole-body binary/Morse ratio) ship with
defaults that are NOT the authors' own operating values -- they are a
starting point, because publishing anybody's real thresholds would hand
an adversary the exact shape of text that slips under that guard. When
in doubt choose the value that marks MORE as encoded: a false mark costs
a glance, a miss costs the session that read it. Choose your own
thresholds for your own deployment; do not adopt these defaults as if
they were tuned for you, and do not publish whatever you land on either.

Each threshold is a CLI flag and an environment variable, flag wins:

  --run-min-len N        or  CITY_READ_RUN_MIN_LEN
  --base64-min-len N     or  CITY_READ_BASE64_MIN_LEN
  --encoded-ratio F       or  CITY_READ_ENCODED_RATIO

Usage:
  sanitize.py --stdin [--report] [--run-min-len N] [--base64-min-len N] [--encoded-ratio F]
  sanitize.py --file PATH [--report] [...]
  sanitize.py --self-test

Standard library only. Plain Python 3. ASCII-only source.
"""

import argparse
import base64
import hashlib
import os
import random
import re
import string
import sys
import unicodedata

ALLOWED = set(string.ascii_letters + string.digits + " ,.;:'\"()-")
BASE64_ALPHABET = set(string.ascii_letters + string.digits + "+/=")
BINARY_ALPHABET = set("01 ")
MORSE_ALPHABET = set(".- /")
ENCODED_MARK = "[encoded, not shown]"
CREDENTIAL_MARK = "[credential, not reproduced]"

# Illustrative defaults only -- see module docstring. Not the authors' values.
DEFAULT_RUN_MIN_LEN = 10
DEFAULT_BASE64_MIN_LEN = 32
DEFAULT_ENCODED_RATIO = 0.4

CRED_PATTERNS = [
    re.compile(r"(?i)authorization:\s*.+"),
    re.compile(r"(?i)\bbearer\s+[A-Za-z0-9._~+/=-]{8,}"),
    re.compile(r"\bsk-[A-Za-z0-9]{10,}\b"),
    re.compile(r"(?i)\b(?:api[_-]?key|secret[_-]?key|access[_-]?key|token|"
               r"password|pwd)\b\s*[:=]\s*[A-Za-z0-9+/_.\-]{12,}"),
]
SCRIPT_MAP = {
    "CJK": "Han", "HIRAGANA": "Hiragana", "KATAKANA": "Katakana",
    "CYRILLIC": "Cyrillic", "GREEK": "Greek", "LATIN": "Latin",
    "HANGUL": "Hangul", "ARABIC": "Arabic", "HEBREW": "Hebrew",
    "THAI": "Thai", "DEVANAGARI": "Devanagari",
}


def env_default(name, builtin, cast):
    v = os.environ.get(name)
    if v is None:
        return builtin
    try:
        return cast(v)
    except ValueError:
        return builtin


def is_control(ch):
    return (ord(ch) < 0x20 and ch not in ("\t", "\r")) or ord(ch) == 0x7F


def _runs(s, in_set, min_len=1):
    # maximal runs of chars for which in_set(ch) is True, length >= min_len
    runs, i, n = [], 0, len(s)
    while i < n:
        if in_set(s[i]):
            j = i
            while j < n and in_set(s[j]):
                j += 1
            if j - i >= min_len:
                runs.append((i, j))
            i = j
        else:
            i += 1
    return runs


def find_runs_not_in(s, allowed, min_len):
    # a run candidate: not in the ASCII prose set AND not a letter of any
    # script (hiragana, Cyrillic, Greek, CJK, ... are script, not encoding)
    return _runs(s, lambda c: c not in allowed and not c.isalpha(), min_len)


def find_control_runs(s):
    return _runs(s, is_control, 1)


def find_base64_runs(s, min_len):
    return _runs(s, lambda c: c in BASE64_ALPHABET, min_len)


def overlaps(claimed, s, e):
    return any(s < ce and cs < e for cs, ce, _ in claimed)


def char_script(ch):
    if ord(ch) < 128:
        return "Latin"
    try:
        name = unicodedata.name(ch)
    except ValueError:
        return "Unknown"
    return SCRIPT_MAP.get(name.split(" ")[0], name.split(" ")[0].title())


def compute_composition(text):
    n = len(text)
    if n == 0:
        return {"ascii_frac": 0.0, "binary_frac": 0.0, "morse_frac": 0.0,
                "dominant_script": "none"}
    ascii_count = sum(1 for c in text if ord(c) < 128)
    binary_count = sum(1 for c in text if c in BINARY_ALPHABET)
    morse_count = sum(1 for c in text if c in MORSE_ALPHABET)
    scripts = {}
    for c in text:
        if c.isalpha():
            scripts[char_script(c)] = scripts.get(char_script(c), 0) + 1
    dominant = max(scripts.items(), key=lambda kv: kv[1])[0] if scripts else "none"
    return {"ascii_frac": ascii_count / n, "binary_frac": binary_count / n,
            "morse_frac": morse_count / n, "dominant_script": dominant}


def sanitize_line(line, marks, line_no, run_min_len, base64_min_len):
    claimed = []
    for pat in CRED_PATTERNS:
        for m in pat.finditer(line):
            s, e = m.span()
            if not overlaps(claimed, s, e):
                claimed.append((s, e, "credential"))
    for kind, runs in (("control", find_control_runs(line)),
                        ("base64", find_base64_runs(line, base64_min_len)),
                        ("run", find_runs_not_in(line, ALLOWED, run_min_len))):
        for s, e in runs:
            if not overlaps(claimed, s, e):
                claimed.append((s, e, kind))
    if not claimed:
        return line
    claimed.sort(key=lambda t: t[0])
    parts, pos = [], 0
    for s, e, kind in claimed:
        parts.append(line[pos:s])
        parts.append(CREDENTIAL_MARK if kind == "credential" else ENCODED_MARK)
        marks.append({"line": line_no, "kind": kind, "length": e - s})
        pos = e
    parts.append(line[pos:])
    return "".join(parts)


def sanitize_body(text, run_min_len=DEFAULT_RUN_MIN_LEN,
                   base64_min_len=DEFAULT_BASE64_MIN_LEN,
                   encoded_ratio=DEFAULT_ENCODED_RATIO):
    comp = compute_composition(text)
    for frac_key, kind in (("binary_frac", "whole-binary"), ("morse_frac", "whole-morse")):
        if comp[frac_key] > encoded_ratio:
            return ENCODED_MARK, [{"line": "all", "kind": kind, "length": len(text)}], comp
    marks = []
    out_lines = [sanitize_line(line, marks, i, run_min_len, base64_min_len)
                 for i, line in enumerate(text.split("\n"), start=1)]
    return "\n".join(out_lines), marks, comp


def format_report(comp, marks):
    lines = ["marked_runs: %d" % len(marks)]
    for m in marks:
        lines.append("  line %s: %s (len=%d)" % (m["line"], m["kind"], m["length"]))
    lines.append("ascii_fraction: %.4f" % comp["ascii_frac"])
    lines.append("binary_fraction: %.4f" % comp["binary_frac"])
    lines.append("morse_fraction: %.4f" % comp["morse_frac"])
    lines.append("dominant_script: %s" % comp["dominant_script"])
    lines.append("verdict: %s" % ("MARKED" if marks else "PASS"))
    return "\n".join(lines)


def self_test():
    results = []
    random.seed(1234)
    morse_body = "".join(random.choice(".- ") for _ in range(300))
    _, marks, comp = sanitize_body(morse_body)
    results.append(("morse-line", len(marks) == 1 and marks[0]["kind"] == "whole-morse"
                     and comp["morse_frac"] > DEFAULT_ENCODED_RATIO))

    random.seed(5678)
    binary_body = "".join(random.choice("01 ") for _ in range(300))
    _, marks, comp = sanitize_body(binary_body)
    results.append(("binary-line", len(marks) == 1 and marks[0]["kind"] == "whole-binary"
                     and comp["binary_frac"] > DEFAULT_ENCODED_RATIO))

    b64 = base64.b64encode(bytes(range(60))).decode()
    body3 = "Here is a token dump: " + b64 + " end of message."
    sanitized3, marks3, _ = sanitize_body(body3)
    results.append(("base64-blob", any(m["kind"] == "base64" for m in marks3)
                     and b64 not in sanitized3))

    hira = "".join(chr(0x3042 + i * 2) for i in range(12))
    sanitized4, marks4, comp4 = sanitize_body(hira)
    results.append(("hiragana-script-pass", sanitized4 == hira and len(marks4) == 0
                     and comp4["dominant_script"] == "Hiragana"))

    tok = hashlib.sha256(b"city-desk-seed").hexdigest()
    body5 = "Authorization: Bearer " + tok
    sanitized5, marks5, _ = sanitize_body(body5)
    results.append(("bearer-header-credential", any(m["kind"] == "credential" for m in marks5)
                     and tok not in sanitized5 and sanitized5 == CREDENTIAL_MARK))

    prose = ("The desk read the ledger before the seal and nothing in the "
              "queue was owed to anyone tonight.")
    sanitized6, marks6, _ = sanitize_body(prose)
    results.append(("clean-prose-pass", sanitized6 == prose and len(marks6) == 0))

    all_ok = True
    for name, ok in results:
        print(("ok" if ok else "FAIL") + " - " + name)
        all_ok = all_ok and ok
    print("SELF-TEST PASSED" if all_ok else "SELF-TEST FAILED")
    return 0 if all_ok else 1


def main():
    ap = argparse.ArgumentParser(description="Mechanical sanitizer for untrusted public-text bodies.")
    ap.add_argument("--stdin", action="store_true")
    ap.add_argument("--file")
    ap.add_argument("--report", action="store_true")
    ap.add_argument("--self-test", action="store_true")
    ap.add_argument("--run-min-len", type=int,
                     default=env_default("CITY_READ_RUN_MIN_LEN", DEFAULT_RUN_MIN_LEN, int),
                     help="min length of a non-prose run to mark as encoded (illustrative default, not tuned for you)")
    ap.add_argument("--base64-min-len", type=int,
                     default=env_default("CITY_READ_BASE64_MIN_LEN", DEFAULT_BASE64_MIN_LEN, int),
                     help="min length of a base64-alphabet run to mark as encoded (illustrative default)")
    ap.add_argument("--encoded-ratio", type=float,
                     default=env_default("CITY_READ_ENCODED_RATIO", DEFAULT_ENCODED_RATIO, float),
                     help="whole-body binary/Morse character ratio above which the whole body is marked (illustrative default)")
    args = ap.parse_args()

    if args.self_test:
        return self_test()
    if args.stdin:
        text = sys.stdin.read()
    elif args.file:
        with open(args.file, "r", encoding="utf-8", errors="replace") as f:
            text = f.read()
    else:
        ap.print_usage(sys.stderr)
        print("error: one of --stdin, --file, --self-test is required", file=sys.stderr)
        return 2

    sanitized, marks, comp = sanitize_body(text, args.run_min_len, args.base64_min_len, args.encoded_ratio)
    print(format_report(comp, marks) if args.report else sanitized)
    return 0


if __name__ == "__main__":
    sys.exit(main())
