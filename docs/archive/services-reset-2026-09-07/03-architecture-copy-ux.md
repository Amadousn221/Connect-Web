# Connect Web — Conception et développement web

## Livrable de conception V1 · Architecture, copy, UX/UI et handoff

**Statut :** proposition de conception à valider par le Product Owner. Aucun code du dépôt n'a été modifié. Ce livrable ne constitue ni une mise en production, ni une validation contractuelle ou SEO.

### Sources et niveau de certitude

- Discovery ciblé v2 : `Fichier markdown(1).md collé`.
- Audit : `audit-conception-web-readonly.md`, daté du 7 septembre 2026.
- Journal : `connect-web-decision-log-COMPLET.md`.
- Captures Connect Web et référence Aponia fournies dans la conversation.
- La source de vérité V3 est citée par l'audit mais n'est pas disponible dans les pièces jointes de cet espace. Claude Code devra vérifier sa version réelle avant l'intégration.

Les éléments FACT sont issus des documents ou constatés par l'audit. Les choix de conception sont des RECOMMENDATIONS en attente de validation PO. Aucune donnée commerciale nouvelle n'est inventée.

## 1. Décisions et arbitrages de conception

**Recommandation principale :** créer une page parente réelle sous `/services/conception-et-developpement-web`. Le slug est proposé, pas encore figé. Elle représente l'expertise web commune aux trois sous-services existants.

Les routes enfants restent inchangées :
- `/services/sites-entreprise`
- `/services/sites-institutionnels-ong`
- `/services/boutiques-en-ligne`

L'expertise distincte « Logiciels & applications web » conserve `/services/plateformes-applications`. Le hub `/services` reste le catalogue général. La page parente approfondit une expertise, elle ne remplace ni le hub ni les pages enfants.

Le CTA principal demeure « Parlons de votre projet ». Lien de contact existant, sans nouveau formulaire embarqué pour cette page. Le visiteur peut contacter directement ou approfondir un sous-service.

**À confirmer par le PO avant publication :**
- La liste exacte des garanties de remise des accès et les conditions contractuelles de propriété/réversibilité.
- Le choix définitif des projets et les observations qui leur sont associées.
- Les tarifs en vigueur (les montants historiques déclarés sont utilisés comme repères, sans les présenter comme un devis).
- Le contenu des éventuels résultats commerciaux ou témoignages, absents tant qu'ils ne sont pas documentés.
- Le statut éditorial de la version EN ; ne pas publier de contenu anglais factice.

## 2. Architecture éditoriale

| Ordre | Section | Fonction distincte | Action |
|---|---|---|---|
| 01 | Hero d'expertise | Comprendre la proposition et voir une preuve immédiatement | Contact / réalisations |
| 02 | Partir du besoin | Expliquer les objectifs possibles et orienter vers trois sous-services | Choisir une offre |
| 03 | Travail réel | Montrer ce qui a été construit, avec observations vérifiables | Voir le portfolio |
| 04 | Les choix qui comptent | Expliquer les critères de qualité et de durabilité | Comprendre les exigences |
| 05 | Maîtrise et continuité | Rendre concrets les accès, responsabilités et conditions de reprise | Contact contextuel |
| 06 | Construire ou faire évoluer | Décrire la méthode et traiter explicitement l'existant | Parler d'un nouveau projet ou d'une refonte |
| 07 | Questions utiles | Résoudre les objections résiduelles, notamment budget et délai | Contact |
| 08 | Sortie | Proposer une action simple sans obliger à passer par un enfant | Contact existant |

La page ne doit pas être raccourcie artificiellement par rapport à Aponia. Une section reste si elle apporte une information nouvelle. Les composants et la narration ne reproduisent ni la référence externe ni l'archétype OfferPage à l'identique.

Le portfolio est visible dès le hero, puis développé dans la troisième section. La propriété des accès est distincte des critères techniques. La refonte est intégrée à la méthode plutôt qu'ajoutée comme une offre secondaire artificielle. Les blocs structurels ne disparaissent pas faute de chiffres ; seuls les éléments de preuve absents sont masqués.

