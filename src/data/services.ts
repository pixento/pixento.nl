import type { Lang } from '../i18n/ui';

export interface Service {
  icon: string;
  title: Record<Lang, string>;
  body: Record<Lang, string>;
  tags: Record<Lang, string[]>;
}

const techStack = ['Python', 'Django', 'TypeScript', 'React', 'Docker', 'Kubernetes'];

export const services: Service[] = [
  {
    icon: 'code-xml',
    title: { nl: 'Hands-on engineering', en: 'Hands-on engineering' },
    body: {
      nl: 'Backend, frontend en alles daartussen. Ik schrijf code die de volgende developer graag overneemt.',
      en: 'Backend, frontend and the glue between. I write code that the next developer is happy to inherit.',
    },
    tags: { nl: techStack, en: techStack },
  },
  {
    icon: 'users',
    title: { nl: 'Interim tech lead', en: 'Interim tech lead' },
    body: {
      nl: 'Ik sluit aan bij je team, breng ritme, ontwar prioriteiten en coach mensen tot je me niet meer nodig hebt.',
      en: 'I join your team, set a rhythm, untangle priorities and coach people until you no longer need me.',
    },
    tags: { nl: ['Mentoring', 'Agile werken'], en: ['Mentoring', 'Agile ways of working'] },
  },
];
