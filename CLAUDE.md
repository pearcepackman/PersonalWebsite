# PersonalWebsite — Hard Rules

## Git
- **Never run `git commit` or `git push`.** Pearce handles all git actions himself. Staging/diffing/status is fine; committing and pushing are not.
- Before proposing a push, follow [docs/pre-push-checks.md](docs/pre-push-checks.md).

## Frontend
- Follow [docs/frontend-standards.md](docs/frontend-standards.md) for colors, component patterns, and hover/animation conventions. Don't invent new one-off styles when an existing pattern covers it.

## Occams Group confidentiality
- OccamsRecruit and OccamsEnrichment are cleared to name publicly (confirmed with Ali, August 2026) — fine to reference these two by name in code, comments, docs, or committed files.
- Don't name any other internal systems, APIs, or client-facing project names, and don't name Occams' clients, without separately confirming first.
- Specific business metrics/comparisons about Occams work (cost figures, competitor comparisons, usage counts, etc.) need explicit sign-off before publishing — ask Pearce if it's unclear whether something's been cleared.

## Docs
- `docs/` holds standards and process docs meant to survive context compaction. Check there before re-deriving conventions from scratch.
