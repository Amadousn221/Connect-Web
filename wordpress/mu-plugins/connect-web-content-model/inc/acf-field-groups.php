<?php
/**
 * Groupes de champs ACF Connect Web — définis en code (acf_add_local_field_group),
 * calqués sur le modèle P10 §10.1 et l'ADR-002.
 *
 * ⚠️  RÉCONCILIATION P10 : le fichier `connect-web-phase-10-product-specs-part1.md`
 *     (modèle de données exact + noms de champs + états vides) n'était pas joint
 *     au démarrage. Ce schéma est dérivé d'ADR-002 + P08 part4 (structure des
 *     3 cas phares). À revoir champ par champ contre P10 §10.1 dès réception.
 *
 * PRINCIPES NON NÉGOCIABLES (P10 / P22, exigence d'intégrité) :
 *   1. DECISION 21 — chaque contenu rédactionnel existe en paire `*_fr` / `*_en`
 *      dans le MÊME groupe (parité structurellement impossible à casser).
 *   2. Champs conditionnels RÉELLEMENT optionnels : `required => 0`, et surtout
 *      jamais de valeur par défaut → un champ non rempli renvoie `null` en
 *      GraphQL, pas une chaîne vide. Les composants Next masquent alors tout le
 *      bloc. Concernés : automation_chapter, result, testimonial, external_url,
 *      gallery.
 *
 * DÉPENDANCE : ACF PRO (repeater + gallery utilisés pour result / automation /
 * gallery). Si ACF PRO n'est pas retenu, ces trois champs devront être
 * remodelés en groupes à cardinalité fixe — à trancher avec le PO.
 *
 * @package ConnectWeb\ContentModel
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

add_action('acf/init', static function (): void {
    if (! function_exists('acf_add_local_field_group')) {
        return;
    }

    /* ══════════════════════════════════════════════════════════════════════
       CAS CLIENT  (case_study)
       ══════════════════════════════════════════════════════════════════════ */
    acf_add_local_field_group([
        'key'      => 'group_cas_client',
        'title'    => 'Cas client — contenu',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'cas_client']]],
        'position' => 'normal',
        'style'    => 'default',
        'show_in_graphql'     => 1,
        'graphql_field_name'  => 'caseStudyFields',
        'map_graphql_types_from_location_rules' => 0,
        'fields' => [

            // — Identité —
            cw_text('cas_client_name', 'Nom du client', true),
            cw_select('cas_status', 'Statut de publication interne', [
                'draft_internal' => 'Brouillon interne (ne pas exposer)',
                'ready'          => 'Prêt à publier',
            ], false),

            // — Rédactionnel bilingue (DECISION 21) —
            cw_tab('Français'),
            cw_text('cas_title_fr', 'Titre du cas (FR)', true),
            cw_textarea('cas_teaser_fr', 'Accroche / teaser (FR)', true),
            cw_wysiwyg('cas_context_fr', 'Contexte (FR)', true),
            cw_wysiwyg('cas_approach_fr', 'Notre approche (FR)', true),

            cw_tab('English'),
            cw_text('cas_title_en', 'Case title (EN)', false),
            cw_textarea('cas_teaser_en', 'Teaser (EN)', false),
            cw_wysiwyg('cas_context_en', 'Context (EN)', false),
            cw_wysiwyg('cas_approach_en', 'Our approach (EN)', false),

            // — Média —
            cw_tab('Médias'),
            cw_image('cas_hero_image', 'Image héro', false),
            // gallery : OPTIONNEL — bloc masqué si vide
            cw_gallery('cas_gallery', 'Galerie (optionnel)'),

            // — automation_chapter : OPTIONNEL (P08 : présent seulement pour ATTA) —
            cw_tab("Chapitre automatisation (optionnel)"),
            cw_message(
                'cas_automation_note',
                'Laisser entièrement vide si le cas n\'a pas de volet automatisation. '
                . 'Le chapitre entier disparaît côté site — ne pas mettre de texte de remplissage.'
            ),
            cw_textarea('cas_automation_intro_fr', 'Intro automatisation (FR)', false),
            cw_textarea('cas_automation_intro_en', 'Automation intro (EN)', false),
            cw_repeater('cas_automation_items', 'Automatisations livrées', [
                cw_text('cas_automation_item_label_fr', 'Libellé (FR)', false),
                cw_text('cas_automation_item_label_en', 'Label (EN)', false),
                cw_textarea('cas_automation_item_detail_fr', 'Détail (FR)', false),
                cw_textarea('cas_automation_item_detail_en', 'Detail (EN)', false),
            ]),

            // — result : OPTIONNEL (placeholders P08 tant que non collecté) —
            cw_tab('Résultats (optionnel)'),
            cw_message(
                'cas_result_note',
                'Chiffres RÉELS uniquement (accord client + entretien). Aucun chiffre '
                . 'inventé ni placeholder ne part en production. Vide = bloc résultats masqué.'
            ),
            cw_repeater('cas_result', 'Métriques de résultat', [
                cw_text('cas_result_value', 'Valeur (ex. « +38 % »)', false),
                cw_text('cas_result_label_fr', 'Libellé (FR)', false),
                cw_text('cas_result_label_en', 'Label (EN)', false),
            ]),

            // — testimonial : OPTIONNEL —
            cw_tab('Témoignage (optionnel)'),
            cw_message(
                'cas_testimonial_note',
                'Citation réelle et validée par la personne. Vide = pas d\'encart, '
                . 'pas de guillemets sans citation.'
            ),
            cw_textarea('cas_testimonial_quote_fr', 'Citation (FR)', false),
            cw_textarea('cas_testimonial_quote_en', 'Quote (EN)', false),
            cw_text('cas_testimonial_author', 'Auteur (nom)', false),
            cw_text('cas_testimonial_role_fr', 'Fonction (FR)', false),
            cw_text('cas_testimonial_role_en', 'Role (EN)', false),

            // — Liens & flags —
            cw_tab('Liens & options'),
            cw_url('cas_external_url', 'Lien externe (site du client) — optionnel'),
            cw_true_false(
                'cas_payment_mobile_intl',
                'Mentionner « paiement mobile + international »',
                'À activer uniquement si c\'est vrai pour ce projet (P08 : systématique '
                . 'Boutiques/ATTA, à confirmer ailleurs).'
            ),
        ],
    ]);

    /* ══════════════════════════════════════════════════════════════════════
       RÉALISATION  (portfolio_item)
       ══════════════════════════════════════════════════════════════════════ */
    acf_add_local_field_group([
        'key'      => 'group_realisation',
        'title'    => 'Réalisation — contenu',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'realisation']]],
        'show_in_graphql'    => 1,
        'graphql_field_name' => 'portfolioItemFields',
        'fields' => [
            cw_text('real_client_name', 'Nom du client', true),
            cw_text('real_year', 'Année', false),
            cw_image('real_thumbnail', 'Vignette', false),

            cw_tab('Français'),
            cw_text('real_title_fr', 'Titre (FR)', true),
            cw_textarea('real_summary_fr', 'Résumé court (FR)', false),
            cw_tab('English'),
            cw_text('real_title_en', 'Title (EN)', false),
            cw_textarea('real_summary_en', 'Short summary (EN)', false),

            cw_tab('Lien'),
            cw_url('real_external_url', 'Lien externe (site en ligne) — optionnel'),
        ],
    ]);

    /* ══════════════════════════════════════════════════════════════════════
       MEMBRE DE L'ÉQUIPE  (team_member)
       — reste dépublié tant que les vraies personnes ne sont pas fournies —
       ══════════════════════════════════════════════════════════════════════ */
    acf_add_local_field_group([
        'key'      => 'group_membre_equipe',
        'title'    => 'Membre de l\'équipe',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'membre_equipe']]],
        'show_in_graphql'    => 1,
        'graphql_field_name' => 'teamMemberFields',
        'fields' => [
            cw_text('membre_name', 'Nom complet', true),
            cw_image('membre_photo', 'Photo', false),
            cw_tab('Français'),
            cw_text('membre_role_fr', 'Rôle (FR)', true),
            cw_textarea('membre_bio_fr', 'Bio (FR)', false),
            cw_tab('English'),
            cw_text('membre_role_en', 'Role (EN)', false),
            cw_textarea('membre_bio_en', 'Bio (EN)', false),
        ],
    ]);

    /* ══════════════════════════════════════════════════════════════════════
       RESSOURCE  (resource)
       ══════════════════════════════════════════════════════════════════════ */
    acf_add_local_field_group([
        'key'      => 'group_ressource',
        'title'    => 'Ressource — contenu',
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'ressource']]],
        'show_in_graphql'    => 1,
        'graphql_field_name' => 'resourceFields',
        'fields' => [
            cw_image('ressource_cover', 'Image de couverture', false),
            cw_select('ressource_type', 'Type', [
                'article' => 'Article',
                'guide'   => 'Guide',
                'cas'     => 'Retour d\'expérience',
            ], false),
            cw_tab('Français'),
            cw_text('ressource_title_fr', 'Titre (FR)', true),
            cw_textarea('ressource_excerpt_fr', 'Extrait (FR)', false),
            cw_wysiwyg('ressource_body_fr', 'Corps (FR)', false),
            cw_tab('English'),
            cw_text('ressource_title_en', 'Title (EN)', false),
            cw_textarea('ressource_excerpt_en', 'Excerpt (EN)', false),
            cw_wysiwyg('ressource_body_en', 'Body (EN)', false),
        ],
    ]);

    /* ══════════════════════════════════════════════════════════════════════
       TERMES DE TAXONOMIE — libellé EN (parité FR/EN sur sector + offer_category)
       ══════════════════════════════════════════════════════════════════════ */
    acf_add_local_field_group([
        'key'      => 'group_term_label_en',
        'title'    => 'Libellé anglais',
        'location' => [
            [['param' => 'taxonomy', 'operator' => '==', 'value' => 'sector']],
            [['param' => 'taxonomy', 'operator' => '==', 'value' => 'offer_category']],
        ],
        'show_in_graphql'    => 1,
        'graphql_field_name' => 'termI18n',
        'fields' => [
            cw_text('term_label_en', 'Libellé (EN)', false),
        ],
    ]);
});

