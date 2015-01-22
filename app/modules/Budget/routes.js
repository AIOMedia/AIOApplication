/**
 * Task routes
 */
angular.module('BudgetModule').config([
    '$routeProvider',
    'ConfigurationProvider',
    function ($routeProvider, ConfigurationProvider) {
        // Budget
        var task = {
            name: 'budget',
            url: '#/budget',
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
                icon:  'bank',
                title: 'My budget'
            }
        };

        // Register states
        $routeProvider.when('/task', task);
    }]
);