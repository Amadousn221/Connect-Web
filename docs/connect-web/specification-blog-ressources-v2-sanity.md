# CONNECT WEB — SPÉCIFICATION BLOG + RESSOURCES (v2 — Sanity)

**Statut :** livrable Étape 1 réécrite après DÉCISION 25 (remplacement WordPress + ACF par Sanity comme Headless CMS)
**Base :** décisions Phases 01-24 + vague 4 corrections homepage (déployée) + DÉCISION 25 (Sanity)
**Convention :** FACT · RECOMMENDATION · DECISION · PLACEHOLDER

---

## 0. NOTE PRÉLIMINAIRE

**Ce que ce document décide (à valider) :**
- La séparation Blog vs Ressources (deux document types Sanity distincts)
- Le modèle de contenu de chacun (tous les fields exhaustifs)
- Les "taxonomies" en Sanity (document types dédiés + references)
- Les filtres visibles sur les pages catalogue
- L'arborescence d'URLs et les routes Next.js
- L'architecture visuelle des 4 templates
- La sidebar variable selon contexte
- La logique articles/ressources similaires
- L'usage du slider (repris de la homepage)
- La stratégie capture email (fichiers à télécharger uniquement, pas les contenus consultables en ligne)
- L'auteur affiché : Amadou Diallo · Product Owner & Fondateur, Connect Web

**Ce que ce document ne fige pas (autres étapes) :**
- Le code des schemas Sanity (Étape 2)
- Le code Next.js des templates (Étape 3)
- Les 5 sujets d'articles (Étape 4)
- La rédaction (Étape 5)

**Décision structurante confirmée :** Blog et Ressources sont **deux document types Sanity distincts** (`blogPost` et `resource`), avec leurs propres schemas, taxonomies, templates, URLs. Pas un document unique avec un champ "type".

---

## 1. DIFFÉRENCE FONDAMENTALE BLOG vs RESSOURCES

| Dimension | BLOG | RESSOURCES |
|---|---|---|
| Intention lecteur | S'informer, comprendre, se tenir au courant | Apprendre à faire, se former, avoir un livrable utilisable |
| Format type | Article éditorial (1500-2500 mots) | Guide PDF, checklist, template, formation, livre blanc, glossaire |
| Consommation | Lecture en ligne, scroll continu | Téléchargement OU consultation en ligne selon type |
| Cycle de vie | Publication régulière, évergreen ou actu | Long cycle, moins fréquent mais dense |
| Business goal | SEO, expertise perçue, top-of-funnel | Capture de leads (téléchargements) OU expertise éducative (contenus consultables), middle-of-funnel |
| CTA type | "Contacter", "voir un cas", "lire un autre article" | "Télécharger" (fichier) ou "Consulter" (contenu en ligne) |
| Format URL | `/blog/[slug]` | `/ressources/[slug]` |
| Métrique clé | Temps de lecture, scroll depth, articles liés cliqués | Téléchargements, taux de conversion email→client |

---

## 2. MODÈLE DE CONTENU — BLOG (document type `blogPost`)

### 2.1 Fields Sanity du document `blogPost`

