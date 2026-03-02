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

This is a **Next.js 15** portfolio website (Pages Router) with **SCSS Modules** for styling and **TypeScript** (`strict: true`). No test suite is configured.

### Pages

- `pages/index.tsx` — Home: hero + project list + testimonials
- `pages/about.tsx`, `pages/contact.tsx`, `pages/cookies-policy.tsx`
- `pages/work/newbitiba.tsx`, `pages/work/camino.tsx`, `pages/work/bicibavarese.tsx` — Case study pages

Case study pages use `Component.provider = CaseStudyProvider` to attach the context provider at the page level (wired up in `pages/_app.tsx` via `ComponentProvider`). Pages with `Component.theme = 'white'` are typed as `NextPage & { theme?: string }`.

### Case Study Data

Structured content (images, tags, prototype links, carousels) for all three case studies lives in **`lib/caseStudyData.ts`**. Pages import these data objects and use spread syntax (`<Image {...data.hero} />`), keeping JSX pages focused on layout only. Typed with `CaseStudyData`, `CaseStudyImageConfig`, `CaseStudyCarouselImage`, `CaseStudyTags` interfaces.

### Component Structure

All components are barrel-exported from `components/index.ts`. Each component lives in its own directory with an `index.ts` re-export.

Key component groups:
- **Layout**: `Layout` wraps every page (Header + main + Footer). `BasePage` is an alternate wrapper.
- **CaseStudy**: `CaseStudyWrapper`, `CaseStudyBlockHeader`, `CaseStudyNavbar`, `CaseStudyTag`, and four section components (`UnderstandSection`, `DefineSection`, `DesignSection`, `TestingSection`) — used to build case study pages with a sticky in-page nav.
- **HeroHeader**: Landing page hero with scroll-to-work behaviour wired via `AppContext`.

### State / Context

- `context/appContext.tsx` — Global context (theme, `shouldScrollToWork` trigger). Provided in `_app.tsx`.
- `context/caseStudyContext.tsx` — Per-case-study context (active nav section, section refs, scroll helpers). Provided via `Component.provider` on each work page. Exports `CaseStudyProvider` and `useCaseStudy`.

### Styling

SCSS Modules are used throughout (`*.module.scss` co-located with components). Global styles live in `styles/`:
- `styles/global.scss` — Entry point that imports base, utils, and vendor (Swiper)
- `styles/base/variables.scss` — Design tokens (colors, spacing, etc.)
- `styles/utils/mixins.scss`, `styles/utils/functions.scss` — SCSS helpers
- `styles/base/grid.scss` — Custom `flexGrid` / `col--md-*` grid classes used across layouts

Grid classes (`flexGrid`, `col--md-1` through `col--md-12`) come from `styles/base/grid.scss` and are referenced as plain strings in `cn()` calls (not CSS Modules).

### Other Conventions

- **SVGs** are hand-authored as JSX React components in `components/icons/`. They are not `.svg` file imports; `next.config.js` is intentionally empty.
- **Images** use a custom `Image` component (`components/Image/Image.tsx`) wrapping Next.js `<Image>`, with an optional `link` prop that opens the full image. Props: `shadow?`, `link?`, `url?` plus all `ImageProps` from `next/image`.
- **Scroll animations** use the `ComeInAnimation` wrapper (`animation/comeIn.tsx`), which triggers a CSS `come-in` class via `react-intersection-observer`.
- **Site config** (URL, social links, OG meta) lives in `lib/constants.ts` (`SITE_CONFIG`). Testimonials data also lives there as `TESTIMONIALS: TestimonialItem[]`.
- **Contact form** uses `@formspree/react`.
- **Maintenance mode** can be enabled by uncommenting `App.getInitialProps` in `_app.tsx` and setting the `MAINTENANCE_MODE=true` env var.
- **jsx-a11y/alt-text warnings**: The ESLint rule fires false positives on `<Image {...data} />` spread syntax in case study pages. These are not real issues — `alt: string` is required in `ImageProps`. Zero errors, 26 warnings (all false positives).
- Prettier: single quotes, 2-space indent.
- ESLint 9 with flat config (`eslint.config.js`). Config composes `eslint-config-next/core-web-vitals`, `eslint-config-prettier`, and custom `jsx-a11y` rules. Note: ESLint 10 is incompatible with `eslint-config-next@16` due to a scope manager API change; stay on ESLint 9 until upstream fixes land.
- Use comments sparingly — only for genuinely complex logic, not for self-evident code.
