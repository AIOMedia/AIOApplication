/**
 * Home routes
 */
(function () {
    'use strict';

    angular.module('HomeModule').config([
        '$routeProvider',
        function ($routeProvider) {
            var home = {
                name: 'home',
                url: '/home',
                templateUrl: '../app/Home/Partials/index.html',

                pageInfo: {
                    icon: 'dashboard',
                    title: 'Dashboard',
                    description: 'Control panel',
                    help: true,
                    config: true
                }
            };

            $routeProvider.when('/home', home);
        }]
    );
})();