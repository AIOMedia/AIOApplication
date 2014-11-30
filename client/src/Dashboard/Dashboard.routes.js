/**
 * Dashboard routes
 */
(function () {
    'use strict';

    angular.module('DashboardModule').config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/dashboard', {
                templateUrl: 'src/Dashboard/Partials/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'controller',

                pageInfo: {
                    icon:        'dashboard',
                    title:       'Dashboard',
                    description: 'Control panel',
                    help:        true,
                    config:   true
                }
            });
        }]
    );
})();