# Obama College, Mankessim — Website

Marketing website for Obama College, Mankessim (OBACO), a Day & Boarding Senior High School in Mankessim, Central Region, Ghana. See `CLAUDE.md` for the full technical/content specification.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router), TypeScript
- Tailwind CSS v4 + [shadcn/ui](https://ui.shadcn.com) (`base-nova` style, built on [Base UI](https://base-ui.com))
- Framer Motion, React Hook Form + Zod, Lucide React icons
- Fully static export (`output: "export"` in `next.config.ts`) — no server runtime

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3005](http://localhost:3005) — the dev server runs on port **3005** (see the `dev` script in `package.json`), not the Next.js default of 3000.

```bash
npm run build   # static export to out/
npm run lint    # eslint
```

## Content

Nothing is hardcoded inside components. Page content lives in `data/` (e.g. `data/site.ts` for contact/social info, `data/navigation.ts`, `data/senior-high/` for programmes/news/gallery/staff/flyers) and is typed via `types/`. Editing those files is the primary way to update site content; components read from them.

Content can also be edited through **Decap CMS** at `/admin`, backed by the config in `public/admin/config.yml` and gated by **Netlify Identity**.

## Deployment

Deployed on **Netlify** (`netlify.toml`: `npm run build` → publishes `out/`, Node 20). The contact form is handled by **Netlify Forms**.

### Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | No | When set, loads the Plausible analytics script at build time. Leave unset to ship with no analytics. |
