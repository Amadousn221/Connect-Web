# CONNECT WEB — REFONTE ACCUEIL
## Document de décision & brief d'implémentation (handoff Claude Code)

**Rôle tenu :** CTO · Product Architect · UX Strategist · Creative Director · CRO.
**Statut :** décisions arrêtées. Prêt à transmettre à Claude Code **sans code de ma part**.
**Base :** `connect-web-decision-log.md` (DECISION 01→24), copy P08, specs P10, tokens du fichier Design Foundations, capture de la page actuelle.
**Convention (héritée du projet) :** OBSERVED · INFERRED · RECOMMENDED · FACT · PLACEHOLDER. Aucune donnée commerciale inventée.

> **Note de gouvernance.** Ce document **challenge l'audit là où il contredit des décisions déjà verrouillées.** Les points de friction avec le socle sont traités en §00 : quatre sont reformulés avec argumentaire, un (C1 — icônes + hero sans image) a été **réouvert et validé explicitement par le PO** après lecture de la contre-argumentation. C'est la bonne voie : une décision verrouillée se réouvre par choix assumé, pas par effet de bord.

---

# 00 — CE QUE JE REFUSE OU REFORMULE DANS L'AUDIT (à lire en premier)

Cinq demandes de l'audit touchaient au socle du projet. Quatre sont reformulées ; **C1 est validée par override explicite du PO** (icônes de service + hero sans image).

