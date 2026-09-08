# Connect Web — Handoff Hub Services

Statut : maquette V6 validée par le Product Owner le 8 septembre 2026. Implémentation et recette visuelle à effectuer. Aucun accord de déploiement en production.

## 1. Mission et sources

Reconstruire uniquement `/services` selon la maquette validée. Auditer le dépôt réel, proposer un plan court, implémenter, tester et fournir les captures réelles desktop/mobile dans les deux thèmes. L’accueil reste hors périmètre.

- `CONNECT-WEB-SERVICES-HUB-ARCHITECTURE-COPY-V1.md` : source éditoriale Opus originale, inchangée, à lire intégralement.
- `maquette-hub-services-v6.html` : référence UX/UI validée, fragment HTML autonome dans sa logique de démonstration. Pour inspection locale, l’insérer dans une page HTML avec charset UTF-8 et meta viewport. Ses styles et scripts sont des références de comportement, pas le code de production à copier.
- Ce handoff : arbitrages PO, écarts éditoriaux explicitement acceptés, contraintes de production et QA. Il complète les deux sources, sans les remplacer.
- Dépôt réel : source technique pour routes, tokens, composants, contenus Sanity, formulaires et intégrations.

Les anciennes maquettes V1–V5 sont remplacées par V6. Les anciens documents WordPress headless ne priment pas sur le stack actuel Next.js App Router + Sanity.

## 2. Audit préalable obligatoire

Identifier les composants Header, Footer, ContactForm, les thèmes, les tokens, les fontes Newsreader/Hanken Grotesk, les routes Services et les ressources de réalisations. Préserver leurs identités et intégrations.

Relever les routes réelles de toutes les destinations. Préserver les URLs existantes. Confirmer les nouvelles routes WordPress, Shopify et Refonte avant création ; les suggestions de slugs du fichier Opus ne sont pas une autorisation de remplacer une route existante.

Repérer les conflits entre CSS de la maquette et tokens du dépôt. Réutiliser les tokens ; documenter les équivalences et les éventuels écarts visuels. Ne pas refondre le design system.

## 3. Modifications éditoriales validées

Le H1 reste : « Concevoir votre présence. Développer vos outils. Connecter vos systèmes. »

Le chapô du Hero est remplacé par :

> À Dakar, nous concevons vos sites, développons vos outils et connectons vos systèmes. Cinq expertises complémentaires, adaptées à votre activité, avec des accès qui restent les vôtres.

Autres modifications ciblées acceptées pendant le challenge UX :

- S4 : remplacer la promesse de rentabilité « vaudra son coût en quelques mois » par « Cela peut justifier un développement sur mesure. »
- S3 Refonte : « en préparant la transition pour préserver vos contenus et votre référencement » remplace la promesse absolue « sans casser votre référencement ni vos contenus ».
- S6 : ne pas reprendre « tournent chaque jour » pour un ensemble comprenant un rapport mensuel.
- S11 SCOD : la maquette utilise « Projet de plateforme VTC. » ; les détails fonctionnels restent à confirmer. Ne pas publier les notes internes de validation.

La validation UX/UI ne valide pas automatiquement les faits commerciaux. Les fonctionnalités ATTA/Odoo détaillées, les tarifs, les engagements de réponse et le délai moyen de deux semaines restent à contrôler avant publication. Ne pas ajouter de résultats chiffrés, témoignages, certifications ou fonctionnalités sur la seule base d’une capture.

## 4. Hero partagé pour les 13 pages

Créer ou adapter un unique composant `ServiceHero` réutilisé par toutes les pages Services, avec contenu par configuration : eyebrow, H1, introduction, CTA principal/secondaire, image, point focal desktop/mobile, overlay, ligne de réassurance facultative. Les variantes doivent être nommées et justifiées ; aucun code dupliqué page par page.

Pétrole sombre, photo d’ambiance cover pleine largeur, overlay lisible, alignement gauche. Aucun collage d’écrans. La photographie incluse dans la maquette est un extrait provisoire d’une ancienne capture ; récupérer l’asset original approprié dans le dépôt, sans publier le recadrage de capture comme photo de production.

Repères V6 : H1 Newsreader 36–61 px selon largeur ; mobile 37 px ; introduction 16 px, interligne 1,7, largeur maximale 650 px. Espacement vertical Hero desktop environ 65/56 px, mobile 43/38 px. Adapter au contenu sans hauteur fixe qui le coupe. CTA principal vers le formulaire in-page ; secondaire vers les réalisations.

## 5. Composition — ordre figé

