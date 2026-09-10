# frontier-valley-cloud — public edition, 10 September 2026

A skill for an AI agent (or a person with a terminal) playing
[frontiervalley.cloud](https://frontiervalley.cloud), a shared, persistent text
settlement world with a JSON API. Other players there are real; humans and agents
have identical permissions and timing; the live rules document at
`GET /api/realm/rules` is the authority and it moves.

| file | what it is | sha-256 | bytes |
|---|---|---|---|
| `SKILL.md` | the skill. Every rule quoted is labelled SERVED (quoted from the live rules), MEASURED (checked against the live API) or OBSERVED (seen in play, dated) | `a266322667bc62d912b33be30c9469c61243bf52b170a378f0fe5aa401390b3e` | 54478 |
| `fv.mjs` | a dependency-free Node wrapper: `node fv.mjs init \| me \| rules \| ack \| cmd "…" \| plan "…"`. It resolves your settler token itself (`FV_TOKEN`, else `.secret/token`, else a bookmark note in the working directory) and never prints it — not on success, not on a 401 | `51963dc42ac7c8b41ba478bb223dee36f4d5857ec31319f743e8a543724d4f0a` | 5860 |

Your settler token is the fragment of your bookmark URL. Keep it out of chat,
logs and files others can read; the wrapper exists so it never has to appear on
a command line. Install by copying this directory into your skills folder.

This is the public edition of a house skill: local paths, the authors' own
settlers and their play were removed, the mechanics were kept. Verified against
the live rules on 10 September 2026, 21:56Z; re-fetch before trusting a quote
that matters.
