# AUDIT READ-ONLY — Page parente « Conception et développement web »

**Statut :** audit en lecture seule. Aucun fichier applicatif modifié, aucune route créée, aucun composant refactorisé.
**Date :** 2026-09-07
**Références produit citées :** `docs/connect-web/connect-web-decision-log-COMPLET.md` (journal complet, en particulier DECISION 23/24), `CONNECT-WEB-SOURCE-DE-VERITE-V3.md` (source de vérité technique, CMS Sanity).
**Convention :** FACT (constaté dans le dépôt) · RÉUTILISABLE · ABSENT/À CONFIRMER · CONTRAINTE · RISQUE.

---

## 0. Constat central

**La page parente « Conception et développement web » n'existe pas dans le code.** C'est le décalage le plus important entre le journal de décisions (DECISION 23, validée PO) et l'état réel du dépôt : DECISION 23 prévoit une carte parente avec sous-services en tags, mais aucune route, aucun fichier, aucune section ne porte ce regroupement. Les trois sous-services demandés existent, mais **à plat**, comme des offres Niveau 1 indépendantes, au même titre que les autres cartes du hub Services.

Le code documente lui-même ce trou. Dans `content/fr/services.ts:31-33` :
```ts
// Pas de page « conception-developpement-web » : on renvoie vers la page
// d'offre la plus proche (présence / crédibilité).
cta: { label: "Voir l'offre", href: '/services/sites-entreprise' },
```
La carte homepage « Conception et développement web » pointe donc, faute de mieux, vers `/services/sites-entreprise` — une des trois pages qu'elle est censée chapeauter, pas une page parente.

---

## 1. La page parente existe-t-elle ? Route, fichier, structure

**FACT — absente.** Aucun fichier `app/[locale]/services/conception-et-developpement-web/` (ou variante de slug) n'existe. `Grep` sur "Conception et développement web" / "conception-et-developpement" ne remonte que :
- le libellé de carte dans `content/fr/services.ts:20`
- le composant `ServiceCard`/`ServiceGrid` qui l'affiche
- le journal de décisions et `A-COMPLETER.md`

**FACT — routes réellement présentes sous `/services`** (`app/[locale]/services/*/page.tsx`) :
| Route | Fichier | Contenu |
|---|---|---|
| `/services` | `app/[locale]/services/page.tsx` | Hub — `ServicesHubPage` |
| `/services/sites-entreprise` | `app/[locale]/services/sites-entreprise/page.tsx` | Offre N1 |
| `/services/sites-institutionnels-ong` | `app/[locale]/services/sites-institutionnels-ong/page.tsx` | Offre N1 |
| `/services/boutiques-en-ligne` | `app/[locale]/services/boutiques-en-ligne/page.tsx` | Offre N1 |
| `/services/plateformes-applications` | idem | Offre N1 |
| `/services/crm-erp-integrations` | idem | Offre N2 |
| `/services/ia-automatisation` | idem | Offre N2 |
| `/services/marketing-acquisition` | idem | Offre N2 |
| `/services/conseil-strategie` | idem | Conseil |

Chaque page d'offre suit un patron identique et minimal : import du contenu `content/fr/offres/*.ts`, `metadata` (title/description seuls), rendu via `<OfferPage locale={locale} content={content} />`. Aucune de ces pages ne référence de page parente ni de breadcrumb vers un niveau intermédiaire « Conception et développement web ».

**Structure de sections du hub `/services`** (`components/sections/ServicesHubPage.tsx`) : Hero + fil d'Ariane → 2 groupes (« Ce qu'on construit » = `megaMenuBuild`, « Le système » = `megaMenuSystem`) rendus en simples listes de liens (pas de cartes visuelles, pas de tags) → bloc Conseil → CTA final → `ContactSection`. Ce hub n'a **pas** de section dédiée qui isole les 3 sous-services web sous un chapeau commun ; ils sont listés à plat dans `megaMenuBuild`, mélangés avec « Plateformes & applications » qui n'est pas un sous-service web au sens de DECISION 23.

