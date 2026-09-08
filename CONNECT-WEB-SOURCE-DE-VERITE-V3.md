# CONNECT WEB — SOURCE DE VÉRITÉ TECHNIQUE V3

**Statut :** APPROUVÉ POUR CONSOLIDATION ET MISE EN CONFORMITÉ DU REPOSITORY
**Date :** 2026-09-06
**Remplace :** l'index Phase 24, l'architecture WordPress Phase 23, le plan WordPress Phase 24 et les ADR WordPress 001/002/003.
**Décision structurante :** DECISION 25 — Sanity remplace définitivement WordPress + ACF + WPGraphQL.

---

> **ADDENDUM 2026-09-07 — Reset des architectures Services.**
> Les architectures éditoriales et visuelles des **pages Services** (hub +
> conception/développement web, sites d'entreprise, sites institutionnels & ONG,
> boutiques, logiciels & applications, ERP/CRM, IA & automatisation, marketing,
> conseil) sont **réinitialisées**. Toute mention d'un « archétype page d'offre »
> ou d'une architecture Services figée dans ce document (notamment §4 « pages
> d'offres validées » et §9 M5) est **suspendue** : ces pages seront reconstruites
> une par une via le workflow ChatGPT → PO → revue Claude IA → Claude Code → PO.
> Les routes `/services*` rendent une page d'attente `noindex` en attendant.
> Rien d'autre dans ce document n'est modifié (stack, Sanity, sécurité, bilingue,
> périmètre V1 restent en vigueur).

---

## 1. RÈGLE D'AUTORITÉ

En cas de contradiction, appliquer cet ordre :

1. ce document V3 ;
2. `connect-web-decision-log-COMPLET.md`, uniquement pour les décisions compatibles avec la V3 ;
3. `specification-blog-ressources-v2-sanity.md`, après application des corrections de sécurité et de périmètre décrites ici ;
4. les spécifications produit et contenus des Phases 01-22 ;
5. les maquettes et Design_Foundations ;
6. le code réellement présent, après audit.

Tout document imposant WordPress, ACF, WPGraphQL ou Hostinger comme CMS est obsolète. Il ne doit plus piloter l'implémentation.

---

## 2. ÉTAT CONSOLIDÉ

- Phases 01-10 : stratégie, IA, contenu FR, PRD et spécifications livrés.
- Phases 11-22 : direction artistique et maquettes largement livrées.
- Homepage : implémentée et corrigée d'après le journal complet.
- Phases 23-24 WordPress : décisions abandonnées avant mise en œuvre du CMS.
- DECISION 25 : pivot validé vers Sanity.
- Setup Sanity : commencé ; son état exact doit être vérifié dans le repository, jamais supposé.
- Spécification Blog + Ressources V2 : base valide, corrigée par ce document.
- Prochaine action : nettoyer le repository et les docs, compléter l'architecture Sanity, puis reprendre l'implémentation milestone par milestone.

---

## 3. STACK AUTORISÉE

| Couche | Décision |
|--------|----------|
| Frontend | Next.js avec App Router et TypeScript |
| Hébergement frontend | Vercel |
| CMS | Sanity |
| Studio | Sanity Studio intégré sous `/studio` |
| Requêtes contenu | GROQ via client Sanity officiel |
| Images éditoriales | Sanity Image Pipeline + `next/image` |
| Rendu | SSG/ISR et revalidation ciblée par webhook signé |
| Contenu riche | Portable Text avec renderer contrôlé |
| Langues | Français à la racine, anglais sous `/en/` |
| Styling | Conserver la solution réellement en place si cohérente ; ne pas introduire un second système CSS |
| Formulaires | Routes serveur Next.js avec validation, anti-spam et rate limiting |
| E-mail transactionnel | À confirmer avant implémentation ; Resend est la recommandation, pas encore une décision finale |
| Analytics | À confirmer avant instrumentation finale |
| Déploiement | Development → Preview/Staging → Production |

### Hors stack, à retirer si présent et non requis par une autre application du repository

