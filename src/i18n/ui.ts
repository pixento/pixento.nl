export const languages = { nl: 'Nederlands', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'nl';
export const langs = Object.keys(languages) as Lang[];

export type Page = 'home' | 'work' | 'contact';

const routes: Record<Page, Record<Lang, string>> = {
  home: { nl: '/', en: '/en/' },
  work: { nl: '/werk/', en: '/en/work/' },
  contact: { nl: '/contact/', en: '/en/contact/' },
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Path of a page in the given language, including the configured base path. */
export function pagePath(page: Page, lang: Lang): string {
  return base + routes[page][lang];
}

/** Path of a case study in the given language. */
export function projectPath(slug: string, lang: Lang): string {
  return `${pagePath('work', lang)}${slug}/`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'nl' ? 'en' : 'nl';
}

/** Pick the value for `lang` from a `{ nl, en }` object. */
export function tr<T>(value: Record<Lang, T>, lang: Lang): T {
  return value[lang];
}

/** Placeholder values start with "TODO" — they render as text but never as links. */
export function isTodo(value: string): boolean {
  return value.startsWith('TODO');
}

export const ui = {
  nl: {
    nav: { home: 'Home', work: 'Werk', contact: 'Contact' },
    cta: 'Kom in contact',
    langLabel: 'Taal',
    meta: {
      description: 'Pixento — freelance lead software engineer.',
    },
    footer: {
      blurb: 'Freelance software engineering en technisch leiderschap. Gevestigd in Gouda, aan het werk waar het probleem zit.',
      site: 'Site',
      elsewhere: 'Elders',
      tag: 'met zorg gebouwd · op een dinsdag gedeployd',
    },
    home: {
      title: 'Software engineering',
      h1a: 'Software die standhoudt.',
      h1b: 'Teams die bijblijven.',
      lede: 'Ik ben freelance software engineer en tech lead. Ik schrijf de code, houd het plan leesbaar en zorg dat iedereen weet wat er gebeurt — jij ook.',
      seeWork: 'Bekijk het werk',
      plan: ['## Week 1', ' Lees de codebase. Helemaal.', ' Praat met iedereen die eraan werkt', ' Lever één kleine, echte fix op', ' Schrijf het plan op en deel het', '> Geen verrassingen in week zes.'],
      whatOver: 'Wat ik doe',
      whatH: 'Twee manieren om samen te werken',
      ctaH: 'Een lastig probleem?',
      ctaP: 'Dertig minuten, geen slides. Ben ik niet de juiste persoon, dan zeg ik je wie wel.',
    },
    work: {
      title: 'Werk',
      over: 'Werk',
      h1: 'Geselecteerde projecten',
      lede: 'Een selectie van opdrachten en eigen projecten.',
      back: 'Al het werk',
    },
    contact: {
      title: 'Contact',
      over: 'Contact',
      h1: 'Kom in contact.',
      lede: 'Vertel wat je bouwt en waar het pijn doet. Ik reageer binnen één werkdag — meestal sneller, tenzij ik midden in een migratie zit.',
      copy: 'Kopieer e-mail',
      copied: 'E-mail gekopieerd',
      copiedB: 'Plak maar raak.',
      where: 'Nederland · remote-first',
      directH: 'Neem direct contact op',
      directP: 'Stuur een e-mail of een bericht via LinkedIn.',
      mail: 'Stuur een e-mail',
      linkedin: 'Bekijk profiel op LinkedIn',
    },
  },
  en: {
    nav: { home: 'Home', work: 'Work', contact: 'Contact' },
    cta: 'Get in touch',
    langLabel: 'Language',
    meta: {
      description: 'Pixento — freelance lead software engineer.',
    },
    footer: {
      blurb: 'Freelance software engineering and technical leadership. Based in Gouda, working wherever the problem is.',
      site: 'Site',
      elsewhere: 'Elsewhere',
      tag: 'built with care · deployed on a Tuesday',
    },
    home: {
      title: 'Software engineering',
      h1a: 'Software that holds up.',
      h1b: 'Teams that keep up.',
      lede: "I'm a freelance software engineer and tech lead. I write the code, keep the plan readable, and make sure everyone knows what's happening — including you.",
      seeWork: 'See the work',
      plan: ['## Week 1', ' Read the codebase. All of it.', ' Talk to everyone who touches it', ' Ship one small, real fix', ' Write down the plan, share it', '> No surprises in week six.'],
      whatOver: 'What I do',
      whatH: 'Two ways to work together',
      ctaH: 'Got a knotty problem?',
      ctaP: "Thirty minutes, no slides. If I'm not the right fit, I'll tell you who is.",
    },
    work: {
      title: 'Work',
      over: 'Work',
      h1: 'Selected projects',
      lede: 'A selection of client work and my own projects.',
      back: 'All work',
    },
    contact: {
      title: 'Contact',
      over: 'Contact',
      h1: 'Get in touch.',
      lede: "Tell me what you're building and where it hurts. I reply within one working day — usually faster, unless I'm deep in a migration.",
      copy: 'Copy email',
      copied: 'Email copied',
      copiedB: 'Paste away.',
      where: 'Netherlands · remote-first',
      directH: 'Get in touch directly',
      directP: 'Send an email or a message on LinkedIn.',
      mail: 'Send an email',
      linkedin: 'View profile on LinkedIn',
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return ui[lang];
}
