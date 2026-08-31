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
- [x] Prestataires tiers — *Vercel (hébergement) · Resend (e-mails) · HubSpot (CRM)*

### 2. Formulaire de contact → Resend + HubSpot (le code est branché)
Fichier : `app/api/contact/route.ts` (branché — dégrade proprement sans les clés)

**Resend** (e-mail transactionnel vers contact@connect-web.tech) :
- [ ] Créer un compte **resend.com** (gratuit)
- [ ] **Domains → Add** `connect-web.tech` (ou `send.connect-web.tech`) → ajouter
      les 3 enregistrements DNS (SPF/DKIM/DMARC) chez le registrar
- [ ] **API Keys → Create** → récupérer `re_…`
- [ ] Vercel → Environment Variables :
      `RESEND_API_KEY` = `re_…`
      `CONTACT_FROM_EMAIL` = `Connect Web <site@connect-web.tech>` (domaine vérifié)

**HubSpot** (gestion des prospects) :
- [ ] Compte HubSpot (Free CRM)
- [ ] **Settings → Integrations → Private Apps → Create** — scope
      `crm.objects.contacts.write` (+ `.read`)
- [ ] Vercel → Environment Variable : `HUBSPOT_ACCESS_TOKEN` = `pat-…`

> Tant que les clés ne sont pas là : le formulaire affiche « Reçu » et la
> demande est journalisée (visible dans les logs Vercel), mais rien n'est
> envoyé. Dès que `RESEND_API_KEY` est posée, l'e-mail part.

### 3. Tarifs — fournis ✅
Fichiers : `content/fr/offres/*.ts` + `content/fr/accueil.ts` (FAQ)
- [x] Site vitrine → **à partir de 3 000 000 FCFA**
- [x] Boutique e-commerce → **à partir de 500 000 FCFA**
- [x] Plateforme métier → **« Selon les besoins »**
- [x] Odoo / IA / Marketing → **« Selon périmètre »**

---

## 🟠 IMPORTANT — enrichit le site (non bloquant pour la mise en ligne)

### 4. WordPress headless (débloque `/realisations/[slug]` + contenu Ressources)

**État constaté (`https://admin.connect-web.tech/graphql`) :**
- [x] Endpoint GraphQL en ligne · WPGraphQL **installé et fonctionnel**
- [ ] ⚠️ **Aucun type de contenu personnalisé** : seuls `post`/`page`/`attachment`
      existent. `case_study`, `portfolio_item`, `resource`, `team_member` **à créer**.
- [ ] Installer **ACF** + **WPGraphQL for ACF**
- [ ] **Déposer `wordpress/mu-plugins/connect-web-content-model.php`** dans
      `wp-content/mu-plugins/` sur le serveur → enregistre les 4 CPT, 2 taxonomies
      et tous les groupes de champs ACF (voir `wordpress/README.md`)
- [ ] Vérifier le schéma dans GraphiQL + `npm run test:wordpress`
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

### 10. FAQ accueil — montants ✅
Fichier : `content/fr/accueil.ts` (`faqItems[0]`)
- [x] Réponse mise à jour avec les tarifs indicatifs (vitrine 3M, boutique 500k)

---

## ⚪ TECHNIQUE — à traiter plus tard (jalons M4/M7)

- [ ] **i18n réel** : `/en` rend actuellement le FR. Middleware M4 (détection
      langue, hreflang, redirections 301, LangSwitcher). Rédaction EN à part.
- [ ] `package-lock.json` non commité (builds non reproductibles)
- [ ] Webhook de revalidation WP → `/api/revalidate` (M3)
- [ ] Redirections 301 depuis l'ancien site (`/nous-joindre` → `/contact`, etc.)
- [ ] Audit Lighthouse / axe sur les 18 pages (M7)
