# Basel Public Transport Guide

A static informational website that explains the public transport options in
**Basel, Switzerland** — trams, buses, the Rhine ferries, trains and shared
bikes — and points visitors to the **official operator websites and apps** for
tickets, timetables and live information.

The site is deliberately small, fast and dependency-free so it can be hosted
on **Cloudflare Pages** with no build step.

## Goals

- Help residents and visitors quickly understand which mode of transport is
  best for a given trip in and around Basel.
- Compare modes honestly (cost, speed, coverage, character) instead of
  promoting any single operator.
- Always link out to the **official source** (BVB, BLT, SBB, Fähri-Verein,
  PubliBike, etc.) for tickets, timetables and disruptions — this site does
  **not** display live data and is not a replacement for the operator apps.

## Audience

- Tourists arriving for a few days who need to navigate the city.
- New residents getting oriented to the TNW fare zone.
- Locals trying to decide between, say, a tram + ferry combo or just a bike.

## Tech stack

- **Plain HTML, CSS and a touch of JavaScript** — no framework, no bundler,
  no `package.json` required.
- Hosted on **Cloudflare Pages**, served straight from this repo.
- Light/dark mode driven by `prefers-color-scheme` (no toggle, no JS).

## Project structure

```
.
├── index.html              Home page (overview + mode cards)
├── about/index.html        About this site, sources, disclaimer
├── modes/
│   ├── tram/index.html     Trams (BVB + BLT)
│   ├── bus/index.html      Buses (BVB, BLT, Postauto, regional)
│   ├── ferry/index.html    The four Rhine reaction ferries
│   ├── train/index.html    S-Bahn and long-distance (SBB, DB, SNCF)
│   └── bike/index.html     PubliBike, Pick-e-Bike, Rent-a-Bike
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── favicon.svg
├── _headers                Cloudflare Pages security headers
├── robots.txt
├── IMPLEMENTATION_PLAN.md  Phased build-out plan
└── README.md
```

## Local development

There is no build step. Any static file server will do. From the repo root:

```sh
# Python 3
python3 -m http.server 8080

# or Node (no install needed)
npx --yes serve .
```

Then open <http://localhost:8080>.

## Deployment

Cloudflare Pages is configured to serve this repository directly:

- **Build command:** _(none)_
- **Build output directory:** `/` (the repo root)
- **Production branch:** `main`

Pushing to `main` triggers a deploy. Pull requests get a preview URL.

## Contributing

- Keep the site framework-free — no React, no build pipeline.
- Prefer linking to the official operator over re-stating fare/timetable
  details that go stale quickly.
- When in doubt, the operator's own website wins as the source of truth.

## License & disclaimer

This is an unofficial guide. All trademarks (BVB, BLT, SBB, Fähri-Verein,
PubliBike, Pick-e-Bike, etc.) belong to their respective owners. Always
verify tickets, prices and schedules on the official operator's website
before travelling.
