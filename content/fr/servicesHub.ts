// Hub Services — pas de maquette dédiée (jalon M6). Page sobre : un index de
// toutes les offres, groupé comme le méga-menu (Ce qu'on construit · Le système
// · Conseil). Les liens sont la source de vérité de site-nav.ts.

export const servicesHubMeta = {
  title: 'Services',
  description:
    "Sites, boutiques, plateformes, ERP et automatisation — Connect Web conçoit ce qui compte pour votre organisation, puis connecte le reste.",
};

export const servicesHubHero = {
  eyebrow: 'Services',
  title: 'On construit selon votre besoin — du site au système.',
  subtitle:
    "Un site institutionnel, une boutique, une plateforme métier, un ERP, des automatisations : on ne suppose pas que vous avez besoin de tout. On construit ce qui compte, puis on connecte le reste.",
};

export const servicesHubGroups = [
  {
    eyebrow: "Ce qu'on construit",
    title: 'Votre présence et vos outils',
    lead: 'Ce qui rend visible, ce qui vend, ce qui fait tourner l’opération.',
  },
  {
    eyebrow: 'Le système',
    title: 'Ce qui relie et fait gagner du temps',
    lead: 'Une fois la base en place, on connecte la gestion et on automatise le répétitif.',
  },
];

export const servicesHubConseil = {
  eyebrow: 'Par où commencer ?',
  title: 'Pas sûr de ce qu’il vous faut ?',
  body: "C'est le cas le plus fréquent. Un audit gratuit pour cadrer votre situation, prioriser ce qui compte et repartir avec un plan — avec nous ou non.",
  cta: { label: 'Conseil & audit gratuit', href: '/services/conseil-strategie' },
};

export const servicesHubFinalCta = {
  eyebrow: 'On en parle ?',
  title: 'Décrivez-nous votre projet, on revient vers vous sous 24 h.',
  cta: { label: 'Parlons de votre projet', href: '#contact' },
};
