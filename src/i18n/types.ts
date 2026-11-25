export type Locale = 'en' | 'pl';

export interface Dict {
  meta: { title: string; description: string; ogLocale: string };
  nav: { services: string; approach: string; about: string; contact: string; menu: string; switchTo: string };
  cta: { book: string; bookShort: string; secondary: string; emailSubject: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    canvas: {
      title: string;
      caption: string;
      factors: string[];
      industry: string;
      azure: string;
      low: string;
      high: string;
    };
  };
  oceans: {
    eyebrow: string;
    title: string;
    lead: string;
    red: { label: string; items: string[] };
    azure: { label: string; items: string[] };
    errcTitle: string;
    errcLead: string;
    errc: { key: string; title: string; body: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; tagline: string; body: string; points: string[] }[];
  };
  approach: {
    eyebrow: string;
    title: string;
    lead: string;
    steps: { title: string; body: string }[];
    principles: { title: string; body: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    founderLabel: string;
    founderBio: string;
    linkedin: string;
    facts: { label: string; value: string }[];
  };
  unfiltered: { title: string; before: string; and: string; after: string };
  contact: { eyebrow: string; title: string; body: string; or: string };
  footer: { tagline: string; legal: string; nip: string; regon: string; rights: string };
  notFound: { title: string; body: string; back: string };
}
