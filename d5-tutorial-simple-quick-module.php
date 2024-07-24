<?php
/*
Plugin Name: Divi 5 Tutorial Simple Quick Module
Plugin URI:
Description: Plugin reference for creating simple and quick Divi 5 Module.
Version:     1.0.0
Author:      Elegant Themes
Author URI:  https://elegantthemes.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

if ( ! defined( 'ABSPATH' ) ) {
    die( 'Direct access forbidden.' );
}

// Setup constants.
define( 'D5_TUTORIAL_SIMPLE_QUICK_MODULE_PATH', plugin_dir_path( __FILE__ ) );
define( 'D5_TUTORIAL_SIMPLE_QUICK_MODULE_URL', plugin_dir_url( __FILE__ ) );

// Load Divi 5 modules.
require_once D5_TUTORIAL_SIMPLE_QUICK_MODULE_PATH . 'server/index.php';
require_once D5_TUTORIAL_SIMPLE_QUICK_MODULE_PATH . 'server/REST.php';

/**
 * Enqueue Divi 5 Visual Builder Assets
 */
function d5_tutorial_simple_quick_module_enqueue_visual_builder_assets() {
    if ( et_core_is_fb_enabled() && et_builder_d5_enabled() ) {
        wp_enqueue_script(
            'd5-tutorial-simple-quick-module-visual-builder',
            D5_TUTORIAL_SIMPLE_QUICK_MODULE_URL . 'visual-builder/build/d5-tutorial-simple-quick-module.js',
            [
                'react',
                'jquery',
                'divi-module-library',
                'wp-hooks',
                'divi-rest',
            ],
            '1.0.0',
            true
        );
    }
}

add_action( 'divi_visual_builder_assets_before_enqueue_packages', 'd5_tutorial_simple_quick_module_enqueue_visual_builder_assets' );