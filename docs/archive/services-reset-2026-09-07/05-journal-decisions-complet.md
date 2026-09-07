# CONNECT WEB — JOURNAL DE DÉCISIONS

Document vivant. Chaque décision validée par le Product Owner (PO) est consignée ici et ne doit pas être ré-ouverte sans raison explicite.
Convention : FACT · RECOMMENDATION · EVIDENCE REQUIRED · DECISION (validée PO).

---

## PHASE 01 — Audit → Décisions

**DECISION 01 — Positionnement (BLOCKING 1).**
Socle retenu : **Direction B — « Des plateformes qui font vendre »**, trajectoire B → A (montée progressive vers le système-intégrateur à mesure que la preuve se construit), couche de marque empruntée à C (craft + fierté ouest-africaine).
*Validé PO.*

**DECISION 02 — Droits de preuve (BLOCKING 2).**
Le PO autorise à **citer les clients, montrer les résultats et afficher des témoignages**. Débloque les vraies études de cas.
*Validé PO.*

**DECISION 03 — Architecture d'offre : hiérarchie, pas catalogue plat.**
On garde tous les services, mais on abandonne la grille de 6 pastilles égales. Deux niveaux :
- **Niveau 1 — CE QU'ON PROUVE** (offres phares, adossées au portfolio) : Boutiques en ligne qui vendent · Sites institutionnels & ONG · Sites d'entreprise (B2B/export) · Plateformes & applications web.
- **Niveau 2 — CE QU'ON CONNECTE** (le système, ambition B→A) : Odoo, ERP/CRM & intégrations · IA & automatisation · Marketing & acquisition.
Les technos (Shopify, WooCommerce, Odoo, PWA) sont des **preuves de compétence** citées sous le résultat, jamais des titres d'offre.
*Validé PO (principe « mettre en avant les services » interprété comme mise en hiérarchie).*

**DECISION 04 — Principe de contenu directeur.**
1. **Aucune page template générique.** Chaque page possède sa propre hiérarchie / architecture, gouvernée par une **intention de page unique**.
2. **Informer avant de vendre.** Le contenu transmet l'information, suscite l'intérêt et la prise de conscience, pour attirer puis convertir — la vente se fait par la démonstration d'expertise.
Garde-fous : informer ≠ tout déverser (une action principale claire par page) ; compositions uniques mais **design system unique** (cohérence des composants/tokens).
*Validé PO.*

---

## CARTE DE PREUVE (mobilisable)

| Techno / offre | Preuve | Statut |
|---|---|---|
| Shopify | **ATTA Africa** (atta-africa.com) | FACT — vérifié. Marque DTC premium, cross-border, multi-devises (EUR/USD/CAD/XOF), Mobile Money (Wave/Orange/Free via PayDunya) + international (PayPal/Apple Pay/Shop Pay). **Meilleur asset premium. Absent du site actuel → à ériger en case study phare.** |
| WooCommerce | Link Shop (linkshop.sn) | Déclaré PO |
| Odoo ERP | Maison Peinture Sénégal (quincaillerie) | FACT (déclaré) — ferme le trou de preuve ERP. Projet interne, sans URL publique → case study écrit + captures + résultat. |
| IA & automatisation | **ATTA Africa** (automatisation) | FACT — DECISION 13. Reporting mensuel, traitement commande, relance panier. **IA pure (agent/chatbot) = capacité sans preuve.** |
| Marketing & acquisition | — | Offre seule, **aucune preuve** → Niveau 2, ne jamais présenter comme réalisation |

Portfolio public existant (10, tous en ligne) : Luxury Bijouterie by KN, ADA Voyages, SCOD VTC, Link Shop, Marjan Bijouterie, DDS Medical, Sunu Thiossane, WAS Africa, Tamou Fishing International, Fahamu Africa. + ATTA Africa (non listé). **= 11 réalisations.**

---

**DECISION 05 — « Certifié » : NON.**
FACT (PO) : Connect Web **n'est pas** partenaire certifié. Retirer le mot « certifié » **partout** (page CRM/ERP actuelle notamment). Formulation autorisée : « on maîtrise ces outils ».
*Validé PO.*

