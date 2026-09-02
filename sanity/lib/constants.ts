/**
 * Libellés FR et constantes partagés entre le Studio (schemas) et le frontend
 * (cartes, badges, filtres). Le schema `resource` garde sa propre liste
 * `options.list` — cette map sert au rendu lisible côté public (badge
 * « Guide PDF » plutôt que la valeur brute « guide_pdf »).
 */

export const RESOURCE_TYPE_LABELS: Record<string, string> = {
  guide_pdf: 'Guide PDF',
  livre_blanc: 'Livre blanc',
  checklist: 'Checklist',
  template: 'Template',
  formation_video: 'Formation vidéo',
  webinaire: 'Webinaire',
  glossaire: 'Glossaire',
  etude: 'Étude',
};

export const DELIVERY_MODE_LABELS: Record<string, string> = {
  download: 'Fichier à télécharger',
  online: 'Consultable en ligne',
};

export const CTA_TYPE_LABELS: Record<string, string> = {
  contact: 'Contacter',
  resource: 'Voir une ressource',
  case_study: "Voir un cas d'étude",
  another_post: 'Lire un autre article',
};

/** Résout un libellé lisible, avec repli sur la valeur brute si inconnue. */
export function resourceTypeLabel(value: string | null | undefined): string {
  if (!value) return '';
  return RESOURCE_TYPE_LABELS[value] ?? value;
}

// ── Pagination (spec §4.4) ────────────────────────────────────────────────
export const BLOG_PER_PAGE = 12;
export const RESOURCE_PER_PAGE = 9;

// ── Tris disponibles (spec §4.4) ──────────────────────────────────────────
export type BlogOrderBy = 'recent' | 'popular' | 'longest';
export type ResourceOrderBy = 'recent' | 'popular';

export const BLOG_ORDER_OPTIONS: { value: BlogOrderBy; label: string }[] = [
  { value: 'recent', label: 'Plus récents' },
  { value: 'popular', label: 'Plus populaires' },
  { value: 'longest', label: 'Plus longs' },
];

export const RESOURCE_ORDER_OPTIONS: { value: ResourceOrderBy; label: string }[] = [
  { value: 'recent', label: 'Plus récentes' },
  { value: 'popular', label: 'Plus téléchargées' },
];
