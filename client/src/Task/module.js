/**
 * Task Module
 */
(function () {
    'use strict';

    angular
        .module('TaskModule', [
            'ngRoute'
        ])
        .run([
            'MenuService',
            function (MenuService) {
                MenuService.addItem({
                    id: 'task',
                    position: 5,
                    icon: 'tasks',
                    title: 'Tasks',
                    url: '#/task'
                });
            }
        ]);
})();