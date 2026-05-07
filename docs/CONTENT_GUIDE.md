# Content guide

Editorial conventions for the Marbella tourism site. The goal is content that a visitor actually reads on their phone the night before their trip.

## Voice

- **Helpful and opinionated.** "If you only do one thing in the Old Town, walk to Plaza de los Naranjos at golden hour." Avoid travel-brochure adjectives ("vibrant", "bustling", "stunning") — describe what you'd actually see, hear, or eat.
- **Second person.** "You'll find…", "Order the…".
- **Specific.** Name streets, dishes, neighbourhoods, prices in € ranges (`€€` ≈ €25–45 pp), and walking times.
- **Honest about trade-offs.** Mention crowds, queues, parking, accessibility issues.

## Structure of a page

1. **Lede paragraph** (≤3 sentences) — what this page covers and why a tourist should care.
2. **Quick picks** — a card grid of 3–6 named recommendations, each with a one-sentence hook.
3. **Detail sections** — `<h2>` per topic, two to four short paragraphs each.
4. **Practical info callout** — opening hours, cost, reservations, accessibility, how to get there.
5. **Related pages** — link out to two or three sibling pages.

## Naming and links

- Use the Spanish name first, English in parentheses on first mention: _Casco Antiguo_ (Old Town), _Paseo Marítimo_ (seafront promenade).
- Internal links use trailing-slash directory URLs: `/day-trips/`, not `/day-trips/index.html`.
- External links open in the same tab unless they're a map or booking flow, in which case use `target="_blank" rel="noopener"`.

## "Last verified"

Where a fact is time-sensitive (opening hours, prices, transport timetables), include an inline "_verified May 2026_" tag. Update it when you re-check.

## Photography

- **Phase 1 ships without photos.** Placeholder hero gradients are intentional.
- When adding photos in Phase 2:
  - Own photography preferred. Otherwise CC-BY or Unsplash with credit line in the figure caption and in `/about/`.
  - Export to `webp` (and `avif` if convenient). Keep originals out of the repo.
  - Always provide meaningful `alt` text, not "photo of beach".
  - Use `<picture>` with `srcset` for responsive sizes (≈480, 960, 1600w).
  - Lazy-load all but the hero: `loading="lazy" decoding="async"`.

## Accessibility

- One `<h1>` per page (the page title).
- Don't use colour alone to convey meaning.
- All interactive elements reachable by keyboard with a visible focus ring.
- `aria-current="page"` on the active nav item.
- Forms (later) need labels, not placeholder-only inputs.

## Markup conventions

- Inline the shared header and footer in each page. Keep them byte-identical across pages so diffs stay clean.
- Use `<section aria-labelledby="…">` for major sections, with the matching `<h2 id="…">`.
- Card grids use `<ul class="cards">` with each card as `<li class="card">`.

## What we don't do

- No hotel or accommodation recommendations.
- No affiliate links.
- No autoplay video, no carousels that auto-advance, no pop-ups.
- No tracking beyond Cloudflare's anonymised request analytics.