## 3. Copy française complète

### 01 — Hero

Eyebrow : CONCEPTION & DÉVELOPPEMENT WEB

H1 : Un site web pensé pour ce que votre organisation doit accomplir.

Introduction :
Nous concevons des sites d'entreprise, des sites institutionnels et des boutiques en ligne adaptés à vos publics, à votre activité et à vos objectifs. De la première réflexion à la mise en ligne, nous associons qualité de conception, maîtrise technique et connaissance du terrain ouest-africain.

CTA principal : Parlons de votre projet
CTA secondaire : Voir nos réalisations

Réassurance : Réponse sous 24 h · Devis gratuit · Vos accès vous appartiennent

Visuel recommandé : une capture réelle d'un projet sélectionné et validé, sans faux mockup ni résultat chiffré décoratif. Si aucune capture de qualité suffisante n'est disponible, utiliser une composition typographique éditoriale plutôt qu'une image générique.

### 02 — Partir du besoin

Eyebrow : CHOISIR LA BONNE SOLUTION

H2 : Le bon site dépend d'abord de ce que vous voulez en faire.

Un site peut présenter une activité, faciliter la prise de contact, rendre des informations accessibles ou permettre de vendre en ligne. Sa structure et ses fonctionnalités doivent découler de ce rôle, pas d'une liste de technologies à ajouter.

Nous vous aidons à définir le périmètre adapté, que vous partiez de zéro ou que vous souhaitiez faire évoluer un site existant.

**Sites d'entreprise**
Présentez votre activité, clarifiez vos offres et facilitez les prises de contact. Une présence professionnelle pensée pour rassurer vos clients, partenaires et prospects, au Sénégal comme à l'international.

Lien : Découvrir les sites d'entreprise →
Route : `/services/sites-entreprise`

**Sites institutionnels & ONG**
Organisez vos missions, programmes, publications et informations pour les rendre accessibles à vos différents publics. Une conception attentive à la clarté, à l'administration des contenus et aux contraintes de votre organisation.

Lien : Découvrir les sites institutionnels →
Route : `/services/sites-institutionnels-ong`

**Boutiques en ligne**
Proposez une expérience d'achat adaptée à votre marque et à vos marchés. Le catalogue, le parcours de commande, les paiements et les solutions de livraison sont définis selon votre modèle commercial.

Lien : Découvrir les boutiques en ligne →
Route : `/services/boutiques-en-ligne`

**Et si votre besoin dépasse celui d'un site ?**
Espace client, application métier, plateforme transactionnelle ou outil sur mesure : certains projets demandent une architecture spécifique. Nous pouvons vous aider à distinguer le site, l'application et les outils à connecter.

Lien : Explorer les logiciels & applications web →
Route : `/services/plateformes-applications`

### 03 — Réalisations

Eyebrow : RÉALISATIONS

H2 : Le travail réalisé, et les choix derrière chaque projet.

Un portfolio est plus utile lorsqu'il permet de comprendre le contexte et le travail effectué. Voici des réalisations concrètes qui illustrent différentes façons de concevoir une présence web.

**Link Shop — Boutique en ligne**
Une boutique multimarque dont la capture permet de voir la présentation du catalogue et les parcours d'accès aux produits. Le projet illustre le travail de structuration d'une offre e-commerce.

Observation à confirmer sur le site réel avant publication : organisation des catégories et parcours produit.
Image : capture réelle disponible dans l'audit, `public/assets/real/link-shop.jpg`.
Destination provisoire : `/realisations` ; ne pas activer de fiche individuelle inexistante.

**WAS Africa — Site institutionnel**
Un site pour une organisation portant des contenus et des informations liés à ses missions. La réalisation illustre le rôle d'une architecture éditoriale dans la présentation d'une organisation.

Observation à confirmer sur le site réel avant publication : hiérarchie des contenus et navigation des publications.
Image : `public/assets/real/was-africa.jpg`.
Destination provisoire : `/realisations`.

