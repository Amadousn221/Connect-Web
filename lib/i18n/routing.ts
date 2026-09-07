import { defaultLocale, type Locale } from './config';

// Préfixe une route interne par la locale : FR à la racine (`/services`),
// EN préfixé (`/en/services`). Centralisé ici pour que le vrai schéma d'URL
// bilingue (Milestone M4) ne touche que ce fichier, pas chaque composant.
export function localePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/+$/, '');
  if (locale === defaultLocale) return clean || '/';
  return `/${locale}${clean}`;
}

// Inverse de `localePath` : retire le préfixe de la locale courante d'un
// pathname (`usePathname()`) pour obtenir le chemin « propre » à reformater
// vers une autre locale — utilisé par le sélecteur de langue.
export function stripLocalePrefix(locale: Locale, pathname: string): string {
  if (locale === defaultLocale) return pathname;
  const prefix = `/${locale}`;
  if (pathname === prefix) return '/';
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return pathname;
}