/* ─────────────────────────────────────────────────────────────────────────
   Helpers de construction de champs — gardent les définitions ci-dessus
   lisibles et cohérentes (graphql activé partout, jamais de default_value).
   ───────────────────────────────────────────────────────────────────────── */

function cw_field_base(string $name, string $label, bool $required = false): array
{
    return [
        'key'             => 'field_' . $name,
        'name'            => $name,
        'label'           => $label,
        'required'        => $required ? 1 : 0,
        'show_in_graphql' => 1,
        'graphql_description' => $label,
    ];
}

function cw_text(string $name, string $label, bool $required = false): array
{
    return cw_field_base($name, $label, $required) + ['type' => 'text'];
}

function cw_textarea(string $name, string $label, bool $required = false): array
{
    return cw_field_base($name, $label, $required) + ['type' => 'textarea', 'rows' => 3];
}

function cw_wysiwyg(string $name, string $label, bool $required = false): array
{
    return cw_field_base($name, $label, $required)
        + ['type' => 'wysiwyg', 'media_upload' => 1, 'toolbar' => 'basic'];
}

function cw_url(string $name, string $label): array
{
    return cw_field_base($name, $label, false) + ['type' => 'url'];
}

function cw_image(string $name, string $label, bool $required = false): array
{
    return cw_field_base($name, $label, $required)
        + ['type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium'];
}

