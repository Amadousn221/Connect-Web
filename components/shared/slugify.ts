const COMBINING_MARKS = /[̀-ͯ]/g;

/**
 * Ancre stable pour un titre (H2/H3) du Portable Text.
 * Partagé entre `PortableTextRenderer` (qui pose l'`id`) et la table des
 * matières (qui cible cet `id`) — les deux DOIVENT utiliser cette fonction.
 */
export function slugifyHeading(text: string): string {
  return text
    .normalize('NFD')
    .replace(COMBINING_MARKS, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
