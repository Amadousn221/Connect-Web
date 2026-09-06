import { casPharesCards } from './casPhares';

// ── A1b — Vitrine interactive du Hero ────────────────────────────────────────
// Panneau d'onglets à droite du Hero. Projets RÉELS, contenu factuel repris
// tel quel de `casPhares.ts` (client, secteur, titre, tag solution) — aucun
// texte ni résultat inventé.
//
// Limitée aux projets disposant d'une capture VÉRIFIÉE :
//   · ATTA Africa  → public/assets/real/atta-africa.png (réelle, non compressée)
//   · SCOD VTC     → public/assets/real/scod-vtc.jpg     (réelle, déjà utilisée)
// Maison Peinture Sénégal est écarté tant qu'aucune capture n'est fournie
// (ERP interne, pas de vitrine publique) — pas de faux dashboard ni cadre vide.
//
// Les pages /realisations/[slug] n'existent pas → aucun lien par onglet. Un
// seul lien, vers le hub /realisations (qui existe).

export interface HeroShowcaseProject {
  client: string;
  sector: string;
  /** phrase factuelle reprise de casPhares — sert de description du panneau */
  headline: string;
  solutionTag: string;
  image: { src: string; alt: string };
}

const pick = (client: string) => {
  const card = casPharesCards.find((c) => c.client === client);
  if (!card) throw new Error(`heroShowcase: projet "${client}" absent de casPharesCards`);
  return card;
};

const atta = pick('ATTA Africa');
const scod = pick('SCOD VTC');

export const heroShowcaseProjects: HeroShowcaseProject[] = [
  {
    client: atta.client,
    sector: atta.sector,
    headline: atta.title,
    solutionTag: atta.solutionTag,
    image: {
      src: '/assets/real/atta-africa.png',
      alt: 'Capture de la boutique en ligne cross-border ATTA Africa',
    },
  },
  {
    client: scod.client,
    sector: scod.sector,
    headline: scod.title,
    solutionTag: scod.solutionTag,
    // `scod.image` est déjà défini dans casPhares.ts (mais optionnel côté type).
    image: scod.image ?? {
      src: '/assets/real/scod-vtc.jpg',
      alt: "Capture d'écran de la plateforme de réservation SCOD VTC",
    },
  },
];

export const heroShowcaseLink = {
  label: 'Voir toutes les réalisations',
  href: '/realisations',
};