- WordPress en tant que CMS du projet Connect Web ;
- ACF / ACF Pro ;
- WPGraphQL et WPGraphQL for ACF ;
- clients, queries, types et adaptateurs WordPress ;
- webhooks WordPress ;
- variables d'environnement WordPress ;
- dépendances npm exclusivement liées à WordPress ;
- configuration Hostinger destinée au CMS WordPress ;
- CPT, taxonomies ou scripts de migration WordPress non utilisés ;
- documents techniques obsolètes qui continuent à commander l'ancienne stack ;
- pages debug temporaires une fois le setup vérifié ;
- composants, routes, assets et dépendances orphelins prouvés comme inutilisés ;
- placeholders visibles, faux témoignages, chiffres non confirmés et liens sociaux factices.

La suppression porte sur les éléments réellement hors scope après recherche des imports, références, scripts et usages. Elle ne doit jamais être une suppression aveugle par nom.

---

## 4. PÉRIMÈTRE FONCTIONNEL V1

### Pages et parcours publics

- Accueil ;
- Services ;
- pages d'offres validées ;
- Réalisations et fiches détaillées ;
- Agence ;
- Ressources et fiches détaillées ;
- Blog et articles ;
- Contact ;
- pages légales ;
- équivalents anglais validés sous `/en/` ;
- redirections 301 depuis les anciennes URLs.

### CMS Sanity — contenu éditable

Le modèle cible doit couvrir au minimum :

- `blogPost` ;
- `resource` ;
- `author` ;
- `blogCategory` ;
- `blogTag` ;
- `resourceCategory` ;
- `caseStudy` ;
- `portfolioItem` ou `realisation` — choisir un seul nom canonique ;
- `teamMember` ;
- `service` seulement si les services doivent être éditables sans déploiement ;
- `siteSettings` pour les coordonnées, réseaux sociaux et paramètres globaux éditables.

Ne pas créer deux types couvrant le même besoin. Avant tout schéma, faire la matrice : contenu → propriétaire → fréquence de modification → code ou CMS.

### Hors périmètre V1

- comptes clients et espace membre ;
- e-commerce ou paiement en ligne ;
- chatbot/agent IA public sans preuve ni besoin validé ;
- moteur de recherche complexe ;
- personnalisation utilisateur ;
- composants créés « au cas où » ;
- système analytics artisanal dans Sanity ;
- collecte de données personnelles dans un dataset Sanity public ;
- fonctionnalités non présentes dans le PRD ou non validées par le PO.

---

## 5. DÉCISIONS DE MODÉLISATION

### 5.1 Blog et Ressources

`blogPost` et `resource` restent deux types distincts. Les taxonomies sont des documents référencés. Portable Text remplace Gutenberg.

### 5.2 Réalisations et études de cas

- Une réalisation courte et une étude de cas détaillée ne doivent pas être confondues.
- Décider soit d'un type unique avec profondeur conditionnelle, soit de deux types liés.
- ATTA Africa, SCOD VTC et Maison Peinture Sénégal sont les trois cas phares.
- Résultats, témoignages et captures doivent rester absents ou explicitement en brouillon tant qu'ils ne sont pas confirmés.

### 5.3 Bilingue

**Décision V3 :** utiliser des documents FR et EN distincts, liés par un identifiant ou une référence de traduction.

Raisons : publication indépendante, slugs propres, SEO/hreflang clair, absence possible d'une traduction sans champs vides, workflow éditorial plus propre.

Règles :

- FR à la racine ;
- EN sous `/en/` ;
- `lang` obligatoire ;
- lien de traduction explicite ;
- slug unique par langue ;
- canonical et hreflang générés à partir de relations réelles ;
- aucune page EN vide ou faussement traduite ne doit être publiée.

### 5.4 Contenu fixe ou CMS

- Structure, composants, tokens et règles d'interface : code.
- Articles, ressources, réalisations, équipe, coordonnées et contenus fréquemment modifiés : Sanity.
- Copy marketing stable : peut rester dans le code si cela évite une modélisation excessive.
- Ne pas déplacer tout le site dans Sanity par automatisme.

---

## 6. SÉCURITÉ ET DONNÉES

### Dataset et tokens