| # | Demande de l'audit | Verdict | Pourquoi |
|---|---|---|---|
| **C1** | §05 — « Supprimer les photos des cartes → icônes » + retirer l'image du hero | **VALIDÉ PAR PO (override explicite)** | Le PO réouvre la décision verrouillée en connaissance de cause, après lecture de la contre-argumentation. Retenu. **Garde-fou opposable :** jeu d'icônes **sur-mesure, géométrique, cohérent** — jamais une grille d'icônes de librairie par défaut (ça, c'est le slop). Les vraies captures se **concentrent sur Réalisations + pages de cas**. Détail en §04-S01 & S06. |
| **C2** | §05 — Nouvelle liste de 6 « briques » (Sites & plateformes / E-commerce / Applications & PWA / Outils métier / Automatisation / Évolution-maintenance) | **REFUSÉ** | Écrase la taxonomie verrouillée (DECISION 03 : Niveau 1 ×4 + Système ×3 + Conseil, consolidée en **5 offres + Conseil** sur l'Accueil). La liste proposée est plus générique, pas moins. |
| **C3** | §01 — Titres hero alternatifs (« systèmes digitaux utiles », « outils digitaux pensés pour votre organisation ») | **REFUSÉ comme H1** | « solutions/systèmes/outils digitaux » est **banni par le glossaire anti-jargon P08**. On garde la ligne verrouillée, concrète (« qui font tourner votre organisation »). Le problème du hero n'est pas le texte, c'est la **hauteur et le poids visuel** (§04-S01). |
| **C4** | §04 + §08 — « Comprendre / Concevoir / Construire » en cartes distinctives **et** en méthode | **COLLISION corrigée** | Les deux sections diraient les mêmes trois mots. Ces verbes appartiennent à **la méthode**. La section « ce qui nous distingue » porte les **vrais différenciateurs** (§04-S04). |
| **C5** | §09 — Ajouter une section Blog/Ressources | **CONDITIONNEL** | On ne publie **pas** un blog vide ni des titres placeholder (DECISION P08-A9, anti-slop). Section livrée **masquée par défaut**, activée seulement avec ≥ 2 vrais articles. |

Tout le reste de l'audit est **validé** (souvent avec précisions). Les bons appels : réduire la hauteur du hero, bande de réassurance silencieuse, remonter les logos, supprimer « on montre on ne prétend pas », méthode navigable, FAQ en accordéon, CTA final bleu profond.

---

# 01 — DIAGNOSTIC EXÉCUTIF

**Verdict en 30 secondes.**
La page est **fonctionnelle et honnête** (vrais clients, vrais chiffres, ton juste). Son problème n'est **pas** le contenu ni la technique — c'est la **perception**. Elle se lit comme une **succession de blocs marketing empilés**, en grande partie à cause d'**une alternance trop fréquente de gros fonds colorés** (sombre / crème / sombre / crème…). Résultat : de la densité au lieu de la hiérarchie, de la répétition au lieu de la composition. On est loin du calme éditorial d'une agence premium.

- **Point le plus fort :** la matière est vraie. Preuves nommées (ATTA, SCOD, Maison Peinture), chiffres réels, voix anti-jargon. C'est un actif rare — la plupart des concurrents n'ont que du vent.
- **Point le plus faible :** le **rythme visuel**. Trop de sections de même poids, trop de bascules de fond, pas assez de blanc. La page « crie » à volume constant → rien ne ressort.
- **Plus grosse opportunité :** passer d'une page **multicolore** à une page **blanc-dominante**, où le bleu profond devient une **ponctuation** (2–3 moments forts) et l'orange un pur accent. C'est le levier premium n°1, et il coûte peu.
- **Plus gros risque :** « refondre » en **ajoutant** des effets (animations, cartes, ombres) au lieu d'**enlever**. Le premium se gagne ici par **soustraction**.

**Score global (page actuelle, /10 · AI-slop : 10 = risque max).**

| Dimension | Score | Commentaire |
|---|---|---|
| UX | 6 | Parcours lisible mais long, actions répétées |
| UI | 5 | Propre mais générique par endroits |
| Direction artistique | 4 | Pas d'intention forte ; alternance de fonds subie |
| Hiérarchie | 4 | Trop de sections de même poids |
| Conversion | 6 | CTA présents mais dilués (répétition) |
| Branding | 6 | Voix forte ; expression visuelle faible |
| Responsive | 6 | INFERRED — à vérifier réellement |
| Accessibilité | 5 | Logos pâles, contrastes à vérifier |
| Perception perf | 6 | INFERRED |
| Originalité | 4 | « pourrait appartenir à 100 autres sites » par endroits |
| Qualité premium | 4 | Calme et précision manquants |
| Risque AI-slop | **6** | Grilles de cartes répétées, fonds colorés en série |

---

# 02 — PRINCIPES DE REFONTE (règles opposables à Claude Code)

1. **Le premium se gagne par soustraction.** Meilleure hiérarchie + espace + typographie + cohérence + précision. Jamais « plus d'effets ». En cas de doute : **enlever**.
2. **Blanc-dominant.** Le blanc est le canevas. Le **crème** (`#F5F2ED`) est un moment de repos **rare**. Le **bleu profond** (encre) est une **ponctuation** réservée à 2–3 moments (Hero, CTA final, éventuellement « Du site au système »). **On ne fait plus alterner sombre/clair section après section.** *(Attaque directe du problème n°1.)*
3. **Orange = accent uniquement.** CTA, liens importants, indicateurs, état actif, numérotation. Jamais de grands aplats orange, jamais en fond de section.
4. **Une encre sombre unique.** Toutes les surfaces sombres utilisent **le même bleu profond** (fin du near-black `#0D0D0D` qui traînait). Une seule crème, un seul bleu, un seul orange : moins de couleurs = plus premium.
5. **Preuve d'abord, jamais de proclamation.** On montre le vrai travail. On ne dit pas « on est experts » — on le prouve par ATTA/SCOD/Maison Peinture. *(Voix P08.)*
6. **Zéro donnée inventée.** Chiffres, résultats, témoignages, prix, articles : réels ou `[PLACEHOLDER]` explicite, jamais fabriqués. *(Convention anti-slop du projet.)*
7. **Aponia = référence de composition, pas de vocabulaire ni de palette.** On vise son **niveau** de rythme, de retenue et de hiérarchie. On ne copie ni ses mots ni ses couleurs. *(Décision projet verrouillée.)*
8. **Design system unique, compositions uniques.** Mêmes tokens/composants partout (DECISION 04), mais chaque section a une intention propre — pas de template répété.
9. **Grille stricte, composition parfois asymétrique.** Tout n'a pas besoin d'être centré ni encadré. L'asymétrie sert la hiérarchie.
10. **Interactions subtiles.** Micro-mouvement, variation de bordure/fond, apparition d'un détail. Jamais spectaculaire. Le motion communique un état, pas un effet.
11. **Ne pas détruire l'existant.** Réutiliser composants, tokens, contenus et vrais assets. Refactor ciblé, pas réécriture aveugle. Stack inchangé (§08).
12. **Réduire le nombre de sections.** Chaque section doit gagner sa place. Si deux sections disent la même chose, on fusionne ou on supprime.

---

# 03 — ARCHITECTURE FINALE

**Décision d'architecture.** J'adopte l'ordre de l'audit avec **trois corrections** : (a) je conserve la section **routage par segment** (présente sur la page, absente de la liste de l'audit — elle fait de la reconnaissance d'audience et prouve « on part du réel ») mais **allégée** ; (b) la section « distingue » porte les **vrais différenciateurs**, pas les verbes de méthode ; (c) Ressources est **conditionnelle**.

```
HEADER (sticky, léger)
  ↓
01  HERO ...................................... [BLEU PROFOND] — court, calme
  ↓
02  RÉASSURANCE (bande de preuve silencieuse) ... [BLANC]
  ↓
03  CLIENTS / LOGOS ............................ [BLANC] (collé à la réassurance)
  ↓
04  CE QUI NOUS DISTINGUE (3 vrais différenciateurs) [BLANC]
  ↓
05  À QUI ON PARLE (routage segment, allégé) ..... [CRÈME] — repos éditorial
  ↓
06  NOS SERVICES / EXPERTISES (5 + Conseil) ...... [BLANC]
  ↓
07  DU SITE AU SYSTÈME .......................... [BLEU PROFOND] — 2e ponctuation
  ↓
08  RÉALISATIONS (3 cas phares) ................. [BLANC]
  ↓
09  MÉTHODE (4 phases navigables) ............... [CRÈME] — repos
  ↓
10  RESSOURCES *(conditionnel — masqué si vide)* . [BLANC]
  ↓
11  FAQ (accordéon premium) ..................... [BLANC]
  ↓
12  CTA FINAL + FORMULAIRE ...................... [BLEU PROFOND] — apogée
  ↓
FOOTER ......................................... [BLEU PROFOND très foncé]
```

**Ce qui disparaît :** la section « **On montre, on ne prétend pas** » (méta-discours redondant avec Réalisations) et la bande CTA orange intermédiaire « Un projet en tête ? » (répétition de CTA — on ne garde que Hero + CTA final).

**Rythme des fonds (le cœur du premium) :** sur ~12 sections, **seulement 3 sont bleu profond** et **2 sont crème**. Tout le reste est **blanc**. On passe d'un damier à une **respiration**.

---

# 04 — SPÉCIFICATIONS SECTION PAR SECTION

Format par section : Objectif · Problème actuel (OBSERVED) · Décision · Contenu · Structure · Interaction · Responsive · Fond · Priorité.

---

## S01 — HERO **[BLEU PROFOND]**

- **Objectif :** poser la promesse en 3 secondes, ton premium et calme.
- **Problème actuel (OBSERVED) :** hero trop haut, trop de texte, image dashboard trop présente, deux CTA de poids proche.
- **Décision :**
  - **On garde la ligne verrouillée** (positionnement large validé) — voir C3. On **refuse** les alternatives vagues (glossaire anti-jargon).
  - **H1 (légère compression autorisée) :** « **Nous concevons et connectons les outils qui font tourner votre organisation.** » *(le mot « numériques » peut sauter pour le rythme — le sens est intact ; ce n'est pas un nouveau titre, c'est un resserrement.)*
  - Réduire **fortement** la hauteur (viewport ~72–80vh desktop, pas 100vh ; contenu qui « déborde » un peu invite au scroll).
  - **Pas d'image dans le hero (décision PO).** Hero **purement typographique** sur bleu profond — la solution la plus premium et la plus calme (registre Aponia), qui règle d'un coup le problème du « visuel trop présent ». Au plus : un filet/texture d'encre très discret ou un dégradé subtil. **Jamais** de capture ni de mockup ici.
  - **Hiérarchie CTA nette :** primaire orange compact « **Parlons de votre projet** » ; secondaire en lien discret « Voir les réalisations → » (pas un 2e bouton lourd).
  - **Ligne de confiance** sous le CTA : « Réponse sous 24 h · Devis gratuit · Vos accès vous appartiennent » *(cohérente avec P08-A11).*
- **Structure :** eyebrow (« Studio digital — Dakar ») · H1 (2 lignes max) · sous-titre court (1 phrase) · groupe CTA · ligne de confiance. Composition **typographique** — le H1 est le sujet visuel, pas une image. Alignement à gauche, marge de respiration forte.
- **Interaction :** aucune animation d'entrée spectaculaire ; au plus un fondu/te translation très légère du bloc texte.
- **Responsive :** mobile = texte d'abord, visuel réduit dessous ou en filet ; CTA primaire pleine largeur, secondaire en lien texte ; pas de gros bouton lourd.
- **Fond :** **bleu profond** (encre unique). Orange réservé au CTA.
- **Priorité : P0.**

---

## S02 — RÉASSURANCE (bande de preuve silencieuse) **[BLANC]**

- **Objectif :** rassurer immédiatement après la promesse, sans crier.
- **Problème actuel (OBSERVED) :** titre inutile (« Ce que trois ans de projets donnent en clair ») + chiffres qui tirent vers la stat SaaS.
- **Décision :** **supprimer le titre.** Bande sobre, fond blanc, 4 preuves silencieuses. Chiffres **réels uniquement** (FACT) :
  - **3 ans** d'expérience · **20+** projets livrés · **~2 semaines** de délai moyen · **90 %** de clients qui reviennent.
  - Typographie de chiffre **maîtrisée** (grande mais pas géante), label discret dessous. Séparateurs fins, pas de cartes.
- **Structure :** rangée de 4 items (chiffre + label), séparés par filets verticaux légers.
- **Interaction :** **pas** de compteur animé (retiré au projet, DECISION correctifs). Statique.
- **Responsive :** 4 → 2×2 sur mobile.
- **Fond :** blanc.
- **Priorité : P0.**

---

## S03 — CLIENTS / LOGOS **[BLANC]**

- **Objectif :** crédibilité par clients réels nommés, **collée** à la réassurance.
- **Problème actuel (OBSERVED) :** logos trop petits, trop pâles (a11y), noyés.
- **Décision :**
  - **Agrandir** les logos, **renforcer le contraste** (accessibilité), espacer, aligner.
  - Ligne d'intro sobre — **on garde la formule concrète P08-A3** (meilleure que la proposition de l'audit) : « **Des marques, des commerces et des institutions d'Afrique de l'Ouest nous confient leurs plateformes.** »
  - Logos réels (FACT) : ATTA Africa · SCOD VTC · Link Shop · Marjan · Luxury Bijouterie by KN · ADA Voyages · Tamou Fishing · DDS Medical · WAS Africa · Fahamu Africa · Sunu Thiossane. **Exclure Maison Peinture** (pas de vitrine publique — apparaît en cas phare, pas en logo).
  - Carousel horizontal **doux** autorisé si > 1 ligne, sinon wrap 2 lignes. Jamais de logos écrasés.
