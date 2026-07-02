# Page Topology — arbitrum.io homepage

Layout: `<main>` > `div.m-auto` (max-width container) > [HEADER, page-wrapper, footer].
- HEADER: sticky top-0 z-20, transparent at top → white+shadow on scroll. 70px tall. Logo (icon, hover reveals colored wordmark), 5 dropdown nav buttons (centered), 4 social icons. Mobile hamburger.
- page-wrapper (overflow-hidden) — 8 flow sections:
  0. **Hero** (`landing-hero`): h ~calc(100vh-84px) on desktop. 3D rotating cube (6 faces, JS-driven transform, transition transform 0.3s) + H1 "POWERING THE PROGRAMMABLE ECONOMY" (fkScreamer, 128px) + subtitle + 2 CTAs. xerox_scan.webp decor overlay.
  1. **ScenePanels**: 3 stacked panels (Finance / Consumer / Games) each with gradient bg + cube-face image + title + description + CTA.
  2. **EcosystemMarquee**: scrolling logo rows (marquee) + hexagon + "Build alongside..." + "Explore the Ecosystem" button.
  3. **Stats** (`bg-stone-white`, `text-primary-blue-1`): "The Onchain Standard" + 3 stats ($18B+ TVS, 123K+ DAW, $11B+ Gas Saved) + "View Live Data".
  4. **FlexiblePlatform**: "A Flexible Platform / Build an App, Launch a Chain" + 2 cards (Build an app, Launch a chain) with images.
  5. **CaseStudies** (`bg-stone-white`): carousel of case-study cards (Robinhood, Lit Protocol, Variational, Talos, USD.AI, GMX, El Dorado, Rho).
  6. **EcosystemTabs** + **ReadyToBuild** + **TechSection**:
     - "Plug Into a Thriving Sovereign Nation": tabs (Finance/Gaming/Consumer) switch visible project-card grid. CLICK-driven.
     - "Ready to start building on Arbitrum?" + "Get in Touch" + 13 lego_cube.webp scattered.
     - "TECHNOLOGY THAT SCALES / Build with Confidence" (`bg-yellow-blue` gradient, rounded, overflow-hidden) + tunnel/computer/phone/globe images + "Explore Documentation".
  7. **FinalCTA** (`bg-stone-white`): "Start Building / Get in Touch / Join our Community" 3 links with arrow icons.
- FOOTER (`bg-footer` navy→black gradient): newsletter signup iframe, 7 link columns (Solutions, Products, Why Arbitrum, Developers, Resources, Legal, Stay in Touch), social icons (6), "All on Arbitrum" logo.

Page is light-themed (white bg, black/navy text). No smooth-scroll library (no Lenis). Default browser scroll.