| Field name | Type Sanity | Obligatoire | Description |
|---|---|---|---|
| `title` | `string` | Oui | Titre de l'article, max 70 caractères |
| `slug` | `slug` (source: title) | Oui | Auto-généré, éditable |
| `publishedAt` | `datetime` | Oui | Date de publication (défaut : now) |
| `author` | `reference` → `author` | Oui | Référence vers le document Auteur (Amadou Diallo) |
| `coverImage` | `image` avec hotspot | Oui | Image mise en avant, ratio 16:10, alt text obligatoire |
| `excerpt` | `text` (rows: 3) | Oui | 140-200 caractères, affiché sur cartes catalogue et meta description par défaut |
| `readingTime` | `number` | Oui | Temps de lecture estimé en minutes (auto-calculable côté front, mais stocké) |
| `lede` | `text` (rows: 4) | Non | Chapô/accroche, 1-2 phrases affichées entre titre et corps (typo sérif plus grande) |
| `keyPoints` | `array` of `string` (max 5) | Non | "En bref" — 3-5 points clés pour lecteurs pressés, affichés en encadré haut d'article |
| `body` | `array` of blocks (Portable Text) | Oui | Contenu principal — blocs paragraphe, image, citation, code, liste, séparateur, tableau, embed |
| `category` | `reference` → `blogCategory` | Oui | UNE catégorie principale |
| `tags` | `array` of `reference` → `blogTag` | Non | 0 à N tags (création libre) |
| `mainCta` | `object` (voir §2.2) | Non | CTA principal en fin d'article |
| `relatedResource` | `array` of `reference` → `resource` (max 2) | Non | Ressources téléchargeables mentionnées |
| `relatedCaseStudy` | `reference` → `realisation` | Non | Cas d'étude référencé (si CPT réalisations existe déjà) |
| `manualRelatedPosts` | `array` of `reference` → `blogPost` (max 3) | Non | Articles similaires manuels (override algorithme §7) |
| `seo` | `object` (voir §2.3) | Non | Overrides SEO |
| `viewCount` | `number` (hidden) | Non | Compteur de vues, incrémenté côté frontend via API interne |

### 2.2 Object `mainCta` (utilisé par `blogPost.mainCta`)

```
{
  ctaType: string (options: "contact" | "resource" | "case_study" | "another_post"),
  buttonText: string,
  targetUrl: url
}
```

### 2.3 Object `seoFields` (réutilisable — `blogPost.seo` et `resource.seo`)

```
{
  seoTitle: string (max 60 chars, override du title si rempli),
  metaDescription: string (max 155 chars, override de l'excerpt si rempli),
  canonicalUrl: url (rare, si contenu existe ailleurs),
  ogImage: image (si différente de coverImage)
}
```

---

## 3. MODÈLE DE CONTENU — RESSOURCES (document type `resource`)

### 3.1 Fields Sanity du document `resource`

| Field name | Type Sanity | Obligatoire | Description |
|---|---|---|---|
| `title` | `string` | Oui | Titre de la ressource |
| `slug` | `slug` (source: title) | Oui | Auto/éditable |
| `publishedAt` | `datetime` | Oui | Date de publication |
| `author` | `reference` → `author` | Oui | Auteur |
| `coverImage` | `image` avec hotspot | Oui | Format couverture (4:3), style "couverture de livre" |
| `excerpt` | `text` (rows: 3) | Oui | Résume ce que le lecteur va obtenir |
| `resourceType` | `string` avec `options.list` | Oui | Valeurs : "guide_pdf" \| "livre_blanc" \| "checklist" \| "template" \| "formation_video" \| "webinaire" \| "glossaire" \| "etude" |
| `deliveryMode` | `string` avec `options.list` (computed) | Oui | "download" (fichier à télécharger) \| "online" (consultable en ligne) — voir §3.3 |
| `downloadFile` | `file` | Conditionnel | Obligatoire si `deliveryMode === "download"`. Types : PDF, ZIP, XLSX principalement |
| `onlineUrl` | `url` | Conditionnel | Obligatoire si `deliveryMode === "online"`. Peut pointer vers page interne, vidéo YouTube non listée, système de formation |
| `pagesOrDuration` | `string` | Non | Ex. "42 pages", "2h30", "12 modules" |
| `prerequisites` | `text` | Non | Ce que le lecteur doit connaître avant |
| `program` | `array` of `object` (voir §3.2) | Oui | "Ce que vous allez apprendre" — 3-6 points |
| `requiresEmail` | `boolean` (computed) | Auto | true si `deliveryMode === "download"`, false sinon (§3.3) |
| `confirmationMessage` | `text` | Conditionnel | Obligatoire si `requiresEmail === true`. Ex. "Merci. Vous recevez le guide par email dans quelques instants." |
| `body` | `array` of blocks (Portable Text) | Oui | Description longue de la page ressource |
| `secondaryCta` | `object` (voir §2.2 `mainCta`) | Non | CTA secondaire (ex. "Parler d'un projet lié") |
| `category` | `reference` → `resourceCategory` | Oui | Thématique |
| `relatedPosts` | `array` of `reference` → `blogPost` (max 3) | Non | Articles de blog associés |
| `relatedResources` | `array` of `reference` → `resource` (max 3) | Non | Ressources similaires manuelles |
| `seo` | `object` seoFields | Non | Overrides SEO |
| `downloadCount` | `number` (hidden) | Non | Compteur de téléchargements/consultations |

