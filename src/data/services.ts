import type { Lang } from '../i18n/ui';

export interface Service {
  icon: string;
  title: Record<Lang, string>;
  body: Record<Lang, string>;
  tags: Record<Lang, string[]>;
}

export const services: Service[] = [
  {
    icon: 'code-xml',
    title: { nl: 'Hands-on engineering', en: 'Hands-on engineering' },
    body: {
      nl: 'Backend, frontend en alles daartussen. Ik schrijf code die de volgende developer graag overneemt.',
      en: 'Backend, frontend and the glue between. I write code that the next developer is happy to inherit.',
    },
    tags: { nl: ['TODO: technologieën'], en: ['TODO: technologies'] },
  },
  {
    icon: 'users',
    title: { nl: 'Interim tech lead', en: 'Interim tech lead' },
    body: {
      nl: 'Ik sluit aan bij je team, breng ritme, ontwar prioriteiten en coach mensen tot je me niet meer nodig hebt.',
      en: 'I join your team, set a rhythm, untangle priorities and coach people until you no longer need me.',
    },
    tags: { nl: ['TODO: vaardigheden'], en: ['TODO: skills'] },
  },
  {
    icon: 'layers',
    title: { nl: 'Architectuurreview', en: 'Architecture review' },
    body: {
      nl: 'Een frisse, eerlijke blik op je systeem. Je krijgt een geschreven rapport en een geprioriteerd plan — geen deck van 90 slides.',
      en: 'A fresh, honest look at your system. You get a written report and a prioritised plan — not a 90-slide deck.',
    },
    tags: { nl: ['TODO: onderwerpen'], en: ['TODO: topics'] },
  },
];
