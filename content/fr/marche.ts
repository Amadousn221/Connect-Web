import type { MarketStat } from '../types';

// ── Bande de réassurance digitale (correction post-déploiement) ──────────
// Statistiques de MARCHÉ — pas les chiffres de Connect Web. Chaque source est
// affichée. Vérifiées par recherche web ; formulations calées sur la donnée
// primaire réelle (aucune source fabriquée) :
//  - Stanford Web Credibility Project : chiffre primaire = 46,1 % (design
//    visuel), pas le « 75 % » qui circule en paraphrase → on garde 46 %.
//  - GE Capital Retail Bank, Major Purchase Shopper Study, 2013 : 81 % vérifié.
//  - Gartner : « 17 % du temps d'achat B2B passé avec des fournisseurs »
//    vérifié (le « 70 % avant contact » n'a pas d'attribution Gartner fiable).
//  - Baymard Institute : ~70 % d'abandon de panier, synthèse de 49 études,
//    vérifié (remplace le « 88 % » dont la source AWS/Baymard n'existe pas).

export const marcheIntro = {
  eyebrow: 'Pourquoi le digital compte',
  title: "Le digital n'est plus une option.",
};

export const marketStats: MarketStat[] = [
  {
    value: '46 %',
    text: "évaluent la crédibilité d'un site en partie d'après son design.",
    source: 'Stanford Web Credibility Project',
  },
  {
    value: '81 %',
    text: 'se renseignent en ligne avant un achat important.',
    source: 'GE Capital Retail Bank — Major Purchase Shopper Study, 2013',
  },
  {
    value: '17 %',
    text: "seulement du temps d'un achat B2B se passe avec des fournisseurs — le reste se joue en ligne.",
    source: 'Gartner',
  },
  {
    value: '70 %',
    text: 'des paniers e-commerce sont abandonnés en moyenne, souvent par friction ou manque de confiance.',
    source: 'Baymard Institute — synthèse de 49 études',
  },
];
