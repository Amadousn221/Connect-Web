# M2 — Implementation plan

**Réf.** `M2-feature-spec.md`. Défauts PO validés (feu vert) :
maquettes `.dc.html` = source copy · `Accueil V2` · carrousel Réalisations figé
en M2 (→ WordPress M3) · formulaire Accueil UI-seule (→ M5) · `ValidationNote`
piloté par `NEXT_PUBLIC_SHOW_VALIDATION_NOTES` · **Accueil d'abord, point de
contrôle, puis les 7 pages d'offre**.

## Sous-milestones

### M2.1 — Primitives & fondations (bloque le reste)
- `components/ui/` : `Container`, `Eyebrow`, `SectionHeading`, `Button`, `Tag`,
  `CtaBand`, `ValidationNote`, `RevealOnScroll`.
- `lib/flags.ts` : lecture des flags d'env (validation notes).
- `content/fr/accueil.ts` : toute la copy de l'Accueil, typée (`content/types.ts`).
- Test : Storybook non requis ; rendu via une page de contrôle temporaire ou
  directement dans l'Accueil au fur et à mesure.

### M2.2 — Accueil, sections statiques
`HeroRotating` (client), `TrustBar`, `OfferGrid` (A5), `TrajectoryGrid` (A7),
`ProofGrid` (A9), `CtaBand` (A3b), `FaqAccordion` (A11, client léger).
Page `app/[locale]/page.tsx` assemble ces sections.

### M2.3 — Accueil, sections interactives
`NeedSelector` (A3), `AudienceTabs` (A4), `SystemRoad` (A6),
`ProcessSteps` (A10, scroll-spy), `CaseTeaserCarousel` (A8, contenu figé),
`ContactSection` + `ContactForm` (A12, `onSubmit` inerte).
JS des maquettes **réécrit en React** (état + hooks), pas copié.

### M2.4 — 7 pages d'offre
Une passe `feature-spec` légère par page (lecture de sa maquette), puis
`app/[locale]/services/<slug>/page.tsx` + `content/fr/offres/<slug>.ts`.
Marketing : **sans section preuve** (P08). Prix = placeholders (DECISION 10).

## Fichiers créés (M2.1–M2.3)

```
lib/flags.ts
content/types.ts
content/fr/accueil.ts
components/ui/{Container,Eyebrow,SectionHeading,Button,Tag,CtaBand,ValidationNote,RevealOnScroll}.tsx (+ .module.css)
components/sections/{HeroRotating,TrustBar,OfferGrid,TrajectoryGrid,ProofGrid,FaqAccordion,NeedSelector,AudienceTabs,SystemRoad,ProcessSteps,CaseTeaserCarousel,ContactSection}.tsx (+ .module.css)
components/sections/ContactForm.tsx
app/[locale]/page.tsx  (réécrit : assemble les sections)
```

## Risques

| Risque | Mitigation |
|---|---|
| JS maison des maquettes complexe (sélecteurs à reflow mobile, scroll-spy) | réécrit proprement en composants client ; comportement = spec, pas le code |
| Images de projet (`assets/real/*`) référencées par la maquette | copiées dans `connect-web/assets/real/` ; `alt` réels |
| Formulaire visible mais non fonctionnel pourrait tromper | bouton désactivé + mention explicite « bientôt » ; câblage M5 |
| CLS sur le hero à rotation | crossfade opacité only, hauteur `clamp` fixe, image `priority` + dimensions |
| `À valider` badges qui partiraient en prod | `ValidationNote` off par défaut en prod (flag env) |

## Definition of done M2 (rappel spec §9)

Comparaison visuelle vs maquette (desktop+mobile) · hiérarchie propre par page ·
blocs conditionnels testés absents · `axe` OK · pas de régression CWV ·
zéro faux contenu · `build`+`typecheck`+`lint` verts · `code-review` avant merge.
