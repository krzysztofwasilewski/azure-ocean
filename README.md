# azure-ocean.com

Landing page for **Azure Ocean Strategy**, an IT business consultancy, in English (`/`) and Polish (`/pl/`).
Static site built with Vite and Tailwind CSS v4. No framework; the only client-side JavaScript is a ~2 kB script for the menu and scroll effects.

## Run locally

Requires Node 20 or newer.

```bash
npm install
npm run dev       # http://localhost:5173  and  /pl/
npm run build     # type-check + build into dist/
npm run preview   # serve dist/ locally
```

## Where things live

| What | File |
| --- | --- |
| English copy | `src/i18n/en.ts` |
| Polish copy | `src/i18n/pl.ts` |
| Booking link, email, LinkedIn, sister sites, analytics | `src/config.ts` (`site`) |
| Company details from CEIDG (footer and structured data) | `src/config.ts` (`company`) |
| Page layout and sections | `src/render.ts` |
| Colours, fonts, buttons, animations | `src/styles.css` |
| Menu, header, scroll-reveal script | `src/main.ts` |

`index.html`, `pl/index.html` and `404.html` are placeholders. At build time the plugin in `vite.config.ts` replaces each one with the page rendered by `src/render.ts`, so both languages share one layout. Change the copy in `src/i18n/` and keep the two files in step; TypeScript reports a missing key.

In `npm run dev`, Vite restarts when `src/render.ts`, `src/config.ts` or `src/i18n/*` change. Reload the browser to see the change.

## Before going live

- [ ] `site.bookingUrl`: set it to your Cal.com or Calendly page. While it is empty, every "Book a call" button opens an email to `site.email`.
- [ ] `site.email`: confirm the mailbox exists (currently `hello@azure-ocean.com`).
- [ ] `site.linkedinUrl`: add your LinkedIn profile. The link stays hidden while it is empty.
- [ ] `about.founderBio` in both language files: check that it describes you the way you want.
- [ ] Optional: `site.cloudflareAnalyticsToken` adds Cloudflare Web Analytics, which sets no cookies.

## Images

`public/og.png` (social preview), `public/apple-touch-icon.png` and `public/favicon-32.png` are rendered from `scripts/og.html` and `scripts/icon.html` with headless Chrome:

```bash
npm run images
```

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds the site and publishes `dist/` on every push to `main`. The setup is the same as for scrumisdead.

1. Create a GitHub repository, for example `azure-ocean`, and push this folder to it.
2. In the repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. `public/CNAME` already contains `azure-ocean.com`. Under **Settings → Pages → Custom domain**, enter `azure-ocean.com` and turn on **Enforce HTTPS** once the certificate has been issued.
4. Point the domain away from the Squarespace placeholder. At your DNS provider (Squarespace Domains or Cloudflare):
   - `A` records for `azure-ocean.com`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` record for `www`: `<your-github-username>.github.io`
   - Remove the Squarespace parking records for the root domain and `www`.
   - If you use Cloudflare, set these records to **DNS only** until GitHub has issued the certificate.
