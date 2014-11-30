/**
 * Administration routes
 */
(function () {
    'use strict';

    angular.module('AdministrationModule').config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/admin', {
                templateUrl: 'src/Administration/Partials/index.html',

                pageInfo: {
                    icon:        'wrench',
                    title:       'Parameters',
                    description: 'Configure your application',
                    help: true
                }
            });
        }]
    );
})();