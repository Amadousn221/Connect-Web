import type { OurRoleContent } from '../types';

// « Notre rôle » — transition entre la réassurance (StatsBlock) et « À qui on
// parle » (NeedSelector). Répond à « qu'est-ce que ça change concrètement »
// avant d'aborder les audiences. CTA vers le hub Services (route réelle).
export const ourRole: OurRoleContent = {
  eyebrow: 'Notre rôle',
  title: 'Votre présence numérique doit soutenir toute votre activité.',
  lead: 'Nous concevons des solutions qui vous aident à être visible, vendre plus simplement et mieux piloter votre organisation.',
  axes: [
    {
      num: '01',
      title: 'Attirer',
      body: 'Sites, contenus et acquisition pour rendre votre offre visible et crédible.',
    },
    {
      num: '02',
      title: 'Transformer',
      body: 'Boutiques et parcours numériques conçus pour faciliter le passage à l’action.',
    },
    {
      num: '03',
      title: 'Piloter',
      body: 'Applications, CRM, ERP et automatisations pour centraliser vos opérations.',
    },
  ],
  cta: { label: 'Découvrir nos solutions', href: '/services' },
};
