/**
 * Task Edit Controller
 */
angular.module('TaskModule').controller('TaskEditController', [
    '$location',
    'TaskService',
    'task',
    function ($location, TaskService, task) {
        /**
         * Task which will be edited
         * @type {object}
         */
        this.task = task;

        /**
         * Save the Task
         */
        this.save = function () {
            TaskService.save(this.task).then(
                // Save success
                function (task) {
                    // Redirect to users list
                    $location.path('/task');
                },
                // Save failed
                function (errors) {

                }
            );
        };

        /**
         * Abort edition
         */
        this.cancel = function () {
            // Redirect to users list
            $location.path('/task');
        };
    }
]);