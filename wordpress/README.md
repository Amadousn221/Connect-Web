# Connect Web — WordPress headless

Back-office de contenu uniquement (cas clients, réalisations, équipe, ressources).
**Aucune page rendue par WordPress** — le rendu et le routage sont 100 % Next.js
(DECISION 18). WordPress expose une API WPGraphQL, interrogée par Next au build et
à la revalidation.

## Contenu de ce dossier

```
mu-plugins/
  connect-web-content-model/
    connect-web-content-model.php   loader mu-plugin
    inc/
      post-types.php                CPT : cas_client, realisation, membre_equipe, ressource
      taxonomies.php                sector, offer_category (+ termes d'amorçage)
      acf-field-groups.php          groupes ACF (champs FR/EN, DECISION 21) — en code
      graphql.php                   réglages WPGraphQL
```

Tout le modèle est **en code, versionnable**. Rien à configurer à la main dans
l'admin (exigence du plan d'implémentation) : modifier un champ = modifier
`acf-field-groups.php`.

## Installation sur l'instance Hostinger (à faire par le PO)

1. **Provisionner l'hébergement Hostinger** avec assez de RAM/CPU pour l'admin WP
   + les requêtes WPGraphQL (le trafic visiteur ne touche pas WordPress).
2. **Installer WordPress**, puis les extensions :
   - **Advanced Custom Fields** — **ACF PRO** requis (les champs `repeater` et
     `gallery` de `result` / `automation` / `gallery` en dépendent ; sans PRO il
     faudra remodeler ces 3 champs — à décider ensemble).
   - **WPGraphQL** (1.x)
   - **WPGraphQL for ACF** (2.x)
3. **Déposer** le dossier `mu-plugins/connect-web-content-model/` dans
   `wp-content/mu-plugins/` (créer le dossier `mu-plugins` s'il n'existe pas).
   Un mu-plugin s'active tout seul, sans passer par l'écran Extensions.
4. **Vérifier** dans l'admin : les menus « Cas clients », « Réalisations »,
   « Équipe », « Ressources », « Secteurs », « Catégories d'offre » apparaissent.
5. **Créer une entrée de test par type** (contenu manifestement fictif — pas de
   faux témoignage / faux chiffre / faux logo qui ressemble à du réel).
6. **Sécuriser** : protéger / limiter `wp-admin` et `wp-login.php` en public
   (le front n'en a pas besoin), désactiver l'API REST publique non nécessaire,
   garder XML-RPC fermé.
7. **Transmettre au dev** :
   - l'URL de l'endpoint WPGraphQL (`https://…/graphql`) → `WORDPRESS_API_URL`
   - le hostname de la médiathèque → `WORDPRESS_IMAGE_HOSTNAME`
   - si preview de brouillons souhaitée : un utilisateur + **application password**
     → `WORDPRESS_AUTH_USER` / `WORDPRESS_AUTH_APP_PASSWORD`

## Vérification côté dev

```bash
# dans connect-web/, après avoir renseigné .env.local
npm run test:wordpress
```

Le script contrôle : endpoint joignable · les 4 types + 2 taxonomies présents
dans le schéma · groupes ACF exposés · lecture d'une entrée de chaque type, avec
le détail des champs optionnels à `null` (contrôle « état absent »).

## Modèle de données

Résumé dans `inc/acf-field-groups.php`. **À réconcilier** avec
`connect-web-phase-10-product-specs-part1.md` §10.1 (modèle exact + états vides) —
ce fichier n'était pas disponible au moment de l'écriture ; le schéma actuel
dérive de l'ADR-002 et de la structure des 3 cas phares (P08 part4).

## Revalidation ISR (Milestone M3, pas M1)

Un mu-plugin dédié `connect-web-revalidate` sera ajouté en M3 : au `save_post`
d'un contenu, il appellera `POST https://<site>/api/revalidate` signé avec
`REVALIDATE_SECRET` (constante d'environnement WordPress, jamais en dur).
