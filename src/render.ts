// Renders the full HTML for each page at build (and dev) time.
// Called from the i18n plugin in vite.config.ts; nothing here ships to the browser.

import { company, site } from './config';
import { en } from './i18n/en';
import { pl } from './i18n/pl';
import type { Dict, Locale } from './i18n/types';

const dicts: Record<Locale, Dict> = { en, pl };
const paths: Record<Locale, string> = { en: '/', pl: '/pl/' };

/** Escape a value for use in HTML text or attributes. Dictionary strings are trusted HTML and are not escaped. */
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const stripTags = (s: string) => s.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

function bookLink(t: Dict) {
  if (site.bookingUrl) return `href="${esc(site.bookingUrl)}" target="_blank" rel="noopener"`;
  return `href="mailto:${site.email}?subject=${encodeURIComponent(t.cta.emailSubject)}"`;
}

// ---------------------------------------------------------------- icons

const icon = (path: string, cls = 'size-5') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;

const icons = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  minus: '<path d="M5 12h14"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  flow: '<path d="M3 7h11a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h13"/><path d="m18 16 3 3-3 3"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
  people: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18.5 14.5a6.5 6.5 0 0 1 3 5.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
};

const serviceIcons = [icons.compass, icons.flow, icons.spark, icons.people];

export const logoMark = (cls = 'size-8') => `
<svg class="${cls}" viewBox="0 0 32 32" aria-hidden="true">
  <rect width="32" height="32" rx="8" fill="#0B1F3A"/>
  <path d="M5 13.5c3.2-2.4 6.6-2.4 11 0s7.8 2.4 11 0" fill="none" stroke="#4FA3EC" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M5 19.5c3.2-2.4 6.6-2.4 11 0s7.8 2.4 11 0" fill="none" stroke="#B6DBF8" stroke-width="2.4" stroke-linecap="round" opacity=".75"/>
</svg>`;

// ---------------------------------------------------------------- strategy canvas (hero figure)

function strategyCanvas(t: Dict) {
  const c = t.hero.canvas;
  const industry = [0.85, 0.82, 0.86, 0.2, 0.38, 0.3];
  const azure = [0.42, 0.3, 0.36, 0.9, 0.86, 0.84];
  const x0 = 84, step = 82, top = 22, bottom = 212;
  const xs = c.factors.map((_, i) => x0 + i * step);
  const y = (v: number) => bottom - v * (bottom - top);
  const pts = (vals: number[]) => vals.map((v, i) => `${xs[i]},${y(v).toFixed(1)}`).join(' ');
  const dots = (vals: number[], fill: string) =>
    vals.map((v, i) => `<circle cx="${xs[i]}" cy="${y(v).toFixed(1)}" r="4.5" fill="${fill}" stroke="#fff" stroke-width="2"/>`).join('');
  const grid = [0, 0.25, 0.5, 0.75, 1]
    .map((v) => `<line x1="${x0 - 20}" x2="${xs[xs.length - 1] + 20}" y1="${y(v)}" y2="${y(v)}" stroke="#DCEEFC" stroke-width="1"/>`)
    .join('');
  const labels = c.factors
    .map((f, i) => `<text x="${xs[i]}" y="${i % 2 ? 274 : 250}" text-anchor="middle" class="fill-slate-600" font-size="16.5">${esc(f)}</text>`)
    .join('');

  return `
<figure class="canvas-card relative hidden rounded-2xl border border-azure-100 bg-white/90 p-5 shadow-xl shadow-azure-900/5 sm:block lg:p-6" data-reveal>
  <figcaption class="mb-3 flex items-baseline justify-between gap-4">
    <span class="font-display text-lg font-semibold text-navy-900">${c.title}</span>
    <span class="text-xs uppercase tracking-wider text-slate-500">${c.low} → ${c.high}</span>
  </figcaption>
  <svg viewBox="0 0 580 284" class="w-full" role="img" aria-label="${esc(`${c.title}: ${c.industry} vs ${c.azure}`)}">
    ${grid}
    <text x="6" y="${top + 5}" font-size="14" class="fill-slate-400">${c.high}</text>
    <text x="6" y="${bottom + 5}" font-size="14" class="fill-slate-400">${c.low}</text>
    <polyline points="${pts(industry)}" fill="none" stroke="#CF5D52" stroke-width="2.5" stroke-dasharray="6 6" stroke-linejoin="round"/>
    ${dots(industry, '#CF5D52')}
    <polyline class="canvas-azure" pathLength="1" points="${pts(azure)}" fill="none" stroke="#1569C7" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>
    ${dots(azure, '#1569C7')}
    ${labels}
  </svg>
  <div class="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
    <span class="inline-flex items-center gap-2"><span class="h-0.5 w-6 border-t-2 border-dashed border-coral-500"></span>${c.industry}</span>
    <span class="inline-flex items-center gap-2"><span class="h-1 w-6 rounded bg-azure-600"></span>${c.azure}</span>
  </div>
  <p class="mt-3 text-sm text-slate-500">${c.caption}</p>
</figure>`;
}