### 3.2 Object `programItem` (utilisé par `resource.program`)

```
{
  text: string (une ligne, ex. "Comprendre les frais Mobile Money par opérateur")
}
```

### 3.3 Règle de capture email (validée PO)

**Règle :** la capture email n'est demandée que pour les ressources dont le format est un **fichier à télécharger**.

Implémentation :
- Si `deliveryMode === "download"` → le champ `requiresEmail` est automatiquement `true`. Formulaire de capture obligatoire avant téléchargement.
- Si `deliveryMode === "online"` → `requiresEmail` = `false`. Accès direct sans formulaire.

Types de ressources et mode par défaut :
- `guide_pdf`, `livre_blanc`, `checklist`, `template`, `etude` → `deliveryMode: "download"` (email requis)
- `formation_video`, `webinaire`, `glossaire` → `deliveryMode: "online"` (accès direct)

Cette règle est verrouillée en schema — pas de choix manuel par le PO au moment de la création, ça se déduit du type.

---

## 4. TAXONOMIES ET FILTRES

En Sanity, les taxonomies sont des **document types dédiés** avec des `reference` fields depuis les documents Blog/Resource. Ce n'est pas plus lourd que les taxonomies WordPress, c'est même plus flexible (chaque catégorie peut avoir sa propre description, couleur, image).

### 4.1 Document type `blogCategory`

Fields :
- `title` (string, obligatoire) — nom affiché
- `slug` (slug, obligatoire)
- `description` (text, optionnel) — pour la page de catégorie éventuelle
- `orderRank` (number, optionnel) — pour l'ordre d'affichage dans les filtres

Valeurs par défaut à créer :
- Conception et développement web
- E-commerce
- ERP / CRM / systèmes métier
- IA et automatisation
- Marketing et acquisition
- Conseil et stratégie
- Retour d'expérience

### 4.2 Document type `blogTag`

Fields :
- `title` (string, obligatoire)
- `slug` (slug, obligatoire)

Création libre par le PO. Exemples typiques : "Shopify", "Mobile Money", "SEO", "Sénégal", "Cross-border", "Odoo", "WordPress", "Next.js", "PWA", "Automatisation", "Klaviyo".

### 4.3 Document type `resourceCategory`

Fields identiques à `blogCategory`.

Valeurs par défaut :
- Conception et développement web
- E-commerce
- ERP / CRM / systèmes métier
- IA et automatisation
- Marketing et acquisition
- Conseil et stratégie

*Note : pas de "Retour d'expérience" pour les ressources, uniquement Blog.*

### 4.4 Filtres visibles sur les pages catalogue

**Page catalogue Blog** — 3 filtres :
1. **Catégorie** (dropdown ou pills) — les 7 catégories + "Toutes"
2. **Tag** (pills, top 12 tags les plus utilisés + "voir tous" qui déplie)
3. **Tri** (dropdown) — "Plus récents" (défaut) / "Plus populaires" (basé sur `viewCount`) / "Plus longs" (basé sur `readingTime`)

**Page catalogue Ressources** — 3 filtres :
1. **Thématique** (dropdown ou pills) — les 6 thématiques + "Toutes"
2. **Type de ressource** (pills) — les 8 types + "Tous"
3. **Tri** (dropdown) — "Plus récentes" (défaut) / "Plus téléchargées" (basé sur `downloadCount`)

