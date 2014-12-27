angular.module('TaskModule').controller('TaskController', [
    '$modal',
    'HeaderService',
    'TaskService',
    'tasks',
    function ($modal, HeaderService, TaskService, tasks) {
        this.tasks = tasks;

        this.toggleDownStatus = function (task) {
            task.done = !task.done;
            TaskService.save(task).then(
                function success(task) {

                },
                function error(err) {
                    // Revert down status to original
                    task.done = !task.done;

                    // Display error message
                }
            );
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