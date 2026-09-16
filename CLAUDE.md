# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server on `http://localhost:3000`.
- `npm run build` — production build. Fails on any type error, so this doubles as the type-check gate.
- `npm run start` — serve the production build locally.
- `npm run lint` — run ESLint over the repo.

There is no test runner configured. Node version is pinned in `.nvmrc` (`nvm use`).

Copy `.env.example` to `.env.local` for local work. The site renders without any env vars; only the consultation form needs them.

## Architecture

A marketing site for MaxxTour.by (a Belarusian travel agency — UI copy is in Russian). Stack: Next.js (App Router), React 19, Tailwind CSS v4, TypeScript.

**Minimum-server architecture.** `next.config.ts` is intentionally empty. Every page is prerendered as static content at build time; the *only* dynamic route in the whole app is `POST /api/consultation`. Check the route table printed by `npm run build` — if anything other than `/api/consultation` shows up as `ƒ (Dynamic)`, something has accidentally opted a page out of prerendering, and that is a regression worth fixing.

The app is host-agnostic: it needs somewhere that can run a Node function, but nothing beyond that. Do not reintroduce `output: "export"` (it would break the API route) or `basePath` (removed when the site left GitHub Pages).

### The consultation form — the one server layer

`ConsultationModal` (`src/components/consultation-modal/`) POSTs JSON to `/api/consultation` (`src/app/api/consultation/route.ts`), which forwards it to the agency's Telegram chat via the Bot API. There is no database and nothing is persisted.

The route handler owns all the trust boundaries — keep them intact when editing:

- **Secrets stay server-side.** `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` must never gain a `NEXT_PUBLIC_` prefix; that would ship the token to the browser.
- **User text is HTML-escaped** before it reaches Telegram, which parses the message as HTML. Removing `escapeHtml` lets a `<` in a name silently truncate the message.
- **Honeypot** (`website` field) returns a fake success so bots get no signal.
- **Rate limiting** is an in-memory `Map`, which on serverless is per-instance and therefore best-effort only. If abuse becomes real, this needs a shared store — do not assume it is airtight.
- **Missing env vars degrade to a 503** with a Russian-language message, rather than crashing the route.

Errors are logged server-side but never returned to the client verbatim — the client always gets a generic Russian message.

**The app has exactly two pages plus one API route:**

1. **`/`** (`src/app/page.tsx`) — a long scrolling landing page. About, Visas and Contacts are on-page sections, not routes.
2. **`/home`** (`src/app/home/page.tsx`) — a re-export alias of `/`, kept from the old router.
3. **`/api/consultation`** — the form endpoint described above.

`src/sections/tours/Tours.tsx` is a stub that is not routed yet.

Because About/Contacts/Visas are sections rather than pages, header nav links are in-page anchors that smooth-scroll (`NavLinks.tsx`) — do not turn them into routes.

**Never create a `src/pages/` directory.** Next would pick it up as the Pages Router and turn every file in it into a route. Page sections live in `src/sections/`.

### Directory map

- `src/app/` — `layout.tsx` (the shell: `<html>`, metadata, FontAwesome CSS, `ConsultationModalProvider`, `Header`/`Footer`), `page.tsx`, `home/page.tsx`, `api/consultation/route.ts`, `manifest.ts`, `globals.css`, `layout.css`.
- `src/sections/` — landing-page sections: `hero/`, `advantages/`, `visas/`, `about/`, `contacts/`.
- `src/components/` — shared UI used across the shell and sections: `header/`, `footer/`, `consultation-modal/`, `modal/`, `social-icons/`, `contact-icons/`, `map/`.
- `src/utils/context/` — `ConsultationModalProvider`, which owns the "Получить консультацию" modal.

### Server vs. client components

Everything is a server component by default. Add `"use client"` only where a component needs state, effects, event handlers, context or browser APIs — currently `Header`, `MobileNav`, `NavLinks`, `Footer`, `Hero`, `VisaCard`, `VisaModal`, `ConsultationModal`, `AdvantageItem` and the modal context provider.

FontAwesome needs Next-specific setup, already done in `layout.tsx`: `config.autoAddCss = false` plus an explicit import of `@fortawesome/fontawesome-svg-core/styles.css`. Import icons individually (`faHeart`, …) — do not `library.add(fas)`.

## Styling convention

Tailwind v4 runs through PostCSS (`@tailwindcss/postcss` in `postcss.config.js`; no `tailwind.config.js` — configuration is CSS-first in `src/app/globals.css`). Styling is **hybrid**: Tailwind utility classes inline in JSX for layout/spacing, **plus** a co-located `.css` file per component/section (e.g. `Header.tsx` + `Header.css`) for bespoke styling and named classes like `scrolled-header`, `header-link`. When editing a component's look, check both the inline classes and its sibling `.css` file.

Breakpoints are named `@custom-media` definitions in `src/styles/breakpoints.css`, injected into every CSS file by `@csstools/postcss-global-data` and resolved at build time by `postcss-custom-media`. Write `@media (--md) { ... }`; the values match Tailwind's scale so they line up with the `md:` utilities in JSX.

## Conventions

- Each component/section is a folder containing the `.tsx` and its matching `.css`, imported at the top of the `.tsx`.
- Image assets are imported as modules from `src/assets/images/` (e.g. `import logoUrl from ".../logo.png"`), not referenced by string path. `public/` is for files referenced by URL (favicons, PDFs). Static imports return a `StaticImageData` object, so a plain `<img>` needs `src={img.src}`.
- UI copy is Russian; user-facing error strings from the API must be Russian too.
- TypeScript is strict with `noUnusedLocals`/`noUnusedParameters` on — unused imports/vars break the build.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
