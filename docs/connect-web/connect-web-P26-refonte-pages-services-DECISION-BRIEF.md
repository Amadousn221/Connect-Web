# CONNECT WEB — REFONTE DES PAGES SERVICES
## Document d'architecture & brief d'implémentation (handoff Claude Code)

**Rôle tenu :** CTO · Product Architect · Information Architect · UX Strategist · CRO · Design System Architect.
**Statut :** décisions arrêtées. Prêt pour Claude Code, **sans code de ma part**.
**Fait suite à :** P25 (refonte Accueil) — même univers visuel, architecture différente.
**Base analysée :** exports HTML réels des 7 pages services + capture de la page Boutiques en ligne. Convention projet : OBSERVED · INFERRED · RECOMMENDED · FACT · PLACEHOLDER. **Zéro donnée commerciale inventée.**

> **Le recadrage central (à lire avant tout le reste).** Le brief demande « une architecture unique par service ». Pris au pied de la lettre = **7 pages sur-mesure**. Je refuse cette lecture : c'est ingérable, incohérent à terme, plus lent, non-modélisable proprement en ACF, et paradoxalement **plus exposé au slop** sur les pages faibles. Je livre à la place ce que le brief lui-même appelle en §07 : **une bibliothèque de patterns composables + une recette de composition par service + une section signature sur-mesure par page.** *Variété dans la composition, cohérence dans le système.* On obtient le sentiment « conçu pour mon problème » **là où ça compte**, sans exploser la maintenance. C'est la décision d'architecture n°1 (§04).

---

# 00 — CE QUE JE CHALLENGE DANS LE BRIEF

