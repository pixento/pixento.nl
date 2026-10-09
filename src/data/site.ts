import type { Lang } from '../i18n/ui';

/**
 * Facts about Pixento in one place. Values starting with "TODO" are placeholders
 * for data that is not known yet — replace them before going live.
 */
export const site = {
  name: 'Pixento',
  owner: 'Corniël Joosse',
  linkedin: 'https://www.linkedin.com/in/corniel-joosse/',
  email: 'corniel@pixento.nl',
  github: 'https://github.com/pixento',
  kvk: '53688112',
};

/** Availability badge in the home hero. */
export const availability: Record<Lang, string> = {
  nl: 'Beschikbaar vanaf begin 2027',
  en: 'Available from early 2027',
};

/** Whole years since `start`, computed at build time. */
function yearsSince(start: Date): number {
  const now = new Date();
  const years = now.getFullYear() - start.getFullYear();
  return now.getMonth() < start.getMonth() ? years - 1 : years;
}

/** Shipping production software since June 2018. */
const yearsExperience = `${yearsSince(new Date(2018, 5))}+`;

/** Freelancing as Pixento since May 2024. */
const yearsFreelance = `${yearsSince(new Date(2024, 4))}+`;

/** Stat strip on the home page: big number + short label. */
export const stats: Record<Lang, [string, string][]> = {
  nl: [
    [yearsExperience, 'jaar productiesoftware opleveren'],
    [yearsFreelance, 'jaar freelance'],
    ['1', 'aanspreekpunt: ik'],
  ],
  en: [
    [yearsExperience, 'years shipping production software'],
    [yearsFreelance, 'years freelancing'],
    ['1', 'point of contact: me'],
  ],
};
