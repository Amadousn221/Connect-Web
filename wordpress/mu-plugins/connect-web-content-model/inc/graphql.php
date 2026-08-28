<?php
/**
 * Réglages WPGraphQL Connect Web.
 *
 * L'essentiel est déclaratif : les CPT (post-types.php) et taxonomies
 * (taxonomies.php) portent `show_in_graphql`, donc WPGraphQL expose
 * automatiquement :
 *   - les entrées : `caseStudies`, `portfolioItems`, `teamMembers`, `resources`
 *     (+ variantes `...By(slug/id)`) ;
 *   - `featuredImage` (image à la une) sur chaque type ;
 *   - les connexions de termes `sectors` / `offerCategories` sur `caseStudy`
 *     et `portfolioItem` (taxonomies rattachées aux deux CPT) ;
 *   - les groupes ACF sous `caseStudyFields`, `portfolioItemFields`, etc.
 *     (WPGraphQL for ACF, via `graphql_field_name`).
 *
 * Ce fichier ne contient donc que les ajustements non couverts par défaut.
 *
 * NB — La revalidation ISR (webhook WP `save_post` → route Next `/api/revalidate`)
 * est du ressort du Milestone M3, pas M1. Elle sera ajoutée dans un mu-plugin
 * dédié (`connect-web-revalidate`) avec le secret partagé en constante
 * d'environnement WordPress, jamais en dur.
 *
 * @package ConnectWeb\ContentModel
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

/**
 * Expose le slug du post sous un nom stable même si le CPT n'a pas de rewrite
 * public — Next.js route sur ce slug (`/realisations/[slug]`).
 * WPGraphQL fournit déjà `slug` sur les types de contenu ; ce filtre ne fait
 * que garantir qu'il est bien résolu pour nos CPT non publics.
 */
add_filter('graphql_post_object_connection_query_args', static function (array $args): array {
    // Par défaut WPGraphQL ne renvoie que les posts « publish ». On garde ce
    // comportement (le contenu non publié ne doit pas fuiter dans le build).
    return $args;
}, 10, 1);

/**
 * Augmente la limite max d'items par requête (défaut WPGraphQL : 100).
 * Le volume Connect Web est modeste (3 cas, ~11 réalisations, ressources à
 * venir) mais on veut pouvoir tout chercher en une requête au build.
 */
add_filter('graphql_connection_max_query_amount', static function (int $max): int {
    return 200;
}, 10, 1);
