import type { Dict } from './types';

// Strings may contain simple inline HTML (<em>, <strong>, <br>). They are trusted, not user input.
export const en: Dict = {
  meta: {
    title: 'Azure Ocean Strategy — IT business consulting',
    description:
      'Strategy, delivery and AI-enabled operations for software companies and technology leaders. Stop competing in the red ocean — create value nobody else offers.',
    ogLocale: 'en_GB',
  },
  nav: {
    services: 'Services',
    approach: 'Approach',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    switchTo: 'Polski',
  },
  cta: {
    book: 'Book an intro call',
    bookShort: 'Book a call',
    secondary: 'See how we work',
    emailSubject: 'Intro call — Azure Ocean Strategy',
  },
  hero: {
    eyebrow: 'IT business consulting',
    title: 'Leave the red ocean.<br><span class="text-azure-600">Chart an azure one.</span>',
    lead:
      'Azure Ocean Strategy helps software companies and technology leaders stop competing on day rates and ceremonies — and start creating value nobody else offers, through sharper strategy, calmer delivery and AI-enabled operations.',
    canvas: {
      title: 'Strategy canvas',
      caption: 'Where most IT firms compete, and where value is actually created.',
      factors: ['Day rate', 'Process', 'Headcount', 'Automation', 'Predictability', 'Ownership'],
      industry: 'Typical IT vendor',
      azure: 'Azure Ocean',
      low: 'low',
      high: 'high',
    },
  },
  oceans: {
    eyebrow: 'The idea',
    title: 'Most IT businesses are fighting in a red ocean.',
    lead:
      'Same services, same frameworks, same slide decks — competing on price while delivery drowns in process. <em>Blue Ocean Strategy</em> says the answer isn’t to fight harder, but to redraw the map. We bring that discipline to how IT businesses sell, deliver and operate.',
    red: {
      label: 'Red ocean',
      items: [
        'Competing on rate cards',
        'Adding process to fix process',
        'Measuring activity, not outcomes',
        'Scaling by headcount',
      ],
    },
    azure: {
      label: 'Azure ocean',
      items: [
        'Competing on distinct value',
        'Removing what creates no value',
        'Measuring flow, margin and outcomes',
        'Scaling with automation and leverage',
      ],
    },
    errcTitle: 'The ERRC grid, applied to IT delivery',
    errcLead: 'Four questions from Blue Ocean Strategy that we ask about every engagement.',
    errc: [
      {
        key: 'Eliminate',
        title: 'What should go?',
        body: 'Rituals kept for their own sake, status meetings about status meetings, framework theatre.',
      },
      {
        key: 'Reduce',
        title: 'What should shrink?',
        body: 'Coordination overhead, hand-offs, work in progress, reports assembled by hand.',
      },
      {
        key: 'Raise',
        title: 'What should grow?',
        body: 'Predictability, visibility of cost and margin, speed of decisions, real ownership.',
      },
      {
        key: 'Create',
        title: 'What is missing?',
        body: 'New service lines, productised offers, and AI-assisted operations that free people for judgement work.',
      },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Four ways we help',
    lead: 'Engagements are scoped to a clear outcome. Pick one area, or combine them.',
    items: [
      {
        title: 'Strategy & positioning',
        tagline: 'Find your blue ocean.',
        body:
          'For software houses and IT services firms that look too much like their competitors. We map the market, redraw your value curve and turn it into offers clients can buy.',
        points: ['Strategy canvas and value curve', 'Productised service offers', 'Pricing beyond time & materials'],
      },
      {
        title: 'Delivery & operations',
        tagline: 'Predictable delivery, without the theatre.',
        body:
          'A hard look at how work really flows: portfolio and project health, capacity and bench, margins and utilisation, and a way of working that fits your teams instead of a framework.',
        points: ['Delivery and portfolio health check', 'Resource and capacity planning', 'Margin and utilisation visibility'],
      },
      {
        title: 'AI & automation',
        tagline: 'Put the dull parts on autopilot.',
        body:
          'Practical AI agents and integrations across your CRM, resource planning, finance and collaboration tools — so reporting, reconciliation and hand-offs happen without anyone chasing them.',
        points: ['Operations automation roadmap', 'AI agents and system integrations', 'Automated reporting and dashboards'],
      },
      {
        title: 'Mentorship',
        tagline: 'A sparring partner for leaders.',
        body:
          'One-to-one mentoring for delivery leads, project managers, engineering managers and founders stepping into operations. Real decisions, honest feedback, no certificates.',
        points: ['Regular 1:1 sessions', 'Leadership and delivery coaching', 'Reviews of live decisions and plans'],
      },
    ],
  },
  approach: {
    eyebrow: 'Approach',
    title: 'From diagnosis to hand-over',
    lead: 'Short cycles, real data, and working results rather than a report on a shelf.',
    steps: [
      {
        title: 'Diagnose',
        body: 'We start from evidence — pipeline, delivery, margins, calendars — and from the people doing the work.',
      },
      {
        title: 'Design',
        body: 'A focused plan: what to eliminate, reduce, raise and create. Few moves, clear owners, measurable outcomes.',
      },
      {
        title: 'Deliver',
        body: 'We implement alongside your team: processes, tooling and automations, not just slides.',
      },
      {
        title: 'Hand over',
        body: 'Your team owns the result, with working systems, documentation and the skills to keep improving.',
      },
    ],
    principles: [
      { title: 'No framework dogma', body: 'We use what works for your context and drop what doesn’t.' },
      { title: 'Senior and hands-on', body: 'The person who scopes the work is the person who does it.' },
      { title: 'Measured by outcomes', body: 'Success is agreed up front, in numbers you already track.' },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'An independent consultancy from the Baltic coast',
    body: [
      'Azure Ocean Strategy is an independent IT business consultancy based near Gdańsk, Poland. We work with software companies, IT services firms and technology teams, in English and in Polish.',
      'The name is a nod to <em>Blue Ocean Strategy</em>: the best way to beat the competition is to stop competing on the same terms.',
    ],
    founderLabel: 'Founded by Krzysztof Wasilewski',
    founderBio:
      'Krzysztof works where business strategy, software delivery and day-to-day operations meet — and has little patience for process that doesn’t pay for itself.',
    linkedin: 'LinkedIn profile',
    facts: [
      { label: 'Working languages', value: 'English, Polish' },
      { label: 'Based in', value: 'Pomerania, Poland' },
      { label: 'Engagements', value: 'Remote and on-site' },
    ],
  },
  unfiltered: {
    title: 'The unfiltered version',
    before:
      'Consulting websites tend to be polite. The founder’s side projects are not. For candid views on cargo-cult agile, stand-ups and scope delusion, read',
    and: 'and',
    after: '— then come back here when you’d like to fix it.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Ready to redraw the map?',
    body: 'Book a 30-minute intro call. We’ll talk about where you are, where your red ocean is, and whether we’re the right fit.',
    or: 'or write to',
  },
  footer: {
    tagline: 'IT business consulting — strategy, delivery and AI-enabled operations.',
    legal: 'Registered business',
    nip: 'NIP',
    regon: 'REGON',
    rights: 'All rights reserved.',
  },
  notFound: {
    title: 'Lost at sea',
    body: 'The page you were looking for isn’t here.',
    back: 'Back to the home page',
  },
};
