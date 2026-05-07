# Deployment

## Hosting

The site is hosted on [Cloudflare Pages](https://pages.cloudflare.com/). The repository root is the publish directory; there is no build command.

## One-time setup (already done in production)

1. In the Cloudflare dashboard, **Pages → Create a project → Connect to Git** and pick this repository.
2. Configure the project:
   - **Production branch:** `main`
   - **Build command:** _(leave empty)_
   - **Build output directory:** `/` (repo root)
   - **Environment variables:** none required
3. Cloudflare will deploy on every push to `main`. Pull requests get a preview deployment automatically.

## Files Cloudflare Pages reads at the publish root

- `_headers` — sets HTTP response headers per path (CSP, caching, security).
- `_redirects` — redirect/rewrite rules. Trailing-slash normalisation and aliases live here.
- `404.html` — served for any unmatched path with a `404` status.

See the [Cloudflare Pages docs on these files](https://developers.cloudflare.com/pages/configuration/) for the full spec.

## Local preview

```bash
python3 -m http.server 8000
# or
npx --yes http-server -p 8000 .
```

Cloudflare's `_headers` and `_redirects` are **not** applied by these servers; they only matter once deployed. To preview them, install Wrangler and run:

```bash
npx --yes wrangler pages dev .
```

## Cache strategy

- HTML is served `Cache-Control: public, max-age=0, must-revalidate` — visitors always get the latest content.
- `/assets/*` is served `Cache-Control: public, max-age=31536000, immutable`. Bust the cache by changing the filename (e.g. `styles.v2.css`) when you change a CSS or JS asset.

## Rollbacks

In the Pages dashboard, **Deployments → ⋯ → Rollback to this deployment**. Production traffic is moved within seconds.

## Custom domain

Once the project is wired to a custom domain in Cloudflare, no extra config is needed in this repo — the proxy handles TLS and DNS.