**Comportement (identique aux deux) :**
- Filtres combinables (logique ET)
- URL query params : `/blog?categorie=e-commerce&tag=shopify&tri=populaires`
- Compteur de résultats visible
- Bouton "réinitialiser les filtres" si au moins un actif
- Pagination : 12 résultats par page (Blog), 9 par page (Ressources)

---

## 5. ARBORESCENCE D'URLS ET ROUTES NEXT.JS

### 5.1 URLs publiques

```
/blog                          → catalogue Blog (page 1)
/blog?page=2                   → catalogue Blog page 2
/blog?categorie=e-commerce     → catalogue filtré par catégorie
/blog?tag=shopify              → catalogue filtré par tag
/blog/[slug]                   → article individuel

/ressources                    → catalogue Ressources
/ressources?thematique=erp     → catalogue filtré
/ressources/[slug]             → page ressource individuelle

/studio                        → Sanity Studio embedded (accès protégé par auth Sanity)
```

**Pas d'alias `/blog/categorie/[slug]` ni `/blog/tag/[slug]`** — query params suffisent. Simplifie SEO (pas de contenu dupliqué), simplifie routing.

### 5.2 Structure des fichiers Next.js (App Router)

```
app/
├── blog/
│   ├── page.tsx                    → catalogue Blog (server component + GROQ query)
│   ├── loading.tsx                 → skeleton
│   └── [slug]/
│       ├── page.tsx                → article individuel
│       └── loading.tsx
├── ressources/
│   ├── page.tsx                    → catalogue Ressources
│   ├── loading.tsx
│   └── [slug]/
│       ├── page.tsx                → ressource individuelle
│       └── loading.tsx
├── studio/
│   └── [[...tool]]/page.tsx        → Sanity Studio embedded
└── api/
    ├── revalidate/route.ts         → webhook Sanity → revalidation Next.js
    ├── download-resource/route.ts  → endpoint capture email + génération lien download
    └── increment-view/route.ts     → increment viewCount d'un article
```

### 5.3 Rendu et cache

- **ISR (Incremental Static Regeneration)** — chaque page est pré-rendue au build, revalidée automatiquement toutes les 60 secondes par défaut.
- **Revalidation instantanée via webhook Sanity** — quand un article est publié dans Sanity Studio, un webhook déclenche `revalidatePath('/blog')` et `revalidatePath('/blog/[slug]')` immédiatement.
- **generateStaticParams** au build pour pré-rendre tous les slugs existants.
- **Draft mode** activé pour permettre la preview des brouillons Sanity avant publication.

---

## 6. ARCHITECTURE DES 4 TEMPLATES

*Note : cette section est identique à la spec v1 dans sa structure visuelle. Aucun changement lié au CMS.*

### 6.1 Template — Catalogue Blog (`/blog`)

**Zone 1 — Header** (existant)

**Zone 2 — En-tête de page**
- Eyebrow : "Blog"
- H1 : "Ce qu'on apprend, ce qu'on partage."
- Sous-titre court : "Retours d'expérience, décisions techniques, veille utile."
- Fond off-white (distinct du Header)

**Zone 3 — Barre de filtres** (sticky au scroll sur desktop)
- Filtre Catégorie · Filtre Tag · Filtre Tri · Compteur · Bouton réinitialiser

**Zone 4 — Grille d'articles + Sidebar**
Desktop : grille 2 colonnes articles + sidebar 1 colonne à droite.
Tablette : grille 2 colonnes, sidebar en bas.
Mobile : grille 1 colonne, sidebar en bas.

Composant `BlogCard` :
- Image (16:10, next/image via urlFor Sanity)
- Catégorie (label uppercase, couleur accent)
- Titre H3 (typo sérif)
- Excerpt (2-3 lignes tronquées)
- Meta : date + temps de lecture
- Hover : translateY(-2px)

**Zone 5 — Pagination** numérotée

**Zone 6 — Bandeau CTA global** avant Footer

**Zone 7 — Footer** (existant)

### 6.2 Template — Article individuel (`/blog/[slug]`)

**Zone 1 — Header**
**Zone 2 — Breadcrumb** — "Accueil > Blog > [Catégorie] > [Titre]"

