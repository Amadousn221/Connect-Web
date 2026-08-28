<?php
/**
 * Taxonomies Connect Web — DECISION 20 / ADR-002.
 *
 * `sector` et `offer_category` sont de vraies taxonomies WordPress (pas des
 * champs ACF select), donc WPGraphQL les expose nativement comme listes de
 * termes filtrables. Ça permet de construire le FilterBar de la page
 * Réalisations selon l'axe offre, secteur, ou les deux — l'axe d'affichage
 * final reste un choix d'UI de la Phase 25.
 *
 * Rattachées à `cas_client` ET `realisation` (les deux alimentent le hub
 * Réalisations et son filtre).
 *
 * Libellés de termes : bilingues via un champ ACF `label_en` sur le terme
 * (voir acf-field-groups.php) — le `name` du terme sert de libellé FR + de slug.
 *
 * @package ConnectWeb\ContentModel
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

add_action('init', static function (): void {

    register_taxonomy('sector', ['cas_client', 'realisation'], [
        'label'                 => 'Secteurs',
        'labels'                => [
            'name'          => 'Secteurs',
            'singular_name' => 'Secteur',
            'menu_name'     => 'Secteurs',
            'all_items'     => 'Tous les secteurs',
            'edit_item'     => 'Modifier le secteur',
            'add_new_item'  => 'Ajouter un secteur',
        ],
        'public'                => false,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_rest'          => true,
        'hierarchical'          => true,   // secteurs = catégories
        'show_admin_column'     => true,
        'rewrite'               => false,
        'show_in_graphql'       => true,
        'graphql_single_name'   => 'sector',
        'graphql_plural_name'   => 'sectors',
    ]);

    register_taxonomy('offer_category', ['cas_client', 'realisation'], [
        'label'                 => 'Catégories d\'offre',
        'labels'                => [
            'name'          => 'Catégories d\'offre',
            'singular_name' => 'Catégorie d\'offre',
            'menu_name'     => 'Catégories d\'offre',
            'all_items'     => 'Toutes les catégories',
            'edit_item'     => 'Modifier la catégorie',
            'add_new_item'  => 'Ajouter une catégorie',
        ],
        'public'                => false,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_rest'          => true,
        'hierarchical'          => true,
        'show_admin_column'     => true,
        'rewrite'               => false,
        'show_in_graphql'       => true,
        'graphql_single_name'   => 'offerCategory',
        'graphql_plural_name'   => 'offerCategories',
    ]);
}, 9);

/**
 * Termes d'amorçage — visiblement liés à l'offre 4+3 (DECISION 03) et aux 5
 * segments (P03). Créés une seule fois ; l'éditeur peut ensuite en ajouter.
 * Rien de commercial « faux » ici : ce sont des catégories, pas des données.
 */
add_action('init', static function (): void {
    if (get_option('connect_web_cm_terms_seeded')) {
        return;
    }

    $offer_categories = [
        'boutiques-en-ligne'          => 'Boutiques en ligne',
        'plateformes-applications'    => 'Plateformes & applications',
        'sites-entreprise'           => 'Sites d\'entreprise',
        'sites-institutionnels-ong'  => 'Sites institutionnels & ONG',
        'crm-erp-integrations'       => 'Odoo / ERP-CRM',
        'ia-automatisation'          => 'IA & automatisation',
        'marketing-acquisition'      => 'Marketing & acquisition',
    ];
    foreach ($offer_categories as $slug => $name) {
        if (! term_exists($slug, 'offer_category')) {
            wp_insert_term($name, 'offer_category', ['slug' => $slug]);
        }
    }

    $sectors = [
        'commerce-marque'   => 'Commerce & marque',
        'b2b-export'        => 'B2B & export',
        'institution-ong'   => 'Institution & ONG',
        'education'         => 'Éducation & formation',
        'services'          => 'Services',
        'industrie'         => 'Industrie & filières',
    ];
    foreach ($sectors as $slug => $name) {
        if (! term_exists($slug, 'sector')) {
            wp_insert_term($name, 'sector', ['slug' => $slug]);
        }
    }

    update_option('connect_web_cm_terms_seeded', 1);
}, 20);
