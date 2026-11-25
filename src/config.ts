// Site-wide settings. Change values here; the page re-renders on the next build.

export const site = {
  url: 'https://azure-ocean.com',
  brand: 'Azure Ocean Strategy',

  /**
   * Cal.com / Calendly / Google booking page. While this is empty, every
   * "Book a call" button falls back to an email link to `email` below.
   */
  bookingUrl: 'https://cal.com/chris.wasilewski',

  /** Public contact address. */
  email: 'chris@azure-ocean.com',

  /** Founder's LinkedIn profile URL. Hidden while empty. */
  linkedinUrl: '',

  /** The founder's two "unfiltered" sites. */
  sisterSites: [
    { label: 'scrumisdead.org', url: 'https://scrumisdead.org' },
    { label: 'unagile.me', url: 'https://unagile.me' },
  ],

  /** Cloudflare Web Analytics token (cookieless). Leave empty to load no analytics. */
  cloudflareAnalyticsToken: '',
} as const;

// Registered business details, as listed in CEIDG (biznes.gov.pl), November 2026.
export const company = {
  legalName: 'Krzysztof Wasilewski "Azure Ocean Strategy"',
  founder: 'Krzysztof Wasilewski',
  street: 'ul. Nad Gizdepką 25D',
  postalCode: '84-122',
  city: 'Osłonino',
  region: 'pomorskie',
  country: 'PL',
  nip: '5871746478',
  regon: '528567695',
  foundingDate: '2024-05-08',
} as const;
