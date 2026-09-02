// Copy des pages Blog (catalogue + article). Le contenu éditorial vient de
// Sanity ; ce fichier ne porte que l'habillage statique (titres de page,
// libellés de filtres, bandeau CTA, états vides).

export const blogMeta = {
  title: 'Blog',
  description:
    "Retours d'expérience, décisions techniques et veille utile sur le digital ouest-africain — e-commerce, ERP, automatisation, acquisition.",
};

export const blogHero = {
  eyebrow: 'Blog',
  title: "Ce qu'on apprend, ce qu'on partage.",
  subtitle: "Retours d'expérience, décisions techniques, veille utile.",
};

export const blogEmpty = {
  title: 'Les premiers articles arrivent bientôt.',
  body: "On prépare des articles courts et applicables — paiement mobile, cross-border, automatisation, Odoo. Une question précise sur votre projet en attendant ? On y répond directement.",
  cta: { label: 'Poser votre question', href: '/#contact' },
};

export const blogNoResults = {
  title: 'Aucun article ne correspond à ces filtres.',
  body: 'Essayez d’élargir la sélection ou réinitialisez les filtres.',
};

export const blogCtaBand = {
  title: 'Un projet à démarrer ?',
  body: "On revient vers vous sous 24 h, avec un premier cadrage et un devis gratuit.",
  primary: { label: 'Parlons-en', href: '/#contact' },
  secondary: { label: 'Voir nos réalisations', href: '/realisations' },
};

// Bandeau CTA en fin d'article (spec §6.2 Zone 11, master 3.2).
export const blogArticleCtaBand = {
  title: 'Un projet similaire ?',
  body: 'On revient vers vous sous 24 h, avec un premier cadrage et un devis gratuit.',
  primary: { label: 'Parlons-en', href: '/#contact' },
  secondary: { label: 'Voir nos réalisations', href: '/realisations' },
};

// ── Filtres (spec §4.4) ───────────────────────────────────────────────────
// Valeurs des query params côté URL → valeurs internes `BlogOrderBy`.
export const BLOG_SORT_PARAM = 'tri';
export const BLOG_CATEGORY_PARAM = 'categorie';
export const BLOG_TAG_PARAM = 'tag';
export const BLOG_PAGE_PARAM = 'page';

export const BLOG_SORTS = [
  { param: 'recents', value: 'recent', label: 'Plus récents' },
  { param: 'populaires', value: 'popular', label: 'Plus populaires' },
  { param: 'longs', value: 'longest', label: 'Plus longs' },
] as const;

export type BlogSortParam = (typeof BLOG_SORTS)[number]['param'];
