<?php
/**
 * Custom Post Types Connect Web — calqués un-à-un sur le modèle P10 §10.1 (ADR-002).
 *
 *   P10 type        CPT              GraphQL single / plural
 *   ─────────────   ──────────────   ───────────────────────
 *   case_study      cas_client       caseStudy / caseStudies
 *   portfolio_item  realisation      portfolioItem / portfolioItems
 *   team_member     membre_equipe    teamMember / teamMembers
 *   resource        ressource        resource / resources
 *
 *   offer  → PAS de CPT : codé en dur dans Next.js (DECISION 04).
 *
 * Tous `show_in_graphql => true`. `has_archive => false` : le rendu et le
 * routage sont 100 % Next.js (DECISION 18), WordPress ne sert que l'API.
 *
 * @package ConnectWeb\ContentModel
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

add_action('init', static function (): void {

    /* ─── case_study : cas_client ─────────────────────────────────────────── */
    register_post_type('cas_client', [
        'label'               => 'Cas clients',
        'labels'              => [
            'name'          => 'Cas clients',
            'singular_name' => 'Cas client',
            'add_new_item'  => 'Ajouter un cas client',
            'edit_item'     => 'Modifier le cas client',
            'menu_name'     => 'Cas clients',
        ],
        'public'              => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,   // Gutenberg pour les champs longs
        'menu_icon'           => 'dashicons-portfolio',
        'menu_position'       => 20,
        'has_archive'         => false,
        'rewrite'             => false,
        'supports'            => ['title', 'revisions', 'thumbnail'],
        'show_in_graphql'     => true,
        'graphql_single_name' => 'caseStudy',
        'graphql_plural_name' => 'caseStudies',
    ]);

    /* ─── portfolio_item : realisation ───────────────────────────────────── */
    register_post_type('realisation', [
        'label'               => 'Réalisations',
        'labels'              => [
            'name'          => 'Réalisations',
            'singular_name' => 'Réalisation',
            'add_new_item'  => 'Ajouter une réalisation',
            'edit_item'     => 'Modifier la réalisation',
            'menu_name'     => 'Réalisations',
        ],
        'public'              => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'menu_icon'           => 'dashicons-grid-view',
        'menu_position'       => 21,
        'has_archive'         => false,
        'rewrite'             => false,
        'supports'            => ['title', 'revisions', 'thumbnail'],
        'show_in_graphql'     => true,
        'graphql_single_name' => 'portfolioItem',
        'graphql_plural_name' => 'portfolioItems',
    ]);

    /* ─── team_member : membre_equipe ───────────────────────────────────────
       Reste DÉPUBLIÉ tant que les vraies personnes ne sont pas fournies
       (règle P08 : jamais de placeholder visible sur l'équipe). Le CPT existe
       pour que la structure soit prête ; aucune entrée publiée = TeamGrid masqué. */
    register_post_type('membre_equipe', [
        'label'               => 'Équipe',
        'labels'              => [
            'name'          => 'Membres de l\'équipe',
            'singular_name' => 'Membre de l\'équipe',
            'add_new_item'  => 'Ajouter un membre',
            'edit_item'     => 'Modifier le membre',
            'menu_name'     => 'Équipe',
        ],
        'public'              => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'menu_icon'           => 'dashicons-groups',
        'menu_position'       => 22,
        'has_archive'         => false,
        'rewrite'             => false,
        'supports'            => ['title', 'revisions', 'thumbnail', 'page-attributes'],
        'show_in_graphql'     => true,
        'graphql_single_name' => 'teamMember',
        'graphql_plural_name' => 'teamMembers',
    ]);

    /* ─── resource : ressource ──────────────────────────────────────────────
       Architecture figée, contenu différé (P07/P08) : le CPT est prêt, les
       articles réels arrivent avec le PO. */
    register_post_type('ressource', [
        'label'               => 'Ressources',
        'labels'              => [
            'name'          => 'Ressources',
            'singular_name' => 'Ressource',
            'add_new_item'  => 'Ajouter une ressource',
            'edit_item'     => 'Modifier la ressource',
            'menu_name'     => 'Ressources',
        ],
        'public'              => false,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'menu_icon'           => 'dashicons-media-document',
        'menu_position'       => 23,
        'has_archive'         => false,
        'rewrite'             => false,
        'supports'            => ['title', 'revisions', 'thumbnail'],
        'show_in_graphql'     => true,
        'graphql_single_name' => 'resource',
        'graphql_plural_name' => 'resources',
    ]);
}, 10);
