# À COMPLÉTER — Connect Web

Liste des informations et fichiers manquants pour finaliser le site.
Coche au fur et à mesure et renvoie les éléments à l'implémentation.

Statut du site : **déployé sur Vercel** (`connectweb-refonte.vercel.app`), FR
uniquement, contenu figé. WordPress non branché.

---

## 🔴 BLOQUANT — avant mise en production (cutover `connect-web.tech`)

### 1. Mentions légales & confidentialité
Fichier : `content/fr/legal.ts`

- [x] Forme juridique — *entreprise individuelle*
- [x] NINEA — *011990604*
- [x] RCCM — *SN.DKR.2025.A.10391*
- [x] Directeur de la publication — *Amadou Diallo*
- [x] Hébergeur — *Vercel Inc.*
- [x] Durée de conservation des données — *3 ans après le dernier contact*
- [ ] **Service d'acheminement d'e-mail** du formulaire → dépend du point 3
      (une fois Resend/autre choisi, on inscrit le nom du prestataire)

### 2. Formulaire de contact → e-mail (actuellement : n'envoie RIEN)
Fichier : `app/api/contact/route.ts` (stub) · variable Vercel `RESEND_API_KEY`

- [ ] Créer un compte **resend.com** (gratuit)
- [ ] Vérifier le domaine `connect-web.tech` (ou `send.connect-web.tech`) —
      ajouter les 3 enregistrements DNS SPF/DKIM/DMARC fournis par Resend
- [ ] Créer une **API Key** (`re_…`)
- [ ] Ajouter `RESEND_API_KEY` dans **Vercel → Settings → Environment Variables**
      (ou l'envoyer à l'implémentation)
- [ ] E-mail de réception : **contact@connect-web.tech** ✅ (déjà connu)

### 3. Tarifs affichés sur les pages d'offre
Fichiers : `content/fr/offres/{boutiques-en-ligne,plateformes-applications,sites-entreprise}.ts`

Ces 3 pages affichent un bloc « Investissement » avec le placeholder
**`[À PARTIR DE]`** (visible tel quel en production — moche).

- [ ] Fournir un montant « à partir de » pour chaque (ex. « à partir de
      1 500 000 FCFA »), **ou**
- [ ] Décider de **masquer le bloc tarif** jusqu'à ce que les montants soient
      fixés (l'implémentation le fait en 5 min).

> Odoo, IA/automatisation et Marketing affichent déjà « Selon périmètre » — OK.

---

## 🟠 IMPORTANT — enrichit le site (non bloquant pour la mise en ligne)

### 4. WordPress headless (débloque `/realisations/[slug]` + contenu Ressources)

**État constaté (`https://admin.connect-web.tech/graphql`) :**
- [x] Endpoint GraphQL en ligne · WPGraphQL **installé et fonctionnel**
- [ ] ⚠️ **Aucun type de contenu personnalisé** : seuls `post`/`page`/`attachment`
      existent. `case_study`, `portfolio_item`, `resource`, `team_member` **à créer**.
- [ ] Installer **WPGraphQL for ACF** (+ ACF)
- [ ] Enregistrer les 4 CPT + 2 taxonomies (`sector`, `offer_category`) avec
      `show_in_graphql => true` → *l'implémentation peut fournir un mu-plugin PHP
      prêt à déposer dans `wp-content/mu-plugins/` (demande-le)*
- [ ] Créer les groupes de champs ACF (noms exacts dans `lib/wordpress/queries/*`
      et `lib/wordpress/types.ts`)
- [ ] Envoyer : `WORDPRESS_AUTH_USER` / `WORDPRESS_AUTH_APP_PASSWORD` si le
      contenu doit être protégé (sinon l'endpoint public suffit)
- [ ] Saisir : les 3 fiches de cas (**ATTA Africa**, **SCOD VTC**,
      **Maison Peinture Sénégal**) + les premiers articles Ressources

> `WORDPRESS_API_URL = https://admin.connect-web.tech/graphql` — connu, sera
> ajouté aux variables Vercel une fois les CPT créés.

### 5. Logos & captures
Dossier : `public/assets/`

- [ ] **Logos clients** (11) détourés, monochrome, SVG ou PNG transparent
      → `public/assets/logos/` — nommer `atta-africa.svg`, `scod-vtc.svg`, etc.
      (bande logos accueil masquée tant qu'absents)
- [ ] **Logos technologies** → créer `public/assets/logos-tech/`, ~40px de haut,
      SVG : Shopify, WooCommerce, WordPress, Next.js, React, Odoo, HubSpot,
      Mailchimp, Klaviyo, n8n (slider « Les outils qu'on maîtrise » masqué tant
      qu'absents)
- [ ] **Capture instance Odoo** Maison Peinture Sénégal → `public/assets/real/`
- [ ] **Capture reporting automatisé** ATTA (anonymisée) → `public/assets/real/`

### 6. Page Agence — équipe
Fichier : `content/fr/agence.ts` + `public/assets/`
La section équipe est **masquée en production** tant qu'elle est vide.

- [ ] Pour chaque membre : **prénom + nom**, **rôle**, **photo carrée**
      (min. 400×400)

### 7. Réseaux sociaux
Fichier : `components/layout/site-nav.ts` (`socialLinks`)
Footer : icônes LinkedIn/Instagram désactivées (« Réseaux actifs à valider »).

- [ ] URL LinkedIn
- [ ] URL Instagram
- [ ] Autres (Facebook, X…) ?

---

## 🟡 À VÉRIFIER — chiffres et formulations

### 8. Chiffres FACT (affichés accueil + /agence + /realisations)
Fichier : `content/fr/chiffres.ts` · `content/fr/agence.ts` · `content/fr/realisations.ts`

- [ ] « 3 ans d'expérience » — toujours exact ?
- [ ] « +20 projets livrés » — toujours exact ? (l'ancien mockup disait +15)
- [ ] « 90 % de clients qui reviennent » — toujours exact ? (mockup : 80 %)
- [ ] « 2 semaines · délai moyen du premier livrable » — toujours exact ?

### 9. « Cinq expertises » (accueil) — remapping des liens
Fichier : `content/fr/services.ts`
Deux cartes n'ont pas de page 1:1 → renvoient vers la plus proche :
- « Conception et développement web » → `/services/sites-entreprise`
- « Logiciels & applications web » → `/services/plateformes-applications`

- [ ] OK avec ce compromis, ou créer des pages dédiées plus tard ?

### 10. FAQ accueil — montants
Fichier : `content/fr/accueil.ts` (`faqItems[0]`)
- [ ] Fournir les montants « à partir de » (site institutionnel / boutique) ou
      garder la réponse actuelle sans montant

---

## ⚪ TECHNIQUE — à traiter plus tard (jalons M4/M7)

- [ ] **i18n réel** : `/en` rend actuellement le FR. Middleware M4 (détection
      langue, hreflang, redirections 301, LangSwitcher). Rédaction EN à part.
- [ ] `package-lock.json` non commité (builds non reproductibles)
- [ ] Webhook de revalidation WP → `/api/revalidate` (M3)
- [ ] Redirections 301 depuis l'ancien site (`/nous-joindre` → `/contact`, etc.)
- [ ] Audit Lighthouse / axe sur les 18 pages (M7)
