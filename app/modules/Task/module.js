/**
 * Task Module
 */
angular
    .module('TaskModule', [
        'ngRoute',
        'ui.sortable',
        'AioConfiguration',
        'Api'
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