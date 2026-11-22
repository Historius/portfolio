# Serhii Stets — Portfolio

Live: https://portfolio-serhii-stets.vercel.app

## Stack

Next.js 16 (App Router), React, TypeScript, Tailwind CSS, Vercel

## Technical decisions

- **All pages are static.** I removed an artificial delay, so Next.js prerenders every page at build time. Pages load instantly and the server does no work per request.
- **Open Graph preview.** Links shared in Telegram or LinkedIn show a card with a cover image, title and description.
- **robots.txt blocks AI crawlers** (GPTBot, ClaudeBot, CCBot), while search engines can still index the site.
- **Auto-deploy on Vercel.** Every push to `main` builds and deploys the site. A broken release can be rolled back with Instant Rollback.

## Run locally

npm install
npm run dev