| # | Demande | Verdict | Raison |
|---|---|---|---|
| **X1** | « Chaque service = sa propre architecture » (lu comme 7 templates bespoke) | **REFORMULÉ** | Bibliothèque composable + recette par service + 1 signature/page. Différenciation réelle, maintenance saine, ACF-modelable. (§04, §07) |
| **X2** | §09 — Preuves au format « Contexte → Problème → Solution → Résultat » **sur toutes les pages** | **REFUSÉ pour IA & Marketing** | Décision verrouillée : **asymétrie de preuve** — IA/Marketing n'ont ni cas ni chiffres. Leur colonne vertébrale est **honnêteté + process + capacité**, pas une étude de cas qu'on remplirait à l'inventé. (§06-F/G) |
| **X3** | §3 — « L'image peut rester dans le hero mais discrète » | **NUANCÉ** | La home est passée en hero **sans image** (P25/D26). Pages services : hero **typographique par défaut**, avec **au plus un élément visuel réel et spécifique** (une vraie capture projet, cadrée, jamais un mockup décoratif). Décidé par service, pas par défaut. |
| **X4** | Traiter les 7 services à poids égal | **HIÉRARCHISÉ** | 4 pages « preuve forte » (Boutiques, Plateformes, Odoo, Sites d'entreprise) en traitement landing complet ; ONG = **variante** de l'archétype présence ; IA & Marketing = spine allégé proof-light. |
| **X5** | Diversifier les patterns (§05) | **VALIDÉ, mais borné** | La variété sert la compréhension, **jamais décorative** (règle du brief, que je durcis en critère d'acceptation : test « cette section pourrait-elle être copiée telle quelle sur un autre service ? si oui, elle ne fait pas son travail »). |

Le reste du brief est **validé** : hero plus bas, sections signature, CTA contextuels, FAQ spécifiques, responsive pensé par pattern, design system commun.

---

# 01 — DIAGNOSTIC DE LA PAGE ACTUELLE (Boutiques en ligne)

**Verdict : bon contenu, mauvaise carrosserie.** Le problème n'est **pas** le fond — la copy est déjà spécifique, honnête et différenciante (parcours d'achat implicite, wedge local×international, vraie preuve ATTA, plancher **500 000 FCFA** réel `OBSERVED — PO à confirmer`). Le problème est **structurel et visuel** :

- **~14 sections empilées** dans un squelette identique à celui des 6 autres pages (confirmé en analysant les 7 exports). D'où l'effet template malgré une bonne écriture.
- **Rythme de fonds en damier** (sombre / crème / blanc / crème…) — la discipline de la nouvelle home (blanc-dominant, bleu = ponctuation) **n'est pas encore appliquée ici**.
- **Empilement de grilles de cartes** : promesse (2×2) → pourquoi-nous (3) → ce-que-ça-change (numéroté) → projets (3). Quatre grilles quasi d'affilée = exactement le « titre + 3 cartes » que le brief veut tuer.
- **Le moment signature est gâché.** Le wedge « local et international ne devraient jamais s'opposer » — l'argument le plus fort et le plus unique de Connect Web — est traité comme **un simple bloc de texte à filet orange**. Il mérite une **section visuelle signature**, pas un paragraphe.
- **CTA répétés** de poids égal (hero, milieu, cross-sell, CTA final, contact) → dilution.

**Score page actuelle (/10 · slop : 10 = risque max)**

| Dimension | Score | Note |
|---|---|---|
| Pertinence contenu | 8 | Vraiment spécifique au e-commerce local |
| Différenciation structurelle | 3 | Même squelette que les 6 autres |
| Hiérarchie visuelle | 4 | Trop de grilles de même poids |
| Direction artistique | 4 | Damier de fonds subi |
| Conversion | 5 | CTA dilués, plancher bien présent |
| Preuve | 7 | ATTA + projets réels, à contextualiser |
| Signature | 3 | Wedge sous-exploité |
| Cohérence avec la nouvelle home | 3 | Pas encore alignée P25 |
| Risque AI-slop | 5 | Répétition de grilles de cartes |

---

# 02 — PROBLÈMES UX/UI (synthèse)

1. **Effet template** : squelette unique répliqué → « c'est la même page que les autres ».
2. **Monotonie des patterns** : cartes-cartes-cartes ; aucune variété de composition au service du sens.
3. **Fonds mal orchestrés** : damier au lieu de respiration ; non aligné à la home.
4. **Signature enterrée** : l'argument différenciant n'a pas de forme visuelle propre.
5. **CTA non hiérarchisés** : trop nombreux, poids égal.
6. **Preuve non contextualisée** : « nos projets » au lieu de « la preuve qu'on sait résoudre *ce* problème ».
7. **Densité constante** : la page « parle » au même volume du début à la fin → rien ne ressort.

---

# 03 — LE PROBLÈME DU TEMPLATE COMMUN

Squelette **partagé par les 7 pages** (constaté sur les exports) :

```
Hero → Problème miroir → Promesse (grille) → [Différenciation] → Preuve/Projets
→ Ce que ça change → Méthode "De X à Y" → Prix → FAQ → Cross-sell → CTA → Contact
```

**Ce qui est déjà bon et qu'on garde** : la copy est *déjà* service-spécifique (chaque H1 attaque un vrai problème ; chaque page a sa ligne « De X à Y » signature dans le texte ; le cross-sell écosystème existe déjà). **On ne réécrit pas la copy.**

**Ce qui casse** : l'**ordre** et la **forme** sont identiques partout. La différenciation vit dans les mots mais pas dans la structure. **Le correctif = re-composer, pas ré-écrire.**

**Décision :** chaque service reçoit (a) un **ordre de sections propre**, (b) un **sous-ensemble de patterns** adapté à son intention, (c) **une section signature** avec une forme visuelle qui lui est réservée. Le design system, lui, ne bouge pas.

---

# 04 — PRINCIPES DE DIVERSIFICATION

1. **Composable, pas bespoke.** Une bibliothèque de ~16 patterns (§07). Chaque page = une **recette** (ordre + sous-ensemble). Interdit de tout redessiner.
2. **Une signature par page.** Au moins une section dont la **forme** est spécifique au service et non transposable telle quelle. C'est le cœur du « conçu pour mon problème ».
3. **La variété sert le sens.** Un pattern est choisi parce qu'il explique mieux (un parcours = timeline ; un avant/après = split comparatif), jamais pour décorer. → **Critère d'acceptation durci (§14).**
4. **Rythme de fonds hérité de la home.** Blanc-dominant ; crème = respiration rare ; bleu profond = 2 ponctuations max par page (typiquement : le moment signature **ou** la preuve, + le CTA final). Jamais de damier.
5. **Densité variable.** Alterner sections denses et sections respirantes. Tout n'a pas le même poids.
6. **Hiérarchie de conversion.** 1 CTA primaire contextuel, répété seulement aux moments à forte intention (hero + après preuve + CTA final). On supprime les CTA intermédiaires redondants.
7. **Proof-aware.** Pages à preuve → études de cas contextualisées. Pages proof-light (IA, Marketing) → process + honnêteté, **sans** section preuve fabriquée.
8. **Cohérence système absolue.** Mêmes tokens, typo, grille, boutons, icônes, rayons, motion que P25. (§08)

---

# 05 — ARCHITECTURE RECOMMANDÉE : BOUTIQUES EN LIGNE (page de référence)

**Intention visiteur :** « je vends déjà (souvent en DM/réseaux), je veux une vraie boutique qui encaisse, ici *et* à l'international, sans me faire arnaquer ni perdre le contrôle. »
**CTA primaire :** « **Construisons votre boutique** ». **Secondaire :** « Voir une boutique qu'on a construite → ».
**Signature de la page :** **« Le parcours d'achat »** (le wedge local×international rendu visuel).

Ordre recommandé (12 sections, contre 14, avec 2 fusions) :

| # | Section | Objectif | Rôle conversion | Pattern | Interaction | Fond | Priorité |
|---|---|---|---|---|---|---|---|
| 1 | **Hero** | Nommer le problème + promesse en 3 s | Accroche + intention | `P-HERO-T` (typo, compact ; au plus 1 vraie capture ATTA discrète) | aucune | **bleu profond** | P0 |
| 2 | **Problème miroir** | « c'est moi » (vendre en DM déborde) | Reconnaissance | `P-PROBLEM` (liste éditoriale, pas cartes) | — | blanc | P0 |
| 3 | **SIGNATURE — Le parcours d'achat** | Rendre visible DM → boutique → paiement local+international → livraison → client qui revient | **Différenciation n°1** | `P-JOURNEY` (timeline horizontale, wedge intégré) | apparition légère au scroll | **bleu profond** (1 des 2 ponctuations) | P0 |
| 4 | **La boutique faite pour vendre** | Fonctionnalités qui comptent (catalogue, paiement mobile+carte, livraison, stock) | Valeur | `P-BENTO` (bento, pas 2×2 uniforme) | hover subtil | blanc | P1 |
| 5 | **Pourquoi Connect Web** | 3 différenciateurs e-commerce (local×international, propriété, ça tourne) | Confiance | `P-WHYUS` (3 blocs éditoriaux numérotés) | hover léger | crème (respiration) | P1 |
| 6 | **Preuve contextualisée** | Prouver qu'on résout *ce* problème | **Preuve** | `P-PROOF-CASE` (ATTA/Link Shop/Marjan : Contexte→Problème→Solution→`[Résultat — à confirmer]`) | carousel si >3 | blanc | P0 |
| 7 | **Ce qu'une vraie boutique change** | Bénéfices concrets | Valeur→désir | `P-STAT` ou liste numérotée (pas une 4ᵉ grille de cartes) | — | blanc | P2 |
| 8 | **Méthode — De l'idée à la première vente** | Rassurer sur le déroulé | Réduction risque | `P-METHOD` (réutilise `MethodStepper`) | tabs desktop / accordéon mobile | crème | P1 |
| 9 | **Prix — plancher** | Répondre « ça vaut combien » | Qualification | `P-PRICING` (« à partir de 500 000 FCFA » `PO à confirmer` + form court) | — | blanc | P0 |
| 10 | **FAQ e-commerce** | Lever objections spécifiques | Déblocage | `P-FAQ` (accordéon) | 1 panneau ouvert | blanc | P1 |
| 11 | **Cross-sell — On connecte le reste** | Ouvrir vers automatisation/marketing | Upsell/écosystème | `P-CROSSSELL` (bande fine, pas section pleine) | — | blanc | P2 |
| 12 | **CTA final + form** | Convertir | **Conversion** | `P-CTA` (réutilise `FinalCTA`) | états form | **bleu profond** | P0 |

**Fusions vs page actuelle :** l'ancien bloc « Local/international » (texte) est **absorbé dans la signature `P-JOURNEY`** ; le bloc « pourquoi une marque choisit CW » et la mini-carte ATTA sombre sont **fusionnés** dans `P-WHYUS` + `P-PROOF-CASE`. On passe de 14 à 12 sections, avec plus de sens.

**Responsive :** journey horizontal → **timeline verticale** mobile ; bento → 1 colonne ordonnée par importance ; preuve → carousel ; méthode → accordéon ; form → pleine largeur. Détail transversal en §11 patterns.

---

# 06 — ARCHITECTURE SPÉCIFIQUE DES AUTRES SERVICES

Format compact par service : Intention · Problème · Storytelling (ordre) · Signature · CTA · FAQ (axes). Tous puisent dans la bibliothèque §07. **La copy existante est conservée** ; on re-compose.

### A — SITES D'ENTREPRISE  *(archétype : présence / crédibilité)*
- **Intention :** « mon site actuel ne me rend pas justice / freine ma crédibilité (surtout à l'export). »
- **Problème :** un site daté sabote la confiance avant le premier échange.
- **Ordre :** Hero → Problème miroir → **SIGNATURE : « De la marque au site qui convainc »** (`P-BEFORE-AFTER` crédibilité : perception avant/après) → Ce qu'un bon site installe (`P-BENTO`) → Pourquoi CW (`P-WHYUS`) → Preuve (`P-PROOF-CASE`) → Méthode → Prix (plancher) → FAQ → Cross-sell (marketing) → CTA.
- **Signature :** séquence **avant/après de crédibilité** (pas un carrousel de features).
- **CTA :** « Discutons de votre site ». **FAQ :** délais, SEO/refonte sans perte, propriété des accès, multilingue/export.

### B — SITES INSTITUTIONNELS & ONG  *(variante de A, audience distincte)*
- **Intention :** « notre mission mérite un site qui la porte, avec un budget contraint et des besoins spécifiques (dons, bénévoles, gouvernance). »
- **Problème :** un site qui dessert la mission au lieu de la servir.
- **Ordre :** Hero → Problème miroir → **SIGNATURE : « De la mission au site qui la porte »** (`P-JOURNEY` mission→visibilité→engagement→impact) → Un site d'ONG ≠ un site d'entreprise (`P-COMPARE` honnête) → Pourquoi CW → Preuve (`P-PROOF-CASE` si dispo, sinon `P-PROOF-LOGOS`) → Besoins spécifiques (dons/bénévoles/bénéficiaires) `P-BENTO` → Méthode → Prix (plancher **adapté secteur** `PO`) → FAQ (subventions, budget, gouvernance) → CTA.
- **Signature :** parcours **mission → impact**. **Distinction A/B :** même squelette d'archétype, signature + objections + preuve différentes. **Ne pas dupliquer A.**
- **CTA :** « Donnons à votre mission le site qu'elle mérite ».

### C — PLATEFORMES & APPLICATIONS  *(archétype : opérations / produit)*
- **Intention :** « mes opérations tournent à la main (tableurs, appels), il me faut un outil. »
- **Ordre :** Hero → Problème (le manuel qui déborde) → **SIGNATURE : « De l'opération manuelle à la plateforme »** (`P-BEFORE-AFTER` : chaos tableur → plateforme) → Ce qu'une plateforme change (`P-BENTO`) → Architecture produit (`P-CONNECTED` modules) → Pourquoi CW → Preuve (`P-PROOF-CASE`) → Méthode → Prix (**plancher + « selon périmètre »**, custom) → FAQ → Cross-sell (automatisation) → CTA.
- **Signature :** **avant/après opérationnel**. **CTA :** « Sortons vos opérations du tableur ».
- **FAQ :** sur-mesure vs no-code, données/migration, évolutivité, propriété du code.

### D — ODOO ERP / CRM  *(archétype : système)*
- **Intention :** « mes outils ne se parlent pas ; je veux tout piloter d'un seul endroit — mais un ERP me fait peur. »
- **Ordre :** Hero → Problème (outils silotés) → **SIGNATURE : « Du process éclaté au système unique »** (`P-CONNECTED` : modules déconnectés → système relié, lisible par un non-technique) → Configuré pour votre façon de travailler (`P-BENTO`) → « Un ERP ça fait peur, on sait » (`P-PROBLEM` rassurance) → Pourquoi CW → Preuve (Maison Peinture `P-PROOF-CASE`) → Méthode (périmètre cadré, anti « projet à rallonge ») → Prix (**plancher + selon périmètre**) → FAQ → Cross-sell (automatisation) → CTA.
- **Signature :** **diagramme de système connecté** (le « un seul écran »). **CTA :** « Piloter votre activité depuis un seul écran ».
- **FAQ :** durée, reprise de l'existant, formation équipe, coût de licence vs intégration.

### E — AUTOMATISATION IA  *(proof-light — spine honnêteté/process)*  ⚠️ voir X2
- **Intention :** « des tâches répétitives me mangent des heures ; je veux les automatiser sans usine à gaz ni perdre le contrôle. »
- **Ordre :** Hero (« le travail répétitif, fait tout seul ») → Problème (temps perdu) → **SIGNATURE : « De la tâche au workflow »** (`P-BEFORE-AFTER` workflow : étapes manuelles → flux automatisé) → Des automatisations utiles, pas des gadgets (`P-BENTO`) → « L'automatisation ne vous dépossède pas » (`P-PROBLEM` contrôle) → **« On commence petit et on mesure »** (`P-METHOD` — l'argument d'honnêteté central) → **PAS de section preuve chiffrée** → Prix (selon périmètre) → FAQ → Cross-sell (« vous avez déjà une boutique/plateforme ? ») → CTA.
- **Signature :** **workflow avant/après**. **Preuve :** capacité + posture, **aucun cas ni chiffre inventé** (asymétrie assumée = argument de crédibilité). **CTA :** « Voyons ce qu'on peut automatiser ».

### F — MARKETING  *(proof-light — spine honnêteté/mesure)*  ⚠️ voir X2
- **Intention :** « j'ai (ou j'aurai) un site/boutique, mais personne ne le voit ; je ne veux pas cramer mon budget. »
- **Ordre :** Hero (« un beau site ne sert à rien si personne ne le voit ») → Problème (budget qui part sans traçabilité) → Ce sur quoi on accompagne (`P-BENTO`, honnête et borné) → **SIGNATURE : « Du budget flou aux résultats mesurables »** (`P-JOURNEY` mesure, sans faux chiffres) → « Pas de promesses en l'air » (`P-PROBLEM` honnêteté) → Méthode (stratégie → premiers résultats mesurables) → **PAS d'étude de cas résultat** → Prix (adapté objectifs, pas forfait figé) → FAQ → Cross-sell (« vous avez un site qui convertit ? ») → CTA.
- **Prérequis honnête :** le marketing suppose un actif qui convertit → **la page route explicitement** vers Sites/Boutiques si besoin. **CTA :** « Attirons les bons clients, sans gâcher votre budget ».

**Note commune E/F :** ces deux pages **n'affichent aucun résultat client** tant qu'aucun n'est réel et confirmé. Leur force = la **transparence** (« pas de gadgets », « pas de promesses en l'air »). C'est on-brand et anti-slop.

