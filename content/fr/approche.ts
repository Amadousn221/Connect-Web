import type { Cta } from '../types';

// ── Section « Notre approche » — transition entre la réassurance et les
// services (accueil). Premier contenu FR/EN réellement bilingue de la page
// (voir `content/en/approche.ts`) — le reste de l'accueil est encore FR
// uniquement (M4, cf. commentaire en tête de `content/types.ts`).
export const approcheIntro: {
  eyebrow: string;
  title: string;
  body: string;
  link: Cta;
} = {
  eyebrow: 'Notre approche',
  title: 'Des solutions numériques pensées comme un ensemble.',
  body: 'Nous concevons des sites, boutiques, applications et systèmes capables de fonctionner ensemble. Chaque solution répond à un besoin concret aujourd’hui, tout en restant prête à évoluer demain.',
  link: { label: 'Découvrir notre approche', href: '/agence' },
};
