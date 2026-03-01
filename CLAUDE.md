# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Run ESLint
npm run format    # Format JS and SCSS files with Prettier
npm start         # Run production server
```

## Architecture

This is a **Next.js 15** portfolio website (Pages Router) with **SCSS Modules** for styling. No test suite is configured.

### Pages

- `pages/index.js` — Home: hero + project list + testimonials
- `pages/about.js`, `pages/contact.js`, `pages/photos.js`, `pages/cookies-policy.js`
- `pages/work/[slug].js` — Case study pages: `newbitiba`, `camino`, `bicibavarese`

Case study pages use `Component.provider = CaseStudyProvider` to attach the context provider at the page level (wired up in `pages/_app.js` via `ComponentProvider`).

### Component Structure

All components are barrel-exported from `components/index.js`. Each component lives in its own directory with an `index.js` re-export.

Key component groups:
- **Layout**: `Layout` wraps every page (Header + main + Footer). `BasePage` is an alternate wrapper.
- **CaseStudy**: `CaseStudyWrapper`, `CaseStudyBlockHeader`, `CaseStudyNavbar`, `CaseStudyTag`, and four section components (`UnderstandSection`, `DefineSection`, `DesignSection`, `TestingSection`) — used to build case study pages with a sticky in-page nav.
- **HeroHeader**: Landing page hero with scroll-to-work behaviour wired via `AppContext`.

### State / Context

- `context/appContext.js` — Global context (theme, `shouldScrollToWork` trigger). Provided in `_app.js`.
- `context/caseStudyContext.js` — Per-case-study context (active nav section, section refs, scroll helpers). Provided via `Component.provider` on each work page.

### Styling

SCSS Modules are used throughout (`*.module.scss` co-located with components). Global styles live in `styles/`:
- `styles/global.scss` — Entry point that imports base, utils, and vendor (Swiper)
- `styles/base/variables.scss` — Design tokens (colors, spacing, etc.)
- `styles/utils/mixins.scss`, `styles/utils/functions.scss` — SCSS helpers
- `styles/base/grid.scss` — Custom `flexGrid` / `col--md-*` grid classes used across layouts

Grid classes (`flexGrid`, `col--md-1` through `col--md-12`) come from `styles/base/grid.scss` and are referenced as plain strings in `cn()` calls (not CSS Modules).

### Other Conventions

- **SVGs** are hand-authored as JSX React components in `components/icons/`. They are not `.svg` file imports; `next.config.js` is intentionally empty.
- **Images** use a custom `Image` component (`components/Image/Image.js`) wrapping Next.js `<Image>`, with an optional `link` prop that opens the full image.
- **Scroll animations** use the `ComeInAnimation` wrapper (`animation/comeIn.js`), which triggers a CSS `come-in` class via `react-intersection-observer`.
- **Site config** (URL, social links, OG meta) lives in `lib/constants.js` (`SITE_CONFIG`). Testimonials data also lives there as `TESTIMONIALS`.
- **Contact form** uses `@formspree/react`.
- **Maintenance mode** can be enabled by uncommenting `App.getInitialProps` in `_app.js` and setting the `MAINTENANCE_MODE=true` env var.
- Prettier: single quotes, 2-space indent.
- ESLint 9 with flat config (`eslint.config.js`). Config composes `eslint-config-next/core-web-vitals`, `eslint-config-prettier`, and custom `jsx-a11y` rules. Note: ESLint 10 is incompatible with `eslint-config-next@16` due to a scope manager API change; stay on ESLint 9 until upstream fixes land.
- Use comments sparingly — only for genuinely complex logic, not for self-evident code.
