# M2 — Feature spec : pages statiques (Accueil + 7 pages d'offre)

**Statut :** ⏸ en attente de validation PO avant toute ligne de code (règle du projet).
**Réf. :** plan Phase 24 §M2 · DECISION 04 (pas de template générique) · copy P08 ·
maquettes `Connect Web - *.dc.html` · Design Foundations · budget perf P10.
**Note méthode :** les skills `feature-spec` / `implementation-plan` ne sont pas
exposés dans la session ; ce document en tient lieu, même structure que les phases
précédentes.

---

## 1. Objectif

Porter en pages Next.js réelles, fidèles aux maquettes, **l'Accueil** et les
**7 pages d'offre** (4 Niveau 1 + 3 Niveau 2). Chaque page garde sa propre
hiérarchie (DECISION 04) ; les composants et tokens sont mutualisés (design
system unique). Aucune donnée dynamique WordPress ici (c'est M3) : le contenu
vient de la copy figée (source ci-dessous).

**Hors périmètre M2 :** hub Services, Conseil & stratégie, Réalisations,
Ressources, Agence, Contact (page), légal → M3/M6. i18n réel → M4. Branchement
du formulaire → M5.

## 2. Source de contenu (décision à confirmer)

Les fichiers `connect-web-phase-08-part2..8.md` **ne sont pas dans l'espace de
travail** (seul `part1-voice-messaging` est présent). Les maquettes `.dc.html`
contiennent la copy réelle, rédigée à partir de P08 et validée en design.

→ **Proposition : les maquettes `.dc.html` sont la source de vérité copy + layout
pour M2.** Toute mention `À valider` / placeholder de la maquette (`[RÉSULTAT]`,
fourchettes prix, noms/photos, URLs réseaux) **reste un placeholder visible** —
jamais inventé (règle « zéro faux », P10/P22).
Si le PO fournit les `.md` P08, on réconcilie.

## 3. Maquette de référence par page

| Page | Route (M2, FR à la racine ; `/en` = M4) | Maquette |
|---|---|---|
| Accueil | `/` | `Connect Web - Accueil V2.dc.html` *(à confirmer : V2, pas `uploads/…/Accueil.dc.html`)* |
| Boutiques en ligne | `/services/boutiques-en-ligne` | `Connect Web - Boutiques en ligne.dc.html` |
| Plateformes & applications | `/services/plateformes-applications` | `Connect Web - Plateformes et applications.dc.html` |
| Sites d'entreprise | `/services/sites-entreprise` | `Connect Web - Sites d'entreprise.dc.html` |
| Sites institutionnels & ONG | `/services/sites-institutionnels-ong` | `Connect Web - Sites institutionnels et ONG.dc.html` *(doublon `… copy.dc.html` → EVIDENCE REQUIRED P23 : confirmer la version finale)* |
| Odoo / ERP-CRM | `/services/crm-erp-integrations` | `Connect Web - Odoo ERP-CRM.dc.html` |
| IA & automatisation | `/services/ia-automatisation` | `Connect Web - Automatisation IA.dc.html` |
| Marketing & acquisition | `/services/marketing-acquisition` | `Connect Web - Marketing.dc.html` |

## 4. Accueil — inventaire des 12 sections (maquette V2)

| # | Section (ancre) | Type | Interactivité | Composant cible |
|---|---|---|---|---|
| A1 | Hero (`.cw-hero`) | client | rotation 3 messages (auto 6 s, pause hover, points cliquables), ken-burns crossfade bg, `prefers-reduced-motion` coupe l'auto | `HeroRotating` |
| A2 | Bande réassurance (`.cw-4col`) | statique | — | `TrustBar` (4 items icône+titre+texte) |
| A3 | Ce qu'on construit (`#construire`) | client | sélecteur 5 items → panneau (situation/citation, description, tags « ce qu'on livre », lien Découvrir) ; reflow mobile (panneau sous l'item actif) | `NeedSelector` |
| A3b | Bande CTA « Pas sûr par où commencer ? » | statique | — | `CtaBand` (variante petrol-nuit) |
| A4 | Pour qui (`#pourqui`) | client | onglets 6 segments → panneau 2 col (h3, p, besoin/on construit, CTA, image client + badge `À valider`) | `AudienceTabs` |
| A5 | Services (`#services`) | statique | hover cards | `OfferGrid` (6 cartes → pages d'offre) + `ValidationNote` |
| A6 | Du site au système (`#systeme`) | client | « road » 6 nœuds cliquables + ligne de progression | `SystemRoad` |
| A7 | Trajectoires (`#trajectoires`) | statique | — | `TrajectoryGrid` (4 cartes X → Y → Z) |
| A8 | Réalisations (`#realisations`) | client | carrousel horizontal scroll-snap (11 cartes), barre de progression + compteur `01 / 11`, flèches | `CaseTeaserCarousel` — **contenu codé en dur en M2**, repasse en WordPress en M3 |
| A9 | Preuve | statique | — | `ProofGrid` (4 items, 2 avec `À valider`) |
| A10 | Méthode (`#methode`) | client | rail sticky + scroll-spy sur 6 étapes (IntersectionObserver), n° + libellé + barre | `ProcessSteps` |
| A11 | FAQ | client | accordéon 6 questions (1 avec `À valider` prix) | `FaqAccordion` |
| A12 | Contact (`#contact`) | client | formulaire (nom, email, type d'orga, objectif, message) | `ContactSection` + `ContactForm` — **UI seule en M2, `onSubmit` désactivé** ; branchement CRM = M5 |

### Décisions Accueil à confirmer
- **A8 (carrousel Réalisations)** : contenu codé en dur en M2 (11 items de la
  maquette, dont la carte ATTA déjà en placeholder `À valider`), bascule
  WordPress en M3. OK ?
- **A12 (formulaire)** : rendu visuel complet en M2, `onSubmit` inerte
  (message « bientôt disponible » ou bouton désactivé), câblage en M5 (bloqué
  sur choix outil CRM). OK ?
- **Ancre `#contact`** : le CTA « Parlons de votre projet » pointe vers `#contact`
  de l'Accueil en M2 ; il pointera vers `/contact` quand cette page existera (M5/M6).

## 5. Pages d'offre — structure commune (archétype P07 B1–B11)

Chaque page d'offre a **sa propre composition** (DECISION 04) mais réutilise les
mêmes primitives. Lecture fine de chaque maquette au moment de la coder
(sous-milestone M2.4). Points communs observés :
- Hero d'offre (titre, sous-titre, CTA, éventuel visuel/mockup)
- Sections « problème → ce qu'on construit → comment » propres à l'offre
- Preuve : **Niveau 1** peut porter un cas/teaser ; **Niveau 2** = asymétrie de
  preuve assumée (Marketing : **aucune** section preuve — P08). Le composant
  preuve doit pouvoir être **absent proprement**.
- Ancrage prix : « à partir de » discret (N1) ou « selon périmètre » (N2), en
  **placeholder** tant que le PO n'a pas fixé les montants (DECISION 10).
- CTA final.

## 6. Composants à extraire (alimente le plan d'implémentation)

**Primitives (`components/ui/` + `components/sections/`)**
`Container` · `Eyebrow` (puce + label) · `SectionHeading` (eyebrow + h2 + lead,
variante centrée `.cw-head`) · `Button`/`Pill` (primaire orange, outline, ghost,
sur-dark) · `CtaBand` · `Tag`/`Pill` info · `RevealOnScroll` (wrapper
IntersectionObserver, respecte `prefers-reduced-motion`) · `ValidationNote`
(badge/encart `À valider`, **piloté par un flag** — cf. §7) · `DeviceMockup` (si
utilisé dans les héros d'offre).

**Sections Accueil** : `HeroRotating` · `TrustBar` · `NeedSelector` ·
`AudienceTabs` · `OfferGrid` · `SystemRoad` · `TrajectoryGrid` ·
`CaseTeaserCarousel` · `ProofGrid` · `ProcessSteps` · `FaqAccordion` ·
`ContactSection` + `ContactForm`.

**Contenu figé** : `content/fr/accueil.ts` (+ `content/fr/offres/*.ts`), typé,
importé par les pages. `content/en/*` créé vide/मirroir pour M4.

## 7. Marqueurs « À valider »

La maquette a un prop `showValidationMarkers` (défaut `true`) qui affiche des
badges pointillés orange sur tout ce qui attend une donnée réelle (visuels ATTA,
fourchettes prix, noms/photos, URLs réseaux, URLs de pages).

→ **Proposition** : composant `ValidationNote` piloté par
`process.env.NEXT_PUBLIC_SHOW_VALIDATION_NOTES` (défaut **on** en preview,
**off** en prod). Le contenu à côté (ex. carte ATTA sans visuel) reste géré par
la règle des états vides : si la donnée manque, on masque proprement, on n'invente
pas. Les vrais placeholders de prix restent affichés tels quels (`[À PARTIR DE —
PLACEHOLDER]`), jamais un faux montant.

## 8. Exigences non-fonctionnelles (P10)

- **CWV** : LCP < 2,5 s / INP < 200 ms / CLS < 0,1. Conséquences M2 :
  - Hero : image `priority`, dimensions fixées, pas de layout shift à la rotation
    (crossfade d'opacité, pas de reflow).
  - Aucune animation qui déplace le layout ; `RevealOnScroll` = opacity +
    translateY ≤ 24px, coupé en `reduced-motion`.
  - Carrousel : scroll natif CSS (`scroll-snap`), JS minimal.
- **A11y WCAG AA** : sélecteurs/onglets au clavier (rôles `tab`/`tabpanel` ou
  `aria-expanded` selon le pattern), focus visible (déjà en global), contrastes
  vérifiés clair **et** sombre, `alt` réels sur les images de projet.
- **SEO** : `generateMetadata` par page (title/description depuis la copy),
  headings hiérarchisés (un seul `h1`), liens internes réels.
- **Thème** : chaque section rendue correctement en clair ET sombre (les
  maquettes définissent les deux).

## 9. Critères d'acceptation M2

1. Comparaison visuelle page par page vs la maquette correspondante (desktop +
   mobile), à `showValidationMarkers` équivalent.
2. Chaque page respecte sa propre hiérarchie — pas de composant générique
   copié-collé sans adaptation (DECISION 04).
3. Blocs conditionnels (preuve d'offre, cas ATTA sans visuel) : testés **absents**
   autant que présents ; aucun encart vide.
4. `axe` sans violation bloquante ; navigation clavier complète sur Accueil.
5. Lighthouse : pas de régression CWV vs la baseline M0.
6. Aucun faux contenu commercial ; tous les `À valider` tracés.
7. `npm run build` + `typecheck` + `lint` verts ; revue `code-review` avant merge.

## 10. Questions ouvertes pour le PO

1. Source copie = maquettes `.dc.html` ? (ou tu fournis P08 part2–8)
2. Accueil V2 = la bonne (vs `uploads/…/Accueil.dc.html`) ?
3. `Sites institutionnels et ONG` : `.dc.html` ou `… copy.dc.html` ?
4. A8 carrousel Réalisations codé en dur en M2 → WordPress en M3 : OK ?
5. A12 formulaire : UI seule en M2, câblage M5 : OK ?
6. `ValidationNote` piloté par flag env (on en preview / off en prod) : OK ?
7. Séquencement : **Accueil d'abord (M2.1→M2.3), point de contrôle, puis les 7
   pages d'offre (M2.4)** — ou tout d'un bloc ?
