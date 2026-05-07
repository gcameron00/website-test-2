# Implementation Plan

Phased plan for building out the Basel Public Transport Guide. Each phase
should be independently shippable so the site is useful even if later phases
slip.

## Phase 0 — Foundations (this PR)

**Goal:** the bones of the site, deployable to Cloudflare Pages, with all
five transport modes covered at a baseline level.

- [x] README and project plan committed.
- [x] Site information architecture: home + about + one page per mode.
- [x] Shared header / footer / nav rendered on every page (copied per page —
      no JS templating).
- [x] Responsive layout (mobile first, single breakpoint at ~720px).
- [x] Light/dark via `prefers-color-scheme`, no toggle.
- [x] One page per mode with: what it is, when to use it, when not to,
      tickets/apps, official links.
- [x] Comparison table on the home page.
- [x] `_headers` with sensible security defaults for a static site.
- [x] `robots.txt` allowing crawling.

## Phase 1 — Content polish

**Goal:** make the content actually authoritative and trustworthy.

- [ ] Have a Basel local review each mode page for accuracy (line numbers,
      ferry names, common edge cases).
- [ ] Add a short "first time in Basel?" mini-guide — what to buy at the
      airport / station / hotel (BaselCard, day passes, TNW zone 10/11).
- [ ] Add a "common journeys" page with worked examples, e.g. EuroAirport →
      city centre, SBB station → Münster, Kleinbasel → Grossbasel.
- [ ] Add accessibility notes per mode (low-floor trams, ferry step-on,
      bike rack policies on S-Bahn).

## Phase 2 — Visual identity

**Goal:** look like a guide, not a default-stylesheet page.

- [ ] Pick a typeface pair (one display, one text — both system or
      self-hosted; no Google Fonts CDN).
- [ ] Hand-drawn or SVG icons per mode (tram, bus, ferry, train, bike).
- [ ] Hero image / illustration of the Rhine on the home page.
- [ ] Per-mode header colour accents matching operator brand neutrals
      (without infringing on logos).

## Phase 3 — Interactivity (still no framework)

**Goal:** small, progressive enhancements that work without JS.

- [ ] "Plan a trip" deep-link helper that opens the SBB Mobile / BVB app
      with origin/destination prefilled (intent URLs / universal links).
- [ ] Toggle on the comparison table to sort by speed / cost / coverage.
- [ ] "Nearest stop" link that opens Google/Apple Maps with a transit query.

## Phase 4 — Internationalisation

**Goal:** Basel is German-speaking but very international.

- [ ] Move copy into per-locale folders: `/de/`, `/fr/`, `/en/` (default).
- [ ] Add a language switcher in the header.
- [ ] Keep English as the default; German and French as the next two
      priorities.

## Phase 5 — Live-ish data (carefully)

**Goal:** show real-time disruptions without becoming a fragile timetable
clone of the operators.

- [ ] Pull the BVB / SBB disruptions feed at build time (Cloudflare
      Pages Functions or a scheduled GitHub Action that commits a JSON
      blob).
- [ ] Display a single "Disruptions today" banner on the home page, linking
      to the operator's own page for details.
- [ ] Never display live arrival times — that's what the operator apps are
      for.

## Out of scope (intentionally)

- A custom journey planner — SBB and BVB already do this better than we ever
  could.
- Ticket purchasing — legal, financial and trust complexity not worth taking
  on.
- A native app — the site is responsive; that's enough.
- User accounts, comments, analytics beyond aggregate Cloudflare metrics.

## Definition of done for each mode page

A mode page is "done" when it answers, in this order:

1. **What is it?** (one paragraph)
2. **Why would I pick this over the alternatives?** (a short list)
3. **When would I *not* pick this?** (a short list)
4. **Tickets & apps** (TNW zones, day passes, BaselCard, operator app)
5. **Official resources** (bullet list of outbound links — the source of
   truth, not us)
