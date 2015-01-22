/**
 * Task routes
 */
angular.module('TaskModule').config([
    '$routeProvider',
    'ConfigurationProvider',
    function ($routeProvider, ConfigurationProvider) {
        // List Tasks
        var task = {
            name: 'task',
            url: '#/task',
            templateUrl: ConfigurationProvider.defaults.srcPath.modules + '/Task/Partials/list.html',
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
        $routeProvider.when('/task', task);
    }]
);