// ---------------------------------------------------------------- shared chrome

function head(locale: Locale, t: Dict, opts: { noindex?: boolean } = {}) {
  const url = site.url + paths[locale];
  const other: Locale = locale === 'en' ? 'pl' : 'en';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.brand,
    legalName: company.legalName,
    url: site.url + '/',
    image: `${site.url}/og.png`,
    logo: `${site.url}/apple-touch-icon.png`,
    description: stripTags(t.meta.description),
    founder: { '@type': 'Person', name: company.founder },
    foundingDate: company.foundingDate,
    taxID: company.nip,
    vatID: `PL${company.nip}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      postalCode: company.postalCode,
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: company.country,
    },
    knowsLanguage: ['en', 'pl'],
    ...(site.email ? { email: site.email } : {}),
    ...(site.linkedinUrl ? { sameAs: [site.linkedinUrl] } : {}),
  };

  return `<!doctype html>
<html lang="${locale}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(t.meta.title)}</title>
  <meta name="description" content="${esc(t.meta.description)}" />
  ${opts.noindex ? '<meta name="robots" content="noindex" />' : `
  <link rel="canonical" href="${url}" />
  <link rel="alternate" hreflang="en" href="${site.url}/" />
  <link rel="alternate" hreflang="pl" href="${site.url}/pl/" />
  <link rel="alternate" hreflang="x-default" href="${site.url}/" />`}
  <meta name="theme-color" content="#0B1F3A" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${site.brand}" />
  <meta property="og:title" content="${esc(t.meta.title)}" />
  <meta property="og:description" content="${esc(t.meta.description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${site.url}/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="${t.meta.ogLocale}" />
  <meta property="og:locale:alternate" content="${dicts[other].meta.ogLocale}" />
  <meta name="twitter:card" content="summary_large_image" />

  <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>
  <script>document.documentElement.classList.add('js')</script>
  <script type="module" src="/src/main.ts"></script>
  ${site.cloudflareAnalyticsToken ? `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${esc(site.cloudflareAnalyticsToken)}"}'></script>` : ''}
</head>`;
}

function langSwitch(locale: Locale, extra = '') {
  const item = (l: Locale) =>
    l === locale
      ? `<span class="text-navy-900" aria-current="true">${l.toUpperCase()}</span>`
      : `<a href="${paths[l]}" hreflang="${l}" lang="${l}" class="lang-link text-slate-400 hover:text-azure-600" title="${dicts[l].nav.switchTo}">${l.toUpperCase()}</a>`;
  return `<div class="flex items-center gap-1.5 text-sm font-semibold ${extra}">${item('en')}<span class="text-slate-300" aria-hidden="true">/</span>${item('pl')}</div>`;
}

function header(locale: Locale, t: Dict) {
  const links = [
    ['#services', t.nav.services],
    ['#approach', t.nav.approach],
    ['#about', t.nav.about],
    ['#contact', t.nav.contact],
  ];
  const navLinks = (cls: string) => links.map(([href, label]) => `<a href="${href}" class="${cls}">${label}</a>`).join('');

  return `
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow">${locale === 'pl' ? 'Przejdź do treści' : 'Skip to content'}</a>
<header class="site-header sticky top-0 z-50 border-b border-transparent bg-white/85 backdrop-blur-md transition-[border-color,box-shadow] duration-300">
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
    <a href="${paths[locale]}" class="flex shrink-0 items-center gap-2.5" aria-label="${site.brand}">
      ${logoMark('size-8')}
      <span class="font-display text-[1.05rem] font-semibold tracking-tight text-navy-900">Azure Ocean <span class="font-normal text-azure-600">Strategy</span></span>
    </a>
    <nav class="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex" aria-label="Main">
      ${navLinks('hover:text-azure-600 transition-colors')}
    </nav>
    <div class="flex items-center gap-4">
      ${langSwitch(locale)}
      <a ${bookLink(t)} class="btn btn-primary hidden !px-4 !py-2 text-sm sm:inline-flex">${t.cta.bookShort}</a>
      <button type="button" class="menu-toggle -mr-2 inline-flex size-10 items-center justify-center rounded-lg text-navy-900 hover:bg-azure-50 md:hidden" aria-expanded="false" aria-controls="mobile-nav">
        <span class="sr-only">${t.nav.menu}</span>${icon(icons.menu, 'size-6')}
      </button>
    </div>
  </div>
  <nav id="mobile-nav" class="hidden border-t border-azure-100 bg-white px-4 pb-6 pt-2 md:hidden" aria-label="Mobile">
    <div class="flex flex-col text-base font-medium text-navy-900">
      ${navLinks('border-b border-slate-100 py-3')}
    </div>
    <a ${bookLink(t)} class="btn btn-primary mt-5 w-full">${t.cta.book}</a>
  </nav>
</header>`;
}

function footer(locale: Locale, t: Dict) {
  const year = new Date().getFullYear();
  return `
<footer class="bg-navy-950 text-slate-400">
  <div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
    <div class="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <a href="${paths[locale]}" class="inline-flex items-center gap-2.5">
          ${logoMark('size-8')}
          <span class="font-display text-lg font-semibold text-white">Azure Ocean <span class="font-normal text-azure-300">Strategy</span></span>
        </a>
        <p class="mt-4 max-w-sm text-sm leading-relaxed">${t.footer.tagline}</p>
      </div>
      <nav class="flex flex-col gap-2 text-sm" aria-label="Footer">
        <a href="#services" class="hover:text-white">${t.nav.services}</a>
        <a href="#approach" class="hover:text-white">${t.nav.approach}</a>
        <a href="#about" class="hover:text-white">${t.nav.about}</a>
        <a href="#contact" class="hover:text-white">${t.nav.contact}</a>
      </nav>
      <div class="flex flex-col gap-2 text-sm">
        ${site.email ? `<a href="mailto:${site.email}" class="hover:text-white">${site.email}</a>` : ''}
        ${site.linkedinUrl ? `<a href="${esc(site.linkedinUrl)}" class="hover:text-white" rel="noopener" target="_blank">LinkedIn</a>` : ''}
        ${site.sisterSites.map((s) => `<a href="${s.url}" class="hover:text-white" rel="noopener" target="_blank">${s.label}</a>`).join('')}
        <a href="${paths[locale === 'en' ? 'pl' : 'en']}" class="lang-link mt-2 hover:text-white" hreflang="${locale === 'en' ? 'pl' : 'en'}">${t.nav.switchTo}</a>
      </div>
    </div>
    <div class="mt-12 border-t border-white/10 pt-6 text-xs leading-relaxed text-slate-500">
      <p><span class="text-slate-400">${t.footer.legal}:</span> ${esc(company.legalName)} · ${esc(company.street)}, ${company.postalCode} ${esc(company.city)} · ${t.footer.nip} ${company.nip} · ${t.footer.regon} ${company.regon}</p>
      <p class="mt-2">© ${year} ${site.brand}. ${t.footer.rights}</p>
    </div>
  </div>
</footer>`;
}

// ---------------------------------------------------------------- sections

const eyebrow = (text: string, dark = false) =>
  `<p class="eyebrow ${dark ? 'text-azure-300' : 'text-azure-600'}">${text}</p>`;

function hero(t: Dict) {
  return `
<section class="relative overflow-hidden bg-gradient-to-b from-foam-50 via-azure-50 to-azure-50">
  <div class="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-32 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:pb-40 lg:pt-24">
    <div>
      ${eyebrow(t.hero.eyebrow)}
      <h1 class="mt-4 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-navy-900 sm:text-6xl lg:text-[4.1rem]">${t.hero.title}</h1>
      <p class="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">${t.hero.lead}</p>
      <div class="mt-9 flex flex-wrap gap-3">
        <a ${bookLink(t)} class="btn btn-primary">${t.cta.book} ${icon(icons.arrow, 'size-4')}</a>
        <a href="#approach" class="btn btn-secondary">${t.cta.secondary}</a>
      </div>
    </div>
    ${strategyCanvas(t)}
  </div>
  <svg class="absolute inset-x-0 bottom-0 h-20 w-full sm:h-28" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 64c160-30 320-30 480 0s320 30 480 0 320-30 480 0v56H0z" fill="#B6DBF8" opacity=".45"/>
    <path d="M0 84c180-26 360-26 540 0s360 26 540 0 270-18 360-8v44H0z" fill="#DCEEFC"/>
    <path d="M0 100c200-18 400-18 600 0s400 18 600 0 160-10 240-6v26H0z" fill="#fff"/>
  </svg>
</section>`;
}

function oceans(t: Dict) {
  const o = t.oceans;
  const list = (items: string[], ic: string, color: string) =>
    items.map((i) => `<li class="flex gap-3"><span class="mt-0.5 shrink-0 ${color}">${icon(ic, 'size-5')}</span><span>${i}</span></li>`).join('');
  const errcColors = ['border-coral-500', 'border-coral-300', 'border-azure-400', 'border-azure-600'];

  return `
<section id="idea" class="bg-white py-20 sm:py-28">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="max-w-3xl" data-reveal>
      ${eyebrow(o.eyebrow)}
      <h2 class="section-title mt-3">${o.title}</h2>
      <p class="mt-6 text-lg leading-relaxed text-slate-600">${o.lead}</p>
    </div>

    <div class="mt-14 grid gap-5 md:grid-cols-2">
      <div class="rounded-2xl border border-coral-100 bg-coral-50 p-7 sm:p-8" data-reveal>
        <p class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-coral-700"><span class="size-2.5 rounded-full bg-coral-500"></span>${o.red.label}</p>
        <ul class="mt-5 space-y-3 text-slate-700">${list(o.red.items, icons.minus, 'text-coral-500')}</ul>
      </div>
      <div class="rounded-2xl border border-azure-100 bg-azure-50 p-7 sm:p-8" data-reveal>
        <p class="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-azure-700"><span class="size-2.5 rounded-full bg-azure-600"></span>${o.azure.label}</p>
        <ul class="mt-5 space-y-3 text-slate-700">${list(o.azure.items, icons.check, 'text-azure-600')}</ul>
      </div>
    </div>

    <div class="mt-20" data-reveal>
      <h3 class="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">${o.errcTitle}</h3>
      <p class="mt-3 max-w-2xl text-slate-600">${o.errcLead}</p>
    </div>
    <div class="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      ${o.errc
        .map(
          (e, i) => `
      <article class="rounded-2xl border border-slate-200 border-t-4 ${errcColors[i]} bg-white p-6" data-reveal>
        <p class="font-display text-2xl font-semibold text-navy-900">${e.key}</p>
        <p class="mt-1 text-sm font-medium text-azure-700">${e.title}</p>
        <p class="mt-4 text-[0.95rem] leading-relaxed text-slate-600">${e.body}</p>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>`;
}

function services(t: Dict) {
  const s = t.services;
  return `
<section id="services" class="bg-foam-50 py-20 sm:py-28">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="max-w-2xl" data-reveal>
      ${eyebrow(s.eyebrow)}
      <h2 class="section-title mt-3">${s.title}</h2>
      <p class="mt-5 text-lg text-slate-600">${s.lead}</p>
    </div>
    <div class="mt-14 grid gap-6 md:grid-cols-2">
      ${s.items
        .map(
          (it, i) => `
      <article class="group flex flex-col rounded-2xl border border-azure-100 bg-white p-7 shadow-sm shadow-azure-900/5 transition hover:-translate-y-0.5 hover:shadow-lg sm:p-8" data-reveal>
        <div class="flex size-12 items-center justify-center rounded-xl bg-azure-50 text-azure-600 ring-1 ring-azure-100">${icon(serviceIcons[i], 'size-6')}</div>
        <h3 class="mt-6 text-xl font-semibold text-navy-900">${it.title}</h3>
        <p class="mt-1 font-display text-lg italic text-azure-700">${it.tagline}</p>
        <p class="mt-4 leading-relaxed text-slate-600">${it.body}</p>
        <ul class="mt-6 space-y-2 border-t border-slate-100 pt-5 text-sm text-slate-700">
          ${it.points.map((p) => `<li class="flex gap-2.5"><span class="mt-0.5 text-azure-600">${icon(icons.check, 'size-4')}</span>${p}</li>`).join('')}
        </ul>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>`;
}

function approach(t: Dict) {
  const a = t.approach;
  return `
<section id="approach" class="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
  <div class="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-azure-600/20 blur-3xl" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-6xl px-4 sm:px-6">
    <div class="max-w-2xl" data-reveal>
      ${eyebrow(a.eyebrow, true)}
      <h2 class="section-title mt-3 !text-white">${a.title}</h2>
      <p class="mt-5 text-lg text-slate-300">${a.lead}</p>
    </div>
    <ol class="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      ${a.steps
        .map(
          (s, i) => `
      <li class="rounded-2xl border border-white/10 bg-white/[0.04] p-6" data-reveal>
        <span class="font-display text-4xl font-semibold text-azure-400">${String(i + 1).padStart(2, '0')}</span>
        <h3 class="mt-4 text-lg font-semibold">${s.title}</h3>
        <p class="mt-2 text-[0.95rem] leading-relaxed text-slate-300">${s.body}</p>
      </li>`,
        )
        .join('')}
    </ol>
    <div class="mt-14 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
      ${a.principles
        .map(
          (p) => `
      <div data-reveal>
        <p class="flex items-center gap-2 font-semibold"><span class="text-azure-400">${icon(icons.check, 'size-5')}</span>${p.title}</p>
        <p class="mt-2 text-sm leading-relaxed text-slate-400">${p.body}</p>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>`;
}

function about(t: Dict) {
  const a = t.about;
  const u = t.unfiltered;
  const [s1, s2] = site.sisterSites;
  const sisterLink = (s: { label: string; url: string }) =>
    `<a href="${s.url}" rel="noopener" target="_blank" class="font-medium text-navy-900 underline decoration-azure-300 decoration-2 underline-offset-4 hover:decoration-azure-600">${s.label}</a>`;

  return `
<section id="about" class="bg-white py-20 sm:py-28">
  <div class="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
    <div data-reveal>
      ${eyebrow(a.eyebrow)}
      <h2 class="section-title mt-3">${a.title}</h2>
      ${a.body.map((p) => `<p class="mt-6 text-lg leading-relaxed text-slate-600">${p}</p>`).join('')}
    </div>
    <aside class="self-start rounded-2xl border border-azure-100 bg-foam-50 p-7 sm:p-8" data-reveal>
      <div class="flex items-center gap-4">
        <div class="flex size-14 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-lg font-semibold text-azure-200" aria-hidden="true">KW</div>
        <p class="font-semibold text-navy-900">${a.founderLabel}</p>
      </div>
      <p class="mt-5 leading-relaxed text-slate-600">${a.founderBio}</p>
      ${site.linkedinUrl ? `<a href="${esc(site.linkedinUrl)}" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-azure-700 hover:text-azure-600">${icon(icons.linkedin, 'size-4')}${a.linkedin}</a>` : ''}
      <dl class="mt-6 space-y-3 border-t border-azure-100 pt-6 text-sm">
        ${a.facts.map((f) => `<div class="flex justify-between gap-4"><dt class="text-slate-500">${f.label}</dt><dd class="text-right font-medium text-navy-900">${f.value}</dd></div>`).join('')}
      </dl>
    </aside>
  </div>

  <div class="mx-auto mt-20 max-w-6xl px-4 sm:px-6" data-reveal>
    <div class="max-w-3xl border-l-2 border-navy-900 pl-6">
      <p class="font-display text-xl font-semibold italic text-navy-900">${u.title}</p>
      <p class="mt-3 leading-relaxed text-slate-600">${u.before} ${sisterLink(s1)} ${u.and} ${sisterLink(s2)} ${u.after}</p>
    </div>
  </div>
</section>`;
}

function contact(t: Dict) {
  const c = t.contact;
  return `
<section id="contact" class="bg-white pb-20 sm:pb-28">
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-azure-800 px-6 py-16 text-center sm:px-12 sm:py-20" data-reveal>
      <svg class="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full opacity-30" viewBox="0 0 1200 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 50c150-25 300-25 450 0s300 25 450 0 225-20 300-12v62H0z" fill="#4FA3EC"/>
      </svg>
      <div class="relative">
        ${eyebrow(c.eyebrow, true)}
        <h2 class="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">${c.title}</h2>
        <p class="mx-auto mt-5 max-w-xl text-lg text-slate-300">${c.body}</p>
        <div class="mt-9 flex flex-col items-center gap-4">
          <a ${bookLink(t)} class="btn btn-light">${t.cta.book} ${icon(icons.arrow, 'size-4')}</a>
          ${site.email ? `<p class="text-sm text-slate-300">${site.bookingUrl ? `${c.or} ` : ''}<a href="mailto:${site.email}" class="font-medium text-white underline decoration-azure-400 underline-offset-4">${site.email}</a></p>` : ''}
        </div>
      </div>
    </div>
  </div>
</section>`;
}

// ---------------------------------------------------------------- pages

export function renderPage(locale: Locale): string {
  const t = dicts[locale];
  return `${head(locale, t)}
<body class="bg-white font-sans text-slate-700 antialiased">
${header(locale, t)}
<main id="main">
${hero(t)}
${oceans(t)}
${services(t)}
${approach(t)}
${about(t)}
${contact(t)}
</main>
${footer(locale, t)}
</body>
</html>`;
}

export function renderNotFound(): string {
  const block = (l: Locale) => {
    const t = dicts[l];
    return `<div lang="${l}">
      <h1 class="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">${t.notFound.title}</h1>
      <p class="mt-3 text-slate-600">${t.notFound.body}</p>
      <a href="${paths[l]}" class="btn btn-primary mt-6">${t.notFound.back}</a>
    </div>`;
  };
  return `${head('en', en, { noindex: true }).replace(`<title>${esc(en.meta.title)}</title>`, '<title>404 — Azure Ocean Strategy</title>')}
<body class="flex min-h-screen flex-col bg-gradient-to-b from-foam-50 to-azure-50 font-sans text-slate-700 antialiased">
  <main class="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-12 px-4 py-20 sm:px-6">
    <a href="/" class="inline-flex items-center gap-2.5" aria-label="${site.brand}">${logoMark('size-10')}<span class="font-display text-xl font-semibold text-navy-900">Azure Ocean <span class="font-normal text-azure-600">Strategy</span></span></a>
    <div class="grid gap-12 sm:grid-cols-2">${block('en')}${block('pl')}</div>
  </main>
</body>
</html>`;
}