---

# 07 — BIBLIOTHÈQUE DE PATTERNS (composables)

Chaque pattern = un composant paramétrable, un rendu, une règle responsive. On compose, on ne réinvente pas.

| ID | Pattern | Quand l'utiliser | Responsive |
|---|---|---|---|
| `P-HERO-T` | Hero typographique compact (+1 visuel réel optionnel) | ouverture de chaque page | texte d'abord, visuel réduit/masqué |
| `P-PROBLEM` | Problème miroir (liste éditoriale) | nommer la douleur | pleine largeur |
| `P-PROMISE`/`P-BENTO` | Bento de fonctionnalités (tailles variées) | montrer la valeur sans « 3 cartes » | 1 colonne, ordre par importance |
| `P-JOURNEY` | Timeline horizontale (parcours) | **signature** parcours/mesure | **verticale** |
| `P-BEFORE-AFTER` | Split comparatif avant/après | **signature** transformation | empilé (avant puis après) |
| `P-CONNECTED` | Modules connectés / système | **signature** système/architecture | pile verticale reliée |
| `P-COMPARE` | Tableau/colonnes comparatives | distinguer (ex. ONG vs entreprise) | scroll horizontal contrôlé ou empilé |
| `P-WHYUS` | 3 différenciateurs éditoriaux numérotés | confiance | 1 colonne |
| `P-PROOF-CASE` | Étude de cas Contexte→Problème→Solution→`[Résultat]` | **preuve** (services proof-backed) | carousel |
| `P-PROOF-LOGOS` | Bande logos filtrée par secteur/service | preuve légère | wrap/carousel |
| `P-STAT` | Grand chiffre isolé (réel uniquement) | ancrer un bénéfice | pleine largeur |
| `P-METHOD` | Stepper/timeline méthode (= `MethodStepper`) | rassurer déroulé | accordéon |
| `P-PRICING` | Plancher « à partir de » + form court | qualification | pleine largeur |
| `P-FAQ` | Accordéon spécifique service | objections | idem |
| `P-CROSSSELL` | Bande écosystème fine | upsell | empilé |
| `P-CTA` | CTA final + formulaire (= `FinalCTA`) | conversion | pile, message d'abord |
| `P-STICKY` | Texte sticky + étapes qui défilent | **option** architecture produit dense | désactivé → empilé |