**Zone 3 — En-tête article**
- Catégorie (label)
- H1 (typo sérif grande)
- Chapô (si `lede` rempli, typo sérif italic ou plus grande que body)
- Meta : auteur (photo + nom Amadou Diallo), date, temps de lecture, bouton Partager
- Image mise en avant (large, 16:10)

**Zone 4 — "En bref"** (si `keyPoints` rempli)
Encadré sobre en début de contenu, liste 3-5 points.

**Zone 5 — Corps + Sidebar**
Desktop : contenu 70% (max-width 720px) + sidebar 30% à droite (sticky).
Tablette/mobile : contenu pleine largeur, sidebar en bas.

Rendu du corps via `PortableTextRenderer` — voir §6.5.

**Zone 6 — Ressource associée** (si `relatedResource` rempli)
Encart carte : type de ressource, titre, extrait, bouton "Télécharger" ou "Voir la ressource" selon `deliveryMode`.

**Zone 7 — Cas d'étude associé** (si `relatedCaseStudy` rempli)

**Zone 8 — CTA principal** (si `mainCta` rempli) — bloc large, ton distinct

**Zone 9 — Auteur** — encart photo + nom + bio courte (récupérée du document `author`)

**Zone 10 — Articles similaires** — Titre "À lire aussi" + slider 3 articles (§7)

**Zone 11 — Bandeau CTA global**
**Zone 12 — Footer**

### 6.3 Template — Catalogue Ressources (`/ressources`)

Structure proche du catalogue Blog, adapté au format "bibliothèque".

**Zone 1 — Header**
**Zone 2 — En-tête** :
- Eyebrow : "Ressources"
- H1 : "Guides, checklists et formations pour aller plus loin."
- Sous-titre : "Certains contenus demandent votre email — pour vous envoyer directement le fichier. Le reste est en accès libre."

**Zone 3 — Barre de filtres** — Thématique · Type · Tri · Compteur

**Zone 4 — Grille + Sidebar**
Desktop : grille 3 colonnes + sidebar. Mobile : 1 colonne.

Composant `ResourceCard` :
- Image format couverture (4:3)
- Badge type en surimpression (coin sup gauche, ex. "Guide PDF")
- Titre H3
- Excerpt (2 lignes)
- `pagesOrDuration` si rempli
- Bouton "Voir la ressource" (jamais téléchargement direct depuis la carte)

**Zone 5 — Pagination**
**Zone 6 — Bandeau CTA**
**Zone 7 — Footer**

### 6.4 Template — Ressource individuelle (`/ressources/[slug]`)

**Zone 1 — Header**
**Zone 2 — Breadcrumb**

**Zone 3 — En-tête** (2 colonnes desktop)

Colonne gauche (60%) :
- Type (label)
- H1
- Excerpt (paragraphe)
- Meta : pages/durée, date, nombre de téléchargements (si > 50 pour ne pas afficher "3")

Colonne droite (40%) :
- coverImage grande, format couverture

**Zone 4 — "Au programme"** — Liste des `program` (avec icônes check)

**Zone 5 — Description longue** — Portable Text (`body`)

**Zone 6 — Prérequis** (si `prerequisites` rempli)

**Zone 7 — Bloc d'accès à la ressource**

Cœur de la page. Comportement selon `deliveryMode` :

**Cas A — deliveryMode === "download" (fichier PDF/livre blanc/etc.)** :
Formulaire de capture email obligatoire :
- Nom (obligatoire)
- Email (obligatoire)
- Organisation (optionnel)
- Case à cocher "J'accepte de recevoir occasionnellement d'autres ressources"
- Bouton "Obtenir le [type]"

Comportement au submit :
- Envoi vers endpoint `/api/download-resource` avec les données + slug ressource
- Backend enregistre le lead dans une base (à définir — voir §12 "Décisions en suspens")
- Envoi email automatique à l'utilisateur avec le fichier ou le lien signé
- Affichage du `confirmationMessage` défini dans le schema
- Incrément de `downloadCount`

