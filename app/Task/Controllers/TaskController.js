(function () {
    'use strict';

    angular.module('TaskModule').controller('TaskController', [
        'HeaderService',
        'tasks',
        function (HeaderService, tasks) {
            /*this.tasks = tasks;*/

            this.tasks = [
                {id: 1, name: 'Ma premiere tache', done: false },
                {id: 2, name: 'Ma premiere tache', done: false },
                {id: 3, name: 'Ma premiere tache', done: false },
                {id: 4, name: 'Ma premiere tache terminée', done: true }
            ];

            this.toggleDownStatus = function (task) {
                task.done = !task.done;
            };

            // Add create button
            HeaderService.addButton({
                icon: 'plus',
                iconOnly: true,
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