**Règle d'or de composition :** une page = `P-HERO-T` + `P-PROBLEM` + **1 signature** (`JOURNEY`/`BEFORE-AFTER`/`CONNECTED`) + valeur (`BENTO`) + `WHYUS` + preuve (`PROOF-CASE` **ou rien** si proof-light) + `METHOD` + `PRICING` + `FAQ` + `CROSSSELL` + `P-CTA`. **L'ordre et le sous-ensemble varient ; les briques non.**

---

# 08 — DESIGN SYSTEM (hérité de P25, inchangé)

On **réutilise intégralement** les tokens P25 — aucune divergence permise :
- **Couleurs :** blanc canevas · crème `#F5F2ED` respiration rare · encre bleu profond `#0A2530`/`#0C2F3E` (ponctuations) · orange `#E8612A` accent seul · texte `#1A1A1A`/`#555`.
- **Typo :** Newsreader (titres) + Hanken Grotesk (UI/corps). Échelle P25.
- **Grille/espacement :** 12 col, échelle 4px, padding section 96–128 / 56–72 mobile.
- **Boutons/cartes/badges/accordéons/tabs/carousels/motion :** identiques à P25 (icônes sur-mesure du même set `IconSet`).

**Ce qui varie d'une page à l'autre :** composition, ordre, densité, patterns, interactions, présentation. **Ce qui ne varie jamais :** le système ci-dessus. → *Variété dans la composition, cohérence dans le design system.*