**Cas B — deliveryMode === "online" (formation/glossaire/webinaire)** :
Bouton direct "Accéder à [type]" → ouvre l'`onlineUrl` (nouvelle onglet si externe, même onglet si interne).
Pas de formulaire.
Incrément `downloadCount` (rebaptisé mentalement "access count" pour ces types).

**Zone 8 — CTA secondaire** (si `secondaryCta` rempli)
**Zone 9 — Ressources similaires** — slider
**Zone 10 — Articles liés** (si `relatedPosts` rempli) — slider
**Zone 11 — Bandeau CTA**
**Zone 12 — Footer**

### 6.5 Composant `PortableTextRenderer` (nouveau — remplace le rendu Gutenberg WordPress)

Composant React qui rend le contenu Portable Text de Sanity. Serializers custom à créer pour :

- **Blocs texte** : paragraphes (justifié, line-height 1.7, taille body du design system), H2, H3, H4 (typo sérif Newsreader, hiérarchie visuelle nette)
- **Marks inline** : `strong`, `em`, `code` (monospace fond gris), `link` (couleur accent + soulignement)
- **Types custom** :
  - `image` — image full-width dans le contenu, légende optionnelle, alt obligatoire, next/image via urlFor
  - `blockquote` — citation avec bordure gauche + typo italic
  - `codeBlock` — bloc de code avec coloration syntaxique (via prism-react-renderer ou shiki)
  - `callout` — encadré coloré (info/warning/tip) — optionnel
  - `embed` — YouTube, Twitter/X embeds — optionnel V2
  - `table` — rendu HTML de tableaux simples

