// Configuration des locales — DECISION 09 (bilingue FR/EN) + DECISION 21
// (champs FR/EN par entrée WordPress). Le routing réel (fr à la racine,
// en préfixé `/en`, hreflang réciproques) est câblé au Milestone M4.
// M0 se contente de figer la liste et la locale par défaut.

export const locales = ['fr', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
