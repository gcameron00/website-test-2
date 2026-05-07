# Implementation plan

This document describes the build-out of the Marbella tourism site in phases. Phase 1 is what is delivered in the initial PR; later phases are roadmap.

## Goals

1. A static, fast, accessible site informing tourists about **what to do in Marbella** during a long-weekend-to-one-week stay, particularly in the off-season (first half of May).
2. Content is organised around the visitor's questions: _what should I see, eat, buy, and do, and how do I get around?_
3. No framework. The repo root is the deploy artifact for Cloudflare Pages.

## Non-goals

- Booking, payments, or user accounts.
- Listings of hotels or accommodation.
- A general blog or CMS.
- Multi-language at launch (Spanish/English are likely later — see Phase 4).

## Information architecture

```
/                       Home — hero, top picks, "if you only have N days" cards
/about/                 What this site is, who runs it, sources, contact
/things-to-do/          Beaches, La Concha hike, paseo, spa & hammam, family
/culture/               Old Town, churches, museums, sculptures, festivals
/food-and-drink/        Chiringuitos & espeto, tapas, fine dining, drinks
/shopping/              Puerto Banús, La Cañada, Old Town boutiques, markets
/getting-around/        Airport, bus, taxi, walking, car hire, accessibility
/day-trips/             Ronda, Mijas, Málaga, Gibraltar, Caminito del Rey…
/plan/                  May guide, weather, events, sample itineraries
/404.html               Friendly fallback
```

## Design system

| Token             | Light       | Dark        | Use                                |
| ----------------- | ----------- | ----------- | ---------------------------------- |
| `--color-bg`      | `#fffdf8`   | `#0e1a23`   | Page background                    |
| `--color-surface` | `#ffffff`   | `#16242f`   | Cards, callouts                    |
| `--color-text`    | `#1c2933`   | `#e9eef2`   | Body text                          |
| `--color-muted`   | `#5b6b7a`   | `#94a8b8`   | Secondary text                     |
| `--color-primary` | `#0c6e8a`   | `#5fb7d4`   | Mediterranean — links, headings    |
| `--color-accent`  | `#e07a3f`   | `#f3a06b`   | Terracotta — CTAs, highlights      |
| `--color-sand`    | `#f4ebdc`   | `#1d2c37`   | Soft section background            |
| `--color-border`  | `#e6dcc9`   | `#233646`   | Hairlines, dividers                |

Type: system font stack (`-apple-system, Segoe UI, Roboto, …`) for zero asset cost. Headings use `clamp()` for fluid scale.

Layout: a max-width container (≈68rem), simple flex/grid components, generous whitespace. Mobile-first; one full responsive breakpoint at ≈48rem.

Accessibility:
- Semantic `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`.
- Skip link, visible focus, contrast ≥ 4.5:1.
- Respect `prefers-reduced-motion`.
- Theme toggle switches a `data-theme` attribute on `<html>` and persists to `localStorage`; default follows `prefers-color-scheme`.

## Phase 1 — initial PR (this change)

- README, content guide, deployment doc, this plan.
- Design system in `assets/css/styles.css`.
- Shared header/footer pattern (inlined in each page; no JS templating).
- Vanilla JS in `assets/js/main.js` for the mobile nav toggle, theme toggle, and footer year.
- All nine pages above with real, scannable content suited to an early-May visitor.
- Cloudflare Pages config: `_headers` (security headers, long cache for `/assets/*`), `_redirects` (trailing-slash and aliases), and a `404.html`.
- Favicon updated to a Marbella-themed mark.

## Phase 2 — content depth

- Replace placeholder restaurant/sight blurbs with first-hand reviews and a "last verified" date per entry.
- Add 2–3 photos per page (own photography or properly licensed CC-BY/Unsplash with credit), served as `webp`/`avif` with `<picture>`.
- Add an **interactive map** per area page using Leaflet + OpenStreetMap tiles (still no build step — load Leaflet from a CDN with SRI).
- Itinerary builder on `/plan/` that lets a visitor pick day count and interests and prints a checklist.

## Phase 3 — performance, SEO, sharing

- Per-page `<title>`, `<meta name="description">`, `og:` and `twitter:` cards, JSON-LD `TouristAttraction` and `Restaurant` schema.
- `sitemap.xml` and `robots.txt`.
- Pre-cache key images via a simple service worker (offline-first for the home page).
- Lighthouse target: ≥95 on all four categories on mobile.

## Phase 4 — i18n & community

- Spanish translation under `/es/…` mirroring the English structure; `lang` attribute on `<html>`; `_redirects` for accept-language hints.
- "Suggest an edit" link on each page that opens a pre-filled GitHub issue.
- Optional: a tiny serverless contact form via Cloudflare Pages Functions.

## Risks & mitigations

| Risk                                                        | Mitigation                                                       |
| ----------------------------------------------------------- | ---------------------------------------------------------------- |
| Content goes stale (closed restaurant, changed bus route)   | "Last verified" dates; "Suggest an edit" link in Phase 4         |
| No framework → repetition of header/footer across pages     | Strict pattern + a content guide; revisit if the site grows >20 pages |
| Off-season weather varies year to year                      | Frame May guidance as typical, not guaranteed; link to AEMET     |
| Image weight on a content-rich tourism site                 | Phase 2 enforces `webp`/`avif`, lazy loading, responsive `srcset` |

## Out of scope (and where to track it)

- Hotel listings — explicitly excluded by the brief.
- A native app — covered by responsive web design.
- A booking flow — out of scope; we link out to operators instead.
