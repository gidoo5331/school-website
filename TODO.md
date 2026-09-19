# Audit findings & follow-ups

Generated from a full code/design review. Items marked `[x]` were implemented directly (see git diff). Items marked `[ ]` are intentionally deferred — either excluded by request, or blocked on real content/decisions from the school.

## Code quality

- [x] Contact form was stubbed (`console.log` + fake delay) — now submits via Netlify Forms with an error state and toast feedback.
- [x] No custom 404/error pages — added `app/not-found.tsx` and `app/error.tsx`.
- [x] Stray untracked `data1/index.html` scratch file — deleted.
- [x] `CLAUDE.md` said deployment was Vercel; actual setup is Netlify — corrected.
- [x] `README.md` was unedited `create-next-app` boilerplate — rewritten to describe the real project, stack, and commands.
- [x] No CI — added `.github/workflows/ci.yml` (lint + build on push/PR).
- [ ] `tina/__generated__` vestigial directory — **left untouched**, being handled in another branch.
- [ ] No automated tests (unit or e2e) — **not added**, per instruction.
- [ ] `data/site.ts` placeholder content: empty `social` links, `"-"` bank details — needs real information from the school; not a code fix.
- [ ] Real campus/student/staff photography — site currently leans on Unsplash/Wikimedia stand-ins via `lib/stock-images.ts`; swap in via `/admin` (Decap CMS) as photos come in.

## Design/UI

- [x] Added `dialog` and `sonner` shadcn primitives (Base UI-flavored, matching the existing `sheet.tsx` convention) to support the lightbox, toasts, and command palette below.
- [ ] Still no `dropdown-menu`, `select`, or `tabs` primitives — add if/when a feature needs them.

## New features implemented

- [x] Gallery lightbox with keyboard navigation (`components/gallery/gallery-lightbox.tsx`) — click a photo to open it, arrow keys / Escape to navigate, scoped to the active category filter.
- [x] News article share row (`components/news/share-row.tsx`) — copy link, X, Facebook, WhatsApp — plus proper per-article Open Graph/Twitter metadata and `NewsArticle` JSON-LD (`lib/seo.ts`).
- [x] Command palette search (`⌘K` / `Ctrl+K`, `components/shared/command-palette.tsx`) over pages, programmes, admissions FAQs, and news.
- [x] Programme "at a glance" print sheet — a Print/Save-as-PDF button and print stylesheet on `/programmes/[slug]`.
- [x] Privacy-friendly analytics loader, off by default (`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` env var — see README).

## Deferred features

- [ ] Newsletter signup — **excluded by request**.
- [ ] Anything from `CLAUDE.md`'s "Future Features" list (student/parent/teacher portals, online admissions, payments, results checker, etc.) — those require a backend/database and are already tracked there as Phase 2/3 work.
