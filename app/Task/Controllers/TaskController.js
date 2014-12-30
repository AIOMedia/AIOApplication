angular.module('TaskModule').controller('TaskController', [
    '$modal',
    'HeaderService',
    'TaskService',
    'tasks',
    function ($modal, HeaderService, TaskService, tasks) {
        /**
         * List of tasks
         * @type {array}
         */
        this.tasks = tasks;

        /**
         * Current editing task
         * @type {null}
         */
        this.editTask = null;

        /**
         * Current editing task is a new task
         * @type {boolean}
         */
        this.editTaskIsNew = false;

        this.sortableOptions = {
            update: function(e, ui) {
                console.log('coucou');
            },
            axis: 'y',
            placeholder: 'ui-sortable-placeholder'
        };

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

        this.create = function () {
            console.log('create task');
            // Only start creating a new task if we aren't creating one
            if (!this.editTaskIsNew) {
                // Cancel current editing if needed
                if (this.editTask) {
                    this.cancel();
                }

                // Initialize a new task
                this.editTask = TaskService.new();
                this.editTaskIsNew = true;

                this.tasks.unshift(this.editTask);
            }
        };

        this.edit = function (task) {
            console.log('edit task');
            if (this.editTask) {
                this.cancel();
            }

            this.editTask = angular.extend({}, task);
        };

        this.delete = function (task) {
            console.log('delete task');
            TaskService.delete(task).then(
                // Delete success
                function (task) {
                    // Remove task from list
                    var pos = this.tasks.indexOf(task);
                    if (-1 !== pos) {
                        this.tasks.splice(pos, 1);
                    }
                },
                // Delete failed
                function (errors) {

                }
            );
        };

        this.save = function () {
            console.log('save');
            TaskService.save(this.editTask).then(
                // Save success
                function (task) {
                    this.editTask = null;
                }.bind(this),
                // Save failed
                function (errors) {

                }
            );
        };

        this.cancel = function () {
            console.log('cancel edit/create');
            if (this.editTaskIsNew) {
                var pos = this.tasks.indexOf(this.editTask);
                if (-1 !== pos) {
                    this.tasks.splice(pos, 1);
                }
            }

            this.editTask = null;
            this.editTaskIsNew = false;
        };

        // Add create button
        HeaderService.addButton({
            icon: 'plus',
            iconOnly: true,
            label: 'Create Task',
            action: {
                func: function () {
                    this.create();
                }.bind(this)
            }
        });
    }
]);