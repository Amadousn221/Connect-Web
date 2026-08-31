# WordPress headless — mise en route

Le frontend Next.js consomme un WordPress via **WPGraphQL**. Ce dossier contient
le code WP-side à installer sur l'instance (`https://admin.connect-web.tech`).

## Étapes

### 1. Extensions (WordPress → Extensions → Ajouter)
| Extension | Rôle |
|---|---|
| **Advanced Custom Fields (ACF)** | champs personnalisés — gratuit |
| **WPGraphQL** | expose WordPress en GraphQL |
| **WPGraphQL for ACF** | expose les champs ACF dans le schéma (ACF ≥ 6.1) |

### 2. Déposer le mu-plugin
Copier `mu-plugins/connect-web-content-model.php` dans
`wp-content/mu-plugins/` sur le serveur (créer le dossier s'il n'existe pas).
Un *must-use plugin* se charge automatiquement — rien à activer.

Il enregistre :
- 4 types de contenu : **Cas clients**, **Réalisations**, **Ressources**, **Équipe**
- 2 taxonomies : **Secteurs**, **Catégories d'offre**
- les groupes de champs ACF correspondants (bilingues FR/EN)

### 3. Vérifier le schéma
WordPress → **GraphQL → GraphiQL**, lancer :

```graphql
{
  caseStudies(first: 1) { nodes { id slug caseStudyFields { casClientName } } }
  portfolioItems(first: 1) { nodes { id } }
  resources(first: 1) { nodes { id } }
  teamMembers(first: 1) { nodes { id } }
  sectors { nodes { name termI18n { termLabelEn } } }
}
```

Puis côté repo :

```bash
npm run test:wordpress          # WORDPRESS_API_URL doit être dans .env.local
```

Ce script compare le schéma généré aux requêtes de `lib/wordpress/queries/*` et
signale tout nom de champ à corriger (WPGraphQL for ACF peut nommer les champs
image/repeater différemment selon sa version — c'est le cas connu à ajuster).

### 4. Saisir le contenu
- **3 fiches de cas** : ATTA Africa, SCOD VTC, Maison Peinture Sénégal
- Premiers articles **Ressources**
- **Équipe** (optionnel — la section reste masquée tant que vide)

### 5. Brancher le frontend
Ajouter dans **Vercel → Settings → Environment Variables** :

| Variable | Valeur |
|---|---|
| `WORDPRESS_API_URL` | `https://admin.connect-web.tech/graphql` |
| `WORDPRESS_AUTH_USER` | *(optionnel — si contenu protégé)* |
| `WORDPRESS_AUTH_APP_PASSWORD` | *(mot de passe d'application WP)* |

Puis prévenir l'implémentation : on crée les routes `/realisations/[slug]` et
`/ressources/[slug]`, on branche le hub Ressources sur `getAllResources()`, et
on ajoute le webhook de revalidation (`/api/revalidate`).
