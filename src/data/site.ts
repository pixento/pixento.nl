import type { Lang } from '../i18n/ui';

/**
 * Facts about Pixento in one place. Values starting with "TODO" are placeholders
 * for data that is not known yet — replace them before going live.
 */
export const site = {
  name: 'Pixento',
  owner: 'Corniël Joosse',
  linkedin: 'https://www.linkedin.com/in/corniel-joosse/',
  email: 'TODO: e-mailadres',
  github: 'TODO: GitHub-URL',
  kvk: 'TODO: KvK-nummer',
};

/** Availability badge in the home hero. */
export const availability: Record<Lang, string> = {
  nl: 'TODO: beschikbaarheid',
  en: 'TODO: availability',
};

/** Stat strip on the home page: big number + short label. */
export const stats: Record<Lang, [string, string][]> = {
  nl: [
    ['TODO', 'TODO: jaren ervaring'],
    ['TODO', 'TODO: aantal teams geholpen'],
    ['1', 'aanspreekpunt: ik'],
  ],
  en: [
    ['TODO', 'TODO: years of experience'],
    ['TODO', 'TODO: number of teams helped'],
    ['1', 'point of contact: me'],
  ],
};