**ADA Voyages — Site d'entreprise**
Une présence web pour une agence de voyages, avec une présentation de son offre et des possibilités de prise de contact. Le projet permet d'illustrer le travail de lisibilité et d'orientation d'un site de services.

Observation à confirmer sur le site réel avant publication : parcours de découverte des offres et accès au contact.
Image : `public/assets/real/ada-voyages.jpg`.
Destination provisoire : `/realisations`.

Action : Voir toutes les réalisations →

Note interne : les descriptions ci-dessus n'affirment aucun résultat commercial. Les observations détaillées doivent être vérifiées sur les sites réels par le PO ou Claude Code avant publication. Si une capture est manquante, remplacer le visuel par une autre preuve réelle ou masquer la carte. Ne jamais produire de faux dashboard ou de résultat inventé.

### 04 — Les choix qui comptent

Eyebrow : CONCEPTION & QUALITÉ

H2 : Les bonnes décisions ne se voient pas toujours. Leurs effets, si.

Un site doit être agréable à consulter, mais aussi compréhensible, utilisable et simple à faire évoluer. Voici les critères qui guident notre travail et que vous pouvez demander à n'importe quel prestataire.

**Une information facile à trouver**
La navigation, les contenus et les appels à l'action sont organisés pour aider chaque visiteur à comprendre votre activité et à accomplir sa démarche.

**Une expérience adaptée aux usages mobiles**
Nous concevons les parcours pour différents écrans, avec une attention aux performances, à l'accessibilité et aux conditions de connexion des publics concernés.

**Des contenus que votre équipe peut faire vivre**
Les outils d'administration et les possibilités de mise à jour sont définis selon votre organisation, vos ressources et la fréquence de vos publications.

**Une base technique maintenable**
L'architecture, les intégrations et les fonctionnalités sont choisies pour répondre au besoin réel, avec une attention à la sécurité, aux tests et à l'évolution du projet.

Phrase de transition :
Une bonne conception doit aussi rester compréhensible et maîtrisable par l'organisation qui l'utilise.

Note interne : WCAG AA et Core Web Vitals sont des objectifs de qualité à vérifier, pas des certifications ou scores acquis à afficher sans audit.

### 05 — Maîtrise et continuité

Eyebrow : VOS ACCÈS, VOTRE CONTINUITÉ

H2 : Vous devez pouvoir faire évoluer votre site, avec nous ou autrement.

Un projet web implique un domaine, un hébergement, des comptes, parfois des licences et des services tiers. Nous clarifions dès le départ qui en détient les accès et quelles responsabilités reviennent à chacun.

**Ce que nous clarifions pendant le projet**
- La titularité et l'administration du nom de domaine.
- Les comptes d'hébergement, de CMS et des services utilisés.
- Les accès nécessaires à l'exploitation et aux mises à jour.
- Les modalités de remise et de documentation.
- Les conditions de maintenance, de reprise et d'évolution.

**Ce qui est défini contractuellement**
Les droits sur le code sur mesure, les contenus produits, les composants sous licence et les abonnements tiers dépendent de la nature du projet et des dispositions convenues. Nous les précisons dans le périmètre et les documents contractuels.

Conclusion :
L'objectif est que votre organisation comprenne son environnement numérique et puisse en assurer la continuité, sans dépendance inutile à un seul interlocuteur.

Action discrète : Parlons de votre projet →

Note interne : ne pas convertir les éléments « clarifiés » en garanties systématiques sans validation du PO et vérification des contrats. Ne jamais afficher ou transmettre de véritables identifiants dans la page.

### 06 — Construire ou faire évoluer

Eyebrow : NOTRE MÉTHODE

H2 : Une méthode qui s'adapte à votre point de départ.

Créer un site, améliorer l'existant ou reprendre un projet déjà engagé ne demande pas exactement le même travail. Nous commençons par comprendre la situation avant de décider ce qu'il faut construire.

**01 — Cadrer**
Nous clarifions les objectifs, les publics, les contenus, les contraintes et les fonctionnalités nécessaires. Pour un site existant, nous identifions ce qui fonctionne et ce qui doit évoluer.

