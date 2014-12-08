/**
 * Administration routes
 */
(function () {
    'use strict';

    angular.module('AdministrationModule').config([
        '$routeProvider',
        function ($routeProvider) {
            var admin = {
                name: 'admin',
                templateUrl: 'src/Administration/Partials/index.html',

                pageInfo: {
                    icon:  'wrench',
                    title: 'Parameters',
                    help:  true
                }
            };

            $routeProvider.when('/admin', admin);
        }]
    );
})();