/**
 * Task routes
 */
angular.module('TaskModule').config([
    '$routeProvider',
    function ($routeProvider) {
        // List Tasks
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

        // Create new Task
        var taskCreate = {
            name: 'user.create',
            url: '#/user/create',
            parent: task,
            templateUrl:  '../app/Task/Partials/edit.html',
            controller:   'TaskEditController',
            controllerAs: 'taskEditCtrl',

            resolve: {
                task: [
                    'TaskService',
                    function (TaskService) {
                        return TaskService.new();
                    }
                ]
            },

            pageInfo: {
                title: 'Create'
            }
        };

        // Edit an existing Task
        var taskEdit = {
            name: 'task.edit',
            url: '#/task/edit',
            parent: task,
            templateUrl:  '../app/Task/Partials/edit.html',
            controller:   'TaskEditController',
            controllerAs: 'taskEditCtrl',

            resolve: {
                task: [
                    '$route',
                    'TaskService',
                    function ($route, TaskService) {
                        return TaskService.get($route.current.params.taskId);
                    }
                ]
            },

            pageInfo: {
                title: 'Edit'
            }
        };

        // Register states
        $routeProvider
            .when('/task',              task)
            .when('/task/create',       taskCreate)
            .when('/task/edit/:taskId', taskEdit);
    }]
);