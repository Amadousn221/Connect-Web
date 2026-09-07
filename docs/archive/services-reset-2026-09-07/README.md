# OBSOLETE — DO NOT IMPLEMENT

**Statut : archivé le 2026-09-07 — ne plus utiliser comme spécification active.**

Ces documents décrivent des architectures éditoriales et visuelles de **pages Services**
qui ont été produites successivement puis intégrées de façon partielle ou contradictoire.
Le Product Owner a décidé une **remise à zéro contrôlée** des pages Services
(voir `docs/connect-web/RESET-SERVICES-2026-09-07.md`).

Aucune de ces architectures ne doit être reprise telle quelle. Les pages Services
seront reconstruites **une par une** via le workflow validé
(ChatGPT → PO → revue Claude IA → Claude Code → PO).

## Contenu

| Fichier | Objet | Remplace / superseded par |
|---|---|---|
| `00-LIRE-EN-PREMIER.md` … `05-journal-decisions-complet.md` | Discovery + architecture + copy + design + journal de la page parente « Conception et développement web » | Reset 2026-09-07 — à refaire |
| `refonte-sites-entreprise-architecture-copy-ux.md` | Discovery + architecture + copy + UX/UI de la refonte « Sites d'entreprise » | Reset 2026-09-07 — à refaire |
| `M2-feature-spec.md` | Feature spec « pages statiques (Accueil + 7 pages d'offre) », archétype `OfferPage` | Partie Accueil : superseded par la refonte Accueil (voir journal). Partie « 7 pages d'offre » : reset 2026-09-07 |
| `M2-implementation-plan.md` | Plan d'implémentation associé | idem |

## Ce qui reste valide (hors de cette archive)

- `CONNECT-WEB-SOURCE-DE-VERITE-V3.md` — stack, Sanity (DECISION 25), sécurité, bilingue, périmètre V1.
- `docs/connect-web/connect-web-decision-log-COMPLET.md` — journal des décisions ; seules les **implications d'architecture de page** de DECISION 23/24 sont supersedées (la taxonomie « 5 expertises + Conseil » et DECISION 04 « pas de template générique » restent valides).
- La page d'accueil actuelle et tous les composants partagés.
