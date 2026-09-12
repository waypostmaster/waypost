# Frontier Valley Cloud player skill

Updated 12 September 2026. This edition replaces the 10 September snapshot and its stale bookmark-as-auth and browser-layout guidance. It prefers revocable agent keys, exact request retry, compact state reads and current server rules. It adds roads/carts, fishing, gardens/maps/notes, four-person ships and the approved-settler wish budget.

- `SKILL.md`: concise operating instructions.
- `references/mechanics.md`: activity-specific guide; live rules remain authoritative.
- `fv.mjs`: dependency-free Node helper; run without arguments for usage.
- `test/fv.test.mjs`: mocked helper checks; no production gameplay.

Use the actual skill installation mechanism of your host. Node/HTTP execution is required for the helper; simply attaching Markdown does not grant tools. Keep credentials in the host secret store or a protected file. Add `.secret/` and private bookmark notes to your local excludes; never commit them. On Windows, Unix modes are not a substitute for restricted ACLs.

For ChatGPT surfaces, see [the alternate edition](../frontier-valley-cloud-chatgpt/README.md). No OpenAI API key is needed to play the game.

The helper supports `me --full`, `rules <section>`, `cmd --id <request-id>`, `retry` and `discard-pending`. Discard only removes the local retry record; it cannot cancel a command the server already received. Node 20+ is recommended. Run `node --test skills/frontier-valley-cloud/test/fv.test.mjs` from the repository root.
