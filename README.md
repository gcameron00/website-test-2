# Basel Public Transport Guide

A small, framework-free static website that explains the public transport options
available in Basel, Switzerland — trams, buses, ferries, trains and bike rental —
and points visitors to the official websites and apps for each.

The site is hosted on **Cloudflare Pages**.

## Goals

- Help visitors and new residents quickly understand which mode of transport fits
  which kind of journey in and around Basel.
- Be honest about *when* each option is the best choice (and when it isn't).
- Always defer to official operators (BVB, BLT, SBB, PubliBike, etc.) for
  timetables, tickets and live status — this site does not duplicate that data.
- Stay fast, lightweight and accessible: no framework, no build step, no tracking.

## Audience

- Tourists and short-term visitors.
- New residents getting oriented.
- Locals looking for a single overview to share with friends and family.

## Tech stack

- Plain **HTML5**, **CSS3** and a small amount of vanilla **JavaScript**.
- No build tools, no bundler, no package.json. The repo *is* the deployable site.
- Hosted on **Cloudflare Pages** — the project root is published directly.

## Repository layout

```
.
├── index.html              # Home page (overview + mode cards)
├── about/index.html        # About this site
├── trams/index.html        # Trams (BVB, BLT)
├── buses/index.html        # City and regional buses
├── ferries/index.html      # Rhine reaction ferries
├── trains/index.html       # SBB, S-Bahn, regional and international rail
├── bikes/index.html        # Bike rental and bike sharing
├── resources/index.html    # Tickets, apps and official links
├── assets/
│   ├── css/styles.css      # Single shared stylesheet
│   ├── js/main.js          # Small enhancements (mobile nav)
│   └── favicon.svg
├── docs/
│   └── IMPLEMENTATION_PLAN.md
├── _headers                # Cloudflare Pages headers
└── _redirects              # Cloudflare Pages redirects
```

Every page is a stand-alone HTML file. They share a common `<header>` /
`<footer>` markup pattern and the same stylesheet — there is no template engine.
If you change the navigation, change it in each page.

## Local development

You can open `index.html` directly in a browser, but root-relative links
(`/assets/...`) only resolve when the site is served from a web root. The
simplest options:

```sh
# Python 3
python3 -m http.server 8000

# Node (no install)
npx serve .
```

Then visit <http://localhost:8000>.

## Deploying

The repository is published as-is by Cloudflare Pages:

- **Build command:** *(none)*
- **Build output directory:** `/` (the repository root)
- **Production branch:** `main`

Pushes to `main` trigger a deploy. Pull requests get preview URLs.

## Contributing

Content corrections (a fare changed, an operator merged, a link broke) are very
welcome — open a pull request that edits the relevant page directly. Please
preserve the "describe the mode, then point to the official source" structure;
this site should not become a timetable.

## License

Content and code in this repository are provided for informational use. Trade
marks and operator names belong to their respective owners.
