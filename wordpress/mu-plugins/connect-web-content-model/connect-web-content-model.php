<?php
/**
 * Plugin Name:  Connect Web — Modèle de contenu (headless)
 * Description:  Custom Post Types, taxonomies et groupes de champs ACF de Connect Web,
 *               définis en code (versionnable) et exposés via WPGraphQL. Calqué sur le
 *               modèle de données P10 §10.1 et l'ADR-002. Aucune configuration manuelle
 *               dans l'admin : tout vit ici.
 * Version:      0.1.0
 * Requires PHP: 8.0
 * Author:       Connect Web
 *
 * @package ConnectWeb\ContentModel
 *
 * Installation : déposer ce dossier dans wp-content/mu-plugins/ de l'instance
 * Hostinger. En mu-plugin, WordPress charge automatiquement le .php à la racine
 * du dossier — d'où ce fichier « loader » qui require les modules de inc/.
 *
 * Dépendances (à installer côté WordPress par le PO) :
 *   - Advanced Custom Fields (ACF) 6.x  — ou ACF PRO si repeaters/flexibles requis
 *   - WPGraphQL 1.x
 *   - WPGraphQL for ACF 2.x
 */

declare(strict_types=1);

if (! defined('ABSPATH')) {
    exit;
}

define('CONNECT_WEB_CM_VERSION', '0.1.0');
define('CONNECT_WEB_CM_DIR', __DIR__);

/**
 * Signale en admin si une dépendance obligatoire manque, plutôt que d'échouer
 * silencieusement.
 */
add_action('admin_notices', static function (): void {
    $missing = [];
    if (! class_exists('ACF')) {
        $missing[] = 'Advanced Custom Fields';
    }
    if (! class_exists('WPGraphQL')) {
        $missing[] = 'WPGraphQL';
    }
    // WPGraphQL for ACF expose une fonction utilitaire ; on teste une constante connue.
    if (! function_exists('acf_add_local_field_group')) {
        $missing[] = 'ACF (API locale)';
    }
    if ($missing === []) {
        return;
    }
    printf(
        '<div class="notice notice-error"><p><strong>Connect Web — Modèle de contenu :</strong> extension(s) requise(s) manquante(s) : %s.</p></div>',
        esc_html(implode(', ', $missing))
    );
});

require_once CONNECT_WEB_CM_DIR . '/inc/post-types.php';
require_once CONNECT_WEB_CM_DIR . '/inc/taxonomies.php';
require_once CONNECT_WEB_CM_DIR . '/inc/acf-field-groups.php';
require_once CONNECT_WEB_CM_DIR . '/inc/graphql.php';

// Réécriture des permaliens à l'activation du thème / au chargement du mu-plugin
// la première fois (les mu-plugins n'ont pas de hook d'activation).
add_action('init', static function (): void {
    if (get_option('connect_web_cm_flushed') !== CONNECT_WEB_CM_VERSION) {
        flush_rewrite_rules(false);
        update_option('connect_web_cm_flushed', CONNECT_WEB_CM_VERSION);
    }
}, 99);
