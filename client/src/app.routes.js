/**
 * Application routes
 */
(function () {
    'use strict';

    angular.module('App').config([
        '$routeProvider',
        function ($routeProvider) {
            // Map homepage on dashboard
            $routeProvider.when('/', { redirectTo: '/dashboard' });

            $routeProvider.otherwise({ redirectTo: '/error/404' });
        }
    ]);
})();