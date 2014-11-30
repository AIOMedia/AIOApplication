/**
 * User routes
 */
(function () {
    'use strict';

    angular.module('UserModule').config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/user/profile', {
                templateUrl: 'client/User/Partials/profile.html',

                pageInfo: {
                    icon:        'user',
                    title:       'My profile',
                    description: ''
                }
            });
        }]
    );
})();