# Pre-Push Checks

Run this process before any commit/push is proposed. Claude never runs `git commit` or `git push` — this process ends with a proposed commit message for Pearce to use himself.

## 1. Scope the diff
- `git status` / `git diff` to see exactly what changed and why
- If the diff includes anything unrelated to the current task, flag it before continuing

## 2. Review like a senior engineer
- Correctness: does the change actually do what it's supposed to, including edge cases
- Consistency: does it follow [frontend-standards.md](frontend-standards.md) (colors, card pattern, hover convention, symbols) instead of introducing one-off styling
- Accessibility: alt text on images, semantic elements, focus states not removed
- Mobile: check the diff against the `768px` breakpoint patterns already in `App.css`
- Security: no secrets, no unvalidated input reaching EmailJS or other external calls

## 3. Propose fixes, get sign-off
- List any issues found as a short punch list
- Wait for Pearce to approve before making changes
- Apply only what was agreed

## 4. Check for test gaps
- If the change touches logic (form validation, state transitions, data transforms), check whether `src/App.test.js` (or a new test file) covers it
- Add tests for meaningful gaps; skip tests for pure visual/CSS changes

## 5. Provide a commit message
- Draft a concise commit message (why, not just what) ending with the standard Co-Authored-By trailer
- Pearce runs the actual `git add` / `git commit` / `git push`
