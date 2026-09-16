# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing site for **Canale SRL**, an Argentine industrial wood-packaging manufacturer (pallets, crates, pellets). Built with React + Vite + Tailwind, scaffolded by **Hostinger Horizons** (an AI website builder — see "Horizons tooling" below for what that implies about the dev setup).

## Commands

```bash
npm run dev        # vite dev server on :3000 (with Horizons dev-only plugins active)
npm run build      # regenerates public/llms.txt, then vite build
npm run start       # vite preview of the production build
npm run lint        # eslint . , plus a second pass on src/**/*.jsx for stray unicode escapes
npm run lint:warn   # eslint . without the quiet flag (shows warnings too)
```

There is no test runner configured in this repo.

## Architecture

**Single-page app, not a multi-page site.** `src/App.jsx` only mounts one route (`/` → `HomePage`), even though `react-router-dom` is a dependency. `src/pages/HomePage.jsx` is the entire site: it defines every section (Header, Hero, Autoridad, Productos, ProblemaSolucion, Personalizacion, Industrias, Capacidad, Calidad, Historia, Contacto, Footer) as local components in one file and composes them at the bottom. When asked to edit "the X section," look inside this file rather than searching for a separate component.

- All copy is in Spanish (Argentina) — keep new copy consistent with that.
- Section content (products, industries, stats, timeline, certifications) is defined as small local data arrays (`PRODUCTOS`, `INDUSTRIAS`, `STATS`, `HITOS`, `NORMAS`, etc.) right above the component that renders them — edit the array, not the JSX, when just changing content.
- Hero/section images are hosted on `images.hostinger.com` (referenced by absolute URL in the `IMG` map); the only local image asset is the logo (`src/assets/img/Canale.png`).
- The contact form (`Contacto`) has no backend — submission just builds a `mailto:` link to `ventas@canale.com.ar`. There's no form POST endpoint to wire up.
- `src/components/` holds small shared pieces used by HomePage: `Reveal` (scroll-in animation wrapper via `framer-motion`), `CountUp` (animated number), `Seo` (Open Graph/meta tag helper), `ScrollToTop`.
- `src/components/ui/` is the shadcn/ui component set (Radix primitives + `class-variance-authority`), configured via `components.json` (style: new-york, no TSX, alias `@` → `src`). Most of these are currently unused by HomePage but are available for future sections — add new UI primitives via shadcn conventions rather than hand-rolling.
- Path alias: `@/...` maps to `src/...` (see `vite.config.js` resolve.alias and `eslint.config.mjs` import/resolver).

### Horizons tooling (dev-only)

`vite.config.js` conditionally loads several plugins **only when not in production** (`isDev`), from `plugins/`:
- `visual-editor/` — inline visual editing + "edit mode" for the Horizons hosted editor.
- `selection-mode/` — element selection overlay.
- `site-pages/` — dev-server-side page management.
- `vite-plugin-pocketbase-auth.js` — auth against a PocketBase backend (Hostinger's `hcgi/platform` API), used by Horizons' own tooling, not by the site itself.
- `session-journal/` — dev session logging.
- `vite-plugin-iframe-route-restoration.js` — keeps client-side routing working when the app is iframed by the Horizons editor.

These exist to support editing this project inside the Hostinger Horizons UI (which loads the dev server in an iframe from `horizons.hostinger.com`/`horizons.hostinger.dev` — see the `AllowedEditorOrigins` CORS allowlist). They don't run in production builds and generally don't need to be touched for normal content/feature work on the site itself.

`vite.config.js` also injects several inline `<script>` blocks into `index.html` in dev (error/console forwarding to a parent frame, a `fetch` monkey-patch that downgrades known-benign Horizons/PocketBase auth errors to `console.info`, and iframe navigation guarding). Leave these alone unless you're specifically working on Horizons integration — they're not app logic.

`tools/generate-llms.js` runs before every build and generates `public/llms.txt` by statically scanning `src/pages/*.jsx` for `<Helmet>` title/description tags (matched against routes parsed out of `src/App.jsx`). If you add a new routed page with its own `<Helmet>`, this will pick it up automatically; it doesn't need manual maintenance.

### Deployment

`vite.config.js` sets `base: '/webcanale/'` — the production build is served from a `/webcanale/` subpath. The `docs/` directory in this repo is a **committed production build output** (not source) used for GitHub Pages — there is no CI workflow that builds it; it must be regenerated manually (`npm run build` outputs to `dist/` per Vite defaults, so check how `docs/` is populated — likely a manual copy/build-to-docs step — before assuming it's automated) and committed when the live site needs updating.

## Linting notes

- `eslint.config.mjs` intentionally disables several React/import rules deemed non-critical for this project (`react/prop-types`, `no-unused-vars`, `import/no-cycle`, etc.) — don't re-enable them piecemeal.
- `no-undef` and `import/no-self-import` are kept as errors because they catch real runtime bugs.
- A custom rule (`eslint.unicode-escapes-plugin.mjs`) warns on stray unicode escapes inside JSX in `.jsx` files.