Livrables possibles : diagnostic, périmètre, priorités, recommandations.

**02 — Concevoir**
Nous organisons les contenus, définissons les parcours et travaillons la direction visuelle. Les choix sont présentés et validés avant le développement.

Livrables possibles : arborescence, parcours, maquettes, spécifications utiles.

**03 — Développer et vérifier**
Nous intégrons les fonctionnalités retenues et réalisons les vérifications fonctionnelles, responsive et techniques prévues au projet. Les corrections sont traitées avant la mise en ligne.

Livrables possibles : environnement de recette, fonctionnalités, contrôles et corrections.

**04 — Mettre en ligne et transmettre**
Nous préparons la mise en production, vérifions les éléments essentiels et organisons les modalités de remise, de maintenance et d'accompagnement convenues.

Livrables possibles : mise en ligne, accès, documentation et accompagnement selon le contrat.

**Vous avez déjà un site ?**
Une refonte ne signifie pas nécessairement tout reconstruire. Un audit permet de déterminer s'il faut améliorer, migrer, reprendre ou repenser l'existant. Nous tenons compte des contenus utiles, des fonctionnalités et du référencement acquis dans la préparation du projet.

Action : Parlons de votre site actuel → (même route `/contact`)

### 07 — Questions utiles

Eyebrow : AVANT DE DÉMARRER

H2 : Les questions qui permettent d'avancer plus sereinement.

**Combien coûte la création d'un site web ?**
Le budget dépend du type de site, des contenus, des fonctionnalités, des intégrations et de l'accompagnement. À titre de repère, nos tarifs déclarés démarrent à 300 000 FCFA pour un site vitrine et à 500 000 FCFA pour une boutique en ligne. Le devis précise les prestations et le périmètre retenus.

Note interne : confirmer les montants en vigueur avant publication.

**Combien de temps faut-il prévoir ?**
Le délai dépend de la complexité, de la disponibilité des contenus et des validations. Notre délai moyen déclaré pour un premier livrable est de deux semaines. Il ne correspond pas nécessairement au délai de mise en ligne final, qui est défini selon le projet.

**Faut-il refaire entièrement mon site actuel ?**
Pas systématiquement. Un audit permet d'identifier ce qui peut être conservé, amélioré ou remplacé. La décision tient compte des objectifs, de l'état technique, des contenus et des contraintes de migration.

**Pourrai-je modifier les contenus moi-même ?**
Nous prévoyons une interface d'administration lorsque le projet le nécessite. Les possibilités de mise à jour, les accès et l'accompagnement sont définis selon la solution retenue et les besoins de votre équipe.

**Qui gère le domaine, l'hébergement et les licences ?**
Les responsabilités sont précisées au démarrage. Nous clarifions la titularité des comptes, les modalités de facturation, les accès et les conditions liées aux services ou licences tiers.

**La maintenance est-elle incluse ?**
La maintenance et l'assistance dépendent du périmètre convenu. Le devis précise les prestations incluses, leur durée et les modalités d'un éventuel accompagnement après livraison.

**Comment choisir entre un site et une application sur mesure ?**
Le choix dépend des usages. Un site peut suffire pour présenter, informer ou vendre. Des processus métier, des rôles complexes ou des fonctionnalités spécifiques peuvent justifier une application. Nous cadrons le besoin avant de recommander une architecture.

### 08 — Sortie

Eyebrow : VOTRE PROJET

H2 : Décrivons ce dont vous avez besoin. Nous définirons la suite ensemble.

Nouveau site, refonte ou projet encore à clarifier : présentez-nous votre contexte, vos objectifs et vos contraintes. Nous pourrons vous orienter vers le bon périmètre et les prochaines étapes.

CTA principal : Parlons de votre projet
Destination : `/contact`

Réassurance : Réponse sous 24 h · Devis gratuit

Contact secondaire : `contact@connect-web.tech`

