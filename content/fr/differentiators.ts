import type { Cta, DifferentiatorItem } from '../types';

// ── P25 S04 — Ce qui nous distingue ────────────────────────────────────────
// Brief P25 §04 (S04) : 3 différenciateurs RÉELS, jamais les verbes de méthode
// (« Comprendre/Concevoir/Construire », réservés à S09). Contenu sourcé depuis
// l'existant (jamais inventé) : #1 reprend needIntro (accueil.ts), #2 et #3
// reprennent quasi verbatim wedgePoints[1]/[2] (wedge.ts) — Wedge est absorbé
// par cette section (voir plan P25 §4, suppressions).

export const differentiatorsIntro = {
  eyebrow: 'Ce qui nous distingue',
  title: "Trois choses qu'on ne trouve pas toujours ensemble.",
};

export const differentiators: DifferentiatorItem[] = [
  {
    num: '01',
    title: 'On part du réel, pas d’un catalogue.',
    body: "Digitaliser, ce n'est pas acheter un outil. C'est régler un problème précis — être trouvé, vendre, arrêter de tout gérer à la main — puis relier les pièces entre elles.",
    link: { label: 'Trouver votre point de départ', href: '#audience' } satisfies Cta,
  },
  {
    num: '02',
    title: 'Le site, puis le système.',
    body: "On commence par ce qui rentre : le site ou l'outil qui fonctionne. Puis on connecte — commandes traitées, stocks à jour, rapports mensuels automatiques. C'est ce qu'on a fait chez ATTA Africa et Maison Peinture Sénégal.",
    link: { label: 'Voir comment ça se connecte', href: '#systeme' } satisfies Cta,
  },
  {
    num: '03',
    title: 'Vous gardez les clés.',
    body: "Domaine, hébergement, comptes, base de données : tout est à votre nom. Vous pouvez partir demain avec tout. On veut être une équipe qu'on rappelle, pas un fournisseur dont on dépend.",
  },
];
