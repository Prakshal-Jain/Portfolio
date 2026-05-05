# Portfolio — Prakshal Jain

Personal site. React + Vite + TypeScript + Tailwind v4 + Motion.

```bash
npm install
npm run dev      # http://localhost:5173/
npm run build    # → dist/
npm run preview  # serve the production build locally
```

## Editing content

All copy lives in [`src/data/content.ts`](src/data/content.ts) — change values
there and the rest of the site updates automatically.

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds on every push to
`main`/`master` and publishes to GitHub Pages.

**One-time setup:** Repo → **Settings → Pages → Source:** _GitHub Actions_.

The site builds with `base: "/"` so it expects to serve from the root. Two ways
to host it:

- **Custom domain** — add a `CNAME` file in `public/` containing your domain
  (e.g. `prakshaljain.com`), and point DNS at GitHub Pages.
- **User site** — rename the repo to `<username>.github.io` and it'll serve at
  `https://<username>.github.io/`.

If you ever need to host under a subpath, set `base: "/<subpath>/"` in
`vite.config.ts`.

## Stack

- **Vite 6** — build / dev server
- **React 18** — UI
- **TypeScript** — types
- **Tailwind v4** — styling, CSS-native config in `src/index.css`
- **Motion** (`motion/react`) — scroll reveals
- **`<canvas>`** — hero cellular animation in `src/components/CellCanvas.tsx`

No trackers, no analytics, no cookies.