function cw_gallery(string $name, string $label): array
{
    // ACF PRO
    return cw_field_base($name, $label, false)
        + ['type' => 'gallery', 'return_format' => 'array'];
}

function cw_true_false(string $name, string $label, string $instructions = ''): array
{
    return cw_field_base($name, $label, false)
        + ['type' => 'true_false', 'ui' => 1, 'instructions' => $instructions];
}

function cw_select(string $name, string $label, array $choices, bool $required = false): array
{
    return cw_field_base($name, $label, $required)
        + ['type' => 'select', 'choices' => $choices, 'allow_null' => 1, 'ui' => 1];
}

function cw_repeater(string $name, string $label, array $sub_fields): array
{
    // ACF PRO. `min => 0` : réellement optionnel.
    return cw_field_base($name, $label, false)
        + ['type' => 'repeater', 'min' => 0, 'layout' => 'block', 'sub_fields' => $sub_fields];
}

function cw_tab(string $label): array
{
    return [
        'key'             => 'field_tab_' . sanitize_key($label),
        'label'           => $label,
        'type'            => 'tab',
        'placement'       => 'top',
        'show_in_graphql' => 0,
    ];
}

function cw_message(string $name, string $message): array
{
    return [
        'key'             => 'field_' . $name,
        'name'            => $name,
        'label'           => '',
        'type'            => 'message',
        'message'         => $message,
        'show_in_graphql' => 0,
    ];
}
