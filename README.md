# Visit Marbella — A Tourist's Guide

A static website that helps short-break tourists make the most of **Marbella, Spain**, with a particular focus on the early-May / off-season window. The site is intentionally focused on _what to do_ — culture, entertainment, food, shopping, relaxation, getting around, and nearby day trips — and does **not** cover where to stay.

## Audience and tone

- **Who it's for:** travellers staying anywhere from a long weekend to a full week
- **When:** slightly off-season, especially the first half of May (mild weather, fewer crowds, sea still cool)
- **What they want:** a balanced trip — culture, dining, shopping, and beach time without the high-summer queues
- **Tone:** warm, practical, opinionated; short paragraphs, scannable lists, real recommendations

## Tech stack

- **Static HTML, CSS, and a small amount of vanilla JavaScript.** No build step, no framework, no bundler.
- **Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/). The repository root _is_ the publish directory.
- **Design system:** CSS custom properties in `assets/css/styles.css`, supporting light and dark colour schemes via `prefers-color-scheme` and an explicit toggle.
- **Accessibility:** semantic HTML5, sufficient colour contrast, reduced-motion support, keyboard-accessible navigation.

## Project structure

```
.
├── index.html                     # Home / hero + highlights
├── about/                         # About this site, sources, contact
├── things-to-do/                  # Beaches, walks, spa, sights
├── culture/                       # Old Town, museums, festivals
├── food-and-drink/                # Chiringuitos, tapas, fine dining, drinks
├── shopping/                      # Puerto Banús, La Cañada, markets
├── getting-around/                # Airport transfers, buses, taxis, walking
├── day-trips/                     # Ronda, Mijas, Málaga, Gibraltar, Caminito del Rey…
├── plan/                          # May guide, sample itineraries, weather, events
├── 404.html
├── _headers                       # Cloudflare Pages security headers
├── _redirects                     # Cloudflare Pages redirects
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── favicon.svg
└── docs/
    ├── IMPLEMENTATION_PLAN.md
    ├── CONTENT_GUIDE.md
    └── DEPLOYMENT.md
```

Each page is a self-contained `index.html` inside its own directory so URLs are clean (`/culture/`, `/day-trips/`) without server rewrites.

## Local development

No tooling is required. Open `index.html` directly, or run any static file server from the repo root:

```bash
# Python 3
python3 -m http.server 8000

# Or Node (if installed)
npx --yes http-server -p 8000 .
```

Then visit <http://localhost:8000/>.

## Deployment

Deployment is handled by Cloudflare Pages connected to this repository's `main` branch. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for details.

## Contributing

See [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md) for editorial conventions (voice, structure, link policy, photo licensing notes) and [`docs/IMPLEMENTATION_PLAN.md`](docs/IMPLEMENTATION_PLAN.md) for the build plan and roadmap.

## Disclaimer

Information about restaurants, opening hours, transport, and ticketing changes frequently. Always verify directly with the venue or operator before relying on it. This site is independent and not affiliated with the Ayuntamiento de Marbella, Andalucía Turismo, or any business mentioned.