**DECISION 06 — Client Odoo identifié.**
FACT (PO) : **Maison Peinture Sénégal** (quincaillerie / distribution peinture). Aucune empreinte publique exploitable (vérifié). → Case study **écrit + captures + résultat**, avec accord client. Pas d'URL.
*Validé PO.*

---

## PHASE 02 — Repositionnement (VALIDÉ)

Document : `connect-web-phase-02-repositioning.md`. Verdict : **PASS** (conditions levées).

**DECISION 07 — Positioning statement final (variante B, angle local × international).**
> « Connect Web, c'est le craft d'une agence internationale avec la maîtrise du terrain ouest-africain : des boutiques et des plateformes qui vendent vraiment — paiement mobile, vente transfrontalière — et que vous possédez entièrement. »
*Validé PO.*

**DECISION 08 — Priorité de cible confirmée.**
Cœur commercial = e-commerce & plateformes génératrices de revenu + marques cross-border. Institutionnel/ONG = preuve de portée. Système (Odoo) = expansion B→A.
*Validé PO.*

Autres éléments Phase 02 (validés implicitement avec le socle) : 4 piliers de message ; offre 4 (prouvés) + 3 (système) + Conseil = porte d'entrée ; ATTA = case study phare.

---

## PHASE 03 — Product Discovery (LIVRÉ)

Document : `connect-web-phase-03-discovery.md`. Verdict : **PASS**.
- Échelle de conscience → « informer avant de vendre » = nécessité de marché.
- 5 segments (A marque e-commerce ⭐ · B plateforme ⭐ · C B2B/export · D institution/ONG = portée · E opérations complexes = expansion).
- Parcours d'entrée, points de fuite (Croire / Se relier / Comprendre), table objections→réponses, besoins d'apprentissage par segment.
- **Action recommandée :** 3 entretiens clients (ATTA, SCOD, Maison Peinture) pour témoignages + objections + résultats réels.

---

## PHASE 04 — Requirements (LIVRÉ)

Document : `connect-web-phase-04-requirements.md`. Verdict : **PASS WITH CONDITIONS**.
- 14 catégories d'exigences testables et priorisées.
- Exigences phares : études de cas **internes** orientées résultat · ATTA en cas phare · dimension humaine · espace pédagogique · CTA unique · retrait « certifié » + compteurs non vérifiables + liens sociaux cassés.

**DECISION 09 — Bilingue FR/EN.**
Site bilingue complet. Schéma recommandé : **FR à la racine** (continuité SEO) **+ `/en/`**, hreflang. Schéma d'URL final confirmé en P23. L'anglais sert la vente cross-border.
*Validé PO.*

**DECISION 10 — Tarification : « à partir de » + placeholders.**
Modèle d'affichage retenu : **« à partir de » par offre de Niveau 1**. Pendant la conception, montants = **placeholders explicites `[À PARTIR DE — PLACEHOLDER]`**, remplacés par les **vrais montants (fixés par le PO) avant mise en ligne**. Garde-fou : aucun chiffre inventé ne part en production comme réel.
*Validé PO.*

---

## PHASE 05 — Information Architecture (LIVRÉ)

Document : `connect-web-phase-05-information-architecture.md`. Verdict : **PASS**.
- Sitemap dérivé de l'offre 4+3 et des 5 segments ; aucune page de remplissage.
- **2 pages nouvelles justifiées** : **Agence** et **Ressources**.
- Études de cas **internes** ; ATTA/SCOD/Maison Peinture = cas phares.
- URL : FR racine + `/en`, plan de redirection 301 signalé (P23).

---

## PHASE 06 — Sitemap & Navigation (LIVRÉ)

Document : `connect-web-phase-06-sitemap-navigation.md`. Verdict : **PASS**.
- Nav principale : Services · Réalisations · Agence · Ressources + CTA (Contact = le CTA).
- Méga-menu Services en 3 blocs (Niveau 1 dominant · Le système · Conseil).
- Nav mobile : drawer plein écran, accordéon, CTA + téléphone/WhatsApp prioritaires.
- Footer corrigé (liens sociaux réels — URLs PENDING) + maillage complet.

