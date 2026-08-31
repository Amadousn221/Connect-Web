<?php
/**
 * Plugin Name: Connect Web — Modèle de contenu (headless)
 * Description: Enregistre les types de contenu, taxonomies et groupes de champs
 *              ACF consommés par le frontend Next.js via WPGraphQL.
 * Version:     1.0.0
 * Author:      Connect Web
 *
 * INSTALLATION
 * ------------
 * 1. Installer et activer les extensions :
 *      - Advanced Custom Fields (ACF) — gratuit
 *      - WPGraphQL
 *      - WPGraphQL for ACF  (add-on ; nécessite ACF ≥ 6.1)
 * 2. Déposer CE FICHIER dans  wp-content/mu-plugins/
 *      (créer le dossier mu-plugins/ s'il n'existe pas — il se charge tout seul,
 *       pas besoin de l'activer).
 * 3. Vérifier dans WordPress → GraphQL → GraphiQL que les champs suivants
 *    répondent :  caseStudies, portfolioItems, resources, teamMembers, sectors,
 *    offerCategories.
 * 4. Côté repo Next.js :  npm run test:wordpress   (signale tout écart de nom
 *    de champ entre le schéma généré et lib/wordpress/queries/*).
 *
 * Les noms GraphQL sont fixés explicitement (graphql_single_name /
 * graphql_field_name) pour correspondre EXACTEMENT aux requêtes du frontend.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/* ============================================================================
 * 1. TYPES DE CONTENU
 * ==========================================================================*/

add_action( 'init', function () {

	register_post_type( 'case_study', array(
		'label'               => 'Cas clients',
		'labels'              => array( 'name' => 'Cas clients', 'singular_name' => 'Cas client' ),
		'public'              => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_icon'           => 'dashicons-portfolio',
		'menu_position'       => 20,
		'supports'            => array( 'title', 'thumbnail', 'page-attributes' ),
		'has_archive'         => false,
		'rewrite'             => false,
		'show_in_rest'        => true,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'caseStudy',
		'graphql_plural_name' => 'caseStudies',
	) );

	register_post_type( 'portfolio_item', array(
		'label'               => 'Réalisations',
		'labels'              => array( 'name' => 'Réalisations', 'singular_name' => 'Réalisation' ),
		'public'              => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_icon'           => 'dashicons-images-alt2',
		'menu_position'       => 21,
		'supports'            => array( 'title', 'thumbnail', 'page-attributes' ),
		'has_archive'         => false,
		'rewrite'             => false,
		'show_in_rest'        => true,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'portfolioItem',
		'graphql_plural_name' => 'portfolioItems',
	) );

	register_post_type( 'resource', array(
		'label'               => 'Ressources',
		'labels'              => array( 'name' => 'Ressources', 'singular_name' => 'Ressource' ),
		'public'              => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_icon'           => 'dashicons-media-document',
		'menu_position'       => 22,
		'supports'            => array( 'title', 'thumbnail', 'page-attributes' ),
		'has_archive'         => false,
		'rewrite'             => false,
		'show_in_rest'        => true,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'resource',
		'graphql_plural_name' => 'resources',
	) );

	register_post_type( 'team_member', array(
		'label'               => 'Équipe',
		'labels'              => array( 'name' => 'Équipe', 'singular_name' => 'Membre' ),
		'public'              => false,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'menu_icon'           => 'dashicons-groups',
		'menu_position'       => 23,
		'supports'            => array( 'title', 'thumbnail', 'page-attributes' ),
		'has_archive'         => false,
		'rewrite'             => false,
		'show_in_rest'        => true,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'teamMember',
		'graphql_plural_name' => 'teamMembers',
	) );

	/* ------------------------------------------------------------------------
	 * 2. TAXONOMIES  (partagées case_study + portfolio_item — DECISION 20)
	 * ----------------------------------------------------------------------*/

	register_taxonomy( 'sector', array( 'case_study', 'portfolio_item' ), array(
		'label'               => 'Secteurs',
		'labels'              => array( 'name' => 'Secteurs', 'singular_name' => 'Secteur' ),
		'public'              => false,
		'show_ui'             => true,
		'hierarchical'        => false,
		'show_in_rest'        => true,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'sector',
		'graphql_plural_name' => 'sectors',
	) );

	register_taxonomy( 'offer_category', array( 'case_study', 'portfolio_item' ), array(
		'label'               => 'Catégories d’offre',
		'labels'              => array( 'name' => 'Catégories d’offre', 'singular_name' => 'Catégorie d’offre' ),
		'public'              => false,
		'show_ui'             => true,
		'hierarchical'        => false,
		'show_in_rest'        => true,
		'show_in_graphql'     => true,
		'graphql_single_name' => 'offerCategory',
		'graphql_plural_name' => 'offerCategories',
	) );
}, 5 );

/* ============================================================================
 * 3. GROUPES DE CHAMPS ACF
 *    Enregistrés en PHP (local field groups) : versionnés, pas besoin de
 *    ré-exporter. `graphql_field_name` fixe le nom du groupe dans le schéma ;
 *    le nom de chaque champ (snake_case) devient camelCase côté GraphQL.
 * ==========================================================================*/

