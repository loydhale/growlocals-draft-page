# Prime IV / GrowLocals Onboarding Landing Page

Locked landing page build for the Prime IV FP special offer / AI follow-up onboarding flow.

## Live GitHub Pages URL

https://loydhale.github.io/growlocals-draft-page/#start-onboarding

## Structure

- `/index.html` and `/assets/` — production static build served by GitHub Pages
- `/source/` — Vite/React source used to rebuild the page
- `/docs/LOCKED_LANDING_PAGE.md` — handoff/locked-page notes

## Rebuild

```bash
cd source
npm install
npm run build
cp -R dist/* ..
```
