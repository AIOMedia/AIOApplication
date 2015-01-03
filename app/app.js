/**
 * Application
 */
angular
    .module('App', [
        'ngRoute',
        'ui.bootstrap',
        'UIModule',
        'AdministrationModule',
        'DashboardModule',
        'TaskModule',
        'MusicModule',
        'DemoModule'
    ])
    .config([
        '$httpProvider',
        function ($httpProvider) {
            $httpProvider.defaults.headers.common["Accept"] = "application/json";
            $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        }
    ])
    .run([
        '$rootScope',
        '$location',
        'HeaderService',
        'MenuService',
        'AuthenticationService',
        function ($rootScope, $location, HeaderService, MenuService, AuthenticationService) {
            // Check User credentials
            $rootScope.$on("$routeChangeStart", function (event, next, current) {
                if (next.access && next.access.requiredLogin && !AuthenticationService.isLogged()) {
                    // Redirect to login page
                    $location.path('/user/login');
                }
            });

            // Update UI with the new page info
            $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
                // Store previous state
                HeaderService.setPrevious(current);

                // Store current state
                HeaderService.setCurrent(next);

                MenuService.checkRoute(next.regexp, true);

                // Close all sidebar menus
                MenuService.closeItemMenus();
            });

            // Redirect to error page if there is a problem
            $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
                // Get status of the rejection or assume it's our fault with a default 500 error
                var statusCode = rejection && rejection.status && rejection.status.code ? rejection.status.code : 500;

                // Redirect User to the correct error page
                switch (statusCode) {
                    case 404:
                        $location.path('/error/404');
                        break;

                    case 500:
                    default:
                        $location.path('/error/500');
                        break;
                }
            });
        }
    ]);