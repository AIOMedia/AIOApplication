/**
 * UI routes
 */
(function () {
    'use strict';

    angular.module('UIModule').config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/error/404', {
                templateUrl: 'src/UI/Partials/error/404.html',

                pageInfo: {
                    icon:        'warning',
                    title:       'Error 404',
                    description: 'Page not found'
                }
            });

            $routeProvider.when('/error/500', {
                templateUrl: 'src/UI/Partials/error/500.html',

                pageInfo: {
                    icon:        'warning',
                    title:       'Error 500',
                    description: 'Internal server error'
                }
            });
        }]
    );
})();