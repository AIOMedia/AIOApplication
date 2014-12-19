/**
 * Dashboard routes
 */
(function () {
    'use strict';
    angular.module('DashboardModule').config([
        '$routeProvider',
        function ($routeProvider) {
            var dashboard = {
                name: 'dashboard',
                url: '/dashboard',
                templateUrl: '../app/Dashboard/Partials/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'controller',

                pageInfo: {
                    icon: 'dashboard',
                    title: 'Dashboard',
                    description: 'Control panel',
                    help: true,
                    config: true
                }
            };

            $routeProvider.when('/dashboard', dashboard);
        }]
    );
})();