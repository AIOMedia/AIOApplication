/**
 * Task routes
 */
angular.module('TaskModule').config([
    '$routeProvider',
    function ($routeProvider) {
        var task = {
            name: 'task',
            url: '#/task',
            templateUrl: '../app/Task/Partials/list.html',
            controller: 'TaskController',
            controllerAs: 'taskCtrl',

            resolve: {
                tasks: [
                    'TaskService',
                    function (TaskService) {
                        return TaskService.list();
                    }
                ]
            },
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