---

# 09 — STRATÉGIE DE CONVERSION

- **1 CTA primaire contextuel par page** (voir §06), répété **seulement** aux 3 moments à forte intention : hero, juste après la preuve/signature, CTA final. **Suppression des CTA intermédiaires redondants** de la page actuelle.
- **CTA secondaire discret** = « voir une réalisation » (route vers la preuve).
- **Micro-conversions :** ouverture d'accordéon FAQ, lecture d'un cas, révélation du plancher prix.
- **Réassurance placée près des décisions :** ligne de confiance au hero (délai 24 h, devis gratuit, propriété des accès) ; plancher prix avant le form ; FAQ juste avant le CTA final.
- **Qualification :** form court 3–4 champs (note tarification). Pas d'interrogatoire.
- **Objections traitées par service** (§06 FAQ) — pas de FAQ générique copiée-collée.
- **Preuve = conversion :** contextualisée (« on a résolu *ce* problème »), pas « nos projets ».
- **Proof-light assumé (IA/Marketing) :** la transparence *est* l'argument de conversion.

---

# 10 — COMPOSANTS EXISTANTS À CONSERVER

Réutiliser tels quels (issus de la home / design system) : `Header`, `Footer`, `FinalCTA` (→ `P-CTA`), `FAQAccordion` (→ `P-FAQ`), `MethodStepper` (→ `P-METHOD`), `LogoStrip` (→ `P-PROOF-LOGOS`), `IconSet`, tokens, boutons, badges. **Aucune duplication** : les pages services consomment les mêmes composants que l'Accueil.