Ne pas recréer de formulaire sur cette page. Réutiliser la route de contact existante et son intégration actuelle. Le CTA peut transmettre une intention préremplie seulement si le formulaire existant supporte ce comportement de façon vérifiée.

## 4. Direction UX/UI détaillée

### Principes transverses

- Utiliser exclusivement les tokens réels de `styles/tokens.css` et les composants existants. La maquette autonome peut représenter les intentions mais n'est pas une source de valeurs CSS de production.
- Typographies : Newsreader pour la hiérarchie éditoriale, Hanken Grotesk pour le corps.
- Angles vifs ; seuls les éléments circulaires autorisés par le design system peuvent être arrondis.
- CTA small/minimalistes, une action principale cohérente.
- Paragraphes justifiés dans les largeurs adaptées au design, sans dégrader la lisibilité mobile.
- Toutes les cartes d'un même groupe ont une hauteur cohérente. Titres, textes et CTA suivent une grille commune ; aucune hauteur fixe qui coupe le contenu.
- Blanc, off-white et surfaces pétrole alternent avec intention, sans multiplication de dégradés décoratifs.
- Images réelles uniquement ; jamais de faux résultat, faux appareil ou faux dashboard.
- Interactions accessibles au clavier, focus visible, réduction du mouvement respectée.
- Aucune animation qui détourne l'attention du contenu ou dégrade les performances.

### Composition par section

**Hero :** fond pétrole, composition éditoriale asymétrique. Texte sur une largeur maîtrisée et aperçu réel de projet dans la colonne opposée. Sur mobile, texte d'abord, image ensuite ; aucune taille de titre qui déborde. Les deux CTA restent visibles sans superposition.

**Orientation :** fond blanc, court bloc introductif puis trois cartes équilibrées. Un bloc transversal plus léger pour les applications. Les trois cartes ne répètent pas une longue liste de fonctionnalités ; elles distinguent les usages et conduisent aux pages enfants. Sur mobile, une colonne avec CTA accessible directement.

**Preuve :** fond off-white. Un projet mis en avant peut occuper une composition éditoriale plus large, avec deux cartes complémentaires. Ne pas utiliser `ProjectSlider` en import brut : son contenu et son ID sont couplés à la homepage. Étudier `CaseTeaserCarousel` ou une composition native réutilisant `ProjectCard`. Ne pas activer de lien vers une fiche inexistante.

**Qualité :** fond blanc, grille éditoriale de quatre critères. Une numérotation, des séparateurs et des titres brefs suffisent ; pas de quatre pictogrammes génériques. Les critères sont formulés comme des questions que le client peut poser.

**Maîtrise :** surface pétrole sombre, texte lisible et deux colonnes de responsabilités. À gauche, ce que l'on clarifie ; à droite, ce qui relève des accords contractuels. L'objectif est d'informer sans recréer un contrat juridique en miniature.

**Méthode :** fond blanc ou off-white, roadmap de quatre étapes avec détails accessibles au clic. Un encart « Vous avez déjà un site ? » permet de montrer que le parcours de refonte commence par un diagnostic plutôt que par une reconstruction imposée.

**FAQ :** fond clair, accordéon accessible, largeur de lecture maîtrisée. Questions réellement distinctes, réponses concrètes, pas de listes de fonctionnalités dissimulées dans chaque réponse.

**Sortie :** surface pétrole, titre éditorial, texte court et CTA small. Ne pas recopier le formulaire ni ajouter une deuxième grosse section de réassurance.

## 5. Parcours et interactions

Parcours A — prospect prêt : Hero → Contact.
Parcours B — prospect indécis : Hero → Orientation → Page enfant → Contact.
Parcours C — prospect qui veut vérifier : Hero → Réalisations → Hub portfolio → Contact.
Parcours D — site existant : Hero → « Faire évoluer » / Méthode → Contact.
Parcours E — besoin applicatif : Orientation → Logiciels & applications web.

Une interaction de choix « Créer / Faire évoluer » est possible dans la méthode : elle adapte les explications, mais aucun contenu essentiel ne doit être inaccessible sans JavaScript. Ce n'est pas un formulaire de qualification et ne collecte aucune donnée.