**DECISION 11 — CTA principal unique.**
« Parlons de votre projet » / EN « Let's talk », partout. Secondaires contextuels (Voir les réalisations, Voir ce projet, Demander l'audit). Retirer « Demander une soumission ». **Uniformiser sur « devis »** (choix appliqué en P08 : « devis » partout, y compris Hero et A11).
*Recommandé P06 → appliqué et confirmé en P08.*

---

## PHASE 07 — Page Architecture (LIVRÉ — Parties 1 + 2)

Documents : `connect-web-phase-07-page-architecture-part1.md` + `-part2.md`. Verdict : **PASS**.
- **Partie 1 :** Accueil (12 sections) · archétype page d'offre Niveau 1 (B1–B11) · gabarit étude de cas (C1–C11).
- **Partie 2 :** Services (hub) · archétype Niveau 2 (E1–E12, asymétrie de preuve) · Conseil · Réalisations (hub) · **Agence** · **Ressources** · Contact.
- Toutes les pages du sitemap sont architecturées, sans remplissage.

**DECISION 12 — Cas phares approuvés par les clients.**
FACT (PO) : **ATTA Africa, SCOD VTC, Maison Peinture Sénégal** ont approuvé d'être présentés en études de cas. *Restent à collecter : résultats chiffrés + témoignages (entretiens).*
*Validé PO.*

**DECISION 13 — L'automatisation a une preuve réelle (ATTA).**
FACT (PO) : suite d'automatisations livrée pour **ATTA Africa** — reporting mensuel automatisé (ventes par taille/produit/zone · CA · unités · best-sellers · analyse + envoi), automatisation du traitement de commande, e-mails de relance panier. → La page « IA & automatisation » peut **prouver l'automatisation** (cas ATTA). Les fonctionnalités **purement IA** (agent/chatbot) restent capacité sans preuve. **ATTA = double preuve (Shopify + automatisation) = incarnation de « du site au système ».**
*Validé PO.*

**Notes PO (P07) :** Photos d'équipe (Agence H3) = le PO fournira, placeholder maintenu, ne rien inventer. Ressources = recherche de contenu avec le PO plus tard, architecture figée, contenu différé.

---

## PHASE 08 — Content Architecture (LIVRÉ — complète en FR)

**Verdict Phase 08 : PASS WITH CONDITIONS** (solide et complète en français ; conditions = données réelles à collecter + version EN à produire).

**Documents livrés :**
1. `...part1-voice-messaging.md` — Voix (6 attributs), formules signature, glossaire anti-jargon, 7 règles de copy, parité bilingue.
2. `...part2-hero-copy.md` — Hero Accueil (option retenue + 2 variantes).
3. `...part3-accueil-A3-A11.md` — Reste de l'Accueil : bande confiance, wedge expliqué, cas phares (teasers), offre 4+3, du site au système, process, ressources (placeholder), FAQ, CTA final + métadonnées.
4. `...part4-cas-phares.md` — 3 études de cas : **ATTA** (avec chapitre automatisation), **SCOD VTC**, **Maison Peinture Sénégal**. Sert aussi de base d'entretien client.
5. `...part5-offres-niveau1.md` — 4 pages d'offre Niveau 1 (Boutiques · Plateformes · Entreprise · Institutionnel/ONG).
6. `...part6-niveau2.md` — 3 pages Niveau 2 (Odoo/ERP · IA & automatisation · Marketing), asymétrie de preuve respectée.
7. `...part7-hub-routage.md` — Services (hub) · Conseil & stratégie · Réalisations (hub).
8. `...part8-agence-contact-ressources.md` — Agence · Contact · Ressources (structure, contenu différé).

**DECISION 14 — Séquencement de rédaction : cas phares avant pages d'offre.**
RECOMMENDATION validée par le PO : rédiger les 3 cas phares **avant** les pages d'offre, car ils sont le socle de preuve réutilisé partout (Accueil A5, offres B5). ATTA en tête (cas double). Ordre appliqué.
*Validé PO.*

**DECISION 15 — Terminologie « devis » uniformisée.**
Appliqué en P08 : « devis » partout (Hero, A11, offres, contact). « Soumission » retiré. (Exécution de DECISION 11.)
*Appliqué.*