---

## 2. Câblage carte homepage + méga-menu Services

**FACT — homepage (`app/[locale]/page.tsx`)** : la section `<ServiceGrid locale={locale} />` rend 6 cartes définies dans `content/fr/services.ts` (`serviceCards`), via `ServiceGrid.tsx` → `ServiceCard.tsx`. La 1ʳᵉ carte est celle qui nous intéresse :

```ts
{
  title: 'Conception et développement web',
  description: "Sites institutionnels, sites d'entreprise, boutiques en ligne : …",
  icon: 'web',
  badges: ['Site vitrine', 'Site institutionnel', 'E-commerce Shopify', 'E-commerce WooCommerce', 'Sur-mesure'],
  cta: { label: "Voir l'offre", href: '/services/sites-entreprise' },
}
```

**RISQUE / ÉCART DE CONTENU — les badges ne sont pas les sous-services attendus.** DECISION 23 demande des tags de sous-services : *Sites institutionnels & ONG, Sites d'entreprise, E-commerce*. Le code affiche à la place des badges de type de produit/techno (*Site vitrine, Site institutionnel, E-commerce Shopify, E-commerce WooCommerce, Sur-mesure*) — cohérent avec DECISION 24 (« technos = preuves, jamais titres ») mais **pas** avec la consigne « sous-services en tags » de DECISION 23. Les deux décisions se recouvrent partiellement ici, à trancher explicitement en Phase 2 : le badge doit-il nommer la sous-page (routable) ou rester un descripteur produit ?

**FACT — méga-menu (`components/layout/MegaMenu.tsx` + `site-nav.ts`)** : structure fixe en 3 blocs, indépendante de `ServiceGrid`/`services.ts` :
- Bloc « Ce qu'on construit » (`megaMenuBuild`, `site-nav.ts:28-33`) : Boutiques en ligne, Plateformes & applications, Sites d'entreprise, Sites institutionnels & ONG — 4 liens à plat, pas de regroupement visuel des 3 sous-services web.
- Bloc « Le système » (`megaMenuSystem`) : Odoo/ERP-CRM, IA & automatisation, Marketing & acquisition.
- Bloc Conseil (`megaMenuConseil`) : encart CTA vers `/services/conseil-strategie`.

**Constat :** homepage (`services.ts`) et méga-menu (`site-nav.ts`) sont **deux sources de vérité de contenu distinctes et non synchronisées**. La homepage a 6 cartes (5 expertises + Conseil, DECISION 23), le méga-menu a 8 liens à plat + Conseil (DECISION 03/06). Une future page parente « Conception et développement web » devra choisir laquelle de ces deux structures elle vient corriger, ou les faire converger.

---

## 3. Routes réelles des trois sous-services

**FACT — confirmées et fonctionnelles (build-time, contenu réel, pas de placeholder de route) :**
- Sites d'entreprise → `/services/sites-entreprise` — `app/[locale]/services/sites-entreprise/page.tsx` + `content/fr/offres/sites-entreprise.ts`
- Sites institutionnels & ONG → `/services/sites-institutionnels-ong` — `app/[locale]/services/sites-institutionnels-ong/page.tsx` + `content/fr/offres/sites-institutionnels-ong.ts`
- Boutiques en ligne → `/services/boutiques-en-ligne` — `app/[locale]/services/boutiques-en-ligne/page.tsx` + `content/fr/offres/boutiques-en-ligne.ts`

Ces trois routes sont présentes dans `app/sitemap.ts:20-23` (priorité 0.7, `monthly`) et dans le commentaire d'audit de liens en tête de `site-nav.ts` (« toutes les routes de navigation existent »).

**ABSENT/À CONFIRMER :** aucune route ne les regroupe (`/services/conception-et-developpement-web` ou équivalent). Si la Phase 2 crée cette page parente, elle devra décider : (a) une vraie page intermédiaire avec son propre contenu + liens vers les 3 offres, ou (b) une ancre/section sur le hub `/services` existant, ou (c) une simple carte homepage enrichie sans route dédiée (statu quo actuel, mais alors le nom « page parente » est trompeur).

