# Behaviors — arbitrum.io homepage

## Header (sticky)
- Trigger: window scroll position.
- State A (scroll 0, desktop): background transparent (lg:bg-transparent), no shadow.
- State B (scrolled > 0): background #ffffff, boxShadow 0 1px 2px rgba(0,0,0,0.05).
- Transition: background 0.3s cubic-bezier(0.4,0,0.2,1). Height stays 70px.
- Mobile: header always bg-white (lg:bg-transparent only on desktop). Hamburger toggles full-screen menu.

## Logo hover
- Default: shows icon_white.svg with `invert` (renders black). wordmark letters hidden (logo_color opacity 0).
- Hover (group): icon_white opacity 0 → logo_color.svg opacity 100 (colored icon) + "arbitrum" letter wordmark visible. transition opacity 0.3s.

## Nav buttons
- 5 buttons (SOLUTIONS, PRODUCTS, WHY ARBITRUM, DEVELOPERS, RESOURCES), expandable. Click opens dropdown panel (absolute, centered). aria-expanded toggles.

## Hero 3D cube
- 6-face cube, `.hero-card-wrapper` perspective 1000px, `.hero-card` preserve-3d.
- Cube transform is JS-driven (matrix3d), transition: transform 0.3s cubic-bezier(0.4,0,0.2,1). Rotates continuously / on interaction.
- Implementation: CSS 3D cube with 6 faces, auto-rotate via requestAnimationFrame or CSS animation rotating Y/X. Faces use scene cube-face webp images + brand gradient faces.

## Ecosystem marquee
- Logo rows scroll horizontally via CSS marquee animation (translateX 0 → -50%, infinite). Pause on hover optional.

## Ecosystem tabs (Plug Into)
- INTERACTION MODEL: click-driven. 3 tabs (Finance/Gaming/Consumer). Clicking a tab switches the visible project-card grid. Active tab styled differently. Content per tab is distinct project lists.

## Case studies carousel
- Horizontal scroll/carousel of case-study cards. Likely drag/scroll-snap or auto. Cards have image + title link.

## CTAs / links with arrow
- Links "Learn More", "Explore...", etc. have arrow_right.svg icon. Hover: arrow translates right (typical). text color transitions on hover (hover:text-primary-blue-1 or hover:text-primary-blue-3).

## Footer social icons
- `invert` class (white SVG → black on light; on dark footer they stay light via context). hover:drop-shadow-hex-glow.

## Responsive
- Desktop 1440: full layouts as above.
- Mobile 390: header collapses to hamburger; sections stack to single column; cube/hero scales down; marquee continues; tabs remain clickable.
