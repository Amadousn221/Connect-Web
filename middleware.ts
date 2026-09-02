import { NextResponse, type NextRequest } from 'next/server';
import { isLocale, defaultLocale } from '@/lib/i18n/config';

// Routing i18n minimal (avance sur M4) : le contenu vit sous `app/[locale]/…`,
// mais le FR est servi À LA RACINE (`/services`, pas `/fr/services`) — DECISION 09.
// Ce middleware réécrit toute URL non préfixée par une locale connue vers
// `/{defaultLocale}{path}`, sans changer l'URL visible. `/en/…` passe tel quel.
//
// Le vrai schéma bilingue (détection Accept-Language, hreflang, redirections
// 301, LangSwitcher rebranché) reste le Milestone M4 — ici on se contente de
// faire fonctionner la navigation maintenant que le site a plusieurs pages.

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const firstSegment = pathname.split('/')[1] ?? '';
  if (isLocale(firstSegment)) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Exclut : fichiers Next internes, routes API, le Sanity Studio embarqué
  // (`/studio`, hors [locale]) et tout ce qui a une extension (assets de
  // /public). Le reste passe par le middleware.
  matcher: ['/((?!_next/|api/|studio|.*\\.).*)'],
};