---

# 11 — COMPOSANTS À MODIFIER

- **`ServiceHero`** → variante `P-HERO-T` : hauteur réduite, typo-first, CTA compacts, visuel réel **optionnel** et discret (jamais mockup).
- **`PricingBlock`** → `P-PRICING` : plancher « à partir de » (réel ou `PLACEHOLDER`), « selon périmètre » pour custom (Plateformes/Odoo), form court intégré.
- **`ProofSection`** → `P-PROOF-CASE` : passer de « nos projets » à Contexte→Problème→Solution→`[Résultat — à confirmer]`, **filtrable par service**.
- **Orchestration des fonds** : appliquer la discipline P25 (blanc-dominant, 2 ponctuations bleu max) à chaque page — retirer le damier.

---

# 12 — NOUVEAUX COMPOSANTS À CRÉER

Les patterns de signature (une fois, réutilisés en composition) :
- **`JourneyTimeline`** (`P-JOURNEY`) — timeline horizontale/verticale, étapes paramétrables.
- **`BeforeAfter`** (`P-BEFORE-AFTER`) — split comparatif avant/après.
- **`ConnectedModules`** (`P-CONNECTED`) — modules reliés (système), lisible non-technique.
- **`ComparePanel`** (`P-COMPARE`) — colonnes comparatives honnêtes.
- **`BentoFeatures`** (`P-BENTO`) — bento de tailles variées (remplace les grilles 2×2/3-cartes).
- **`BigStat`** (`P-STAT`) — grand chiffre isolé, réel uniquement.
- **`CrossSellBand`** (`P-CROSSSELL`) — bande écosystème fine.
- *(optionnel)* **`StickyProcess`** (`P-STICKY`) — pour architecture produit dense (Plateformes), si réellement utile.

