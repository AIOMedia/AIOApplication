/**
 * Task routes
 */
(function () {
    'use strict';

    angular.module('TaskModule').config([
        '$routeProvider',
        function ($routeProvider) {
            var task = {
                name: 'task',
                url: '#/task',
                templateUrl: 'src/Task/Partials/list.html',

                pageInfo: {
                    icon:  'tasks',
                    title: 'My tasks'
                }
            };

            // Register states
            $routeProvider
                .when('/task', task);
        }]
    );
})();