Serializers à écrire proprement pour éviter le "rendu par défaut moche" (risque §5 de l'audit v1).

---

## 7. LOGIQUE "ARTICLES SIMILAIRES" ET "RESSOURCES SIMILAIRES"

Système à deux niveaux : override manuel prioritaire, sinon algorithme GROQ.

### 7.1 Priorité 1 — Choix manuel
Si `manualRelatedPosts` (Blog) ou `relatedResources` (Ressource) rempli avec ≥ 1 item, afficher ces choix tels quels (max 3), ordre défini.

### 7.2 Priorité 2 — Algorithme automatique (query GROQ)

**Pour Blog :**
```groq
*[_type == "blogPost"
  && _id != $currentId
  && category._ref == $categoryId
]
| order(publishedAt desc)
[0...3]
```
Fallback si moins de 3 résultats : élargir aux articles partageant au moins 1 tag, puis aux articles les plus récents toutes catégories.

**Pour Ressources :**
```groq
*[_type == "resource"
  && _id != $currentId
  && category._ref == $categoryId
]
| order(downloadCount desc)
[0...3]
```
Fallback : les plus récentes toutes thématiques.

**Fallback ultime :** si moins de 3 résultats totaux disponibles, ne pas afficher la section (mieux vaut rien que du bruit).

---

## 8. SIDEBAR — CONTENU VARIABLE SELON LE CONTEXTE

*Identique à la spec v1.*

### 8.1 Composants communs (toujours présents)

- **Bloc "À propos"** : 2-3 lignes + lien /agence
- **CTA principal encart** : "Un projet à démarrer ?" + bouton "Parlons-en" → /#contact
- **Bloc "Suivez-nous"** : icônes réseaux actifs (à vérifier avec PO)

### 8.2 Composants variables

**Sur catalogue Blog** :
- Bloc "Articles populaires" (top 5 par `viewCount`)
- Bloc "Catégories" (liste avec count via GROQ)
- Bloc "Ressources à consulter" (top 3 récentes)

**Sur article** :
- Bloc "Table des matières" (généré côté client à partir des H2/H3 du Portable Text, sticky au scroll)
- Bloc "Ressource recommandée" (si `relatedResource` rempli)

**Sur catalogue Ressources** :
- Bloc "Ressources les plus téléchargées" (top 5 par `downloadCount`)
- Bloc "Types de ressources" (compteur par type)
- Bloc "Articles récents" (top 3 blog)

**Sur ressource** :
- Bloc "Autres ressources dans cette thématique"
- Bloc "Articles liés" (si `relatedPosts` rempli)

### 8.3 Responsive
- Desktop (≥1024px) : sidebar droite, sticky partielle
- Tablette : sidebar en bas, disposition horizontale 2-3 blocs/ligne
- Mobile : sidebar en bas, blocs empilés, CTA principal en premier

---

## 9. SLIDER (composant réutilisé de la homepage)

Réutiliser à l'identique le composant slider de la homepage (navigation par bande basse, 3 cartes visibles desktop, drag souris) pour :
- "Articles similaires" en fin d'article
- "Ressources similaires" en fin de page ressource
- "Articles liés" en fin de page ressource

Aucun nouveau composant slider à créer.

---

## 10. AUTEUR — Document type `author`

Puisque Amadou Diallo est signataire de tous les articles, on crée un document type `author` avec une seule instance pour l'instant, extensible si équipe future.

Fields :
- `name` (string, obligatoire) — "Amadou Diallo"
- `role` (string, obligatoire) — "Product Owner & Fondateur, Connect Web"
- `avatar` (image, obligatoire) — photo carrée min 400×400
- `shortBio` (text, obligatoire) — 2-3 lignes affichées sous les articles
- `longBio` (array of blocks Portable Text, optionnel) — pour une future page /agence/amadou-diallo
- `socialLinks` (object) :
  - `linkedin` (url)
  - `twitter` (url)
  - `email` (email)

**PLACEHOLDER** : bio courte à valider avec le PO au moment de la création du document.

Suggestion de brouillon (à valider) :
> "Fondateur et Product Owner chez Connect Web, studio digital basé à Dakar. J'aide les organisations à construire les sites, plateformes et systèmes numériques qui font tourner leur activité — au standard international, sur le terrain ouest-africain."

---

## 11. CONVENTIONS ÉDITORIALES

*Identiques à la spec v1.*

### 11.1 Titres d'articles
- Concrets, pas de clickbait
- 8-12 mots idéalement
- Exemples : "Comment nous avons X pour Y", "Pourquoi nous choisissons X plutôt que Y", "Ce qu'un projet e-commerce Mobile Money coûte réellement au Sénégal"
- À éviter : "5 raisons pour lesquelles...", "Le secret de...", "Tout ce que vous devez savoir sur..."

### 11.2 Ton
- Direct, concret, first-person "nous" ou "on"
- Nommer les vrais outils, les vrais projets (ATTA, SCOD, Maison Peinture) quand pertinent
- Zéro affirmation non étayée
- Chaque article apprend quelque chose de spécifique

### 11.3 Longueur
- Article standard : 1500-2000 mots
- Article de fond : 2500-3500 mots
- Retour d'expérience : 1000-1500 mots suffisent

### 11.4 Illustration
- coverImage obligatoire
- Au moins 1 image ou schéma dans le corps des articles > 1500 mots
- Captures d'écran réelles > mockups

---

## 12. SEO DE BASE

### 12.1 Métadonnées
- Sitemap XML automatique via `next-sitemap` ou route custom `/sitemap.xml` — inclut tous les `blogPost` et `resource` publiés
- Meta robots `index, follow` par défaut sur toutes les pages publiées
- RSS 2.0 : flux séparés `/blog/rss.xml` et `/ressources/rss.xml`
- Open Graph + Twitter Cards sur chaque article/ressource (via `seo` object ou fallback natifs)

### 12.2 Schema.org JSON-LD
- Type `Article` sur chaque `blogPost` (author, datePublished, image, headline)
- Type `LearningResource` ou `Article` selon `resourceType`
- Type `BreadcrumbList` sur articles et ressources
- Balise canonical sur chaque page (via `seo.canonicalUrl` ou fallback)

### 12.3 Optimisation images Sanity
- Utiliser `@sanity/image-url` pour générer des URLs optimisées automatiquement
- Formats WebP + AVIF servis par le CDN Sanity
- `sizes` responsive dans next/image
- Lazy loading natif Next.js

---

## 13. DÉCISIONS EN SUSPENS À VALIDER AVANT ÉTAPE 3 (TEMPLATES)

Ces points ne bloquent pas l'Étape 0 (setup) ni l'Étape 2 (schemas), mais devront être tranchés avant l'Étape 3 (templates Next.js).

**D1 — Où stocker les leads (formulaires de capture email des ressources) ?**
Options :
- Envoi direct par email au PO (mailto ou service transactionnel Resend/Postmark) — simple, pas de base
- Enregistrement dans un tableau Sanity dédié (document `lead`) — centralisé, facile à exporter, mais Sanity n'est pas fait pour de la data client sensible à haut volume
- Intégration Mailchimp/Klaviyo directe via API — pro, prépare le nurturing email, mais nécessite compte + config API

Ma reco : **Resend + Sanity `lead` document au démarrage** (simple, gratuit, extensible), puis intégration Mailchimp/Klaviyo plus tard quand le volume justifiera. À trancher.

**D2 — Système d'envoi d'email transactionnel ?**
Pour envoyer le fichier téléchargeable à l'utilisateur après capture email :
- Resend (recommandé — free tier 3000 emails/mois, DX excellente)
- Postmark
- SendGrid
- Simple mailto (non recommandé — ça ne scale pas)

Ma reco : **Resend**. À valider.

**D3 — Comment servir les fichiers PDF téléchargeables sécurisés ?**
Options :
- Fichiers publics sur Sanity Assets CDN — simple, mais URL trouvable sans passer par le formulaire
- Fichiers privés + génération de lien signé temporaire à la soumission du formulaire — sécurisé, un peu plus complexe

Ma reco : **liens signés temporaires** pour respecter la stratégie capture email. À valider.

**D4 — Réseaux sociaux actifs pour la sidebar ?**
Vérifier avec le PO quels réseaux (LinkedIn Connect Web ? LinkedIn perso Amadou Diallo ? WhatsApp Business ? Instagram ?) doivent figurer dans la sidebar "Suivez-nous".

**D5 — Un slider "Contenus en vedette" sur la homepage plus tard ?**
Hors périmètre Étape 1. À noter pour V2.

---

## 14. CE QUI ARRIVE APRÈS VALIDATION DE CETTE SPEC

**Étape 0 (setup Sanity)** : Claude Code initialise le projet Sanity, embeddé le Studio dans Next.js à `/studio`, connecte les APIs, configure les variables env Vercel.

**Étape 2 (schemas Sanity)** : création de tous les document types listés ici (`blogPost`, `resource`, `blogCategory`, `blogTag`, `resourceCategory`, `author`), objects réutilisables, Portable Text config.

**Étape 3 (templates Next.js)** : les 4 templates + sidebar + articles similaires + filtres + PortableTextRenderer + composant DownloadForm + slider réutilisé.

**Étape 4** : proposition de 5 sujets d'articles.
**Étape 5** : rédaction.
**Étape 6** : publication + QA.

---

## 15. RÉCAPITULATIF DES DÉCISIONS FIGÉES DANS CETTE SPEC V2

- Sanity comme Headless CMS (DÉCISION 25)
- Studio embedded à `/studio` (D1 validée)
- Auteur unique : Amadou Diallo · Product Owner & Fondateur, Connect Web (D3 validée)
- 2 document types distincts (`blogPost`, `resource`)
- Capture email obligatoire uniquement pour les fichiers à télécharger, pas les contenus consultables en ligne (validée)
- Taxonomies en document types dédiés (`blogCategory`, `blogTag`, `resourceCategory`)
- Slider homepage réutilisé pour articles/ressources similaires
- ISR + revalidation instantanée via webhook Sanity
- Portable Text pour le contenu riche (renderer custom à créer)

---

*Spec v2 générée après DÉCISION 25. La v1 (WordPress + ACF) est archivée mais gardée pour référence historique. Aucun contenu inventé.*

**Fin de la spec v2 — à valider par le PO.**
