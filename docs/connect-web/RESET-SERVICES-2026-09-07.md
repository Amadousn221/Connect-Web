# RESET SERVICES — 2026-09-07

**Type :** nettoyage contrôlé du périmètre éditorial et visuel des pages Services.
**Auteur :** Claude Code, sur validation explicite du PO (« Validé exécuté »).
**Point de restauration Git :** tag `services-arch-pre-reset-2026-09-07` + branche
`backup/services-arch-2026-09-07` (HEAD `ecf4749`, locaux — non poussés).

---

## 1. Pourquoi

Plusieurs architectures, spécifications et maquettes de pages Services ont été
produites puis intégrées de façon partielle ou contradictoire (archétype
`OfferPage` générique + 2 pages « bespoke » récentes + specs successives). Le
résultat ne correspondait plus de façon fiable aux directions validées.

Décision PO : **remettre à zéro** l'architecture des pages Services, conserver
l'accueil et tout le socle, puis reconstruire chaque page séparément via le
workflow validé :

> ChatGPT (discovery + archi + copy + UX/UI) → PO (validation structure/maquettes)
> → Claude IA (revue qualité / anti-AI-slop) → Claude Code (audit + plan + implé + tests)
> → PO (validation avant prod).

Chaque page aura sa propre intention, sa propre structure, sa propre composition.
Aucun template générique n'impose le même ordre de sections (DECISION 04, renforcée).

---

## 2. Supprimé (historique conservé dans Git)

**Composants de sections spécifiques Services :**
- `components/sections/offer/` — archétype `OfferPage` + 11 sections
  (`OfferHero`, `PainList`, `DeliverableGrid`, `EditorialWedge`, `WhyGrid`,
  `FeaturedCase`, `BenefitRows`, `OfferProcess`, `PricingBlock`, `SystemBridge`,
  `FinalCta`) + CSS.
