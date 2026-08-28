# Connect Web — frontend

Refonte du site de l'agence Connect Web (Dakar). Frontend **Next.js (App Router)**
en **SSG + ISR** avec revalidation à la demande, alimenté par un **WordPress
headless** (Hostinger) via **WPGraphQL**. Déploiement **Vercel**.

Reconstruction propre — aucune reprise du code de `connect-web.tech` (DECISION 19).

> Documents de référence (à la racine du dossier parent) :
> `connect-web-decision-log.md`, `connect-web-phase-23-technical-architecture.md`
> + `ADR-001/002/003`, `connect-web-phase-24-implementation-plan.md`, et les 15
> maquettes `.dc.html` + `Connect Web - Design Foundations.dc.html`.

## Démarrage

```bash
npm install
cp .env.example .env.local   # puis renseigner (voir « Variables d'environnement »)
npm run dev                  # http://localhost:3000  (redirige vers /fr)
```

Autres scripts :

| Script | Rôle |
|---|---|
| `npm run build` / `npm start` | build de production / serveur |
| `npm run lint` | ESLint (`eslint-config-next`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test:wordpress` | test de bout en bout WPGraphQL (Milestone M1) |

## Avancement — milestones (plan Phase 24)

| # | Milestone | État |
|---|---|---|
| **M0** | Scaffold & design system (tokens, Header, Footer, MegaMenu, ThemeToggle) | ✅ fait |
| **M1** | WordPress headless (modèle de contenu en code + client WPGraphQL) | ✅ code prêt — en attente du provisioning Hostinger par le PO |
| M2 | Pages statiques (Accueil + 7 pages d'offre) | à venir |
| M3 | Contenu dynamique WP (cas, portfolio, ressources) + `/api/revalidate` | à venir |
| M4 | i18n réel (routing fr racine / `/en`, hreflang) | à venir |
| M5 | Contact & formulaire → CRM | bloqué : outil CRM à choisir (PO) |
| M6 | Finition visuelle des pages sans maquette | continu |
| M7 | QA technique / visuelle / perf / SEO / a11y | à venir |

## Arborescence (cible Phase 24)

```
app/
  layout.tsx              <html>, polices, script anti-FOUC thème
  page.tsx               redirige / → /fr (M4 : middleware i18n)
  [locale]/              fr (racine) | en
    layout.tsx           Header + Footer
    page.tsx             Accueil (coquille M0, contenu en M2)
  not-found.tsx
components/layout/        Header, Footer, MegaMenu, MobileDrawer, ThemeToggle, LangSwitcher
lib/
  i18n/                   config des locales + helper localePath
  wordpress/              client WPGraphQL + requêtes + types (M1)
styles/
  tokens.css             tokens portés de Design Foundations + :root des maquettes
  globals.css
wordpress/                ⟵ code du WordPress headless, PAS servi par Next (voir ci-dessous)
```

## Design system

- **Tokens** : `styles/tokens.css` — couleurs clair/sombre, échelle typo (Newsreader
  + Hanken Grotesk), espacement base 4px, **radius 0** (angles vifs, signature),
  ombres, motion. Portés fidèlement de `Design Foundations` et du bloc `:root`
  partagé des 15 maquettes. **On ne redessine rien.**
- **Thème** : clair par défaut ; sombre = `:root[data-theme="dark"]` (pétrole nuit),
  piloté par `ThemeToggle`, persisté dans `localStorage.cw_theme`. Script anti-FOUC
  dans `app/layout.tsx`. Comportement identique aux maquettes (pas de
  `prefers-color-scheme`).
- **Styling** : CSS Modules + variables CSS globales, **pas de Tailwind** —
  recommandation ADR / §6 architecture (fidélité visuelle, moins de dérive au
  portage). Réversible plus tard si l'équipe le souhaite.

## Règle d'intégrité — champs optionnels

Les blocs `automation_chapter`, `result`, `testimonial`, `external_url`, `gallery`
(cas client) et toute la section équipe sont **réellement optionnels**. Quand la
donnée est absente dans WordPress, elle arrive à `null` et le composant **masque
tout le bloc** — jamais d'encart vide, jamais de guillemets sans citation. Chaque
composant conditionnel est testé aussi dans le cas « champ absent ».

## Variables d'environnement

Voir `.env.example`. Aucune valeur n'est versionnée. En résumé :

| Variable | Requise à | Fournie par |
|---|---|---|
| `WORDPRESS_API_URL` | M1 | PO (endpoint WPGraphQL Hostinger) |
| `WORDPRESS_IMAGE_HOSTNAME` | M1 | PO (hostname de la médiathèque WP) |
| `WORDPRESS_AUTH_USER` / `WORDPRESS_AUTH_APP_PASSWORD` | optionnel (preview) | PO |
| `REVALIDATE_SECRET` | M3 | à générer, partagé WP ↔ Next |
| `NEXT_PUBLIC_SITE_URL` | build/SEO | — |

## WordPress headless

Le dossier `wordpress/` contient le **code** du back-office de contenu (à déployer
sur l'instance Hostinger), pas quelque chose que Next.js sert. Voir
`wordpress/README.md`.