- **Interaction :** défilement lent optionnel, pause au hover ; sinon statique.
- **Responsive :** wrap propre ; cibles non cliquables (bande de preuve, pas de liens).
- **A11y :** `alt` = nom du client ; contraste AA sur blanc. `PLACEHOLDER : fichiers logos réels à réunir.`
- **Fond :** blanc.
- **Priorité : P0.**

---

## S04 — CE QUI NOUS DISTINGUE **[BLANC]**

- **Objectif :** dire ce que Connect Web combine et que personne ne combine ici.
- **Problème actuel (OBSERVED) :** section « irremplaçable/distingue » risque de doublonner la méthode (voir C4).
- **Décision — CORRECTION MAJEURE :** cette section **ne porte pas** « Comprendre/Concevoir/Construire » (réservés à la méthode). Elle porte **3 différenciateurs vrais et prouvables** :
  1. **On part du réel, pas d'un catalogue.** On conçoit à partir du fonctionnement de votre organisation. *(preuve implicite : la section « À qui on parle ».)*
  2. **Du site au système.** On ne s'arrête pas au site : on le connecte à vos opérations (stock, ventes, automatisation). *(preuve : Maison Peinture — Odoo ; ATTA — automatisations. FACT DECISION 06/13.)*
  3. **Vous gardez les clés.** Domaine, hébergement, comptes de paiement, accès admin : tout à votre nom. Paiement mobile **et** international sur la même boutique. *(preuve : ATTA cross-border. FACT.)*
  - *Ces libellés sont une RECOMMENDATION alignée sur le socle ; à valider PO. Ne pas retomber sur des verbes de process.*
