# MaxxTour.by

Marketing site for MaxxTour.by, a family travel agency in Minsk. Built with
Next.js (App Router), React 19, Tailwind CSS v4 and TypeScript.

Every page is prerendered at build time. The only server-side code in the whole
app is one route handler, `POST /api/consultation`, which forwards consultation
requests to the agency's Telegram chat.

## Getting started

```bash
nvm use                    # Node version is pinned in .nvmrc
npm install
cp .env.example .env.local # then fill in the Telegram values
npm run dev                # http://localhost:3000
```

The site renders fine without any environment variables — only the consultation
form needs them, and it returns a clear "temporarily unavailable" message until
they are set.

## The consultation form

`ConsultationModal` POSTs JSON to `/api/consultation`, which posts to the
Telegram Bot API. Nothing is stored, and there is no database.

To set it up:

1. Message [@BotFather](https://t.me/BotFather), send `/newbot`, copy the token.
2. Add the bot to the chat or group that should receive requests.
3. Post a message in that chat, then open
   `https://api.telegram.org/bot<TOKEN>/getUpdates` and copy `result[].chat.id`
   (group ids are negative).
4. Put both into `.env.local`, and into your host's environment variables for
   production.

`TELEGRAM_BOT_TOKEN` must stay server-side — never rename it to
`NEXT_PUBLIC_*`, or the token ships to the browser and anyone can post as
your bot.

The endpoint validates name/phone, drops submissions that trip a hidden honeypot
field, escapes user text before handing it to Telegram's HTML parser, and
best-effort rate-limits to 5 submissions per IP per 10 minutes.

## Scripts

| Script          | What it does                                                    |
| --------------- | --------------------------------------------------------------- |
| `npm run dev`   | Dev server with Fast Refresh.                                   |
| `npm run build` | Production build. Type-checks too, so it is the type-check gate. |
| `npm run start` | Serve the production build locally.                             |
| `npm run lint`  | ESLint over the repo.                                           |

There is no test runner configured.

## Deployment

The app needs a host that can run a Node.js function for `/api/consultation`;
static-only hosting such as GitHub Pages will not work. Vercel, Netlify,
Cloudflare (via `@opennextjs/cloudflare`) and any VPS running `next start` all
work without code changes.

Set `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` and `NEXT_PUBLIC_SITE_URL` in the
host's environment. Deployment itself is handled by the host's Git integration;
`.github/workflows/ci.yml` only lints and builds.

## Layout

- `src/app/` — routes, root layout and page metadata.
- `src/app/api/consultation/` — the single server-side route handler.
- `src/sections/` — the landing-page sections (hero, advantages, visas, about, contacts).
- `src/components/` — shared UI (header, footer, modals, icons, map).
- `src/assets/` — images imported as modules.
- `src/styles/breakpoints.css` — `@custom-media` breakpoint definitions.