Chaque nouveau composant : paramétrable par contenu (ACF-friendly), responsive défini, motion `prefers-reduced-motion`-safe, tokens P25.

---

# 13 — PLAN D'IMPLÉMENTATION CLAUDE CODE

**Principe : construire la bibliothèque UNE fois, puis composer chaque page.** (Évite le sur-mesure ×7.)

- **Phase 0 — Alignement système.** Appliquer tokens/fonds P25 au gabarit service ; retirer le damier. Aucune nouvelle section encore.
- **Phase 1 — Bibliothèque de patterns.** Créer les nouveaux composants (§12) + adapter les existants (§11). Testés isolément avec contenu factice balisé.
- **Phase 2 — Page de référence : BOUTIQUES EN LIGNE** (§05, architecture complète). Sert de **preuve du concept** de la bibliothèque. Valider avec le PO avant de dupliquer la logique.
- **Phase 3 — Archétype présence :** Sites d'entreprise (A), puis ONG (B) en **variante** (signature + objections différentes).
- **Phase 4 — Opérations/système :** Plateformes (C), puis Odoo (D).
- **Phase 5 — Proof-light :** Automatisation IA (E), puis Marketing (F) — **spine honnêteté, sans section preuve chiffrée**.
- **Phase 6 — Cohérence transversale :** vérifier qu'aucune signature n'est dupliquée, que les fonds respectent la règle, que les FAQ/CTA sont bien service-spécifiques.
- **Phase 7 — QA** (§14–15).

---

# 14 — CRITÈRES D'ACCEPTATION

