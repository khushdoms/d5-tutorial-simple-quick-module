<?php
namespace D5TUTSimpleQuickModule;

if ( ! defined( 'ABSPATH' ) ) {
    die( 'Direct access forbidden.' );
}

require_once ABSPATH . 'wp-content/themes/Divi/includes/builder-5/server/Framework/Controllers/RESTController.php';

use ET\Builder\Framework\Route\RESTRoute;
use ET\Builder\Framework\Controllers\RESTController;
use ET\Builder\Framework\UserRole\UserRole;
use WP_REST_Request;
use WP_REST_Response;

/**
 * Class for registering "Simple Quick Module"'s REST API Endpoint.
 */
class D5TutorialSimpleQuickModuleController extends RESTController {

    /**
     * Return unordered list of recent posts.
     */
    public static function index( WP_REST_Request $request ): WP_REST_Response {
        $args = [
            'postsNumber' => $request->get_param( 'postsNumber' ),
        ];

        $response = [
            'html' => D5TutorialSimpleQuickModule::render_recent_post( $args ),
        ];

        return self::response_success( $response );
    }

    /**
     * Index action arguments.
     * Endpoint arguments as used in `register_rest_route()`.
     */
    public static function index_args(): array {
        return [
            'postsNumber' => [
                'type'              => 'number',
                'required'          => false,
                'sanitize_callback' => function( $number ) {

                    return intval( $number );
                },
                'validate_callback' => 'esc_html',
            ],
        ];
    }

    /**
     * Index action permission.
     * Endpoint permission callback as used in `register_rest_route()`.
     */
    public static function index_permission(): bool {
        return true;
    }
}

/**
 * Register "Simple Quick Module"'s REST API Route and endpoint.
 */
add_action(
    'init',
    function() {
        $route = new RESTRoute( 'd5tut/v1' );

        $route->prefix( '/module-data' )->group(
            function( $router ) {
                $router->get( '/simple-quick-module/posts', D5TutorialSimpleQuickModuleController::class );
            }
        );
    }
);