**Choix de rédaction P08 consignés (RECOMMENDATION, non bloquants — ajustables) :**
- **A5 / cas phares** : ligne de résultat en **placeholder chiffré** `[RÉSULTAT — à confirmer]` (choix PO).
- **A9 (Ressources en avant)** : écrite en **copy placeholder**, titres différés (choix PO). Couplée au hub Ressources : ni l'un ni l'autre ne part en ligne vide.
- **Prix Niveau 2** : « selon périmètre », **pas** de « à partir de » fixe (conforme P07). Asymétrie assumée avec Niveau 1.
- **Page Marketing** : **aucune section preuve** (volontairement absente), aucun cas/logo/chiffre. L'honnêteté est l'argument.
- **Offre Institutionnel/ONG** : ancrage prix **discret** (angle budget-conscient), pas de « à partir de » en avant.
- **Agence H3 (équipe)** : ne part **jamais** en ligne avec un placeholder visible. Masquée ou page en attente tant que les vraies personnes ne sont pas fournies.
- **Paiement mobile+international** : repris **uniquement** là où il est vrai pour le projet (systématique pour Boutiques/ATTA ; `[À CONFIRMER]` pour Plateformes/SCOD).

---

## PHASE 09 — PRD (LIVRÉ + VALIDÉ)

