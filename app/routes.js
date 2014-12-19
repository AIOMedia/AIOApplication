/**
 * Application routes
 */
(function () {
    'use strict';

    angular.module('App').config([
        '$routeProvider',
        function ($routeProvider) {
            var home = {
                redirectTo: '/dashboard'
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
                templateUrl: '../app/UI/Partials/error/404.html',

                pageInfo: {
                    title: '404 Page not found'
                }
            };

            var error500 = {
                name: 'error.500',
                parent: error,
                templateUrl: '../app/UI/Partials/error/500.html',

                pageInfo: {
                    title: '500 Internal server error'
                }
            }

            $routeProvider
                .when('',           home)
                .when('/error/404', error404)
                .when('/error/500', error500)
                .otherwise({ redirectTo: '/error/404' });
        }
    ]);
})();