- Aucun token d'écriture dans le navigateur.
- `.env.example` ne contient que des noms et valeurs factices.
- Toute ancienne valeur secrète exposée doit être révoquée et remplacée.
- Le token de lecture est utilisé côté serveur seulement s'il est nécessaire.
- Le secret de revalidation doit être renouvelé s'il a transité dans un fichier versionné.

### Leads

**Décision V3 :** ne pas stocker les prospects dans le dataset public Sanity.

Avant d'implémenter la capture email, le PO doit confirmer la destination : CRM, Airtable/base privée, Brevo/Klaviyo ou autre outil. Resend peut assurer l'envoi transactionnel, mais n'est pas la base client par défaut.

### Téléchargements

- Une ressource publique Sanity n'est pas protégée par un vrai lien signé.
- Si le contrôle d'accès est léger, accepter un lien public envoyé après formulaire et documenter cette limite.
- Si une protection réelle est requise, utiliser un stockage privé générant des URLs temporaires.
- Ne jamais prétendre qu'un asset public Sanity est privé.

### Formulaires et API

- validation serveur ;
- normalisation des données ;
- rate limiting ;
- honeypot ou Turnstile ;
- messages d'erreur non sensibles ;
- logs sans secrets ni données personnelles inutiles ;
- consentement et information sur l'usage des données ;
- endpoint de revalidation signé et limité aux chemins autorisés.

---

## 7. ANALYTICS ET COMPTEURS

Ne pas incrémenter naïvement `viewCount` ou `downloadCount` dans les documents Sanity.

Pour la V1 :

- mesurer vues, CTA, formulaires et téléchargements via l'outil analytics validé ;
- masquer les tris « populaires » et « plus téléchargées » tant qu'une source fiable n'existe pas ;
- ne pas ajouter de token d'écriture Sanity uniquement pour des compteurs décoratifs.

Une solution de popularité pourra être spécifiée ultérieurement avec anti-abus, agrégation et source analytique fiable.

---

## 8. CACHE, PREVIEW ET REVALIDATION

- Pages publiées : SSG/ISR.
- Publication Sanity : webhook signé vers une route serveur Next.js.
- Le webhook transmet au minimum type, slug et langue.
- Revalider les URLs concrètes, par exemple `/blog/slug` et `/en/blog/slug`, ainsi que le catalogue concerné.
- Ne pas se limiter à `revalidatePath('/blog/[slug]')` sans résolution du chemin réel.
- Draft Mode doit être protégé, réservé aux éditeurs et désactivable.
- La page `/debug-sanity` est temporaire et doit être supprimée après validation du setup.

---

## 9. PLAN D'IMPLÉMENTATION V3

### M0 — Audit et assainissement

- Lire ce document, le journal complet et la spec Sanity.
- Inventorier le repository, les dépendances, variables, routes, imports et fichiers docs.
- Identifier ce qui est actif, obsolète, orphelin ou incertain.
- Créer un point de restauration Git avant suppression.
- Retirer la stack WordPress et les éléments hors scope prouvés.
- Mettre à jour README, CLAUDE.md, index et journal de décisions.

**Gate :** aucun import/référence WordPress résiduel ; build, lint et typecheck dans l'état attendu.

### M1 — Fondation Sanity

- Vérifier le setup existant au lieu de le recréer.
- Finaliser Studio, client, variables, CORS et sécurité.
- Retirer `/debug-sanity` après validation.
- Définir la matrice code/CMS et les conventions bilingues.

### M2 — Schémas Sanity

- Créer les types nécessaires sans doublon.
- Ajouter validations, previews, groupes de champs et états conditionnels.
- Configurer Portable Text de façon restrictive et accessible.
- Créer seulement les données de référence réelles ou explicitement marquées comme brouillons.

### M3 — Couche d'accès au contenu

- Client Sanity serveur ;
- queries GROQ typées et centralisées ;
- helpers images ;
- gestion `notFound`, erreurs et contenus absents ;
- génération des routes et métadonnées ;
- preview et revalidation sécurisées.

### M4 — Templates dynamiques

