# Locked Landing Page — Prime IV FP’s Special Offer

Locked by Loyd on 2026-05-19.

## Live preview
Temporary Cloudflare preview:
`https://skins-seen-clothing-sandra.trycloudflare.com`

This is a temporary tunnel, not a permanent production deployment.

## Source and deploy artifacts
- Working source: `prime-iv-onboarding-landing-build/`
- Locked copy: `prime-iv-onboarding-landing-locked/source/`
- Locked deploy build: `prime-iv-onboarding-landing-locked/dist/`

## Locked design direction
- Premium healthcare/wellness SaaS landing page.
- White / pale-blue background, deep navy typography, primary blue accents.
- Soft shadows, rounded cards, clean product UI visuals.
- GrowLocals.ai clearly identified as provider.
- ReviveSalesCRM integration clearly stated.
- Booker scheduling clearly stated.
- No yellow highlight under logo.
- Top logo mark: simple blue circle / white-dot GrowLocals.ai mark.

## Locked copy / offer
- Hero headline: `Turn Prime IV Leads Into Booked Visits And Google Reviews`
- Before/after headline: `Stop manually chasing leads. Let AI handle the follow-up.`
- Offer: `$497 setup + $297/mo after activation`
- Primary CTA: `Start Onboarding For $497`
- Secondary CTA: `Schedule A Demo First`

## Locked visuals
- GPT Image 2 hero/product UI asset based on Loyd’s reference boards.
- Clean ecosystem diagram asset; no reference-board labels/artifacts.
- Desktop lead journey pipeline uses a polished static generated asset.
- Mobile lead journey pipeline keeps the vertical timeline layout.
- Founder image and founder section included.

## Business/process details preserved
- System is by GrowLocals.ai.
- Integrates into Prime IV location’s current ReviveSalesCRM.
- Scheduling path goes into Booker calendar.
- Setup process: onboarding/intake → manual backend configuration → testing → activation call/staff training → community/support calls.
- Activation can take up to ~14 days depending on setup queue.

## Known placeholders
- Payment/onboarding URL is still placeholder unless supplied.
- Demo/calendar URL is still placeholder unless supplied.

## Verification at lock
- `npm run build` passes.
- Locked `dist/` was regenerated.
- Temporary live URL was responding during final iteration.

## Post-lock copy update — 2026-05-19 18:15 CDT
- Onboarding step changed from `We configure ReviveSalesCRM and Booker` to `We configure your CRM, the sync software, and our AI assistant`.
- Onboarding step changed from `We test the full workflow` to `We test the AI, the automations, and the sync to Booker`.
- FAQ added/updated to explain Autogration: using the location's CRM calendars and Autogration to sync availability and appointments into Booker.
- FAQ added for AI voice calling: not included for Prime IV yet; planned future feature; would have per-minute usage charges and would be discussed before enabling.

## Post-lock visual fix — 2026-05-19 18:40 CDT
- Locked GrowLocals.ai logo icon to the blue map-pin style from Loyd's reference screenshot.
- Fixed onboarding step number badges so they stay perfectly circular on mobile and do not distort into ovals.

## Post-lock logo correction — 2026-05-19 19:08 CDT
- Final GrowLocals.ai logo icon locked as a solid blue location pin with a white center cutout, matching Loyd's screenshot reference.
- Removed visible SVG/outline pin styling for the top lockup icon.

## Final logo icon correction — 2026-05-19 19:30 CDT
- Replaced CSS-drawn GrowLocals icon with an inline SVG filled blue map-pin glyph with white center circle.
- This matches the GrowLocals icon shown inside the generated hero asset/reference screenshot.

## Post-lock install-section copy update — 2026-05-19 19:34 CDT
- Added `Pipeline movement handled` card to What Gets Installed: AI and software automations move leads through the CRM pipeline so staff is not manually tracking every stage.

## Post-lock logo spacing + CTA update — 2026-05-19 19:36 CDT
- Tightened spacing between GrowLocals icon and `GrowLocals.ai` wordmark without overcorrecting; mobile measured about 8px gap.
- Changed primary CTA text from `Start Onboarding For $497` to `Start Onboarding Now`.

## Post-lock CTA polish — 2026-05-19 19:38 CDT
- Polished primary CTA visual treatment after removing price from button: stronger blue gradient, layered shadow, subtle highlight, circular arrow chip, 66px mobile tap height.

## Post-lock motion polish — 2026-05-19 19:40 CDT
- Added subtle motion graphics: gentle float on major visual assets, pulse on lead badges, CTA sheen, card pop-in, soft glow on diagram imagery, hover lift on cards.
- Added `prefers-reduced-motion` safeguards to disable motion for users who request reduced motion.

## Post-lock mobile regression fix — 2026-05-19 19:43 CDT
- Fixed mobile ecosystem chart centering after motion polish caused it to sit off-center.
- Removed circular arrow chip/pseudo-element from primary CTA because it looked odd on mobile; kept clean gradient/depth treatment.

## Post-lock top offer label polish — 2026-05-19 19:44 CDT
- Converted top `Prime IV FP’s Special Offer` label into a lightweight badge/header treatment with border, subtle blue dot, pale-blue surface, and shadow so it stands out better on mobile.

## Post-lock all CTA consistency fix — 2026-05-19 19:45 CDT
- Applied polished CTA treatment to all three `Start Onboarding Now` buttons, not just the hero button.
- Added ArrowRight icon to pricing and final CTA buttons and enforced consistent 66px height/gradient/shadow treatment.

## Post-lock offer badge center/glow — 2026-05-19 19:46 CDT
- Centered top `Prime IV FP’s Special Offer` badge in the header on mobile and desktop.
- Added subtle glow/pulse animation to badge and blue dot, with `prefers-reduced-motion` fallback.

## Post-lock headline update — 2026-05-19 19:50 CDT
- Changed hero headline from `Turn Prime IV Leads Into Booked Visits And Google Reviews` to `Turn New Customer Leads Into Booked Visits And Google Reviews`.

## Post-lock CTA arrow alignment fix — 2026-05-19 19:56 CDT
- Optically aligned ArrowRight icons inside all `Start Onboarding Now` CTAs; verified arrow center matches button center on mobile with ~1px delta and no overflow.

## Post-lock contract FAQ update — 2026-05-19 19:59 CDT
- Added FAQ: `Is there a long-term contract?` Answer: no long-term contract; month to month; asks for 30 days notice to cancel.