- **Structure :** 3 blocs en ligne (desktop), numérotés `01/02/03` (numéro = orange discret). **Pas de cartes lourdes** : filet supérieur, numéro, titre, 1–2 phrases. Composition éditoriale, pas grille de pastilles.
- **Interaction :** hover léger (bordure supérieure qui s'anime, très courte translation). Rien de spectaculaire.
- **Responsive :** 3 → 1 colonne, respiration entre blocs.
- **Fond :** blanc. Différenciateur #2 **pointe vers** la section S07 (tease → développement).
- **Priorité : P0.**

---

## S05 — À QUI ON PARLE (routage par segment, allégé) **[CRÈME]**

- **Objectif :** reconnaissance d'audience (« ça, c'est moi ») + démonstration vivante de « on part du réel ». **Sert de porte d'entrée aux services.**
- **Problème actuel (OBSERVED) :** section forte mais **lourde** (6 cartes de problème pleines) → contribue à la fatigue.
- **Décision :** **conserver** (valeur de reconnaissance réelle — ne pas fusionner, principe projet), mais **alléger** : titre « **Des organisations très différentes, un même point de départ.** » + accès compact aux 6 situations (B2B/export · e-commerce · mission/ONG · écoles/formation · export · entrepreneurs) sous forme de **liste éditoriale ou accordéon**, pas 6 grosses cartes côte à côte. Chaque item route vers l'offre/segment pertinent.
- **Structure :** intro courte + accordéon (mobile) / colonnes fines de liens-problèmes (desktop). Une seule action par item.
- **Interaction :** accordéon accessible ; ouverture d'un panneau à la fois.
- **Responsive :** accordéon vertical sur mobile (idéal), 2 colonnes de liens sur desktop.
- **Fond :** **crème** — 1er des deux seuls moments de repos.
- **Priorité : P1.**

---

## S06 — NOS SERVICES / EXPERTISES **[BLANC]**