La navigation, les trois sous-services et le hub doivent être cohérents. La carte homepage parente ne doit plus rediriger vers Sites d'entreprise par défaut une fois la nouvelle route créée. Les liens descendants et le fil d'Ariane doivent être actualisés sans modifier les anciennes URLs des enfants.

## 6. SEO et données

Le parent cible l'intention large de conception/développement de site web, sans prétendre connaître les volumes de recherche. Les pages enfants approfondissent les intentions entreprise, institutionnel et e-commerce.

Avant publication : vérifier Search Console si disponible, les requêtes et le contenu actuellement indexé, les métadonnées, le canonical, le sitemap et les liens internes. Ne pas inventer de mots-clés mesurés ni de volumes. Ne pas créer de redirection depuis une URL ancienne sans mapping validé.

Ne pas créer une version EN à partir d'une traduction automatique non relue. La stratégie FR racine / `/en` est conservée, mais l'audit indique que l'i18n n'est pas encore fonctionnel. La page EN ne sera publiée/indexée qu'avec un contenu réel et les mécanismes globaux appropriés.

Les pages statiques d'offres restent dans le modèle actuel sauf décision contraire. Ne pas créer un type Sanity service ni réintroduire WordPress pour cette refonte.

## 7. Checklist de revue indépendante — Claude IA

Le reviewer doit vérifier la proposition, pas réécrire le Discovery.

- La page est-elle convaincante par elle-même, au-delà du routage ?
- La narration est-elle originale, sans reprendre l'ordre ni les formulations Aponia ?
- Chaque section apporte-t-elle une information nouvelle ?
- Le portfolio montre-t-il des faits réellement vérifiables, sans résultats supposés ?
- Le contraste entre page parente et enfants est-il suffisamment clair ?
- La propriété des accès est-elle concrète et juridiquement prudente ?
- Les audiences « site existant » et « décideur interne » sont-elles couvertes ?
- Les CTA et les liens correspondent-ils aux routes réellement disponibles ?
- Le contenu donne-t-il une impression d'AI-slop, de jargon, de promesse vague ou de surdesign ?
- Le responsive, les interactions et les états manquants sont-ils correctement définis ?
- Les données, tarifs et garanties à confirmer sont-ils clairement isolés ?

Renvoyer un verdict PASS / PASS WITH CONDITIONS / REWORK, puis un tableau Critical / High / Medium / Minor. Proposer uniquement les corrections nécessaires. Ne pas régénérer l'ensemble du document.

## 8. Handoff futur à Claude Code (après validation PO et review)

Ce n'est pas une autorisation de coder. Une fois la conception validée, Claude Code devra :
1. Lire la V3 réelle et l'audit, puis vérifier les fichiers du dépôt.
2. Confirmer le slug et produire un plan d'implémentation court, avec fichiers touchés et critères d'acceptation.
3. Créer la page parente en réutilisant le design system sans cloner un template générique.
4. Réconcilier la navigation homepage / méga-menu / hub sans introduire une quatrième source de données incohérente.
5. Préserver les trois routes enfants et les fonctionnalités existantes.
6. Réutiliser les composants de réalisations pertinents ; ne pas activer les fiches absentes.
7. Conserver le formulaire de contact existant, Resend et HubSpot.
8. Mettre à jour les métadonnées, le sitemap et le maillage selon les décisions SEO validées.
9. Tester responsive, les deux thèmes, clavier, focus, liens, build, régressions et performances.
10. Livrer un rapport QA et attendre la validation PO avant déploiement.

Aucune refonte de CMS, aucun nettoyage WordPress hors périmètre et aucune mise en production implicite.

## 9. Décisions restantes — minimales

Le PO valide la direction éditoriale et la composition. Avant publication, il confirme les garanties publiques d'accès, les montants en vigueur et la sélection définitive du portfolio. Claude Code vérifie la V3 et les routes réelles avant de proposer le plan. Les résultats/témoignages manquants ne bloquent pas la page : ils sont simplement omis.
