# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR.
- `npm run build` — type-check (`tsc -b`) then produce a production build. The build fails on any type error, so this doubles as the type-check gate.
- `npm run lint` — run ESLint over the repo.
- `npm run preview` — serve the built `dist/` locally.

There is no test runner configured. Node version is pinned in `.nvmrc` (`nvm use`).

## Architecture

A marketing site for MaxxTour.by (a Belarusian travel agency — UI copy is in Russian). Stack: React 19, React Router v7 (the `react-router` package, framework-less / data-router mode), Tailwind CSS v4, TypeScript, Vite.

**The app has exactly two pages:**
1. **Home** (`/`) — a long scrolling landing page that contains the About, Contacts, and Visas info as on-page sections (not separate routes).
2. **Tours** (`/tours`) — where the user searches for tours.

- **Routing lives in `src/main.tsx`**, not a separate router file. `createBrowserRouter` defines the route tree and `App` is the layout route. Because About/Contacts/Visas are sections of Home rather than pages, the `Header` nav links to them should be in-page anchors/scroll targets on Home — do not add them as new routes. (The current `Header` markup points some of these at `/visas`, `/about`, `/contacts`, which are not registered and would 404; they should be converted to section anchors.)
- **`src/App.tsx` is the layout shell**: renders `Header` + `<Outlet />` + `Footer` for every route. It also registers the FontAwesome solid icon set globally (`library.add(fas)`) so any component can use icon names without per-file imports.
- **Page composition:** `src/pages/<page>/` holds top-level pages. The `home/` page composes the section components (`hero/`, plus the `about/` and `contacts/` sections rendered inline; Visas info belongs here too). `Header` and `Footer` live under `pages/home/` but are used app-wide via the layout.
- **Reusable UI** goes in `src/components/` (e.g. `button/Button.tsx`).

## Styling convention

Tailwind v4 is wired through the `@tailwindcss/vite` plugin (no `tailwind.config.js`; configuration is CSS-first). Styling is **hybrid**: Tailwind utility classes inline in JSX for layout/spacing, **plus** a co-located `.css` file per component/page (e.g. `Header.tsx` + `Header.css`) for bespoke styling and named classes like `scrolled-header`, `header-link`. When editing a component's look, check both the inline classes and its sibling `.css` file.

## Conventions

- Each component/page is a folder containing the `.tsx` and its matching `.css`, imported at the top of the `.tsx`.
- Image assets are imported as modules from `src/assets/images/` (e.g. `import logoUrl from ".../logo.png"`), not referenced by string path.
- TypeScript is strict with `noUnusedLocals`/`noUnusedParameters` on — unused imports/vars break the build.