- **Objectif :** présenter les briques que Connect Web assemble pour résoudre un problème — **prouvées**.
- **Problème actuel (OBSERVED) :** cartes photo qui peuvent sembler « stock » ; mais le vrai risque est de sur-corriger.
- **Décision — voir C1 & C2 :**
  - **Taxonomie inchangée (verrouillée) :** **5 offres + Conseil**, hiérarchie DECISION 03 (Niveau 1 dominant, Système en appui, Conseil en porte d'entrée). On **ne** remplace **pas** par les 6 « briques » génériques de l'audit.
  - **Cartes à icône (décision PO — override).** On retire les captures des cartes de service. Chaque offre = **une icône sur-mesure** d'un même langage visuel : géométrique, sobre, trait cohérent, épaisseur constante, même grille de construction. **Interdit :** icônes de librairie par défaut, grille d'icônes interchangeables (c'est le motif AI-slop n°1). L'icône doit être **spécifique à Connect Web**.
  - **Où va le vrai travail :** les vraies captures se **concentrent sur Réalisations (S08) et les pages de cas** — pas éparpillées en fond de carte. Séparation nette : **Services = ce qu'on fait** (icône + preuve nommée) ; **Réalisations = la preuve montrée**.
  - **La crédibilité tient par les lignes de preuve, pas par l'image :** chaque carte cite ses clients réels (ATTA, SCOD, Maison Peinture…) et ses technos. C'est ce qui empêche l'icône de retomber dans le décoratif. Sans ligne de preuve, une carte à icône **est** du slop — donc la ligne de preuve est obligatoire (ou, pour IA/Marketing sans preuve, une formulation-capacité honnête, sans cas ni chiffre).
  - **Technos = lignes de preuve nichées** sous le résultat (Shopify, WooCommerce, Odoo, PWA), **jamais** des titres d'offre (DECISION 03). Ex. « Boutiques en ligne qui vendent — *preuve : ATTA, Link Shop, Marjan* ».
  - **Asymétrie de preuve respectée :** IA/Marketing = capacité, **aucun** cas/chiffre affiché (FACT).
- **Structure :** bloc Niveau 1 (4 offres, dominant) + bloc Système (3 offres, secondaire, plus compact) + Conseil (porte d'entrée, 1 ligne CTA « Demander l'audit → »). Carte = **icône sur-mesure** + titre + 1 phrase + ligne de preuve + flèche.
- **Interaction :** hover subtil (élévation légère 1–2px, flèche qui avance de quelques px).
- **Responsive :** N1 4→2→1 ; Système 3→1 ; jamais colonnes serrées.
- **Fond :** blanc.
- **Priorité : P0.**

---

## S07 — DU SITE AU SYSTÈME **[BLEU PROFOND]**

- **Objectif :** faire comprendre à un dirigeant non-technique pourquoi Connect Web ≠ « agence qui fait des sites ». **Section stratégique.**
- **Problème actuel (OBSERVED) :** risque de schéma froid / redondance avec les services.
- **Décision :**
  - Centrée, calme, **narrative avant schématique**. Titre : « **Un site, c'est le début. Pas la fin.** » (P08-A7).
  - Représenter l'écosystème comme des **modules connectés** (SITE → CRM/ERP → E-COMMERCE → OUTILS MÉTIER → AUTOMATISATION → SYSTÈME), mais **habillé** : composants reliés par des filets fins, pas un diagramme d'ingénieur. Lisible par un non-technique.
  - **Ancré par du réel :** Maison Peinture (site→ERP) + ATTA (site→automatisation). `[RÉSULTAT — à confirmer]` tant que non collecté. Cadre honnête : « On ne vous vendra pas de l'IA pour faire moderne. »
- **Structure :** titre + chapô + 2 preuves + mini-écosystème visuel modulaire.
- **Interaction :** apparition séquentielle **très légère** des modules au scroll (subtile, désactivable en `prefers-reduced-motion`).
- **Responsive :** modules en pile verticale reliée sur mobile ; jamais horizontal serré.
- **Fond :** **bleu profond** — 2e ponctuation. C'est le moment « système ».
- **Priorité : P0.**

---

## S08 — RÉALISATIONS (3 cas phares) **[BLANC]**

- **Objectif :** la preuve au cœur de la décision.
- **Décision :** 3 cartes cas → **pages internes** (P08-A5). Ordre intentionnel **ATTA → SCOD → Maison Peinture** (commerce → plateforme → système). Vraies captures, traitement unifié. Résultat = `[RÉSULTAT — à confirmer]` (EVIDENCE REQUIRED — entretiens clients d'accord). CTA section « Voir toutes les réalisations → ».
- **Structure :** titre « Ce qu'on a construit, et ce que ça a changé. » + 3 cartes (client/secteur · ce qu'on a construit · ligne résultat · « Voir le projet → »).
- **Interaction :** hover subtil ; carte = lien nommé (« Voir le projet ATTA Africa »).
- **Responsive :** 3 → 1 colonne.
- **Fond :** blanc.
- **Priorité : P0.**

---

## S09 — MÉTHODE (4 phases navigables) **[CRÈME]**

- **Objectif :** rassurer sur le déroulé, façon premium et navigable.
- **Problème actuel (OBSERVED) :** version live à **6 étapes** (Comprendre/Diagnostiquer/Concevoir/Construire/Connecter/Déployer) → trop granulaire pour une home calme, et collision de verbes (C4).
- **Décision :** **4 phases** sur la home, navigables : **01 Comprendre → 02 Concevoir → 03 Construire → 04 Faire évoluer.** (La granularité à 6 étapes, si utile, va sur une page Méthode/Agence dédiée, pas ici.) Chaque phase affiche : intention · ce qu'on fait · livrables éventuels. Contenu ancré Connect Web (paiement câblé dès le départ ; remise de tous les accès à la fin) — pas le triptyque interchangeable.
- **Structure :** **desktop** = stepper/tabs horizontal `01 ─ 02 ─ 03 ─ 04`, sélection → panneau de contenu. **Mobile** = accordéon vertical (une phase ouverte à la fois).
- **Interaction :** transition de panneau fluide et rapide ; état actif en orange ; navigable clavier.
- **Responsive :** tabs → accordéon (pas une simple liste statique).
- **Fond :** **crème** — 2e et dernier repos.
- **Priorité : P1.**

---

## S10 — RESSOURCES *(conditionnel)* **[BLANC]**

- **Objectif :** expertise + SEO + confiance.
- **Décision — voir C5 :** section éditoriale premium (catégorie · titre · résumé court · date/temps de lecture · flèche), **3 articles max**. **Livrée mais masquée par défaut** (`featureFlag: resourcesEnabled=false`). **Activée uniquement** quand ≥ 2 **vrais** articles existent. **Aucun titre placeholder publié.** Nom de section : « **Ressources** » (cohérent nav) ou « Comprendre le digital ». Si vide au lancement : rien ne se déséquilibre (la section suivante reste FAQ).
- **Structure :** en-tête sobre + 2–3 cartes article éditoriales (pas d'aspect blog WordPress).
- **Responsive :** 3 → 1 colonne, ou carousel doux.
- **Fond :** blanc.
- **Priorité : P2** (dépend du contenu réel — PO).

---

## S11 — FAQ **[BLANC]**

- **Objectif :** lever les objections réelles (SEO + conversion).
- **Décision :** **accordéon premium**, un panneau ouvert à la fois, beaucoup de blanc, **pas de grosses cartes**. Reprendre les 6 questions P08-A10 (refonte sans perte SEO · délais · propriété/accès · paiement mobile+international · budget `[À PARTIR DE — PLACEHOLDER]` · marketing avec asymétrie assumée). Questions formulées comme un vrai client les pose.
- **Structure :** titre « Les questions qu'on nous pose vraiment. » + accordéon.
- **Interaction :** clavier-navigable, `aria-expanded`, `<button>` sémantique.
- **Responsive :** pleine largeur, cibles ≥ 44px.
- **Fond :** blanc.
- **Priorité : P1.**

---

## S12 — CTA FINAL + FORMULAIRE **[BLEU PROFOND]**

- **Objectif :** l'apogée de conversion.
- **Décision :** fond **bleu profond** (3e et dernière ponctuation). Titre orienté action : « **Décrivez-nous votre projet, on revient vers vous sous 24 h.** » (cohérent live) — le **24 h est un engagement réel** déjà porté par la copy P08 : on le **garde**, mais c'est un **engagement opérationnel** (PO : à tenir vraiment). Corps court, un CTA principal clair, **formulaire à droite en desktop** / message d'abord puis formulaire simple en mobile. Micro-réassurance « Réponse sous 24 h · Devis gratuit · Vos accès vous appartiennent ». Accès directs (tél/WhatsApp) `[PLACEHOLDER]`.
- **Structure :** 2 colonnes desktop (message | formulaire), pile en mobile.
- **Interaction :** validation inline, états (défaut/focus/erreur/succès) soignés (spec P10).
- **Responsive :** formulaire pleine largeur, bouton pleine largeur en mobile.
- **Fond :** bleu profond.
- **Priorité : P0.**

---

### Sections SUPPRIMÉES
- **« On montre, on ne prétend pas »** → supprimée (méta-discours redondant avec Réalisations ; la voix P08 dit « montrer, pas revendiquer » — donc on montre, on n'annonce pas qu'on montre). **Ne pas remplacer par autre chose.**
- **Bande CTA orange intermédiaire** (« Un projet en tête ? ») → supprimée (répétition de CTA + gros aplat orange interdit). On ne garde que Hero + CTA final.

---

# 05 — DESIGN SYSTEM

*(Grounded sur les tokens réels du fichier Design Foundations — Newsreader + Hanken Grotesk, `#e8612a`, etc. On ne réinvente pas, on discipline.)*

### Couleurs
| Rôle | Token | Valeur | Usage |
|---|---|---|---|
| Canevas | `--bg` | `#FFFFFF` | fond dominant |
| Repos | `--cream` | `#F5F2ED` | 2 sections max (S05, S09) |
| Encre profonde | `--ink` | `#0A2530` → `#0C2F3E` | **toutes** les surfaces sombres (Hero, S07, CTA) |
| Encre footer | `--ink-900` | `#07202A` | footer uniquement |
| Bleu médium | `--blue-500` | `#1B5670` | filets, éléments sur clair, hover discret |
| **Accent** | `--accent` | `#E8612A` | CTA, liens clés, numéros, état actif — **rien d'autre** |
| Accent hover | `--accent-600` | `#C94F1E` | hover CTA |
| Texte fort | `--text` | `#1A1A1A` | titres/corps sur clair |
| Texte doux | `--text-muted` | `#555555` | secondaire |
| Texte sur ink | `--on-ink` | `#F0EEE9` | corps sur bleu profond |
| Bordure | `--border` | `#E6E1D8` | filets, séparateurs |

**Règle :** near-black `#0D0D0D` **retiré** au profit de `--ink`. Un seul sombre, une seule crème, un seul accent.

### Typographie
- **Display / titres :** **Newsreader** (serif) — H1/H2, poids 400–600, `opsz` activé. C'est la signature éditoriale premium.
- **UI / corps :** **Hanken Grotesk** (sans) — corps, labels, boutons, chiffres de réassurance.
- **Échelle (desktop, clamp fluide) :** H1 `clamp(2.4rem, 5vw, 4rem)` · H2 `clamp(1.8rem, 3vw, 2.6rem)` · H3 `1.25rem` · corps `1.0625rem/1.6` · small `0.9rem`.
- **Règles :** interlignage généreux, mesure de lecture ~60–70 caractères, pas de texte justifié, pas de tout-capitales sauf micro-labels/eyebrows.

### Espacement & grille
- Échelle 4px : `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`.
- **Rythme de section généreux** : padding vertical `96–128px` desktop, `56–72px` mobile. **L'espace est le principal outil premium.**
- Grille 12 colonnes, gouttière 24px, `max-width` contenu ~1200px ; composition parfois asymétrique.

### Rayons, bordures, élévation
- Rayon : `--r-sm 6px` · `--r-md 10px` (cartes) · `--r-pill` **réservé aux badges seulement**. **Pas de tout-arrondi.**
- Bordures fines `1px` (`--border`) plutôt que des ombres.
- Ombres **rares et douces** : `0 1px 2px rgba(10,37,48,.06)` au repos, `0 6px 20px rgba(10,37,48,.10)` au hover de carte. **Pas de grosses ombres.**

### Composants
- **Boutons :** primaire (aplat orange, texte blanc, compact, rayon `--r-sm`) · secondaire (lien texte souligné à l'accent ou bouton ghost bordure fine) · pas de gros boutons lourds. Hover = `--accent-600`, transition 150ms.
- **Cartes :** bordure 1px, padding 24–32px, hover subtil. Deux variantes : image (vraie capture, voile unifié) / aplat (offres sans preuve).
- **Badges :** petits, discrets, pill autorisé ici uniquement (ex. catégorie Ressources, techno de preuve).
- **Accordéon :** `<button>` + `aria-expanded`, un panneau à la fois, chevron qui pivote, transition hauteur 200ms.
- **Tabs/stepper (méthode) :** état actif orange, indicateur de progression fin, navigable clavier.
- **Carousel :** discret (logos, éventuellement ressources), défilement doux, pause au hover, contrôlable clavier ; jamais autoplay agressif.
- **Chiffres réassurance :** Hanken, grand mais pas géant, label muted.

### Transitions & motion
- Durées : `150ms` (hover), `200–250ms` (accordéon/tabs), `400ms` (apparition au scroll, très légère).
- Easing : `cubic-bezier(.2,.6,.2,1)`.
- **Respecter `prefers-reduced-motion`** : désactive apparitions et parallaxe.

### Breakpoints
`< 640px` mobile · `640–1024px` tablette · `> 1024px` desktop (confirme P10). Le mobile a **sa propre hiérarchie** (§07), pas un desktop rétréci.

---

# 06 — UX / CONVERSION

- **Action principale unique :** « **Parlons de votre projet** » (DECISION 11). Une conversion primaire, secondaires contextuels (« Voir les réalisations », « Voir le projet », « Demander l'audit »). **On retire les CTA répétés** — le CTA revient seulement au Hero et au CTA final. Moins de CTA = chaque CTA pèse plus.
- **Parcours :** promesse (Hero) → rassurer (preuve + logos) → se reconnaître (distingue + segments) → comprendre l'offre (services) → saisir l'ambition (du site au système) → croire (réalisations) → se projeter (méthode) → lever l'objection (FAQ) → convertir (CTA + formulaire).
- **Réassurance placée près des décisions :** ligne de confiance au Hero et au CTA ; FAQ juste avant la conversion finale.
- **Réduction de friction :** formulaire court au CTA final (spec P10, états soignés) ; accès directs tél/WhatsApp ; « devis gratuit » explicite ; « vos accès vous appartiennent » traite l'objection propriété.
- **Objections adressées :** SEO (refonte), délais, propriété, paiement mobile+international, budget, marketing (asymétrie assumée). Toutes déjà rédigées (P08-A10).
- **Signaux d'intégrité = signaux premium :** dire « on ne fait pas X » (marketing sans preuve) **augmente** la confiance. Ne pas gommer.

---

# 07 — RESPONSIVE (décisions, pas adaptations automatiques)

| Section | Desktop | Tablette | Mobile (hiérarchie propre) |
|---|---|---|---|
| Hero | texte + visuel asymétrique, ~76vh | idem compressé | texte d'abord, visuel filet dessous, CTA primaire pleine largeur, secondaire en lien |
| Réassurance | 4 en ligne | 4 en ligne | 2×2 |
| Logos | 1–2 lignes agrandies | 2 lignes | carousel doux ou wrap |
| Distingue | 3 colonnes | 3 → 2 | 1 colonne empilée |
| Segments | 2 colonnes de liens | accordéon | **accordéon** (1 ouvert) |
| Services | N1 4 col / Système 3 col | 2 col | 1 col ; hiérarchie N1>Système>Conseil **préservée en pile** |
| Site→système | écosystème horizontal habillé | 2 col | pile verticale reliée |
| Réalisations | 3 col | 2 col | 1 col |
| Méthode | tabs/stepper horizontal | tabs | **accordéon vertical** |
| FAQ | accordéon pleine largeur | idem | idem, cibles ≥44px |
| CTA final | 2 col (message | form) | 2 col ou pile | pile, message d'abord, form simple |

Règle transverse : **jamais** de colonnes serrées ni de logos écrasés en mobile ; cibles tactiles ≥ 44px ; motion réduit respecté.

---

# 08 — COMPOSANTS À CRÉER / MODIFIER

**Stack inchangé (aucune justification de le changer) :** Next.js App Router (Vercel), contenu Accueil **hardcodé en composants Next** (pas CMS pour la home), WordPress headless + ACF + WPGraphQL pour le dynamique, **SSG + ISR** (ADR-001). On **réutilise** tokens et composants existants ; refactor ciblé.

**À MODIFIER**
- `Hero` — hauteur réduite, **retrait de l'image** (hero typographique), hiérarchie CTA, ligne de confiance.
- `ReassuranceBand` — retirer le titre, retirer compteurs animés, 4 preuves statiques.
- `LogoStrip` — agrandir, contraste AA, carousel doux, exclure Maison Peinture.
- `ServicesSection` — **cartes à icône sur-mesure** (retrait des captures, décision PO) ; lignes de preuve nichées obligatoires ; hiérarchie N1/Système/Conseil.
- `FromSiteToSystem` — passer d'un schéma froid à un écosystème modulaire habillé, ancré par 2 preuves.
- `CaseStudyCard` — traitement image unifié, lien nommé, `[RÉSULTAT — à confirmer]`.
- `FAQAccordion` — accordéon premium, un panneau à la fois, a11y.
- `FinalCTA` — fond `--ink`, formulaire à droite desktop, états soignés.
- `Footer` — sur `--ink-900`, liens sociaux réels (retirer `{{LINKEDIN}}`/`{{INSTAGRAM}}`/`{{FACEBOOK}}` placeholders), maillage complet.

**À CRÉER**
- `Differentiators` (S04) — 3 blocs éditoriaux numérotés (vrais différenciateurs).
- `AudienceRouter` (S05) — segments allégés en accordéon/liste (remplace les 6 grosses cartes).
- `MethodStepper` (S09) — tabs desktop / accordéon mobile, 4 phases.
- `ResourcesSection` (S10) — éditoriale, **derrière un feature flag** `resourcesEnabled`.
- `IconSet` (services) — **jeu d'icônes sur-mesure Connect Web** : géométrique, trait cohérent, épaisseur/grille constantes. SVG optimisés, `currentColor`, accessibles (`aria-hidden` si décoratives). Une icône par offre (5 + Conseil), pas de librairie générique.

**À SUPPRIMER**
- `ProofClaimSection` (« on montre on ne prétend pas »).
- `MidPageCTA` (bande orange intermédiaire).

**Tokens :** introduire/aligner les variables du §05 (retirer `#0D0D0D`, unifier `--ink`). Vérifier réutilisation avant tout nouveau composant.

---

# 09 — CONTENU (conserver / raccourcir / supprimer / réécrire)

| Contenu | Action | Note |
|---|---|---|
| Image du hero | **Supprimer** | hero typographique (décision PO) |
| Captures en fond de cartes service | **Supprimer** | remplacées par icônes ; captures → Réalisations |
| H1 hero | **Raccourcir** | drop « numériques » possible ; ligne verrouillée conservée |
| Sous-titre hero | **Raccourcir** | 1 phrase max |
| Titre réassurance « Ce que trois ans… » | **Supprimer** | bande silencieuse |
| Chiffres (3 ans / 20+ / 2 sem. / 90%) | **Conserver** | FACT, réels |
| Intro logos | **Conserver** (formule P08-A3) | plus concrète que la proposition audit |
| « Ce qui nous distingue » (verbes process) | **Réécrire** | → 3 vrais différenciateurs (C4) |
| Segments (6 problèmes) | **Conserver + alléger** | reconnaissance d'audience |
| Services / lignes de preuve | **Conserver** | technos nichées (DECISION 03) |
| « Du site au système » | **Conserver** | P08-A7, ancré réel |
| « On montre, on ne prétend pas » | **Supprimer** | redondant |
| Méthode 6 étapes | **Réécrire → 4 phases** | Comprendre/Concevoir/Construire/Faire évoluer |
| FAQ (6 Q) | **Conserver** | P08-A10 |
| CTA final « …sous 24 h » | **Conserver** | engagement réel à tenir |
| Titres articles Ressources | **Différer** | pas de placeholder publié |

**Placeholders à ne jamais publier tels quels :** `[RÉSULTAT — à confirmer]` (cas), `[À PARTIR DE — PLACEHOLDER]` (prix), tél/WhatsApp, URLs sociales, captures réelles, titres Ressources, OG image, équipe Agence.

---

# 10 — PLAN D'IMPLÉMENTATION CLAUDE CODE

*(Séquencé, chaque phase autonome et vérifiable. S'inscrit dans le système Lots A–D / milestones du projet. Aucune ligne de code sans ce brief validé.)*

- **Phase 0 — Tokens & fondations.** Aligner les variables `--ink/--cream/--accent/…` (§05), retirer `#0D0D0D`, poser l'échelle typo/espacement. *Aucun changement visuel de section encore.*
- **Phase 1 — Rythme des fonds.** Appliquer la règle « blanc-dominant, bleu × ponctuation, crème × repos » sur l'ossature existante. **C'est ici que 60% du premium se gagne.** Supprimer `MidPageCTA`.
- **Phase 2 — Hero.** Hauteur, visuel en appui, hiérarchie CTA, ligne de confiance.
- **Phase 3 — Réassurance + Logos.** Retirer titre/compteurs ; agrandir logos, contraste AA.
- **Phase 4 — Distingue (nouveau) + Segments (allégé).** `Differentiators` + `AudienceRouter`.
- **Phase 5 — Services.** Traitement image unifié, variante aplat, lignes de preuve, hiérarchie N1/Système/Conseil. **Ne pas** basculer en icônes.
- **Phase 6 — Du site au système.** Écosystème modulaire habillé.
- **Phase 7 — Réalisations.** Cartes unifiées, liens nommés.
- **Phase 8 — Méthode.** `MethodStepper` (tabs/accordéon).
- **Phase 9 — Supprimer `ProofClaimSection`.** Vérifier qu'aucune section ne se déséquilibre.
- **Phase 10 — FAQ.** Accordéon premium, a11y.
- **Phase 11 — CTA final + formulaire.** Fond `--ink`, états P10.
- **Phase 12 — Ressources (derrière flag).** Masqué tant que < 2 vrais articles.
- **Phase 13 — Footer + correctifs.** Liens sociaux réels, redirection **`/nous-joindre` → `/contact`** (issue connue), retirer placeholders footer.
- **Phase 14 — QA.** §12.

---

# 11 — CRITÈRES D'ACCEPTATION (vérifiables)

- [ ] **Rythme des fonds :** ≤ 3 sections bleu profond, ≤ 2 crème, le reste blanc. Aucun aplat orange en fond.
- [ ] **Hero :** ≤ ~80vh desktop ; **aucune image** (composition typographique) ; 1 CTA primaire + 1 lien secondaire ; ligne de confiance présente.
- [ ] **Réassurance :** pas de titre ; 4 chiffres réels ; **aucun compteur animé**.
- [ ] **Logos :** agrandis, contraste AA vérifié ; Maison Peinture absent ; `alt` = nom client.
- [ ] **Distingue :** 3 différenciateurs **réels** ; **aucun** « Comprendre/Concevoir/Construire » ici.
- [ ] **Services :** cartes à **icône sur-mesure cohérente** (pas de grille d'icônes génériques) ; captures retirées (concentrées sur Réalisations) ; **ligne de preuve présente sur chaque carte prouvable** ; hiérarchie N1>Système>Conseil ; IA/Marketing sans cas ni chiffre.
- [ ] **Méthode :** 4 phases ; tabs desktop / accordéon mobile ; navigable clavier ; **pas** une liste statique.
- [ ] **FAQ :** accordéon, un panneau à la fois, `aria-expanded`.
- [ ] **CTA final :** fond bleu profond ; formulaire fonctionnel avec états ; « sous 24 h » présent.
- [ ] **Sections supprimées :** « on montre on ne prétend pas » + bande CTA orange absentes.
- [ ] **Ressources :** invisible si < 2 vrais articles ; aucun titre placeholder en prod.
- [ ] **Redirection** `/nous-joindre` → `/contact` en place.
- [ ] **Zéro donnée inventée** ; tous les placeholders balisés.
- [ ] **Stack préservé** (Next App Router + WP headless + SSG/ISR) ; aucune dépendance superflue ajoutée.

---

# 12 — CHECKLIST FINALE

**UX** — parcours clair · une action principale · CTA non répétés · reconnaissance d'audience · objections traitées.
**UI** — blanc-dominant · une encre / une crème / un accent · typographie disciplinée · pas de tout-arrondi · ombres rares.
**Responsive** — hiérarchie mobile propre (accordéons segments/méthode) · pas de colonnes serrées · cibles ≥44px.
**Accessibilité** — contraste AA (logos, texte sur ink) · accordéons/tabs clavier · `alt` réels · `prefers-reduced-motion` respecté · structure de titres cohérente.
**Performance** — CWV verts (LCP<2,5s / INP<200ms / CLS<0,1, P10) · images réelles optimisées (next/image) · pas de motion coûteux · perf prime sur l'effet.
**SEO** — H1 unique · métadonnées P08 · redirections 301 (dont `/nous-joindre`) · pas de perte au refactor.
**Conversion** — CTA primaire évident · réassurance près des décisions · formulaire court · friction réduite.
**Cohérence technique** — tokens réutilisés · composants réutilisés · stack inchangé · refactor ciblé · vérifié après implémentation.
**Intégrité (spécifique projet)** — aucun chiffre/résultat/témoignage/prix inventé · asymétrie de preuve respectée · placeholders balisés · « certifié » absent.

---

## DÉCISIONS À CONSIGNER AU JOURNAL (proposées, DECISION 25→)

- **D25** — Rythme des fonds : blanc-dominant, bleu profond = ponctuation (≤3), crème = repos (≤2). Retrait du near-black.
- **D26** — Hero : ligne verrouillée conservée (resserrée), refus des alternatives vagues (glossaire anti-jargon). Problème = hauteur/poids, pas texte. **Hero sans image — composition typographique sur bleu profond (override PO).**
- **D27** — Services : **cartes à icône sur-mesure** (override PO : retrait des captures) ; captures concentrées sur Réalisations ; crédibilité portée par les lignes de preuve obligatoires ; jeu d'icônes cohérent (anti-grille générique). **Taxonomie 5+Conseil maintenue** (refus des 6 briques génériques).
- **D28** — Section « distingue » = 3 différenciateurs réels ; verbes Comprendre/Concevoir/Construire réservés à la méthode.
- **D29** — Méthode home = 4 phases navigables (6 étapes → page dédiée si besoin).
- **D30** — Suppression « on montre on ne prétend pas » + bande CTA orange intermédiaire.
- **D31** — Ressources conditionnelle (flag), jamais publiée vide.
- **D32** — Segments conservés mais allégés (accordéon), en porte d'entrée des services.
- **D33** — « Réponse sous 24 h » = engagement réel **confirmé par le PO** (obligation opérationnelle à tenir). Conservé au Hero et au CTA final.

*FACT = vérifié · RECOMMENDATION = proposition · EVIDENCE REQUIRED = à confirmer · PLACEHOLDER = provisoire explicite. Aucune donnée commerciale inventée.*
