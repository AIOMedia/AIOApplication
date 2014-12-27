/**
 * Task Edit Controller
 */
angular.module('TaskModule').controller('TaskEditController', [
    function (task) {
        this.task = task;
    }
]);