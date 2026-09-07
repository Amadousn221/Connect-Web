# CONNECT WEB — Phase 3
## Maquette UX/UI V1 — « Conception et développement web »

**Statut :** direction visuelle validable, sans modification du dépôt.
**Base :** architecture/copy V1 validée par le PO + audit read-only + design system existant.

---

## 1. Intention visuelle

Créer une page d'expertise plus éditoriale qu'une page d'offre classique, mais parfaitement alignée au design system Connect Web.

La page doit :
- paraître premium, sobre et précise ;
- éviter l'effet « template agence IA » ;
- donner une place réelle au contenu et aux preuves ;
- conserver les angles vifs du système ;
- utiliser le pétrole, le blanc/off-white et l'orange comme accents ;
- garder les CTA compacts/minimalistes ;
- réutiliser les composants existants quand ils servent la composition, sans cloner `OfferPage`.

---

## 2. Hero

### Composition desktop
Grille 12 colonnes.

**Gauche — 7 colonnes**
- Eyebrow orange : `CONCEPTION & DÉVELOPPEMENT WEB`
- H1 Newsreader, 3 lignes maximum :
  **Un site web pensé pour ce que votre organisation doit accomplir.**
- Intro courte, max 3 lignes visuelles.
- Ligne CTA :
  - primaire orange : `Parlons de votre projet`
  - secondaire ghost : `Voir nos réalisations`
- Trust line discrète :
  `Réponse sous 24 h · Devis gratuit · Vos accès vous appartiennent`

**Droite — 5 colonnes**
- Une seule capture réelle de projet, grand format.
- Pas de collage de 5 écrans.
- Cadre net, sans arrondis intermédiaires.
- Petit cartouche en bas du visuel :
  `PROJET RÉEL`
  `SCOD VTC — plateforme web`
- Aucun faux chiffre de performance.

### Fond
Pétrole sombre plein.
Pas de dégradé décoratif lourd.
Éventuelle texture très légère ou ligne de grille technique à faible opacité.

### Mobile
- Texte en premier.
- CTA empilés ou sur 2 lignes si nécessaire.
- Visuel sous le texte.
- H1 autour de 42–48 px max selon viewport.
- Aucun dépassement horizontal.

---

## 3. Section « Le bon site dépend d'abord de ce que vous voulez en faire »

### Fond
Blanc.

### Intro
Largeur éditoriale, alignée à gauche :
- eyebrow orange
- H2 Newsreader
- paragraphe court

### Cartes d'orientation
3 cartes de même hauteur, grille 3 colonnes desktop.

Chaque carte :
- numéro discret `01 / 02 / 03`
- type d'offre
- titre court
- texte 3–4 lignes max
- 2 à 3 mini-tags de besoin, pas de technologies
- lien texte en bas

Exemple :
**01 — Sites d'entreprise**
Crédibilité · Offre · Contact

### Bifurcation logiciels/apps
Sous les trois cartes, bande horizontale sombre ou off-white contrastée :
`Votre besoin dépasse celui d'un site ?`
texte court + CTA `Explorer les logiciels & applications web`

Ce bloc ne doit pas ressembler à une 4e carte identique.

---

## 4. Section « Le travail réalisé »

### Fond
Off-white.

### Structure
Composition asymétrique :
- 1 projet principal large
- 2 projets secondaires empilés ou côte à côte

Objectif : éviter le slider générique sur desktop.

### Projet principal
- grande capture réelle
- label de catégorie
- nom du projet
- observation concrète en 1 phrase
- CTA vers `/realisations`

### Projets secondaires
Même logique, format plus compact.

### Mobile
Rail horizontal scroll-snap possible en reprenant la logique de `CaseTeaserCarousel`, sans ajouter de dépendance externe.

---

## 5. Section « Les choix qui comptent »

### Fond
Blanc.

### Composition
2 colonnes desktop :
- gauche : titre + texte d'introduction
- droite : 4 critères sous forme de lignes numérotées

Pas de grille de 4 cartes avec icônes génériques.

Critères :
1. Une information facile à trouver
2. Une expérience adaptée aux usages mobiles
3. Des contenus que votre équipe peut faire vivre
4. Une base technique maintenable

Chaque critère :
- numéro serif large
- titre
- texte 2–3 lignes
- séparateur fin

---

## 6. Section « Vos accès, votre continuité »

### Fond
Pétrole sombre.

### Composition
Titre sur toute largeur, puis 2 colonnes.

**Colonne A**
`Ce que nous clarifions`
- domaine
- comptes
- accès admin
- remise
- documentation

**Colonne B**
`Ce qui dépend du contrat`
- code sur mesure
- licences tierces
- abonnements
- contenus produits

### Interaction
Aucune animation complexe.
Possibilité d'un reveal léger au scroll, désactivé si `prefers-reduced-motion`.

---

## 7. Section « Une méthode qui s'adapte à votre point de départ »

### Fond
Off-white.

### Roadmap
4 étapes horizontales desktop, verticales mobile.

Chaque étape :
- numéro
- titre
- phrase courte
- livrables possibles sous forme de micro-liste

Étapes :
1. Cadrer
2. Concevoir
3. Développer & vérifier
4. Mettre en ligne & transmettre

### Bloc secondaire
Encart distinct :
`Vous avez déjà un site ?`
Texte sur audit/refonte/migration/reprise.
CTA minimal : `Parlons de votre site actuel`

---

## 8. FAQ

### Fond
Blanc.

Accordéon simple, largeur max de lecture.
Questions :
- Combien coûte un site ?
- Combien de temps faut-il prévoir ?
- Faut-il tout refaire ?
- Pourrai-je modifier les contenus ?
- Qui gère le domaine et l'hébergement ?
- La maintenance est-elle incluse ?
- Site ou application sur mesure ?

---

## 9. CTA final

### Fond
Pétrole sombre.
Titre court.
Paragraphe 2 lignes max.
CTA orange small.

Pas de formulaire embarqué ici.
Le formulaire existant reste sur `/contact`.

---

## 10. Responsive

### Desktop > 1024
- conteneur max du design system
- respirations généreuses
- grilles asymétriques
- preuves visibles sans carrousel obligatoire

### Tablette 640–1024
- cartes orientation 2 + 1 ou 1 colonne selon largeur
- preuves en rail
- roadmap en 2 x 2

### Mobile < 640
- 1 colonne
- titres réduits
- CTA jamais collés au bord
- preuves scrollables horizontalement si utile
- textes non justifiés si la justification dégrade la lisibilité

---

## 11. Anti-AI-slop

Interdits :
- 6 cartes identiques avec icônes abstraites
- faux dashboards
- gros gradients décoratifs
- orb/mesh/glow sans fonction
- chiffres inventés
- slogans du type « propulsez votre présence »
- répétition de « sur mesure », « innovant », « performant » sans preuve
- micro-animations sur chaque carte
- 3 CTA identiques par section
- noms de technologies comme titres d'offres

---

## 12. Maquette à produire

La maquette visuelle V1 devra montrer au minimum :
- hero
- orientation 3 offres + bifurcation apps
- preuve portfolio
- critères qualité
- propriété/continuité
- méthode
- FAQ
- CTA final

La hiérarchie doit rester spécifique à cette page, sans reprendre l'ordre Aponia.