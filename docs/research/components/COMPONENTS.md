# Component Spec Index — arbitrum.io homepage clone

All components built from `getComputedStyle()` extraction of the live site.
Audit trail: `BEHAVIORS.md`, `PAGE_TOPOLOGY.md`, `hero-svg.json`.

| Component | File | Interaction model | Key extracted values |
|---|---|---|---|
| Header | `src/components/Header.tsx` | scroll + click | sticky top-0 z-20, transparent→white+shadow on scroll (transition bg 0.3s); logo invert→color hover; 5 dropdown nav buttons; 4 social icons (invert) |
| Hero | `src/components/Hero.tsx` | static + CSS anim | `landing-hero` h-736 mobile / calc(100vh-84px) desktop; inner rounded-30px overflow-hidden, gradient #016be5→#05163d; xerox_scan.webp object-cover; 7-path navy SVG scan reveal (hero-scan keyframe, staggered); H1 fkScreamer 128px uppercase white; 2 black pill CTAs (rounded-3xl, hover cyan glow) |
| ScenePanels | `src/components/ScenePanels.tsx` | hover (3D tilt) | grid md:grid-cols-3 lg:gap-6vw; cards hero-card bg-white/70 rounded-12px p-4; cube-face webp 327px rounded-lg; title fkScreamer 40px bold; CTA pill rounded-40px border backdrop-blur + arrow; perspective 1000px preserve-3d tilt |
| EcosystemRing | `src/components/EcosystemRing.tsx` | time (rAF rotation) | outer ring 1440px (11 logos r=720, CW 80s), inner ring 620px (5 logos r=310, CCW 60s); logos counter-rotate to stay upright; center hexagon.svg rotate-180 + text 24px + Explore pill |
| Stats | `src/components/Stats.tsx` | static | bg-stone-white #f2f2f2 text-navy centered; "The Onchain Standard" 40px; 3 rows (value 24px semibold + cyan text-shadow, label 24px medium, desc 18px opacity-80, Source link); View Live Data pill |
| FlexiblePlatform | `src/components/FlexiblePlatform.tsx` | static | eyebrow AeonikFono uppercase; h2 40px; 2-col grid; deploy/launch webp; titles 24px; CTA pills |
| CaseStudies | `src/components/CaseStudies.tsx` | time (CSS marquee) | bg-stone-white; 8 cards 315×280 rounded-2xl, image fill + gradient overlay + title; duplicated for infinite marquee (translateX -50%, 30s), pause on hover |
| EcosystemTabs | `src/components/EcosystemTabs.tsx` | click | h2 40px; 3 tabs (Finance/Gaming/Consumer) segmented control bg-muted, active bg-white; 4-col grid of 8 project cards (bg-stone-white rounded-16px p-6, logo 48px + Learn More arrow + name 20px + desc 14px opacity-60); View all Projects pill |
| ReadyToBuild | `src/components/ReadyToBuild.tsx` | static | "Ready to start building on Arbitrum?" 40px centered ("building" hidden on mobile); Get in Touch pill |
| TechSection | `src/components/TechSection.tsx` | static | rounded-20px bg-yellow-blue (yellow→cyan) overflow-hidden; 14 lego_cube.webp 220×288 scattered absolute (staircase positions); text block 40% right: eyebrow AeonikFono, h2 40px, desc 18px opacity-80, Explore Documentation pill |
| FinalCta | `src/components/FinalCta.tsx` | hover | bg-stone-white flex-row; layered visual (globe/computer/phone/tunnel/arb_logo/arbitrum_everywhere) 320/500px with drop-shadow; 3 big CTA pills (rounded-40px py-10 40px, hover bg-yellow, arrow appears on hover) |
| Footer | `src/components/Footer.tsx` | static | bg-footer navy→black gradient, uppercase white; newsletter form; 7 link columns (Solutions/Products/Why Arbitrum/Developers/Resources/Legal/Stay in Touch); 6 social icons; all_on_arbitrum.svg banner |

Shared data: `src/lib/site-data.ts` (nav groups, socials, marquee logos, stats, case studies, tab projects).
Types: `src/types/index.ts`. Tokens/utilities: `src/app/globals.css`.
