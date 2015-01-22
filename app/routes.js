/**
 * Application routes
 */
angular.module('AioApp').config([
    '$routeProvider',
    'ConfigurationProvider',
    function ($routeProvider, ConfigurationProvider) {
        var home = {
            redirectTo: '/home'
        };

        var error = {
            name: 'error',
            abstract: true,

            pageInfo: {
                icon: 'warning',
                title: 'Error'
            }
        };

        var error404 = {
            name: 'error.404',
            parent: error,
            templateUrl: ConfigurationProvider.defaults.srcPath.core + '/UI/Partials/error/404.html',

            pageInfo: {
                title: '404 Page not found'
            }
        };

        var error500 = {
            name: 'error.500',
            parent: error,
            templateUrl: ConfigurationProvider.defaults.srcPath.core + '/app/UI/Partials/error/500.html',

            pageInfo: {
                title: '500 Internal server error'
            }
        }

        $routeProvider
            .when('/',          home)
            .when('/error/404', error404)
            .when('/error/500', error500)
            .otherwise({ redirectTo: '/error/404' });
    }
]);