| Section | Desktop | Mobile |
|---|---|---|
| S1 Hero | Photo sombre, typographie prioritaire, deux CTA compacts | Contenu fluide, point focal spécifique |
| S2 Expertises | Cinq lignes numérotées, titre + descriptif + flèche | Description sous le titre ; navigation par ancres vers S3–S7 |
| S3 Web | Trois usages en colonnes ; spécialisations en trois lignes ; preuve ATTA séparée | Une colonne, les six destinations restent visibles |
| S4 Logiciels | Deux colonnes : introduction/CTA et périmètre | Lecture verticale, contenu intégral |
| S5 ERP/CRM | Même ossature, fond crème, preuve Maison Peinture | Fond pleine largeur |
| S6 IA/automatisation | Même ossature, distinction livré/exploré visible | Deux blocs distincts, jamais distinction par couleur seule |
| S7 Marketing | Même ossature compacte, fond crème | Une colonne |
| S8 Conseil | Rupture pétrole, introduction et modalités | Une colonne |
| S9 Orientation | Sept situations et leurs destinations | Situation puis liens explicites |
| S10 Différenciation | Trois colonnes éditoriales avec filets | Trois blocs successifs |
| S11 Réalisations | Trois cartes uniformes, couverture + badge + H3 + texte + CTA | Cartes empilées, sans slider imposé |
| S12 Méthode | Quatre étapes visibles ; deux colonnes intermédiaires | Timeline verticale |
| S13 FAQ | Titre à gauche, sept accordéons à droite | Une colonne |
| S14 Contact | Coordonnées à gauche, formulaire existant à droite | Champs sur une colonne, footer global ensuite |

Repères de rythme : sections 72 px vertical/7 % horizontal sur grand écran, 48 px/6 % intermédiaire, 42 px/22 px mobile. H2 29–40 px ; mobile 31 px. Corps 16 px, textes secondaires 14 px. Angles vifs et filets fins. Ces valeurs guident la correspondance aux tokens réels.

Paragraphes justifiés uniquement si lisibles ; sur mobile, alignés à gauche. La maquette utilise majoritairement l’alignement gauche : ne pas forcer une justification produisant des espaces irréguliers.

## 6. Réalisations et assets

Sélection validée : ATTA Africa, Maison Peinture Sénégal, SCOD VTC. Ne pas remplacer Maison Peinture par un autre projet sans arbitrage PO.

- ATTA : `assets/atta-africa.png`, capture fournie par le PO. Badge Shopify · Automatisation.
- SCOD : `assets/scod-vtc.jpg`, capture fournie par le PO. Badge Projet web. Aucune déduction fonctionnelle depuis les champs visibles.
- Maison Peinture : couverture typographique provisoire, badge Odoo · ERP. Aucun faux dashboard. Le visuel réel n’a pas été fourni.

Couvertures de rapport 16:10 ; images en `contain` afin de conserver la capture entière, sans déformation. Corps de carte avec padding 24 px, badge discret à angles vifs, titre 25 px, texte 14 px. CTA alignés en bas par flexbox, pas par longueurs de textes artificiellement égales. Préserver les images originales ; utiliser le pipeline d’optimisation existant pour les dérivés.

Les autres fichiers projet fournis par le PO sont disponibles pour les prochaines pages ; leur fourniture ne change pas la sélection de ce hub.

## 7. Boutons et interactions communes aux 13 pages

Boutons visuellement petits : hauteur de référence 34 px, padding 8 × 12 px, texte 12 px poids 500, largeur au contenu. Secondaires en liens sobres. Angles vifs, aucune ombre. Assurer une cible tactile effective d’environ 44 px et l’absence de chevauchement des zones tactiles. Ne pas recopier les pseudo-éléments de démonstration s’ils interceptent d’autres contrôles.

Cartes à une seule destination : une vraie ancre de navigation couvrant la carte, avec nom accessible et focus visible. Éviter liens/boutons imbriqués. Pour une situation à plusieurs destinations, fournir des liens distincts : ne pas étirer un seul lien sur toute la ligne.

La maquette simule les sorties dans une boîte de dialogue. Ces dialogues et leurs messages ne doivent PAS être intégrés en production. Remplacer par les vrais liens vérifiés. Si une étude de cas n’existe pas, signaler la destination manquante et proposer un renvoi existant pertinent au PO, sans inventer de slug ni laisser de lien cassé.

Ancres : défilement doux, fermeture du menu mobile après choix, position d’arrivée tenant compte du header réel. Respecter navigation clavier et historique natif lorsque possible. FAQ : boutons natifs ou details/summary, ouverture au clic/tap/clavier, état annoncé. Plusieurs réponses peuvent rester ouvertes.