add_action( 'acf/init', function () {

	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	$txt      = fn( $key, $name, $label ) => array( 'key' => $key, 'name' => $name, 'label' => $label, 'type' => 'text', 'show_in_graphql' => 1 );
	$area     = fn( $key, $name, $label ) => array( 'key' => $key, 'name' => $name, 'label' => $label, 'type' => 'textarea', 'rows' => 3, 'show_in_graphql' => 1 );
	$wysiwyg  = fn( $key, $name, $label ) => array( 'key' => $key, 'name' => $name, 'label' => $label, 'type' => 'wysiwyg', 'media_upload' => 0, 'show_in_graphql' => 1 );
	$bool     = fn( $key, $name, $label ) => array( 'key' => $key, 'name' => $name, 'label' => $label, 'type' => 'true_false', 'ui' => 1, 'show_in_graphql' => 1 );
	$image    = fn( $key, $name, $label ) => array( 'key' => $key, 'name' => $name, 'label' => $label, 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'show_in_graphql' => 1 );
	$gallery  = fn( $key, $name, $label ) => array( 'key' => $key, 'name' => $name, 'label' => $label, 'type' => 'gallery', 'return_format' => 'array', 'show_in_graphql' => 1 );
	$url      = fn( $key, $name, $label ) => array( 'key' => $key, 'name' => $name, 'label' => $label, 'type' => 'url', 'show_in_graphql' => 1 );

	/* ---- case_study : caseStudyFields --------------------------------------- */
	acf_add_local_field_group( array(
		'key'                   => 'group_cw_case_study',
		'title'                 => 'Cas client — contenu',
		'graphql_field_name'    => 'caseStudyFields',
		'show_in_graphql'       => 1,
		'location'              => array( array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'case_study' ) ) ),
		'fields'                => array(
			$txt(     'field_cas_client_name', 'cas_client_name', 'Nom du client' ),
			$txt(     'field_cas_title_fr', 'cas_title_fr', 'Titre (FR)' ),
			$txt(     'field_cas_title_en', 'cas_title_en', 'Titre (EN)' ),
			$area(    'field_cas_teaser_fr', 'cas_teaser_fr', 'Accroche (FR)' ),
			$area(    'field_cas_teaser_en', 'cas_teaser_en', 'Accroche (EN)' ),
			$wysiwyg( 'field_cas_context_fr', 'cas_context_fr', 'Contexte (FR)' ),
			$wysiwyg( 'field_cas_context_en', 'cas_context_en', 'Contexte (EN)' ),
			$wysiwyg( 'field_cas_approach_fr', 'cas_approach_fr', 'Notre approche (FR)' ),
			$wysiwyg( 'field_cas_approach_en', 'cas_approach_en', 'Notre approche (EN)' ),
			$bool(    'field_cas_payment_mobile_intl', 'cas_payment_mobile_intl', 'Paiement mobile + international' ),
			$image(   'field_cas_hero_image', 'cas_hero_image', 'Image d’en-tête' ),
			$gallery( 'field_cas_gallery', 'cas_gallery', 'Galerie' ),
			$area(    'field_cas_automation_intro_fr', 'cas_automation_intro_fr', 'Automatisation — intro (FR)' ),
			$area(    'field_cas_automation_intro_en', 'cas_automation_intro_en', 'Automatisation — intro (EN)' ),
			array(
				'key' => 'field_cas_automation_items', 'name' => 'cas_automation_items', 'label' => 'Automatisation — éléments',
				'type' => 'repeater', 'show_in_graphql' => 1, 'button_label' => 'Ajouter',
				'sub_fields' => array(
					$txt(  'field_cas_automation_item_label_fr', 'cas_automation_item_label_fr', 'Libellé (FR)' ),
					$txt(  'field_cas_automation_item_label_en', 'cas_automation_item_label_en', 'Libellé (EN)' ),
					$area( 'field_cas_automation_item_detail_fr', 'cas_automation_item_detail_fr', 'Détail (FR)' ),
					$area( 'field_cas_automation_item_detail_en', 'cas_automation_item_detail_en', 'Détail (EN)' ),
				),
			),
			array(
				'key' => 'field_cas_result', 'name' => 'cas_result', 'label' => 'Résultats chiffrés',
				'type' => 'repeater', 'show_in_graphql' => 1, 'button_label' => 'Ajouter',
				'sub_fields' => array(
					$txt( 'field_cas_result_value', 'cas_result_value', 'Valeur (ex. « +40 % »)' ),
					$txt( 'field_cas_result_label_fr', 'cas_result_label_fr', 'Libellé (FR)' ),
					$txt( 'field_cas_result_label_en', 'cas_result_label_en', 'Libellé (EN)' ),
				),
			),
			$area( 'field_cas_testimonial_quote_fr', 'cas_testimonial_quote_fr', 'Témoignage — citation (FR)' ),
			$area( 'field_cas_testimonial_quote_en', 'cas_testimonial_quote_en', 'Témoignage — citation (EN)' ),
			$txt(  'field_cas_testimonial_author', 'cas_testimonial_author', 'Témoignage — auteur' ),
			$txt(  'field_cas_testimonial_role_fr', 'cas_testimonial_role_fr', 'Témoignage — rôle (FR)' ),
			$txt(  'field_cas_testimonial_role_en', 'cas_testimonial_role_en', 'Témoignage — rôle (EN)' ),
			$url(  'field_cas_external_url', 'cas_external_url', 'URL du site client' ),
		),
	) );

	/* ---- portfolio_item : portfolioItemFields ----------------------------- */
	acf_add_local_field_group( array(
		'key'                => 'group_cw_portfolio_item',
		'title'              => 'Réalisation — contenu',
		'graphql_field_name' => 'portfolioItemFields',
		'show_in_graphql'    => 1,
		'location'           => array( array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'portfolio_item' ) ) ),
		'fields'             => array(
			$txt(   'field_real_client_name', 'real_client_name', 'Nom du client' ),
			$txt(   'field_real_year', 'real_year', 'Année' ),
			$txt(   'field_real_title_fr', 'real_title_fr', 'Titre (FR)' ),
			$txt(   'field_real_title_en', 'real_title_en', 'Titre (EN)' ),
			$area(  'field_real_summary_fr', 'real_summary_fr', 'Résumé (FR)' ),
			$area(  'field_real_summary_en', 'real_summary_en', 'Résumé (EN)' ),
			$image( 'field_real_thumbnail', 'real_thumbnail', 'Vignette' ),
			$url(   'field_real_external_url', 'real_external_url', 'URL du site client' ),
		),
	) );

	/* ---- resource : resourceFields --------------------------------------- */
	acf_add_local_field_group( array(
		'key'                => 'group_cw_resource',
		'title'              => 'Ressource — contenu',
		'graphql_field_name' => 'resourceFields',
		'show_in_graphql'    => 1,
		'location'           => array( array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'resource' ) ) ),
		'fields'             => array(
			array(
				'key' => 'field_ressource_type', 'name' => 'ressource_type', 'label' => 'Type',
				'type' => 'select', 'show_in_graphql' => 1,
				'choices' => array( 'guide' => 'Guide', 'article' => 'Article', 'etude' => 'Étude de cas', 'checklist' => 'Checklist' ),
				'return_format' => 'value',
			),
			$txt(     'field_ressource_title_fr', 'ressource_title_fr', 'Titre (FR)' ),
			$txt(     'field_ressource_title_en', 'ressource_title_en', 'Titre (EN)' ),
			$area(    'field_ressource_excerpt_fr', 'ressource_excerpt_fr', 'Extrait (FR)' ),
			$area(    'field_ressource_excerpt_en', 'ressource_excerpt_en', 'Extrait (EN)' ),
			$wysiwyg( 'field_ressource_body_fr', 'ressource_body_fr', 'Corps (FR)' ),
			$wysiwyg( 'field_ressource_body_en', 'ressource_body_en', 'Corps (EN)' ),
			$image(   'field_ressource_cover', 'ressource_cover', 'Image de couverture' ),
		),
	) );

	/* ---- team_member : teamMemberFields --------------------------------- */
	acf_add_local_field_group( array(
		'key'                => 'group_cw_team_member',
		'title'              => 'Membre — contenu',
		'graphql_field_name' => 'teamMemberFields',
		'show_in_graphql'    => 1,
		'location'           => array( array( array( 'param' => 'post_type', 'operator' => '==', 'value' => 'team_member' ) ) ),
		'fields'             => array(
			$txt(   'field_membre_name', 'membre_name', 'Nom complet' ),
			$txt(   'field_membre_role_fr', 'membre_role_fr', 'Rôle (FR)' ),
			$txt(   'field_membre_role_en', 'membre_role_en', 'Rôle (EN)' ),
			$area(  'field_membre_bio_fr', 'membre_bio_fr', 'Bio (FR)' ),
			$area(  'field_membre_bio_en', 'membre_bio_en', 'Bio (EN)' ),
			$image( 'field_membre_photo', 'membre_photo', 'Photo' ),
		),
	) );

	/* ---- termes (sector / offer_category) : termI18n -------------------- */
	acf_add_local_field_group( array(
		'key'                => 'group_cw_term_i18n',
		'title'              => 'Terme — libellé EN',
		'graphql_field_name' => 'termI18n',
		'show_in_graphql'    => 1,
		'location'           => array(
			array( array( 'param' => 'taxonomy', 'operator' => '==', 'value' => 'sector' ) ),
			array( array( 'param' => 'taxonomy', 'operator' => '==', 'value' => 'offer_category' ) ),
		),
		'fields'             => array(
			$txt( 'field_term_label_en', 'term_label_en', 'Libellé (EN)' ),
		),
	) );
} );

/* ============================================================================
 * 4. Autoriser l'introspection publique (facultatif — pratique pour GraphiQL
 *    distant et le script test:wordpress). À commenter en prod si besoin.
 * ==========================================================================*/
add_filter( 'graphql_introspection_enabled', '__return_true' );