---

## 4. Composants partagés disponibles

**RÉUTILISABLE — archétype de page d'offre, déjà utilisé par les 3 sous-services et les 4 autres offres.** `components/sections/offer/OfferPage.tsx` assemble, à partir d'un objet `OfferContent` (`content/offres.ts`), une séquence de sections **toutes optionnelles sauf le tronc commun** :
- Tronc commun toujours rendu : `OfferHero`, `PainList`, `DeliverableGrid`, `OfferProcess`, `FaqAccordion`, `FinalCta`, `ContactSection`.
- Sections conditionnelles (rendues seulement si la clé existe dans le contenu) : `EditorialWedge`, `WhyGrid`, `FeaturedCase`, `CaseTeaserCarousel` (cas liés), `BenefitRows`, `PricingBlock`, `SystemBridge`.

C'est **directement réutilisable** pour concevoir l'architecture éditoriale d'une éventuelle page parente, ou pour ajuster les 3 pages existantes sans tout reconstruire.

**RÉUTILISABLE — inventaire par fonction :**

| Besoin | Composant(s) | Fichier |
|---|---|---|
| Hero (page d'offre) | `OfferHero` | `components/sections/offer/OfferHero.tsx` |
| Hero (accueil) | `Hero` | `components/sections/Hero.tsx` |
| Hero (catalogue générique) | `CatalogHero` | `components/shared/CatalogHero.tsx` |
| Cartes service | `ServiceCard` / `ServiceGrid` | `components/sections/ServiceCard.tsx` / `ServiceGrid.tsx` |
| Cartes projet | `ProjectCard` | `components/sections/ProjectCard.tsx` |
| Portfolio / réalisations | `RealisationsGrid` (filtrable), `RealisationsPage` | `components/sections/RealisationsGrid.tsx`, `RealisationsPage.tsx` |
| Slider réalisations (hors hub) | `ProjectSlider` (accueil), `CaseTeaserCarousel` (pages d'offre) | `components/sections/ProjectSlider.tsx`, `CaseTeaserCarousel.tsx` |
| Roadmap / process | `OfferProcess`, `SystemRoad`, `Method` | `components/sections/offer/OfferProcess.tsx`, `SystemRoad.tsx`, `Method.tsx` |
| FAQ | `FaqAccordion` | `components/sections/FaqAccordion.tsx` |
| CTA | `Button`, `CtaBand`, `FinalCta` | `components/ui/Button.tsx`, `components/ui/CtaBand.tsx`, `components/sections/offer/FinalCta.tsx` |
| Formulaire contact | `ContactForm` + `ContactSection` | `components/sections/ContactForm.tsx`, `ContactSection.tsx` |
| Formulaire téléchargement ressource | `DownloadForm` | `components/shared/DownloadForm.tsx` |
| Breadcrumb | `Breadcrumb` | `components/shared/Breadcrumb.tsx` (existe, mais `ServicesHubPage` recode son propre fil d'Ariane inline plutôt que de le réutiliser — incohérence mineure) |

**CONTRAINTE :** DECISION 04 interdit toute page-template générique — chaque page a une intention unique, mais un design-system unique de composants. Une page parente « Conception et développement web » devra donc composer sa propre hiérarchie à partir de ces briques existantes, pas cloner `OfferPage` tel quel ni introduire un second système de composants.

---

## 5. Tokens, typographie, breakpoints, conventions CSS, thème

**FACT — tokens centralisés dans `styles/tokens.css`**, importés par `styles/globals.css`, eux-mêmes importés une seule fois dans `app/layout.tsx`.
- Couleurs de marque fixes entre thèmes : `--orange` (accent CTA), `--petrol`/`--petrol-nuit` (surfaces de marque sombres).
- Couleurs de thème redéfinies dans `:root[data-theme='dark']` (lignes 137-154) : `--bg`, `--ink`, `--card`, `--header-bg`, `--logo-filter`.
- Typo : `--font-serif` (Newsreader, titres) / `--font-sans` (Hanken Grotesk, corps), injectées via `next/font/google` dans `app/layout.tsx`. Échelle `--text-h1`→`--text-caption` + `--text-section` (taille unique paragraphes/sous-titres, ajoutée « Vague 4 »).
- Espacement en base 4px (`--space-xs` → `--space-5xl`).
- Radius : **angles vifs volontaires** — seul `--radius-round` (cercles) est autorisé comme courbe, signature de marque explicite (commentaire ligne 110-112). Toute nouvelle page doit respecter cette contrainte (pas de `border-radius` intermédiaire).
- Motion : durées/easings nommés (`--dur-instant` → `--dur-reveal`, `--ease-*`).
- Z-index nommés (`--z-header`, `--z-drawer`, etc.).
- Conteneur : classe utilitaire `.cw-sec` (max-width `--container-max` = 1280px) et `.cw-prose` (paragraphes justifiés, césure FR activée, taille unique).

**FACT — breakpoints** : pas de variable CSS dédiée aux breakpoints dans `tokens.css` (aucune `--bp-*`) ; les media queries sont écrites en dur par composant (`*.module.css`). Le journal de décisions (P10, ligne 201) note les breakpoints de référence **proposés** `<640 / 640–1024 / >1024`, « à confirmer par Design en P18 » — **à vérifier si cette confirmation existe** avant de les considérer figés.

**FACT — thème clair/sombre** : géré par attribut `data-theme="dark"` sur `<html>`, **pas** de `prefers-color-scheme` (choix assumé, fidélité mockup). Trois pièces coordonnées :
- `components/layout/theme-script.ts` : script anti-FOUC injecté en `<head>` via `dangerouslySetInnerHTML`, lit `localStorage['cw_theme']` avant hydratation.
- `components/layout/ThemeToggle.tsx` : bouton bascule, persiste dans `localStorage`.
- `styles/tokens.css` : valeurs redéfinies sous `:root[data-theme='dark']`.

**CONTRAINTE** pour toute nouvelle page/section : consommer exclusivement les tokens existants (pas de couleur en dur), respecter la règle « angles vifs », et tester les deux thèmes — aucun mécanisme de bascule alternatif à créer.

---

## 6. Slider des réalisations — fonctionnement réel et contraintes de réemploi

**FACT — il existe deux mécanismes de « slider » distincts, pas un seul :**

1. **`ProjectSlider`** (`components/sections/ProjectSlider.tsx`), utilisé sur la homepage uniquement (section « cas phares », id `#cas`). Client Component (`'use client'`). Comportement :
   - Desktop ≥ 1024px : les 3 cartes sont **toutes visibles en grille**, pas de défilement, pas de flèches (cf. commentaire ligne 24-26).
   - Tablette/mobile : rail en `scroll-snap` natif (`overflow-x`), pas de librairie tierce.
   - Navigation par **bande basse** (track + thumb) qui reflète la position de scroll et se drague au pointeur (`pointerdown`/`pointermove`/`pointerup` natifs, `setPointerCapture`).
   - Navigation clavier : flèches gauche/droite sur la zone `role="region"` (`tabIndex={0}`).
   - Contenu figé : `casPharesCards` dans `content/fr/casPhares.ts` (3 cartes fixes : ATTA Africa, SCOD VTC, Maison Peinture Sénégal).

2. **`CaseTeaserCarousel`** (`components/sections/CaseTeaserCarousel.tsx`), utilisé dans `OfferPage` pour les « cas liés » de chaque page d'offre (ex. sites-entreprise → ADA Voyages, DDS Medical, Tamou Fishing). À lire séparément si réemployé — mécanique non auditée en détail ici mais confirmée présente et branchée via `pickCaseTeasers()`.

**CONTRAINTES de réemploi identifiées :**
- `ProjectSlider` est **couplé à son contenu** (`casPharesCards`, 3 éléments fixes) et à un `id="cas"` en dur dans le DOM — un réemploi sur une page parente nécessiterait soit un paramétrage (props items/anchor), soit un nouveau composant dérivé, pas un import brut à contenu différent sans modification.
- Aucune librairie de slider externe (Swiper, Embla, etc.) : tout est fait main (scroll natif + pointer events). Toute extension doit rester dans ce paradigme pour la cohérence technique, ou une décision explicite doit acter l'introduction d'une dépendance.
- Accessibilité déjà travaillée (`role="region"`, `aria-roledescription="carrousel"`, navigation clavier) : à préserver dans toute variante.
- Les CTA « Voir le projet » de chaque carte sont **actuellement non cliquables** (`cta.todo: true` dans `casPharesCards`, cf. §7) car `/realisations/[slug]` n'existe pas.

---

## 7. Contenus et visuels réels déjà disponibles pour les projets web

**FACT — visuels réels présents dans `public/assets/real/`** (12 fichiers) : `atta-africa.png`, `scod-vtc.jpg`, `ada-voyages.jpg`, `dds-medical.jpg`, `link-shop.jpg`, `luxury-bijouterie.jpg`, `marjan-bijouterie.jpg`, `sunu-thiossane.jpg`, `tamou-fishing.jpg`, `was-africa.jpg`, `fahamu-africa.jpg`, `Destination revées.png` (nom de fichier avec espace/accent — à vérifier si volontaire ou fichier orphelin/mal nommé).

**FACT — images hero génériques par famille d'offre** dans `public/assets/` (racine) : `svc-entreprise.jpg`, `svc-ong.jpg`, `svc-boutique.jpg`, `svc-app.jpg`, `hero-bg.jpg` — toutes référencées et existantes (vérifié : chaque `image:` de `content/fr/offres/*.ts` pointe vers un fichier réel).

**ABSENT/À CONFIRMER — visuels manquants documentés dans le code lui-même** (`content/fr/casPhares.ts:9-10`, `imageMissing`) : ATTA Africa et Maison Peinture Sénégal n'ont **pas** de capture réelle (`imageMissing` déclenche un état « visuel à fournir » côté UI, jamais de mockup de substitution). Seul SCOD VTC a une image réelle dans ce jeu de 3 cas phares.

**ABSENT — pages de détail par réalisation.** `/realisations/[slug]` n'existe pas (route dynamique absente de `app/[locale]/realisations/`). Toutes les CTA « Voir le projet » sont marquées `todo: true` dans `casPharesCards` et rendues non cliquables. Le commentaire de `RealisationsGrid.tsx:11-12` attribue encore cela à « WordPress, M3 » — **référence obsolète** au pivot CMS : la source de vérité V3 (§5.2) attribue désormais ce contenu à Sanity (`caseStudy` / `portfolioItem` ou `realisation`, nom canonique à trancher), pas à WordPress.

**FACT — contenu éditorial des 3 sous-services : rédigé et présent**, pas de placeholder Lorem Ipsum. Chaque fichier `content/fr/offres/{sites-entreprise,sites-institutionnels-ong,boutiques-en-ligne}.ts` a hero, pain points, livrables, process, FAQ. Résultats chiffrés des cas liés restent en `EVIDENCE REQUIRED` (placeholders explicites `[RÉSULTAT — à confirmer]`, jamais un chiffre inventé, conforme DECISION 10/journal).

---

## 8. Contact, bilingue FR/EN, métadonnées, sitemap, redirections

**FACT — formulaire de contact fonctionnel et branché**, plus avancé que ne le laisse penser le journal de décisions. `app/api/contact/route.ts` : route POST Next.js, double canal Resend (e-mail transactionnel) + HubSpot (CRM), dégradation propre si une clé d'env manque, honeypot anti-spam côté client (`ContactForm.tsx`). **Écart doc/code à signaler** : le journal (`decision-log-COMPLET.md`, D1/D2, lignes 346-347) liste encore « destination des leads » et « service d'e-mail transactionnel » comme *décisions en attente*, alors que le code a déjà choisi et implémenté Resend + HubSpot. Soit la décision a été prise sans mise à jour du journal, soit c'est une implémentation d'anticipation à valider PO — à clarifier avant Phase 2.

**FACT — coordonnées de contact codées en dur** dans `components/layout/site-nav.ts:86-94` (`contactInfo` : ville, 2 téléphones, WhatsApp, email `contact@connect-web.tech`) avec commentaire explicite « à confirmer définitives par le PO ». Les liens sociaux (`socialLinks`) sont **volontairement vides** (`[]`) tant que le PO n'a pas fourni de vraies URLs — pas de lien mort affiché, choix documenté.

**FACT — bilingue FR/EN : structurellement amorcé, fonctionnellement absent.**
- Le routing par segment `[locale]` existe (`lib/i18n/config.ts` : `locales = ['fr', 'en']`), et `middleware.ts` réécrit toute URL non préfixée vers `/fr/...` en interne (FR servi à la racine visible, conforme DECISION 09).
- Mais **tout le contenu FR est actuellement hardcodé sans pendant EN réel** : le commentaire en tête de `app/[locale]/page.tsx` le dit explicitement : *« Accueil — contenu HARDCODÉ, FR uniquement »*.
- `LangSwitcher.tsx` a son bouton EN **désactivé** (`disabled={!active}`), avec TODO explicite `data-todo-m4="i18n-routing"`.
- `<html lang="fr">` est **codé en dur** dans `app/layout.tsx:62`, avec commentaire `// TODO(M4) : lang dynamique selon la locale de l'URL` — donc même si un visiteur accède à `/en/...`, l'attribut `lang` HTML reste `fr`.
- Aucun `hreflang` ni `alternates.languages` dans les métadonnées (`app/layout.tsx` ne déclare que des `alternates.types` pour les flux RSS, pas de langues).
- **Conclusion :** le bilingue est un jalon (Milestone M4) non livré, pas un bug ponctuel. Toute page parente conçue en Phase 2 ne doit pas supposer qu'une bascule EN fonctionnelle existe à réutiliser.

**FACT — métadonnées** : `app/layout.tsx` définit `metadataBase`, `title` (template `%s · Connect Web`), description globale, `alternates.types` (RSS). Chaque page d'offre exporte son propre `metadata` (title/description) mais **aucune ne définit `alternates.canonical`** explicitement (repose sur `metadataBase` implicite de Next). JSON-LD : `organizationJsonLd` + `websiteJsonLd` injectés globalement (`lib/seo/schema.ts`, `components/shared/JsonLd.tsx`) ; `sameAs` de l'organisation est un tableau **vide** avec `TODO(PO)` pour l'URL LinkedIn.

**FACT — sitemap** (`app/sitemap.ts`) : liste statique de 16 chemins FR (dont les 3 sous-services et le hub `/services`), priorités/fréquences codées en dur, + entrées dynamiques Sanity (`blog`, `ressources`) avec `try/catch` de repli si Sanity est indisponible au build. **Explicitement limité au FR** (commentaire lignes 6-8) tant que l'EN n'est pas un contenu localisé distinct — cohérent avec l'état du bilingue ci-dessus, mais signifie qu'une page parente EN, si créée en Phase 2 sans contenu EN réel, ne devra pas être ajoutée au sitemap avant d'avoir du contenu.

**FACT — redirections** : une seule redirection 301 active, dans `middleware.ts:15-17` : `/nous-joindre` → `/contact`. Le commentaire indique « à compléter au fil du recensement des anciennes URLs » — pas de plan de redirection exhaustif implémenté malgré la mention P23/M7 dans les docs stratégiques.

**FACT — `robots.ts`** : bloque l'indexation hors production (`VERCEL_ENV`/`NODE_ENV` + détection localhost), autorise tout en prod sauf `/studio` et `/api/`.

---

## 9. Dépendances et risques techniques avant refonte

### 9.1 Code WordPress mort, contradictoire avec DECISION 25

**RISQUE — confirmé, non nettoyé.** Malgré DECISION 25 (Sanity remplace WordPress, « aucun WordPress n'a été installé en production ») et la V3 (§3, liste explicite « hors stack, à retirer ») :
- `lib/wordpress/` existe toujours en entier : `client.ts`, `types.ts`, `queries/{_fragments,caseStudies,portfolio,resources,teamMembers}.ts`.
- `wordpress/mu-plugins/connect-web-content-model/` existe toujours (PHP : `acf-field-groups.php`, `graphql.php`, `post-types.php`, `taxonomies.php`) + `wordpress/README.md`.
- `package.json` conserve un script `test:wordpress`.
- `next.config.mjs` le confirme lui-même en commentaire : *« le code `lib/wordpress/` reste présent mais dormant »*.

Ce n'est **pas bloquant pour du code mort** (rien ne l'importe visiblement dans les pages actives auditées), mais c'est un risque de confusion directe pour une Phase 2 : un futur agent (ou Claude Opus) pourrait lire `lib/wordpress/queries/portfolio.ts` en pensant qu'il s'agit de la couche de données active pour les réalisations, alors que la vraie couche est `sanity/lib/queries.ts` (utilisée par `app/sitemap.ts`). **À confirmer avant Phase 2 :** que rien dans les 3 pages sous-services ou une future page parente ne référence `lib/wordpress/*`.

### 9.2 Documentation en dérive par rapport au code et aux décisions

- `RealisationsGrid.tsx:11-12` attribue encore les fiches de cas à « WordPress, M3 » — obsolète face à DECISION 25/V3 (Sanity).
- Le journal de décisions liste « destination des leads » et « service d'email » comme non tranchés alors que le code les a déjà implémentés (Resend + HubSpot) — cf. §8.
- Deux documents concurrents « source de vérité » coexistent à la racine : `CONNECT-WEB-SOURCE-DE-VERITE-V3.md` (autorité déclarée n°1) et `docs/connect-web/connect-web-decision-log-COMPLET.md` (autorité n°2, mais seulement pour les décisions compatibles avec la V3). Un troisième fichier racine, `A-COMPLETER.md`, référence aussi les services — à lire avant Phase 2 pour vérifier qu'il ne porte pas une architecture concurrente non tranchée.

### 9.3 Deux sources de données de navigation non synchronisées

Cf. §2 : `content/fr/services.ts` (cartes homepage) et `components/layout/site-nav.ts` (méga-menu + footer) encodent chacun leur propre liste de services/libellés/CTA, sans import croisé garantissant la cohérence. `ServicesHubPage.tsx` importe bien `megaMenuBuild`/`megaMenuSystem` de `site-nav.ts` (donc le hub `/services` et le méga-menu sont synchronisés), mais **la homepage (`ServiceGrid`) n'est pas synchronisée avec ces deux-là** : elle a ses propres libellés/descriptions dans `services.ts`. Toute modification de la hiérarchie de service (ex. introduction d'une vraie page parente) devra toucher potentiellement 3 fichiers de contenu distincts (`services.ts`, `site-nav.ts`, `servicesHub.ts`) pour rester cohérente.

### 9.4 Contenu figé dans le code, pas dans un CMS

Toutes les pages d'offre (dont les 3 sous-services) sont du contenu **TypeScript hardcodé** (`content/fr/offres/*.ts`), pas des documents Sanity. La V3 (§5.4) l'autorise explicitement pour le « copy marketing stable ». **Contrainte pour Phase 2 :** si une page parente doit être partiellement éditable sans déploiement, il faudra une décision explicite de modélisation Sanity (`service` document type, mentionné comme optionnel en V3 §4, « seulement si les services doivent être éditables sans déploiement ») — ce n'est pas acquis aujourd'hui.

### 9.5 Bilingue non fonctionnel (détail en §8)

Risque de régression si une page parente est conçue en supposant un `LangSwitcher` opérationnel, un `hreflang` déjà en place, ou un `<html lang>` dynamique : aucun des trois n'existe. Le construire pour une seule page nouvelle créerait une incohérence avec le reste du site (Milestone M4 non livré globalement).

### 9.6 Slider et cas phares couplés à un contenu fixe à 3 éléments

Cf. §6 : réutiliser `ProjectSlider` sur une nouvelle page parente sans le rendre paramétrable dupliquera du code ou cassera la section actuelle de la homepage si on le modifie en place.

### 9.7 Pages de détail « réalisation » inexistantes

Cf. §7 : toute page parente qui voudrait renvoyer vers des fiches de cas détaillées par sous-service (ex. « voir tous nos sites d'entreprise livrés ») butera sur l'absence de `/realisations/[slug]`. Seul `/realisations` (hub, grille filtrable côté client par `group`) existe.

---

## 10. Synthèse compacte pour Claude Opus (consolidation architecture éditoriale — Phase 2)

- **Il n'existe aucune page parente « Conception et développement web » dans le code.** Les 3 sous-services (`/services/sites-entreprise`, `/services/sites-institutionnels-ong`, `/services/boutiques-en-ligne`) sont des routes indépendantes, chacune un `OfferPage` complet et fonctionnel. DECISION 23 (carte parente + tags sous-services) n'est appliquée qu'à moitié sur la homepage : la carte existe visuellement, mais son CTA redirige vers `/services/sites-entreprise` faute de page cible, et ses badges sont des types de produit, pas les 3 noms de sous-service attendus.
- **Trois sources de contenu de navigation à réconcilier avant toute décision d'architecture** : `content/fr/services.ts` (homepage, 6 cartes), `components/layout/site-nav.ts` (méga-menu + footer, 8 liens à plat + Conseil), `content/fr/servicesHub.ts` (hub `/services`, regroupé en 2 blocs). Une page parente doit décider laquelle de ces structures elle unifie, sinon elle ajoute une 4ᵉ source.
- **Design system directement exploitable** : archétype `OfferPage` (sections conditionnelles), tokens CSS complets (couleurs marque/thème, typo, espacement, angles vifs obligatoires), thème clair/sombre déjà géré par `data-theme` + `localStorage`. Pas besoin de nouveaux fondamentaux visuels.
- **Portfolio/preuve limité** : 3 cas phares (ATTA, SCOD, Maison Peinture) dont 1 seul a une vraie capture (SCOD) ; 11 réalisations « grand public » avec visuel réel dans `/realisations` (grille filtrable, non cliquable — pas de fiches détaillées). Toute promesse de preuve visuelle par sous-service devra composer avec ce déficit d'assets réels, pas inventer de mockup (règle produit non négociable, DECISION 02/04 et registre d'intégrité).
- **Slider réutilisable mais couplé** : `ProjectSlider` (accueil) fait déjà tout ce qu'on veut visuellement (grille desktop, rail mobile, drag, clavier, accessible) mais est câblé en dur sur 3 cas fixes ; `CaseTeaserCarousel` est la variante déjà utilisée dans les pages d'offre pour des cas liés paramétrés — c'est probablement le bon point de départ technique pour une section « réalisations » sur la page parente, pas `ProjectSlider`.
- **Contact, SEO technique de base et CMS réel opérationnels** ; **bilingue FR/EN et pages de détail réalisation non livrés** — ne pas concevoir la page parente en supposant l'un ou l'autre disponible.
- **Dette à signaler, non bloquante mais à trancher** : code WordPress mort (`lib/wordpress/`, `wordpress/`) contredisant DECISION 25 ; documentation par endroits en retard sur le code (attribution WordPress résiduelle sur les fiches de cas, décisions leads/email déjà implémentées mais listées « en attente »).
- **Décision structurante manquante pour la Phase 2** : la page parente doit-elle être (a) une vraie route intermédiaire avec son propre `OfferContent` (nouvelle intention de page, conforme DECISION 04), (b) une section enrichie du hub `/services` existant, ou (c) rester une carte homepage sans route dédiée ? Le dépôt actuel n'a tranché aucune des trois — c'est le point d'entrée logique de la consolidation d'architecture éditoriale.