- Blog catalogue et article ;
- Ressources catalogue et fiche ;
- Réalisations et étude de cas ;
- équipe et paramètres globaux si validés ;
- responsive, accessibilité et états vides.

### M5 — Pages de refonte et design system

- Porter les maquettes validées en composants réutilisables.
- Préserver l'identité visuelle et les tokens existants.
- Compléter les pages sans maquette avec une version cohérente, puis faire valider.
- Ne jamais inventer de preuve, chiffre, témoignage ou membre d'équipe.

### M6 — Formulaires et intégrations

- Bloqué jusqu'à validation de la destination CRM/leads et du service email.
- Implémenter Contact et capture Ressources avec sécurité et consentement.
- Définir clairement le niveau réel de protection des téléchargements.

### M7 — Migration, SEO et QA

- Importer uniquement les contenus réels validés.
- Finaliser FR/EN et hreflang.
- Appliquer le plan exhaustif de redirections, dont `/nous-joindre` vers `/contact`.
- Tester fonctionnalités, sécurité, responsive, a11y, SEO et performances.
- Cibles : LCP < 2,5 s, INP < 200 ms, CLS < 0,1 ; Lighthouse Performance ≥ 90 et Accessibilité ≥ 95 sur pages représentatives.
- Valider Preview/Staging et plan de rollback avant production.

---

## 10. FICHIERS DOCUMENTAIRES À CONSOLIDER

### À conserver et mettre à jour

- ce document comme index technique maître ;
- `connect-web-decision-log-COMPLET.md` comme journal unique ;
- `specification-blog-ressources-v2-sanity.md`, corrigée par les décisions V3 ;
- les documents Phases 01-22 toujours compatibles ;
- les fichiers de design et maquettes validées.

### À supprimer du dossier actif après intégration de leur historique utile

- `connect-web-phase-23-ADR-001-nextjs-wordpress-headless.md` ;
- `connect-web-phase-23-ADR-002-modelisation-contenu-wp.md` ;
- `connect-web-phase-23-ADR-003-strategie-bilingue.md` ;
- `connect-web-phase-23-technical-architecture.md` dans sa version WordPress ;
- `connect-web-phase-24-implementation-plan.md` dans sa version WordPress ;
- l'ancien `connect-web-00-INDEX.md` ;
- le `connect-web-decision-log.md` incomplet, après vérification que son contenu utile est bien présent dans le journal complet ;
- les guides temporaires terminés, dont le guide setup Sanity une fois toutes ses étapes validées.

Si une politique interne exige de conserver les anciens ADR, les déplacer dans `docs/archive/wordpress-abandoned/` avec un bandeau **OBSOLETE — DO NOT IMPLEMENT**. Ils ne doivent plus apparaître dans l'index actif ni dans le contexte courant de Claude Code.

---

## 11. DÉCISIONS PO ENCORE REQUISES

1. Destination des leads et formulaire Contact.
2. Service d'e-mail transactionnel.
3. Niveau réel de protection des téléchargements.
4. Outil analytics.
5. Réseaux sociaux officiels.
6. Coordonnées définitives.
7. Validation des prix annoncés : 300 000 FCFA pour un site vitrine et 500 000 FCFA pour une boutique.
8. Résultats et témoignages vérifiés des cas phares.
9. Informations et photos d'équipe.
10. Validation du contenu anglais avant publication.

Ces décisions ne bloquent pas M0-M4, mais bloquent les parties correspondantes de M6-M7 et leur mise en production.

---

## 12. DEFINITION OF DONE

La consolidation est terminée lorsque :

- une seule architecture active existe dans les docs et le code ;
- aucune dépendance, variable, route ou import WordPress ne subsiste pour Connect Web ;
- les schémas Sanity correspondent au périmètre validé ;
- aucun lead n'est stocké dans un dataset public ;
- aucun compteur fragile n'est présenté comme une donnée fiable ;
- aucun placeholder, faux lien, faux chiffre ou contenu inventé n'est visible en production ;
- FR/EN, redirections, SEO, sécurité, accessibilité et performances passent la QA ;
- le build, le lint, le typecheck et les tests passent ;
- Preview/Staging est validé par le PO avant toute production ;
- un rollback est documenté.
