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
      nl: 'Backend, frontend en alles wat nodig is om het in productie te krijgen. Ik schrijf code die de volgende developer graag overneemt, en zet de CI/CD-pipelines, containers en Kubernetes-deploys op die het betrouwbaar laten draaien — van een cluster op locatie tot Google Cloud of Scaleway.',
      en: 'Backend, frontend and everything it takes to get it into production. I write code the next developer is happy to inherit, and set up the CI/CD pipelines, containers and Kubernetes deploys that keep it running reliably — from an on-premises cluster to Google Cloud or Scaleway.',
    },
    tags: { nl: techStack, en: techStack },
  },
  {
    icon: 'users',
    title: { nl: 'Senior developer en tech lead', en: 'Senior developer and tech lead' },
    body: {
      nl: 'Ik sluit aan bij je team als senior developer en werk gewoon mee aan de backlog. Vanuit het team pak ik de rol van tech lead op: ik breng ritme, ontwar prioriteiten, bewaak de kwaliteit en coach mensen tot je me niet meer nodig hebt.',
      en: 'I join your team as a senior developer and work on the backlog like everyone else. From within the team I take on the tech lead role: I set a rhythm, untangle priorities, guard quality and coach people until you no longer need me.',
    },
    tags: { nl: ['Mentoring', 'Agile werken'], en: ['Mentoring', 'Agile ways of working'] },
  },
];