Animation commune : transitions de couleur/bordure sur 180 ms ; déplacement de carte de 3 px au survol uniquement avec pointeur adapté ; pression de 1 px ; apparition légère de 12 px sur 450 ms, une fois à l’entrée dans le viewport ; FAQ 180 ms. Aucun contenu essentiel ne doit rester masqué si JavaScript ou IntersectionObserver échoue. Pas d’autoplay, boucle, parallax ni animation décorative continue.

`prefers-reduced-motion: reduce` : suppression des déplacements et animations, défilement immédiat. Prévoir le changement de préférence pendant la session. Les états de focus, ouvert, actif et sélectionné restent perceptibles.

Ces conventions s’appliquent à toutes les futures pages Services. Elles ne rendent pas tous les éléments cliquables : une action doit avoir une destination ou un résultat utile. Conserver des compositions éditoriales distinctes pour chaque page.

## 8. Mobile, footer et formulaire

Tous les fonds de section crème vont bord à bord sur mobile. Le fond appartient à la section pleine largeur, les gouttières au contenu intérieur. Aucun max-width/margin/padding de conteneur parent ne doit créer de bande blanche latérale. Aucun recours à 100vw ou marge négative produisant du défilement horizontal.

Les resets de body présents dans la maquette servent uniquement à sa surface de prévisualisation ; résoudre l’imbrication des conteneurs dans Next.js, sans appliquer un reset global au site.

Conserver le Header, la navigation et le Footer réels. La maquette en reproduit une ancienne capture et ne fait pas autorité sur leur arborescence. Le PO a demandé tous les textes du footer en blanc sur pétrole : appliquer via les tokens/classes du composant existant, sans reconstruire le footer. Contrôler les autres pages si le composant partagé est modifié.

Réutiliser le formulaire existant avec ses champs, options, validations et consentements réels. Les options de select dans la maquette illustrent le rendu et ne remplacent pas le contrat du composant réel. Aucun changement de backend Resend/HubSpot sans nécessité approuvée. Conserver chargement, succès, erreurs, anti-double-envoi et message de secours. Ne jamais publier le message « Maquette : aucun message envoyé ».

## 9. Recette et définition de terminé

La V6 a reçu une validation PO. Les contrôles effectués ici portent sur la syntaxe JS et certains éléments structuraux ; une recette réelle dans un navigateur n’a pas été menée à terme. Ne pas présenter la maquette comme un rendu testé exhaustivement.

- Captures réelles : 1440 px desktop, 1024 px intermédiaire, 390 px mobile et contrôle à 320 px ; thèmes clair et sombre.
- Comparer aux proportions de V6 : Hero, Hn, paragraphes, espacements, alignements, cartes, CTA, images, formulaire, footer.
- Vérifier fonds crème bord à bord, absence de débordement horizontal, textes du footer blancs, aucun texte tronqué et zoom texte à 200 %.
- Vérifier toutes les destinations, notamment spécialisations web et études de cas ; aucune boîte de dialogue de démonstration.
- Vérifier clavier seul, focus visible, ordre logique, entrée/espace selon contrôle, FAQ et navigation mobile, focus de formulaire et annonces d’erreur.
- Contrastes : textes normaux 4,5:1 ; grands textes et contrôles selon exigences applicables. Le texte des petits boutons orange doit rester lisible.
- Tester les interactions avec réduction des mouvements et sans hover. Aucun piège de focus ou cible tactile chevauchante.
- Tester le formulaire via le dispositif de test existant, sans envoi inutile de messages réels ; indiquer précisément ce qui a été vérifié.
- Lancer lint/typecheck/build et les tests pertinents du dépôt. Contrôler les régressions des composants globaux.
- Fournir liste des fichiers modifiés, routes vérifiées, captures, résultats QA, écarts éventuels et points restant à confirmer.

Un build réussi ne suffit pas. Corriger les écarts visuels avant de déclarer l’implémentation prête à valider. La production nécessite l’accord explicite du PO.

## 10. Review indépendante

Claude IA vérifie fidélité à V6 et à ce handoff, accessibilité, faits à confirmer, cohérence des tokens, composants partagés et absence de design générique. Il produit une liste courte d’écarts priorisés, sans refaire l’architecture. La revue n’autorise pas le déploiement.

## Prompt de démarrage pour Claude Code

Lis entièrement ce handoff et le fichier Opus, puis inspecte la maquette V6 et les assets joints. Audite le dépôt réel et propose un plan court pour implémenter uniquement le Hub `/services`. Respecte les arbitrages de ce handoff, préserve les composants globaux et le backend du formulaire, confirme les routes et les faits incertains. Implémente le Hero partagé et les conventions d’interaction réutilisables sans reconstruire les 12 autres pages. Remplace toute simulation de la maquette par les comportements réels adaptés. Termine par la recette desktop/mobile dans les deux thèmes avec captures et comparaison visuelle. Ne déploie pas en production.
