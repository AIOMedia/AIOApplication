/**
 * Dashboard routes
 */
(function () {
    'use strict';

    angular.module('DashboardModule').config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/dashboard', {
                templateUrl: 'client/Dashboard/Partials/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'controller'
            });
        }]
    );
})();