Documents : `connect-web-phase-09-PRD-part1.md` + `-part2.md`. **Verdict : PASS WITH CONDITIONS.**
- Format : PRD unique consolidé (choix PO) ; partie exigences en **user stories MoSCoW** + critères Given/When/Then (skill `requirements`).
- Contenu : vision, objectifs + signaux de succès (dont signaux d'intégrité), 5 segments, 5 user flows, inventaire des 18 pages (intention/action/preuve/statut), 15 Must + 7 Should + 4 Could + Won't explicite, **registre d'intégrité opposable**, cartographie des dépendances EVIDENCE REQUIRED, critères de sortie.
- Constat clé : **aucune dépendance EVIDENCE REQUIRED ne bloque le passage au design.**

**DECISION 16 — PRD validé.**
Le PO valide le PRD tel quel (hiérarchie MoSCoW incluse). La Phase 09 est close. Débloque Phase 10 — Product Specifications, dernière étape avant la bascule vers Claude Design (P11).
*Validé PO.*

**Choix PO consignés en P09 :**
- Format PRD : unique consolidé.
- Exigences : skill `requirements` (MoSCoW + Given/When/Then).
- US-015 (bilingue) = Must-de-périmètre, **réalisation contenu EN séquencée après le PRD**.

---

## PHASE 10 — Product Specifications (LIVRÉ)

Documents : `connect-web-phase-10-product-specs-part1.md` + `-part2.md`. **Verdict : PASS WITH CONDITIONS.**
- **Partie 1 (transverse) :** modèle de données / types de contenu (case_study, portfolio_item, offer, team_member, resource) avec champs requis/optionnels et **états vides** ; spec conversion (CTA, réassurance, formulaire + états) ; spec responsive (comportement) ; specs non-fonctionnelles **chiffrées** (CWV LCP<2,5s/INP<200ms/CLS<0,1, WCAG AA concret, SEO, i18n, taxonomie analytics) ; **portail d'intégrité** (checklist de mise en prod opposable).
- **Partie 2 (par page) :** Accueil détaillé ; archétypes spécifiés **une seule fois** (Offre N1 ×4, Cas phare ×3, Offre N2 ×3) avec données par instance ; hubs, Conseil, Agence, Contact, Ressources ; **inventaire agrégé des composants requis** (alimente P15 sans le remplacer).
- **Constat de conception clé :** plusieurs blocs sont **conditionnels** (AutomationChapter, ResultBlock, TestimonialBlock, ExternalLinkButton, TeamGrid) → le design doit soigner l'**état absent** autant que l'état présent. La moitié de l'intégrité du site en dépend.

**Choix / recommandations P10 (ajustables) :**
- Breakpoints de référence proposés (< 640 / 640–1024 / > 1024) — à confirmer par Design en P18.
- Taxonomie d'événements analytics proposée (RECOMMENDATION).
- Budget perf posé en cibles CWV vertes ; règle opposable « perf prime sur l'effet ».

---

## DÉCISIONS EN ATTENTE (bloquent une phase à venir)

- **Vrais montants « à partir de »** : PO à fournir **avant mise en ligne**.
- **Schéma d'URL bilingue final** + plan de redirection 301 → P23 (technique).
- **Choix des filtres Réalisations** (par offre / par secteur / mixte) → dépend du volume final de cas.
- **Fourchette prix indicative Niveau 2 ?** → optionnel, à trancher (actuellement « selon périmètre » sans montant).
- **Ancrage prix Institutionnel** : montant « à partir de » ou angle budget seul ? → actuellement angle budget (ajustable).

---

## EVIDENCE REQUIRED / EN ATTENTE (données réelles à collecter)

- **Accord clients cas phares : OBTENU** ✅ (ATTA, SCOD, Maison Peinture).
- **Résultats chiffrés + témoignages** des 3 cas phares : entretiens à mener (clients d'accord). Placeholders `[RÉSULTAT — à confirmer]` / `[TÉMOIGNAGE — à collecter]` en attendant. Jamais inventé.
  - *Séquence d'entretien recommandée :* ATTA → Maison Peinture → SCOD. Questionnaire 8–10 questions (base fournie dans part4).
  - *SCOD est le cas le plus vide (peu de faits sourcés) → à prioriser à l'entretien, ne pas publier avant.*
- **Contenu équipe Agence** (noms, rôles, photos réels) : PO à fournir. Ne rien inventer. Confirmer aussi « petite équipe / pas de sous-traitance ».
- **Coordonnées Contact** : 2 téléphones, WhatsApp, e-mail, adresse Dakar — PLACEHOLDER.
- **URLs réseaux sociaux réels** (footer) : PO.
- **Contenu Ressources** : sélection + rédaction des articles réels, avec le PO.
- **Captures/visuels réels** : ATTA (boutique + rapport), SCOD, Maison Peinture (Odoo), + OG images. Le Hero Accueil doit remplacer le mockup décoratif par du vrai travail.
- **Confirmation détail « traitement de commande » ATTA** (pour l'expliquer sans surpromettre).
- **PWA : SCOD VTC est-il techniquement une PWA ?** Sinon « application web ». *Mineur.*

---

## CHANTIER À PART — VERSION ANGLAISE (EN)

**Statut : à produire après le PRD (choix PO).** Parité réelle FR/EN (pas traduction molle). Formules signature ont une version EN fixe (voir voix). Couvre l'ensemble du contenu P08. Sous `/en/`.

---

## CORRECTIFS DE FINITION (hors refonte, à traiter en parallèle)

- Liens sociaux footer cassés : `{{LINKEDIN}}` / `{{INSTAGRAM}}` / `{{FACEBOOK}}`.
- Incohérence terminologique « soumission » vs « devis » → **résolu** (DECISION 15 : « devis » partout).
- Compteurs animés non vérifiables (20+/10j/100%) → retirés (remplacés par preuve nommée).
- « Partenaires certifiés » → retiré partout (DECISION 05).

---

## PROCHAINE PHASE — POINT DE BASCULE

**Phase 11 — Creative Direction.** **Premier livrable de Claude Design.**
Jusqu'à P10 = QUOI / POURQUOI (Opus, terminé). À partir de P11 = COMMENT ÇA SE VOIT (identité visuelle, direction créative, puis UX architecture, design principles, tokens, composants, interactions, responsive, motion, page UI). Tout le socle stratégie + contenu + specs est figé et sert de base ; le design ne suppose rien.
**En parallèle possible :** version EN (parité bilingue) du contenu P08.

**Règle maintenue :** aucune ligne de code avant Design Handoff complet (P22).

---
*FACT = vérifié. RECOMMENDATION = proposition. EVIDENCE REQUIRED = à confirmer avant usage. DECISION = validée PO. Aucune donnée commerciale inventée.*


## PHASE 17-24 — REARCHITECTURE HOMEPAGE (LIVRÉ + VALIDÉ)

Documents : `connect-web-homepage-rearchitecture-audit.md` (Design Handoff V2) + `connect-web-phase-02-repositioning-V2.md`. **Verdict : PASS.**

**DECISION 17 — Positionnement élargi assumé.**
Connect Web conçoit, développe et connecte les outils numériques qui font tourner une organisation — sites, applications, plateformes sur mesure, e-commerce, ERP, automatisations. Élargissement assumé du positionnement e-commerce initial (DECISION 01/07) vers un studio digital généraliste à quatre piliers : présenter/crédibiliser, vendre, digitaliser/opérer, automatiser.
*Validé PO.*

**DECISION 18 — Architecture multi-page confirmée.**
Structure en 18 pages maintenue (pas de single-page). Chaque page garde une intention unique (cohérent DECISION 04).
*Validé PO.*

**DECISION 19 — Aponia = référence structurelle uniquement.**
Aponia sert de référence de composition/structure pour le travail de design. Jamais de vocabulaire, storytelling ou identité visuelle empruntés. Règle absolue, non négociable.
*Validé PO.*

**DECISION 20 — Hero Option A validé.**
H1 : « Nous concevons, développons et connectons les outils numériques qui font tourner votre organisation. » Sous-titre mentionnant le développement web sur mesure. Trust line : « Réponse sous 24 h · Devis gratuit · Vos accès vous appartiennent ».
*Validé PO. (Note : H1 raccourci ultérieurement lors de la vague 4 de corrections — voir Correctifs de finition V2.)*

**DECISION 21 — Marqueurs de différenciation maintenus.**
Trois marqueurs conservés dans toute communication : *standard international*, *terrain ouest-africain*, *propriété des accès* (le client garde toujours ses accès/comptes/domaine).
*Validé PO.*

**DECISION 22 — Chiffres de réassurance réintégrés — FACT déclaré PO.**
Chiffres réels déclarés par le PO, à utiliser tels quels sans arrondi ni exagération : **3 ans d'expérience · +20 projets livrés · 2 semaines délai moyen de premier livrable · 90% de clients qui reviennent**. Section « Chiffres/En chiffres » réintégrée sur la homepage.
*Validé PO.*

**DECISION 23 — Architecture Services : 5 expertises + Conseil, sous-services en tags.**
6 cartes services : carte parente « Conception et développement web » avec sous-services en tags (Sites institutionnels & ONG, Sites d'entreprise, E-commerce), « Logiciels & applications web », 3 cartes Niveau 2 (ERP/CRM, IA & automatisation, Marketing & génération de prospects), « Conseil & stratégie » en entrée pleine largeur.
*Validé PO.*

**DECISION 24 — Règle technos = preuves, jamais cartes autonomes.**
Confirmation et renforcement de DECISION 03 : Shopify, WooCommerce, Odoo, HubSpot, Mailchimp, Klaviyo apparaissent uniquement comme lignes de preuve/badges sous une carte de service parente. Jamais de carte dédiée à une techno. Maximum 3-5 tags par carte.
*Validé PO.*

---

## CORRECTIFS DE FINITION V2 (post-déploiement, 4 vagues)

Vagues de corrections appliquées après premier déploiement de la homepage V2 (hors refonte structurelle, ajustements de detail) :
- Hero : image de fond cover réelle (remplace composite), H1 raccourci.
- Bande réassurance digitale (stats de marché sourcées) ajoutée puis retirée au profit du repositionnement de la section Chiffres (DECISION 22) juste après le Hero, avec icônes.
- Boutons CTA uniformisés en format small/minimaliste sur toute la homepage.
- Paragraphes justifiés, typographie de sous-titres uniformisée (-2px, taille unique).
- Section Wedge (« Trois choses qu'on ne trouve nulle part ailleurs ») condensée, titres agrandis (+2px vs corps de texte).
- Sliders (Cas phares, Clients) : 3 cartes entièrement visibles, navigation par bande basse au lieu de flèches, drag souris.
- Section « On montre, on ne prétend pas » (manifeste d'intégrité) retirée ; remplacée par un slider de logos **clients réels** (pas partenaires — cohérent DECISION 05) en position basse de page.
- Section « Pour qui » supprimée de la homepage.
- Section méthode (« On ne commence jamais par coder ») transformée en roadmap visuelle animée.
- Données réelles intégrées : email `contact@connect-web.tech`, adresse « Rond-point SCAT-URBAM, G49 · Dakar, Sénégal », montants FAQ (site vitrine à partir de 300 000 FCFA, boutique à partir de 500 000 FCFA selon fonctionnalités).
*Validé PO au fil des 4 vagues.*

---

## PHASE 25 — PIVOT HEADLESS CMS : SANITY REMPLACE WORDPRESS + ACF

**DECISION 25 — Remplacement du Headless CMS : Sanity au lieu de WordPress + ACF.**

Contexte : l'architecture technique initiale (DECISION technique 17-22 / ADR 001-003, phase technique 23-24) prévoyait WordPress headless (Hostinger) + ACF Pro + WPGraphQL pour porter le Blog et les Ressources. Ce choix est **abandonné avant toute mise en œuvre** (aucun WordPress n'a été installé en production).

Raison : simplicité de setup, gratuité (pas de licence ACF Pro à acheter), API native structurée (GROQ), pas de sous-domaine ni de plugins à sécuriser/maintenir.

Nouvelle architecture : **Sanity → API (GROQ) → Next.js**. Sanity Studio embedded dans le projet Next.js à la route `/studio`. Dataset `production` (public). Project ID `qt5dnwqm`.

Principe non négociable : ce changement touche uniquement le CMS. L'architecture Next.js validée, les fonctionnalités, contenus, structures éditoriales, SEO, performances, routes, design system, UI/UX et composants existants sont strictement conservés.

Conséquences techniques actées :
- Custom Post Types WordPress → Document types Sanity (`blogPost`, `resource`, `blogCategory`, `blogTag`, `resourceCategory`, `author`, `realisation` minimal).
- Contenu Gutenberg → Portable Text (renderer custom à construire).
- Taxonomies WordPress → Document types dédiés + reference fields.
- WPGraphQL → GROQ natif Sanity.
- ACF Pro (payant) → schemas Sanity (gratuit, inclus).

Auteur unique des contenus Blog/Ressources : **Amadou Diallo · Product Owner & Fondateur, Connect Web** (nom, photo et bio affichés publiquement — choix assumé pour l'autorité SEO/E-E-A-T et la performance de partage LinkedIn, plutôt qu'une signature "Connect Web" générique).

Règle de capture email sur les Ressources : obligatoire uniquement pour les ressources dont le format est un **fichier à télécharger** (guide PDF, livre blanc, checklist, template, étude). Accès direct sans formulaire pour les contenus consultables en ligne (formation vidéo, webinaire, glossaire).

*Validé PO.*

**Document de référence à jour :** `specification-blog-ressources-v2-sanity.md` (remplace toute version antérieure faisant référence à WordPress/ACF pour le Blog et les Ressources).

---

## DÉCISIONS EN ATTENTE — MISE À JOUR (ajouts post-P16)

- **D1 (spec Sanity) — Stockage des leads capturés** (formulaires ressources) : Resend + document Sanity `lead` recommandé, à valider avant Étape 3 templates.
- **D2 (spec Sanity) — Service d'envoi email transactionnel** : Resend recommandé, à valider avant Étape 3.
- **D3 (spec Sanity) — Fichiers PDF téléchargeables** : liens signés temporaires recommandés (vs fichiers publics), à valider avant Étape 3.
- **D4 (spec Sanity) — Réseaux sociaux actifs** pour la sidebar Blog/Ressources : à confirmer avec le PO (LinkedIn Connect Web ? LinkedIn perso Amadou Diallo ? WhatsApp Business ?).
- **Sanity — downgrade plan** : le projet est actuellement en Growth Trial (30 jours). Downgrade vers plan Free à faire avant expiration pour éviter facturation automatique.

---
*Addendum généré pour compléter le journal de décisions jusqu'à DECISION 25. Mêmes conventions que le document source : FACT = vérifié, RECOMMENDATION = proposition, EVIDENCE REQUIRED = à confirmer avant usage, DECISION = validée PO. Aucune donnée commerciale inventée.*
