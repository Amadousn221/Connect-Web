import type { Cta } from '../types';

// Mirror of `content/fr/approche.ts` — same shape, English copy.
export const approcheIntro: {
  eyebrow: string;
  title: string;
  body: string;
  link: Cta;
} = {
  eyebrow: 'Our approach',
  title: 'Digital solutions designed to work as one system.',
  body: 'We design websites, stores, applications and systems built to work together. Every solution answers a concrete need today, while staying ready to evolve tomorrow.',
  link: { label: 'Discover our approach', href: '/agence' },
};
