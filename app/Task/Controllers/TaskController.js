angular.module('TaskModule').controller('TaskController', [
    '$modal',
    'HeaderService',
    'tasks',
    function ($modal, HeaderService, tasks) {
        this.tasks = tasks;

        this.tasks = [
            {id: 1, name: 'Ma premiere tache', done: false },
            {id: 2, name: 'Ma premiere tache', done: false },
            {id: 3, name: 'Ma premiere tache', done: false },
            {id: 4, name: 'Ma premiere tache terminée', done: true }
        ];

        this.toggleDownStatus = function (task) {
            task.done = !task.done;
        };

        this.openForm = function (task) {
            var modalInstance = $modal.open({
                templateUrl: '../app/Task/Partials/edit.html',
                controller: 'TaskEditController',
                controllerAs: 'taskEditCtrl',
                size: 'lg',
                resolve: {
                    task: function () { return task; }
                 }
            });
        };

        // Add create button
        HeaderService.addButton({
            icon: 'plus',
            iconOnly: true,
            label: 'Create Task',
            url: '#/task/create'
        });
    }
]);