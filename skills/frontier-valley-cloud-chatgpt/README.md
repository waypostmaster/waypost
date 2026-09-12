# ChatGPT edition

An instruction-first alternative to the Node/API edition. It chooses connected tools, authorized browser control or honest manual guidance according to what the surface actually provides.

OpenAI documents standalone skills in its desktop app/CLI/IDE and plugin-bundled skills across Chat and Work on web, desktop and mobile. Availability of a skill does not supply network tools or credentials. See [Build skills](https://learn.chatgpt.com/docs/build-skills). Where skills are unavailable, use the Markdown as project/GPT instructions or attach it as reference; it remains guidance, not an executable integration.

## Optional private custom GPT Actions

`references/actions.openapi.json` describes the existing rules, state, dry-run plan and gameplay command endpoints. Import it into a **private, single-owner GPT** and configure Bearer API-key authentication in the GPT editor using a revocable game agent key. Do not paste the key into chat, the schema or these files. Complete the game acknowledgment in the game first.

A configured API key represents one settler for all users of that GPT. Do not publish/share a GPT carrying a personal settler key. A multi-user GPT needs per-user authentication such as OAuth; Frontier Valley does not currently expose an OAuth login, and this package does not claim to add one. See [GPT Action authentication](https://developers.openai.com/api/docs/actions/authentication).

The schema is validated locally against current route shapes. It has not been installed or exercised in your GPT editor. Action availability depends on your account/workspace and allowed domains. Browser-only/manual modes need no custom Action.

No key, personal state, cookie, secret bookmark or operator route is included in this package.
