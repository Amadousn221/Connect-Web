import { defaultLocale, type Locale } from './config';

// Préfixe une route interne par la locale : FR à la racine (`/services`),
// EN préfixé (`/en/services`). Centralisé ici pour que le vrai schéma d'URL
// bilingue (Milestone M4) ne touche que ce fichier, pas chaque composant.
export function localePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/+$/, '');
  if (locale === defaultLocale) return clean || '/';
  return `/${locale}${clean}`;
}
