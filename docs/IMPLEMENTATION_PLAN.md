# Implementation plan

This document captures the plan for building the initial Basel public transport
site. It is intentionally short — the site is small, has no framework, and its
"build" is "copy these files to Cloudflare Pages".

## 1. Scope of v1

A static, multi-page site covering five transport modes plus supporting pages.

Pages:

| Path           | Purpose                                                        |
| -------------- | -------------------------------------------------------------- |
| `/`            | Home: hero, one-line summary of each mode, mode cards          |
| `/trams/`      | Trams (BVB, BLT) — backbone of city transit                    |
| `/buses/`      | City and regional buses, including airport and night buses     |
| `/ferries/`    | The four Rhine reaction ferries                                |
| `/trains/`     | SBB long-distance, S-Bahn, trinational regional rail           |
| `/bikes/`      | Bike rental and bike sharing (PubliBike, Donkey Republic, etc.)|
| `/resources/`  | Tickets, fare zones, apps, accessibility resources             |
| `/about/`      | What this site is and isn't                                    |

Each mode page follows the same template:

1. **What it is** — one or two paragraphs.
2. **When it's the best option** — bullet list.
3. **When to pick something else** — short paragraph or list.
4. **Operators** — who actually runs it.
5. **Tickets and apps** — pointers to official channels.
6. **Useful links** — official websites only.

## 2. Out of scope for v1

- Live timetables, departure boards, route planners — defer to SBB / BVB / BLT.
- Real-time disruptions or status feeds.
- Multi-language content. English only at launch; German and French can come later.
- Maps embedded from third parties (privacy + weight). A static SVG zone map can
  be added later if it proves genuinely useful.
- Newsletter, comments, analytics.

## 3. Architecture

- **No framework, no build step.** The repository root is the deployable site.
- **One stylesheet** at `/assets/css/styles.css`. Uses CSS custom properties for
  theming and `prefers-color-scheme` for dark mode. Mobile-first.
- **One JavaScript file** at `/assets/js/main.js`. Only used to toggle the
  mobile navigation. The site must work fully without JS.
- **Header and footer markup is duplicated** across pages. This is a deliberate
  trade-off: we lose DRY-ness but keep the project free of templating tools.
  The nav has ~7 items and changes rarely.
- **Semantic HTML.** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`,
  `<footer>`. Each page has exactly one `<h1>`.
- **Accessibility:** visible focus styles, sufficient colour contrast in both
  themes, skip-to-content link, keyboard-operable nav toggle, descriptive link
  text (no "click here").

## 4. Visual design

- Palette inspired by Basel transport livery without imitating any single
  operator: a calm slate background with a Rhine-blue accent.
- System font stack — fast, no web font payload.
- A small SVG icon per mode, inlined where it appears as a card heading.
- Cards on the home page link to each mode page.

## 5. Performance budget

- Each page should be under **30 KB** of HTML + CSS + JS combined (gzipped).
- No external requests at runtime. Every asset ships from this repo.
- Images, if added later, must be SVG or AVIF/WebP and lazy-loaded.

## 6. Cloudflare Pages configuration

- **Production branch:** `main`.
- **Build command:** none.
- **Output directory:** `/` (repository root).
- `_headers` adds a sensible `Content-Security-Policy`, `Referrer-Policy`,
  `Permissions-Policy`, `X-Content-Type-Options`, and long cache lifetimes for
  `/assets/*`.
- `_redirects` is reserved for future moves; empty at launch except for one
  example commented out.

## 7. Build-out steps

1. Documentation: `README.md`, this plan, expanded `/about/`.
2. Shared CSS: design tokens, layout, components (header, nav, hero, cards,
   prose, footer).
3. Home page: hero + grid of mode cards + short orientation copy.
4. Mode pages: one per transport type, following the template above.
5. Resources page: tickets, apps, accessibility, lost & found.
6. Tiny `main.js` for the mobile nav toggle.
7. Cloudflare Pages config files (`_headers`, `_redirects`).
8. Manual QA: keyboard navigation, dark mode, mobile viewport, broken links.

## 8. Future work (post-v1)

- German + French translations under `/de/` and `/fr/`.
- A simple "which transport should I take?" decision helper (pure HTML form).
- Static SVG of the TNW fare zones.
- Page on regional/inter­national connections (Mulhouse, Freiburg, Zürich).
- An `/updates/` log for noteworthy changes (operator mergers, fare changes).
