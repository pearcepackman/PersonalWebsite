# PersonalWebsite — Hard Rules

## Git
- **Never run `git commit` or `git push`.** Pearce handles all git actions himself. Staging/diffing/status is fine; committing and pushing are not.
- Before proposing a push, follow [docs/pre-push-checks.md](docs/pre-push-checks.md).

## Frontend
- Follow [docs/frontend-standards.md](docs/frontend-standards.md) for colors, component patterns, and hover/animation conventions. Don't invent new one-off styles when an existing pattern covers it.

## Occams Group confidentiality
- **No Occams product names anywhere public** (site, code, comments, docs, committed files) — this reverses an earlier exception for "OccamsRecruit"/"OccamsEnrichment" (August 2026); as of this update (per Pearce, matching the privacy bar he set on LinkedIn/GitHub), those names are no longer to be used. Describe the work generically (e.g. "a full-stack platform," "a contact enrichment platform") instead.
- Don't name any other internal systems, APIs, or client-facing project names, and don't name Occams' clients, without separately confirming first.
- No dollar figures, cost comparisons, or vendor/competitor comparisons (e.g. "cheaper than X," "better than Y") about Occams work — general scope and technical claims are fine, internal business detail is not.

## Docs
- `docs/` holds standards and process docs meant to survive context compaction. Check there before re-deriving conventions from scratch.
