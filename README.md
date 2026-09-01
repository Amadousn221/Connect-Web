# Connect Web — frontend

Refonte du site de l'agence Connect Web (Dakar). Frontend **Next.js (App Router)**
en **SSG + ISR** avec revalidation à la demande, alimenté par **Sanity**
(Headless CMS, **DÉCISION 25** — remplace l'approche WordPress + WPGraphQL).
Sanity Studio est **embarqué** dans l'app à `/studio`. Déploiement **Vercel**.

Reconstruction propre — aucune reprise du code de `connect-web.tech` (DECISION 19).

> Documents de référence — dans `docs/connect-web/` :
> `connect-web-decision-log-COMPLET.md` (décisions 01-25),
> `specification-blog-ressources-v2-sanity.md` (spec Blog + Ressources),
> `setup-sanity-guide-po.md` (guide PO setup Sanity — temporaire, Étape 0).
> Autres docs projet (à la racine du dossier parent) :
> `connect-web-phase-23-technical-architecture.md` + `ADR-001/002/003`,
> `connect-web-phase-24-implementation-plan.md`, et les maquettes `.dc.html`
> + `Connect Web - Design Foundations.dc.html`.
> Les ADR-001/002 (choix WordPress) sont **historiques** depuis la DÉCISION 25.

## Démarrage

```bash
npm install
cp .env.example .env.local   # puis renseigner (voir « Variables d'environnement »)
npm run dev                  # http://localhost:3000  (redirige vers /fr)
```

- Site : http://localhost:3000
- Sanity Studio : http://localhost:3000/studio (login Sanity natif)

Autres scripts :

| Script | Rôle |
|---|---|
| `npm run build` / `npm start` | build de production / serveur |
| `npm run lint` | ESLint (`eslint-config-next`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test:wordpress` | *(legacy)* test WPGraphQL — obsolète depuis la DÉCISION 25 |

## Avancement — milestones (plan Phase 24)

| # | Milestone | État |
|---|---|---|
| **M0** | Scaffold & design system (tokens, Header, Footer, MegaMenu, ThemeToggle) | ✅ fait |
| **M1** | ~~WordPress headless~~ → **Sanity** (DÉCISION 25) | 🔁 remplacé — pipeline Sanity : Étape 0 (setup) ✅ · Étapes 2-3 (schemas + templates) à venir |
| M2 | Pages statiques (Accueil + 7 pages d'offre) | ✅ fait (contenu hardcodé) |
| M3 | Contenu dynamique Sanity (Blog, Ressources) + `/api/revalidate` | à venir (Étape 3 Sanity) |
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
  studio/[[...tool]]/    Sanity Studio embarqué (/studio, hors [locale])
  debug-sanity/          ⟵ page TEMPORAIRE de test connexion (Étape 0, à supprimer)
  not-found.tsx
components/layout/        Header, Footer, MegaMenu, MobileDrawer, ThemeToggle, LangSwitcher
sanity/
  env.ts                 variables env Sanity, typées + validées
  schemas/               schemaTypes (vide — Étape 2) + documents/ objects/ blocks/
  lib/                    client.ts (public + preview), image.ts (urlFor), queries.ts
sanity.config.ts          config du Studio embarqué
sanity.cli.ts             config de la CLI Sanity
lib/
  i18n/                   config des locales + helper localePath
  wordpress/              ⟵ client WPGraphQL — DORMANT depuis la DÉCISION 25, aucun import
styles/
  tokens.css             tokens portés de Design Foundations + :root des maquettes
  globals.css
wordpress/                ⟵ code du WordPress headless — LEGACY, archive de référence
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

Les blocs optionnels (résultats, témoignages, galeries, section équipe…) sont
**réellement optionnels** : quand la donnée est absente dans le CMS, elle arrive à
`null` et le composant **masque tout le bloc** — jamais d'encart vide, jamais de
guillemets sans citation. Chaque composant conditionnel est testé aussi dans le
cas « champ absent ».

## Variables d'environnement

Voir `.env.example`. Aucune valeur secrète n'est versionnée (les valeurs réelles
vont dans `.env.local`, jamais dans `.env.example`). En résumé :

| Variable | Requise à | Fournie par |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Étape 0 | `qt5dnwqm` (public) |
| `NEXT_PUBLIC_SANITY_DATASET` | Étape 0 | `production` (public) |
| `SANITY_API_READ_TOKEN` | Étape 3 (draft mode) | PO (token Sanity « Viewer ») |
| `SANITY_REVALIDATE_SECRET` | Étape 3 (webhook) | à générer, partagé Sanity ↔ Next |
| `NEXT_PUBLIC_SITE_URL` | build/SEO | — |
| `RESEND_API_KEY` / `HUBSPOT_ACCESS_TOKEN` | formulaire contact | PO |

## Legacy — WordPress headless

Le dossier `wordpress/` (mu-plugins PHP) et `lib/wordpress/` (client WPGraphQL)
datent de l'approche antérieure. **Obsolètes depuis la DÉCISION 25** : conservés
comme archive de référence, non importés par l'app, à retirer dans une étape
ultérieure une fois Sanity pleinement en place.