- `components/sections/conception-web/` — sections `Cw*` (page parente).
- `components/sections/sites-entreprise/` — sections `Se*` (refonte Sites d'entreprise).
- `components/sections/ConceptionWebPage.tsx`, `SitesEntreprisePage.tsx`,
  `ServicesHubPage.tsx` (+ `.module.css`).

**Contenu / copy spécifique Services :**
- `content/offres.ts` (types de l'archétype).
- `content/fr/offres/` — 7 fichiers de copy des pages d'offre.
- `content/fr/conceptionWeb.ts`, `content/fr/sitesEntreprise.ts`,
  `content/fr/servicesHub.ts`.

## 3. Archivé (statut OBSOLETE explicite)

`docs/archive/services-reset-2026-09-07/` (+ `README.md` avec bandeau
`OBSOLETE — DO NOT IMPLEMENT`) :
- `00-LIRE-EN-PREMIER.md` … `05-journal-decisions-complet.md` — discovery / archi /
  copy / design / journal de la page parente « Conception et développement web ».
- `refonte-sites-entreprise-architecture-copy-ux.md` — spec refonte Sites d'entreprise.
- `M2-feature-spec.md`, `M2-implementation-plan.md` — « archétype page d'offre »
  (déplacés depuis `docs/`).

## 4. Adapté (minimal, anti-lien-mort)

- **9 routes `app/[locale]/services/*/page.tsx`** — réécrites pour rendre
  `<ServicePlaceholder />` (page d'attente), `metadata.robots = { index: false }`.
- **`components/sections/ServicePlaceholder.tsx` (+ CSS)** — nouveau. Bande pétrole
  sobre (design system existant), fil d'Ariane, titre, 1 phrase, CTA `/contact`,
  lien accueil. Aucune section, aucun template réutilisable.
- **`components/layout/site-nav.ts`** — `megaMenuBuild` remis à son état d'avant
  le 2026-09-07 (4 liens, sans l'entrée « page parente »). `megaMenuSystem` /
  `megaMenuConseil` inchangés.
- **`content/fr/services.ts`** — carte accueil #1 : `cta.href` → `/services`
  (la composition visuelle de l'accueil est **inchangée**).
- **`app/sitemap.ts`** — les 10 entrées `/services*` retirées (pages `noindex`),
  à ré-ajouter page par page.
- **`CONNECT-WEB-SOURCE-DE-VERITE-V3.md`** — addendum de statut daté (aucune
  décision modifiée).
- **`docs/connect-web/connect-web-decision-log-COMPLET.md`** — note de statut sous
  DECISION 23/24 (aucune décision effacée).

## 5. Conservé tel quel (vérifié)

Page d'accueil et toutes ses sections + `content/fr/{accueil,services,systemExplorer,
casPhares,differentiators,chiffres,methode,technos}.ts` · header / méga-menu / footer ·
design system, tokens, styles globaux · `content/types.ts` · `components/ui/*` ·
`ContactSection` + `ContactForm` + intégrations Resend/HubSpot · `CaseTeaserCarousel`,
`FaqAccordion`, `ProjectCard`, `RealisationsGrid` (briques réutilisables) · pages
Contact / Agence / Blog / Ressources / Réalisations / légales · config Next / Vercel /
Sanity · routes API · `robots.ts` · i18n · historique Git.

> `content/fr/accueil.ts` exporte encore `pickCaseTeasers` (helper), désormais sans
> consommateur — conservé pour la reconstruction. Non bloquant.

## 6. État des routes Services après nettoyage

| Route | Avant | Après |
|---|---|---|
| `/services` | Hub `ServicesHubPage` | Page d'attente (`noindex`) |
| `/services/conception-et-developpement-web` | Page parente bespoke | Page d'attente (`noindex`) |
| `/services/sites-entreprise` | Refonte bespoke | Page d'attente (`noindex`) |
| `/services/sites-institutionnels-ong` | `OfferPage` | Page d'attente (`noindex`) |
| `/services/boutiques-en-ligne` | `OfferPage` | Page d'attente (`noindex`) |
| `/services/plateformes-applications` | `OfferPage` | Page d'attente (`noindex`) |
| `/services/crm-erp-integrations` | `OfferPage` | Page d'attente (`noindex`) |
| `/services/ia-automatisation` | `OfferPage` | Page d'attente (`noindex`) |
| `/services/marketing-acquisition` | `OfferPage` | Page d'attente (`noindex`) |
| `/services/conseil-strategie` | `OfferPage` | Page d'attente (`noindex`) |

Toutes les routes restent **accessibles** (HTTP 200). Aucune redirection, aucun
lien mort. Les liens de l'accueil, du méga-menu et du footer pointent vers ces
pages d'attente.

## 7. Anciennes spécifications désormais obsolètes

- `docs/archive/services-reset-2026-09-07/*` (voir §3).
- Implications d'architecture de page de DECISION 23 (journal de décisions).
- Toute référence à « archétype page d'offre » / « 7 pages d'offre » comme
  spécification active.

## 8. Décisions stratégiques qui restent valides

- **DECISION 25** — Sanity (CMS), stack Next.js / Vercel.
- **DECISION 04** — pas de template générique ; chaque page a sa propre intention
  et sa propre composition (renforcée par ce reset).
- **DECISION 23 (partie taxonomie)** — 5 expertises + Conseil.
- **DECISION 24** — technos = preuves, jamais des offres autonomes.
- Règles globales : design system existant, footer actuel, formulaire de contact
  existant, données réelles, aucune preuve inventée.
- Tout `CONNECT-WEB-SOURCE-DE-VERITE-V3.md` hors périmètre Services.

## 9. À reconstruire (une page à la fois, workflow validé)

1. Hub `/services`.
2. Conception et développement web (page parente ou non — à retrancher).
3. Sites d'entreprise.
4. Sites institutionnels & ONG.
5. Boutiques en ligne.
6. Logiciels & applications web.
7. ERP / CRM.
8. IA & automatisation.
9. Marketing & acquisition.
10. Conseil & stratégie.

Pour chaque page : discovery + archi + copy + UX/UI (ChatGPT) → validation PO →
revue Claude IA → audit + plan court + implé + tests (Claude Code) → validation
PO avant prod. Ré-ajouter la route au `sitemap.ts` à la livraison.

## 10. Vérifications effectuées

- `npm run typecheck` : voir rapport de commit.
- `npm run lint` : voir rapport de commit.
- `npm run build` : selon disponibilité machine (sinon build Vercel).
- Accueil (SSR), header / méga-menu / footer, pages non concernées, formulaire de
  contact, liens internes, imports orphelins : voir rapport de commit.

**Aucun déploiement automatique. Pas de promotion Vercel sans validation PO.**
