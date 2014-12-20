(function () {
    'use strict';

    angular.module('TaskModule').controller('TaskController', [
        '$scope',
        'HeaderService',
        'tasks',
        function ($scope, HeaderService, tasks) {
            this.tasks = tasks;

            // Add create button
            HeaderService.addButton({
                icon: 'plus',
                label: 'Create Task',
                action: {
                    func: function () {
                        console.log('create task');
                    }
                }
            });
        }
    ]);
})();