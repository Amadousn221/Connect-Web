# ÉTAPE 3 — IMPLÉMENTATION BLOG + RESSOURCES (Connect Web)

**Fichier maître à exécuter séquentiellement.**
**Modèle recommandé pour toute l'Étape 3 :** Opus 4.5 (`/model opusplan`).
**Branche git active :** `feat/cms-schemas` (ne PAS merger vers `main` avant la fin des 4 sous-étapes).

---

## RÈGLES GLOBALES — S'APPLIQUENT AUX 4 SOUS-ÉTAPES

1. **Un prompt à la fois.** Tu exécutes UNIQUEMENT la sous-étape que le PO t'indique. Tu n'anticipes JAMAIS sur les sous-étapes suivantes, même si tu vois le code à venir dans ce fichier.
2. **Aucun code sans plan approuvé.** Après ta Phase 1 (plan), tu STOP et attends "OK on démarre" du PO.
3. **Contrainte machine PC lent (dual-core) :** uniquement `npm run typecheck` et `npm run lint` en local. INTERDIT de lancer `npm run dev` ou `npm run build` en local. Pour vérifier un build ou un rendu visuel, tu pushes sur `feat/cms-schemas` et tu laisses Vercel construire le Preview.
4. **Commit à la fin de chaque sous-étape**, message clair, push sur `feat/cms-schemas`. Ne pas merger vers `main`.
5. **Documents de référence** dans `docs/connect-web/` :
   - `specification-blog-ressources-v2-sanity.md` — spec produit (source de vérité)
   - `connect-web-decision-log.md` — journal de décisions (jusqu'à DECISION 25)
6. **Aucun composant existant modifié** (Header, Footer, Hero, Services, sliders homepage). Tu peux les LIRE pour comprendre les conventions, mais tu ne les touches pas. Si tu penses qu'un composant existant doit être modifié, tu signales au PO avant.
7. **Aucune donnée inventée** (règle anti-slop projet) : pas de chiffre client fictif, pas de témoignage inventé, pas de logo bidon. Si un contenu manque, tu utilises un placeholder EXPLICITEMENT labellé "[À FOURNIR PAR LE PO]".
8. **Accessibilité systématique :** contraste respecté, navigation clavier, aria-labels sur icônes seules, `alt` obligatoire sur toute image.
9. **Zéro `console.log`** en production.

## RAPPELS FACTUELS PROJET

- **Positionnement :** studio digital Dakar. Hero H1 = "Nous concevons et connectons les outils qui font tourner votre organisation."
- **Coordonnées :** Tel +221 77 900 62 82 / +221 78 343 82 49 · WhatsApp `https://wa.me/221783438249` · `contact@connect-web.tech` · Rond-point SCAT-URBAM, G49 · Dakar
- **Design tokens :** Noir `#0D0D0D`, Pétrole Nuit `#0A2530`, Orange `#E8612A`, Off-white `#F5F2ED`. Newsreader (serif) + Hanken Grotesk. `border-radius: 0`.
- **Chiffres réels UNIQUEMENT :** 3 ans · +20 projets · 2 semaines délai moyen · 90% clients qui reviennent.
- **Auteur unique :** Amadou Diallo · Product Owner & Fondateur, Connect Web.
- **Réseau social sidebar :** LinkedIn Connect Web uniquement (si URL non fournie, laisser TODO commenté — ne PAS inventer l'URL).

═══════════════════════════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════

# SOUS-ÉTAPE 3.1 — FONDATIONS TECHNIQUES

**Périmètre strict :** queries GROQ + PortableTextRenderer + composants partagés. **AUCUNE page publique**, **AUCUN endpoint API**. Si tenté de créer une route de page ou une API dans cette sous-étape → ARRÊTE et remonte au PO.

## Phase 0 — Vérification préalable

1. Confirme branche git = `feat/cms-schemas`.
2. Confirme que `sanity/schemas/` contient les 7 documents (author, blogCategory, blogTag, resourceCategory, blogPost, resource, realisation) + 3 objects (seoFields, ctaBlock, programItem) + config Portable Text.
3. Confirme que `sanity/schemas/index.ts` exporte tout via `schemaTypes` et que `sanity.config.ts` l'importe.
4. `npm run typecheck` → 0 erreur.
5. `npm run lint` → 0 warning / 0 erreur.
6. NE lance PAS `npm run build` en local — regarde le statut du dernier Preview Vercel de `feat/cms-schemas`.

Si tout vert → Phase 1. Sinon STOP.

## Phase 1 — Investigation + plan (pas de code)

1. Relis `docs/connect-web/specification-blog-ressources-v2-sanity.md`, sections 6.5 (PortableTextRenderer), 7 (articles similaires), 8 (sidebar variable).
2. Inspecte le projet Next.js pour repérer :
   - Design system (tokens, config Tailwind, composants Button/Card/Link réutilisables)
   - Slider(s) existant(s) créés lors de la refonte homepage — À RÉUTILISER TEL QUEL pour articles/ressources similaires (spec §9). Ne pas recréer.
   - Header/Footer existants (pour info, réutilisés en 3.2/3.3).
   - Fichier de coordonnées (téléphones, email, adresse).
3. Applique STRICTEMENT :
   - Auteur unique Amadou Diallo (spec §10, DECISION 25).
   - `requiresEmail` géré côté FRONTEND en lisant `deliveryMode` (écart assumé Étape 2).
   - Slider homepage réutilisé (spec §9).
   - LinkedIn Connect Web uniquement pour sidebar sociale.
   - Fichiers PDF : liens signés temporaires (D3 — endpoint en 3.4, mais prépare types/interfaces ici).
   - Portable Text : renderer custom robuste (spec §6.5).
4. Remonte un plan en 5 blocs, dans cet ordre :

**BLOC A — Client Sanity + helper images**
- Vérifier/compléter `sanity/lib/client.ts` : client public (lecture), client authentifié (`SANITY_API_READ_TOKEN`) pour draft mode, helper `sanityFetch<T>(query, params, tags?)` compatible cache Next.js.
- Vérifier/compléter `sanity/lib/image.ts` : `urlFor(source)` avec width/height/format webp/avif/quality/hotspot + types TS.

**BLOC B — Queries GROQ (`sanity/lib/queries.ts`)**
Écris toutes les 13 queries d'un coup :
1. `BLOG_INDEX_QUERY({categorySlug?, tagSlug?, orderBy, page, perPage})` → blogPost[] + total
2. `BLOG_POST_QUERY(slug)` → blogPost complet (author→, category→, tags[]→, relatedResource→)
3. `BLOG_POPULAR_POSTS_QUERY(limit=5)` → top viewCount
4. `BLOG_CATEGORIES_WITH_COUNT_QUERY` → catégories + count articles (sidebar)
5. `BLOG_TAGS_TOP_QUERY(limit=12)` → tags les plus utilisés
6. `BLOG_RELATED_POSTS_QUERY(postId, categoryId)` → 3 articles similaires (fallback tag → récents, spec §7.2)
7. `RESOURCE_INDEX_QUERY({categorySlug?, resourceType?, orderBy, page, perPage})` → resource[] + total
8. `RESOURCE_QUERY(slug)` → resource complète (author→, category→, relatedPosts[]→, relatedResources[]→)
9. `RESOURCE_TOP_DOWNLOADED_QUERY(limit=5)` → top downloadCount
10. `RESOURCE_RELATED_QUERY(resourceId, categoryId)` → 3 ressources similaires
11. `RESOURCE_RECENT_QUERY(limit=3)` → dernières ressources (sidebar Blog)
12. `BLOG_RECENT_QUERY(limit=3)` → derniers articles (sidebar Ressource)
13. `AUTHOR_QUERY(slug ou singleton)` → Amadou Diallo (encart fin d'article)

Chaque query : projections propres, references résolues avec `->`, images retournées avec `{asset->{url, metadata}, alt, hotspot, crop}`, `_updatedAt` pour cache.

**BLOC C — Composant `PortableTextRenderer.tsx`** (`components/shared/`)
- Import `@portabletext/react` + config.
- Serializers custom : styles normal/H2/H3/H4/blockquote (bordure gauche + italic), marks strong/em/code/link (link externe = `target="_blank" rel="noopener noreferrer"`), listes bullet/numbered, types custom :
  - `imageBlock` → next/image via urlFor, ratio préservé, alt obligatoire, caption optionnelle (petit italique)
  - `codeBlock` → coloration syntaxique via `prism-react-renderer` (léger, pas shiki), fond sombre monospace, header discret avec le langage
- Prop unique : `value: PortableTextBlock[]`. Gère `value` absente sans crash.

**BLOC D — Composants partagés** (`components/shared/`)
1. `BlogCard.tsx` (spec §6.1) — props: blogPost. Image cover 16:10, label catégorie uppercase couleur accent, titre H3 sérif, excerpt line-clamp 2-3, meta date + temps de lecture, hover translateY(-2px), carte entièrement cliquable vers `/blog/[slug]`.
2. `ResourceCard.tsx` (spec §6.3) — props: resource. Image cover 4:3, badge type coin sup gauche (libellé français lisible), titre H3, excerpt line-clamp 2, `pagesOrDuration` si rempli, bouton "Voir la ressource" vers `/ressources/[slug]`. PAS de bouton téléchargement direct depuis la carte.
3. `Breadcrumb.tsx` — props: items `{label, href?}[]`. "Accueil > Blog > [Catégorie] > [Titre]". Dernier item non cliquable.
4. `Sidebar.tsx` (spec §8) — orchestrateur avec prop `context: 'blog-index' | 'blog-post' | 'resource-index' | 'resource-page'`. Selon contexte affiche les bons blocs (voir spec §8.2). Blocs communs TOUJOURS présents : `AboutBlock` (2-3 lignes + lien /agence), `CtaBlock` ("Un projet à démarrer ?" + bouton "Parlons-en" → `/#contact`), `SocialBlock` (LinkedIn Connect Web — URL en TODO commenté si absente). Desktop ≥1024px : sticky partielle. Tablette : horizontal en bas. Mobile : empilée en bas, CtaBlock en premier.
5. `RelatedItems.tsx` — utilise le SLIDER EXISTANT homepage. Props: `{items: BlogPost[] | Resource[], type: 'posts' | 'resources'}`. Titre "À lire aussi" ou "Ressources similaires". Si `items.length < 3` → rend rien (spec §7.2).
6. `TableOfContents.tsx` — génère TOC client-side à partir des H2/H3. Sticky au scroll desktop. Highlight section active.

**BLOC E — Types TypeScript** (`sanity/lib/types.ts`)
Types : Author, BlogCategory, BlogTag, ResourceCategory, BlogPost, Resource, Realisation, SeoFields, CtaBlock, ProgramItem, + types de retour de queries (BlogIndexResult, BlogPostFull, ResourceIndexResult, ResourceFull, etc.). Écrits à la main (pas de codegen Sanity pour l'instant).

**STOP après le plan.** Attends "OK 3.1, on démarre" avant tout code.

## Phase 2 — Exécution (après feu vert PO)

Blocs A → B → C → D → E dans l'ordre. Après chaque bloc : `npm run typecheck`.

Règles :
- Aucun composant existant modifié.
- Aucune page dans `app/blog/` ou `app/ressources/`.
- Aucun endpoint dans `app/api/`.
- Si un composant du design system manque (ex. Button réutilisable) → signale au PO plutôt que créer un doublon.
- Toutes images : next/image + urlFor + alt + sizes responsive.
- Liens externes : `target="_blank" rel="noopener noreferrer"`.
- Accessibilité + zéro `console.log`.

## Vérifications finales

- `npm run typecheck` → 0 erreur
- `npm run lint` → 0 erreur / 0 warning
- PAS de `npm run build` local — push et laisse Vercel.

## Commit + push

```
git add .
git commit -m "feat(cms): fondations blog/ressources — queries GROQ + PortableTextRenderer + composants partagés (étape 3.1)"
git push origin feat/cms-schemas
```

Attends la fin du Preview Vercel. Une fois vert, communique l'URL au PO.

## Livrable final

1. Récap chiffré (nb queries, nb composants, nb types)
2. Liste précise des fichiers créés/modifiés (chemins complets)
3. Points d'attention PO :
   - URL LinkedIn Connect Web à fournir ?
   - Composants design system manquants ?
   - Écarts assumés vs spec (avec justif)
4. Statut build Vercel Preview + URL
5. TODO restants avant 3.2 : PO fournit URL LinkedIn si nécessaire, PO valide rendu `/studio` sur Preview.
6. Verdict : PASS / PASS WITH CONDITIONS / REWORK.

**Termine par :** "Sous-étape 3.1 terminée. Fondations en place. Dis-moi 'OK 3.1 validée, passe à 3.2' pour attaquer les templates Blog."

═══════════════════════════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════

# SOUS-ÉTAPE 3.2 — TEMPLATES BLOG

**⚠️ N'ATTAQUE CETTE SOUS-ÉTAPE QUE SI LE PO T'A DIT "OK 3.1 validée, passe à 3.2".**

**Périmètre strict :** deux pages Blog uniquement — `/blog` (catalogue avec filtres) et `/blog/[slug]` (article individuel). **AUCUN endpoint API** (c'est 3.4). AUCUNE page Ressources (c'est 3.3).

## Phase 0 — Vérification préalable

1. Branche git = `feat/cms-schemas`.
2. Sous-étape 3.1 committée et Preview Vercel vert.
3. `sanity/lib/queries.ts` contient bien les 13 queries. `sanity/lib/types.ts` contient les types. Composants partagés présents dans `components/shared/`.
4. `npm run typecheck` + `npm run lint` → 0 erreur.
5. Document Author Amadou Diallo créé dans le Studio Sanity (demande confirmation au PO — si absent, tu peux quand même coder mais tu signales que les pages afficheront un état vide pour l'encart auteur tant que le document n'existe pas).

Si tout OK → Phase 1.

## Phase 1 — Plan (pas de code)

Relis spec §5.1 (catalogue Blog), §5.2 (page article), §6 (composants), §8 (sidebar par contexte).

Livre un plan en 2 blocs :

**BLOC A — Page catalogue `/blog` (`app/blog/page.tsx`)**
- Server Component par défaut (SSG + ISR).
- URL structure : `/blog?category=<slug>&tag=<slug>&order=recent|popular|longest&page=<n>`.
- 12 articles par page (spec).
- Layout : Header (existant), Hero page mince (H1 "Le blog", sous-titre 1 ligne, spec §5.1), zone filtres (dropdowns Catégorie + Tag + Tri), grille articles (3 colonnes desktop, 2 tablette, 1 mobile), pagination (numérotée + prev/next), Sidebar contextuelle (`context="blog-index"`), Footer.
- Composants utilisés : BlogCard, Sidebar, Breadcrumb (optionnel sur index — à confirmer via spec).
- Query : `BLOG_INDEX_QUERY` avec searchParams. Gérer état vide ("Aucun article ne correspond à ces filtres") avec CTA reset.
- `generateMetadata` : title dynamique selon filtre actif ("Blog", "Blog · Catégorie X", etc.), description, OpenGraph, canonical avec params.
- **Filtres via query params, PAS de sous-routes dédiées** (décision spec).
- Interactions dropdowns : Client Component isolé (`components/blog/BlogFilters.tsx`) qui push l'URL via `router.push` sans rechargement dur (`router.push(url, { scroll: false })`).

**BLOC B — Page article `/blog/[slug]` (`app/blog/[slug]/page.tsx`)**
- Server Component. SSG via `generateStaticParams` (liste tous les slugs publiés au build), ISR via revalidateTag (revalidation gérée en 3.4).
- Query : `BLOG_POST_QUERY(slug)`. Si `null` → `notFound()` (Next 15 App Router).
- Layout desktop : Header, Breadcrumb, colonne principale (max-width lisibilité ~720px) + Sidebar droite (`context="blog-post"`, sticky partielle).
- Colonne principale ordre :
  1. Meta top (catégorie label + date + temps de lecture)
  2. H1 titre (typo sérif, largeur max)
  3. Excerpt (chapô, italic + couleur atténuée)
  4. Image cover (ratio 16:9 ou 21:9, full-width dans la colonne)
  5. `TableOfContents` inline visible mobile (sticky en sidebar sur desktop)
  6. `PortableTextRenderer` avec le contenu
  7. Encart auteur (photo circulaire, nom, rôle, bio courte) → utilise le document Author
  8. `RelatedItems` (articles similaires via `BLOG_RELATED_POSTS_QUERY`, réutilise slider homepage)
  9. CTA final "Un projet similaire ? Parlons-en" → `/#contact`
- Sidebar contexte `blog-post` : TOC (top), AboutBlock, CtaBlock, ressources récentes (`RESOURCE_RECENT_QUERY`), SocialBlock.
- `generateMetadata` : title = titre article + " · Blog Connect Web", description = excerpt, OpenGraph avec image cover, Twitter Card, canonical, article:published_time / modified_time.
- **JSON-LD Article structuré** injecté via `<script type="application/ld+json">` (schéma Article + Person auteur + Organization Connect Web). Voir spec SEO.
- Incrément viewCount : différé à 3.4 (via endpoint API dédié). Ici, ne rien faire de particulier — juste laisser un TODO commenté à l'endroit où l'incrément se ferait.

**STOP après plan.** Attends "OK 3.2, on démarre".

## Phase 2 — Exécution

Bloc A puis Bloc B. Après chaque bloc : `npm run typecheck`.

Règles spécifiques :
- Server Components par défaut. Client Components uniquement pour `BlogFilters` et `TableOfContents` (isolés).
- `notFound()` pour slug inexistant.
- Toutes images via `next/image` + `urlFor` + `alt` + `sizes`.
- Pagination : sémantique HTML (`<nav aria-label="Pagination">` avec `<a>` pour chaque page + `aria-current="page"` sur la page active).
- Aucun endpoint API créé.
- Aucun composant existant modifié.

## Vérifications finales

- `npm run typecheck` → 0 erreur
- `npm run lint` → 0 erreur / 0 warning
- Push → Preview Vercel doit être vert
- Sur le Preview : `/blog` doit afficher (même vide si aucun article publié — état vide propre), `/blog/[slug]` renvoie 404 pour slug inexistant

## Commit + push

```
git add .
git commit -m "feat(blog): pages catalogue /blog et article /blog/[slug] (étape 3.2)"
git push origin feat/cms-schemas
```

## Livrable final

1. Récap : nb fichiers créés, chemins précis.
2. URL Preview Vercel du commit.
3. Instruction PO pour tester : "Va sur `<preview>/blog` — tu dois voir la structure (Hero mince + filtres + état vide + sidebar). Va sur `<preview>/blog/test` — tu dois voir la 404 Next.js."
4. TODO restants avant 3.3 :
   - Créer 1 article de test dans le Studio Sanity pour vérifier le rendu réel des filtres et de l'article individuel (facultatif à ce stade mais recommandé)
5. Verdict.

**Termine par :** "Sous-étape 3.2 terminée. Blog templaté. Dis-moi 'OK 3.2 validée, passe à 3.3' pour attaquer les templates Ressources."

═══════════════════════════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════

# SOUS-ÉTAPE 3.3 — TEMPLATES RESSOURCES

**⚠️ N'ATTAQUE CETTE SOUS-ÉTAPE QUE SI LE PO T'A DIT "OK 3.2 validée, passe à 3.3".**

**Périmètre strict :** deux pages Ressources — `/ressources` (catalogue) et `/ressources/[slug]` (page ressource avec formulaire capture email conditionnel). **AUCUN endpoint API** (c'est 3.4 — le formulaire pointe vers un endpoint qui sera créé en 3.4).

## Phase 0 — Vérification

1. Branche `feat/cms-schemas`.
2. Sous-étape 3.2 committée, Preview vert.
3. `npm run typecheck` + `npm run lint` → 0 erreur.

## Phase 1 — Plan

Relis spec §5.3 (catalogue Ressources), §5.4 (page ressource), §6.3 (ResourceCard), §8 (sidebar contextes ressources), et surtout **§4.3 règle capture email**.

**BLOC A — Page catalogue `/ressources` (`app/ressources/page.tsx`)**
- Server Component, SSG + ISR.
- URL structure : `/ressources?category=<slug>&type=<resourceType>&order=recent|popular&page=<n>`.
- 9 ressources par page (spec).
- Layout : Header, Hero page mince (H1 "Ressources", sous-titre orienté valeur ex "Guides, checklists et formations pour piloter vos projets numériques."), zone filtres (Thématique + Type + Tri), grille (3 colonnes desktop, 2 tablette, 1 mobile), pagination, Sidebar `context="resource-index"`, Footer.
- Query : `RESOURCE_INDEX_QUERY`. État vide propre.
- `generateMetadata` idem pattern Blog.
- Client Component isolé : `components/ressources/ResourceFilters.tsx`.

**BLOC B — Page ressource `/ressources/[slug]` (`app/ressources/[slug]/page.tsx`)**
- Server Component + SSG + ISR.
- Query : `RESOURCE_QUERY(slug)`. Si null → `notFound()`.
- Layout desktop : Header, Breadcrumb, colonne principale + Sidebar `context="resource-page"`.
- Colonne principale ordre :
  1. Meta top (badge type + catégorie label)
  2. H1 titre
  3. Excerpt / description longue
  4. Image cover
  5. Bloc "Ce que vous allez obtenir" (bullets tirés du champ Sanity approprié — vérifier schema `resource`)
  6. Bloc `programItem[]` si présent (pour formations/webinaires : liste des chapitres/modules)
  7. **Zone de conversion** — logique conditionnelle sur `deliveryMode` :
     - **Si `deliveryMode === "download"` :**
       - Formulaire capture email obligatoire.
       - Champs : `nom` (obligatoire), `email` (obligatoire, validé regex simple), `organisation` (facultatif), consentement RGPD (checkbox obligatoire avec libellé "J'accepte de recevoir cette ressource par email + les prochaines publications Connect Web. Désabonnement possible à tout moment.").
       - CTA : "Recevoir la ressource par email" (couleur accent orange).
       - Client Component isolé (`components/ressources/DownloadForm.tsx`) — state local + `fetch('/api/download-resource', {...})` (endpoint créé en 3.4, mais l'URL est déjà en dur ici).
       - États UI : idle → submitting (spinner + texte "Envoi en cours...") → success (message de confirmation via `confirmationMessage` du document + fermeture form) → error (message d'erreur + réessayer).
       - Sur success : afficher un message final avec le contenu de `confirmationMessage` (fallback : "Merci ! Un email avec le lien de téléchargement vient de vous être envoyé. Vérifiez votre boîte de réception (et éventuellement les spams).")
     - **Si `deliveryMode === "online"` :**
       - PAS de formulaire. Juste un bouton CTA direct : "Accéder à la ressource" → ouvre `onlineUrl` dans nouvel onglet (`target="_blank" rel="noopener noreferrer"`).
       - Selon `resourceType` : libellé bouton adapté ("Regarder la formation", "S'inscrire au webinaire", "Consulter le glossaire").
  8. Encart auteur
  9. `RelatedItems` (ressources similaires via `RESOURCE_RELATED_QUERY`)
  10. CTA final "Besoin d'accompagnement sur ce sujet ? Parlons-en" → `/#contact`
- Sidebar `context="resource-page"` : AboutBlock, CtaBlock, articles récents (`BLOG_RECENT_QUERY`), SocialBlock.
- `generateMetadata` idem.
- **JSON-LD** : schéma `Article` (ou `HowTo` selon type) + Organization.

**STOP après plan.** Attends "OK 3.3, on démarre".

## Phase 2 — Exécution

Bloc A puis Bloc B. Après chaque : `npm run typecheck`.

Points critiques :
- Le formulaire download est un Client Component isolé. Il POST vers `/api/download-resource` (qui n'existe pas encore — c'est normal, sera créé en 3.4).
- La validation email est côté client (regex simple) + à re-valider côté serveur en 3.4.
- Le consentement RGPD est OBLIGATOIRE — bouton submit désactivé tant que checkbox non cochée.
- Pas de librairie de formulaire lourde (react-hook-form, formik) — state local `useState` suffit.
- Accessibilité formulaire : `<label>` associés à chaque input, messages d'erreur en `aria-live="polite"`, focus visible.

## Vérifications finales

- `npm run typecheck` → 0 erreur
- `npm run lint` → 0 erreur / 0 warning
- Push Preview vert
- Sur Preview : `/ressources` affiche structure vide, `/ressources/test` = 404

## Commit + push

```
git add .
git commit -m "feat(ressources): pages catalogue /ressources et page ressource /ressources/[slug] avec form conditionnel (étape 3.3)"
git push origin feat/cms-schemas
```

## Livrable final

1. Récap fichiers + chemins.
2. URL Preview.
3. Signale au PO : le formulaire download va renvoyer une erreur 404 tant que 3.4 n'est pas fait (normal — l'endpoint sera créé en 3.4).
4. TODO restants avant 3.4.
5. Verdict.

**Termine par :** "Sous-étape 3.3 terminée. Ressources templatées. Dis-moi 'OK 3.3 validée, passe à 3.4' pour attaquer le backend (API + SEO + revalidation)."

═══════════════════════════════════════════════════════════════════
═══════════════════════════════════════════════════════════════════

# SOUS-ÉTAPE 3.4 — BACKEND (API + REVALIDATION + SEO)

**⚠️ N'ATTAQUE CETTE SOUS-ÉTAPE QUE SI LE PO T'A DIT "OK 3.3 validée, passe à 3.4".**

**Périmètre :** endpoints API (`/api/revalidate`, `/api/download-resource`, `/api/track-view` optionnel), sitemap XML, RSS, JSON-LD sur pages existantes (rappel : le JSON-LD article/ressource a déjà été posé en 3.2/3.3, ici on ajoute WebSite + le sitemap/RSS).

## Rappel décisions D1-D4 (verrouillées Étape 2)

- **D1 — stockage leads :** document Sanity `lead` (créé côté serveur via API Sanity avec token write) + envoi email Resend.
- **D2 — email transactionnel :** Resend (déjà en place dans le projet — vérifier `RESEND_API_KEY` présent en env).
- **D3 — fichiers PDF :** liens signés temporaires (expiration ~24h). Pas de fichiers PDF publics.
- **D4 — réseaux sociaux :** LinkedIn Connect Web uniquement (déjà géré front en 3.1).

## Phase 0 — Vérification

1. Branche `feat/cms-schemas`.
2. Sous-étape 3.3 committée, Preview vert.
3. Vérifie variables d'environnement présentes (Vercel + `.env.local`) :
   - `SANITY_API_WRITE_TOKEN` (token Sanity avec droits Write, à créer si absent — demande au PO)
   - `SANITY_REVALIDATE_SECRET` (secret aléatoire pour authentifier le webhook Sanity, à créer)
   - `RESEND_API_KEY` (déjà présent normalement, sinon signale au PO)
   - `RESEND_FROM_EMAIL` (ex `Connect Web <no-reply@connect-web.tech>`) — vérifier avec PO l'adresse validée dans Resend
4. Ajoute un schema `lead` dans Sanity (si pas déjà fait) — voir Phase 1 Bloc A.

## Phase 1 — Plan

**BLOC A — Ajout schema Sanity `lead`**
Nouveau document Sanity dans `sanity/schemas/documents/lead.ts` :
- Champs : `nom` (string, required), `email` (string, required, validation email), `organisation` (string, optional), `resourceRef` (reference → resource, required), `resourceSnapshot` (object : title, slug, type — figé au moment de la capture pour survivre à une suppression future), `consentRgpd` (boolean, required, default false), `submittedAt` (datetime, required), `source` (string, default "resource-download"), `emailSent` (boolean, default false), `emailSentAt` (datetime, optional), `notes` (text, optional pour usage interne).
- Preview : email + resource title + date.
- Ordering par défaut : submittedAt desc.
- Ajouter au registre `sanity/schemas/index.ts`.
- Ce schema est **read-only côté Studio pour éviter édition manuelle** — utiliser `readOnly: true` sur les champs sauf `notes`.

**BLOC B — Endpoint `/api/download-resource` (`app/api/download-resource/route.ts`)**
Handler POST :
1. Parse body JSON, valide (nom non vide, email format valide via regex robuste, resourceSlug non vide, consentRgpd === true).
2. Si validation KO → 400 avec message clair.
3. Fetch la ressource depuis Sanity via slug (client authentifié). Si introuvable ou `deliveryMode !== 'download'` → 404.
4. Crée le document `lead` dans Sanity via `client.create()` (avec `SANITY_API_WRITE_TOKEN`).
5. Génère lien signé temporaire :
   - Le PDF est stocké dans Sanity (`downloadFile` asset). Récupère l'URL de l'asset.
   - Sanity ne propose pas nativement de liens signés à durée limitée sur les assets — utilise une des deux stratégies suivantes, à valider avec le PO dans le plan :
     - **Option 1 (recommandée) :** endpoint GET signé côté Next.js `/api/serve-resource?token=...`, où `token` est un JWT court (ex `jose` lib) contenant `{leadId, resourceId, exp: now + 24h}`. L'endpoint vérifie le JWT, revalide lead + ressource, streame le PDF depuis Sanity.
     - **Option 2 (plus simple) :** URL Sanity de l'asset directement dans l'email, sans expiration. Moins sécurisé mais moins de code. Si le PO préfère, documenter le trade-off.
   - **Dans le plan, remonte les 2 options au PO et attends son choix avant d'implémenter cette partie précise.**
6. Envoie l'email via Resend :
   - From : `RESEND_FROM_EMAIL`
   - To : email du lead
   - Subject : `Votre ressource : <titre de la ressource>`
   - HTML sobre : logo Connect Web + salutation "Bonjour <nom>," + phrase courte + bouton CTA "Télécharger la ressource" pointant sur le lien signé (ou URL directe selon choix) + signature "L'équipe Connect Web"
   - Text alternate pour compatibilité
7. Update le document lead : `emailSent = true`, `emailSentAt = now`.
8. Retourne 200 avec `{success: true, message: confirmationMessage}` (utilise le `confirmationMessage` du document ressource, fallback générique).
9. Gestion erreurs : try/catch global, log serveur (pas `console.log`, utiliser une fonction dédiée). En cas d'échec Resend, retourner 500 mais garder le lead en base (marker `emailSent = false`) pour envoi manuel ultérieur.

**BLOC C — Endpoint `/api/revalidate` (`app/api/revalidate/route.ts`)**
Handler POST déclenché par webhook Sanity :
1. Vérifie header `Authorization: Bearer <SANITY_REVALIDATE_SECRET>`. Si KO → 401.
2. Parse body Sanity (contient `_type`, `_id`, `slug.current`).
3. Selon `_type` : revalidateTag correspondant :
   - `blogPost` → `revalidateTag('blog-index')` + `revalidateTag(\`blog-post-\${slug}\`)`
   - `resource` → `revalidateTag('resource-index')` + `revalidateTag(\`resource-\${slug}\`)`
   - `blogCategory` / `blogTag` / `resourceCategory` → `revalidateTag('blog-index')` + `revalidateTag('resource-index')` (impact les sidebars/filtres)
   - `author` → revalidateTag('blog-index') + `revalidateTag('resource-index')` + toutes pages articles/ressources (accepter un peu de sur-invalidation, l'auteur est unique donc rare)
4. Retourne 200 avec liste des tags revalidés.
5. Configurer côté Sanity (Studio dashboard) : GROQ-powered webhook pointant vers `<preview-vercel-url>/api/revalidate` avec header Authorization + secret. **À faire côté PO/console Sanity après merge en prod.**

Rappel : les queries GROQ dans `sanityFetch` doivent utiliser ces tags. Vérifier que 3.1 a bien fait ça — sinon corriger ici.

**BLOC D — Endpoint `/api/track-view` (`app/api/track-view/route.ts`) — optionnel mais recommandé**
Handler POST simple :
1. Body : `{postId: string}`.
2. Incrémente `viewCount` du blogPost via Sanity client authentifié (`client.patch(postId).inc({viewCount: 1}).commit()`).
3. Rate-limit basique : cookie de session ou IP pour éviter incrémentation multiple par refresh (utilise Next `cookies()`).
4. Appelé depuis la page article `/blog/[slug]` via un petit Client Component `<TrackView postId={...} />` qui fait un `fetch` après mount.
5. **Signale dans le plan que c'est optionnel — le PO peut choisir de reporter cette fonctionnalité à V2 pour aller plus vite.**

**BLOC E — Sitemap XML dynamique (`app/sitemap.ts`)**
- Fichier `sitemap.ts` à la racine de `app/`.
- Export default : fonction async qui retourne un `MetadataRoute.Sitemap`.
- URLs statiques : `/`, `/agence`, `/realisations`, `/blog`, `/ressources`, `/contact`, `/mentions-legales`, `/confidentialite`, + pages services.
- URLs dynamiques : fetch tous les slugs blogPost + resource + realisation, générer les entrées avec `lastModified`, `changeFrequency`, `priority` cohérents.

**BLOC F — RSS Feed (`app/blog/rss.xml/route.ts`)**
- Endpoint GET qui génère un flux RSS 2.0 des 20 derniers articles blog.
- Utilise `feed` npm package ou génère à la main (léger).
- Content-Type : `application/xml`.
- Ajouter `<link rel="alternate" type="application/rss+xml" href="/blog/rss.xml">` dans le `<head>` du layout Blog.

**BLOC G — JSON-LD WebSite + Organization (dans `app/layout.tsx`)**
- Injecter dans le `<head>` racine :
  - Schema `WebSite` avec `name`, `url`, `potentialAction: SearchAction` si search prévue (sinon omettre)
  - Schema `Organization` avec `name: "Connect Web"`, `url`, `logo`, `sameAs: [linkedInUrl]` (à insérer si URL fournie), `contactPoint` (téléphones, email)
- Rappel : les schemas `Article` par page ont été posés en 3.2/3.3.

**STOP après plan.** Attends "OK 3.4, on démarre" — et attends aussi la réponse du PO sur l'option liens signés (BLOC B point 5).

## Phase 2 — Exécution

Ordre : A → C → E → G → B (avec le choix PO) → F → D (si validé).

Règles :
- Toute variable d'env manquante → STOP, signale au PO avant de continuer.
- Rate limiting basique sur `/api/download-resource` (max 5 requêtes / IP / minute) pour éviter abus.
- Tous les endpoints : validation stricte du body, gestion d'erreur propre, statuts HTTP corrects.
- Le token `SANITY_API_WRITE_TOKEN` ne doit JAMAIS apparaître côté client — utilisé uniquement dans les Route Handlers server-side.
- Email HTML : sobre, professionnel, mobile-friendly, teste avec plusieurs clients si possible.

## Vérifications finales

- `npm run typecheck` → 0 erreur
- `npm run lint` → 0 erreur / 0 warning
- Push Preview vert
- Sur Preview : tester manuellement le formulaire d'une ressource type download (créer une ressource de test dans le Studio d'abord ou demander au PO)
- Vérifier `/sitemap.xml` répond
- Vérifier `/blog/rss.xml` répond

## Commit + push

```
git add .
git commit -m "feat(api): endpoints download-resource + revalidate + sitemap + RSS + JSON-LD (étape 3.4)"
git push origin feat/cms-schemas
```

## Livrable final

1. Récap : endpoints créés, fichiers, chemins.
2. Actions PO à faire après merge :
   - Créer le webhook Sanity (URL de prod + header Authorization avec secret)
   - Valider adresse Resend d'envoi
   - Tester téléchargement d'une vraie ressource
3. TODO Étape 4 (rédaction contenus) et Étape 6 (QA + merge vers main).
4. Verdict global de l'Étape 3.

**Termine par :** "Étape 3 complète. Blog + Ressources fonctionnels end-to-end sur Preview. Prêt pour Étape 4 (contenus)."