- [ ] **Test anti-template (le plus important) :** pour chaque page, **au moins une section signature** dont la forme ne peut pas être copiée telle quelle sur un autre service. Si toutes les sections d'une page sont transposables → **échec**.
- [ ] **Aucune page ne réutilise l'ordre exact d'une autre.** Ordre + sous-ensemble de patterns distincts par service.
- [ ] **Rythme de fonds :** blanc-dominant ; ≤ 2 sections bleu profond ; crème = respiration ; **pas de damier**.
- [ ] **Hero :** typographique, compact, ≤ ~80vh ; CTA primaire contextuel + secondaire discret ; visuel réel optionnel (jamais mockup).
- [ ] **Preuve :** contextualisée (Contexte→Problème→Solution→Résultat) sur les 4 pages proof-backed ; **IA & Marketing = aucune section preuve chiffrée**, aucun résultat inventé.
- [ ] **Prix :** plancher réel « à partir de » (ou `PLACEHOLDER` balisé) ; « selon périmètre » sur custom ; form 3–4 champs.
- [ ] **FAQ & CTA spécifiques** au service (pas de copié-collé générique).
- [ ] **Design system :** tokens/typo/boutons/icônes/motion P25 identiques partout. Variété **uniquement** en composition.
- [ ] **Responsive par pattern** : timelines→verticales, bento→1 col ordonnée, tabs→accordéons, carousels tactiles, form pleine largeur.
- [ ] **Cross-sell** présent mais **fin** (bande, pas section pleine) ; CTA intermédiaires redondants supprimés.
- [ ] **Zéro donnée inventée** ; placeholders balisés (`[Résultat — à confirmer]`, plancher `PO à confirmer`).

---

# 15 — CHECKLIST FINALE

**UX** — chaque page raconte le problème *de son visiteur* ; signature présente ; parcours de conversion clair ; CTA hiérarchisés.
**UI** — blanc-dominant ; bleu = ponctuation ; typo disciplinée ; patterns variés au service du sens, pas décoratifs.
**Différenciation** — test anti-template passé ; ordres distincts ; signatures non dupliquées (A vs B notamment).
**Responsive** — comportement défini par pattern ; mobile = accordéons/carousels/empilement intelligent, pas un desktop réduit ; cibles ≥44px.
**Accessibilité** — contraste AA ; accordéons/tabs/carousels clavier ; `alt` réels ; `prefers-reduced-motion`.
**Performance** — CWV verts ; images réelles optimisées (next/image) ; motion sobre.
**SEO** — H1 unique par page/service ; intitulés problème-orientés ; maillage inter-services (cross-sell) ; pas de contenu dupliqué entre A et B.
**Conversion** — CTA contextuel ; plancher prix visible ; qualification courte ; objections traitées par service.
**Cohérence technique** — bibliothèque composable réutilisée ; composants home réutilisés ; ACF-modelable ; stack P25 inchangé (Next App Router + WP headless + SSG/ISR).
**Intégrité projet** — asymétrie de preuve respectée (IA/Marketing) ; aucun prix/résultat/témoignage inventé ; placeholders balisés.

---

## DÉCISIONS À CONSIGNER AU JOURNAL (proposées, suite de P25)

- **D35** — Pages services : **bibliothèque de patterns composables + recette par service + 1 signature/page** (refus du sur-mesure ×7).
- **D36** — **Asymétrie de preuve appliquée aux pages :** IA & Marketing sans section preuve/résultat ; spine honnêteté/process.
- **D37** — Hero service : typographique compact, visuel réel **optionnel** et discret (cohérent D26).
- **D38** — Archétypes : Sites d'entreprise & ONG partagent un squelette ; **ONG = variante** (signature + objections propres), pas une page bespoke.
- **D39** — Discipline de fonds P25 étendue aux pages services (fin du damier).
- **D40** — Prix : plancher « à partir de » réel par offre ; « selon périmètre » sur custom (note tarification), à trancher/chiffrer par le PO.
- **D41** — Boutiques en ligne = **page de référence** implémentée en premier après la bibliothèque.

*FACT = vérifié · RECOMMENDATION = proposition · EVIDENCE REQUIRED = à confirmer · PLACEHOLDER = provisoire explicite. Aucune donnée commerciale inventée.*
