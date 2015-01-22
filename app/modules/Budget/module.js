/**
 * Budget Module
 */
angular
    .module('BudgetModule', [
        'ngRoute',
        'AioConfiguration',
        'Api'
    ])
    .run([
        'MenuService',
        function (MenuService) {
            MenuService.addItem({
                id: 'budget',
                position: 6,
                icon: 'bank',
                title: 'Budget',
                url: '#/budget'
            });
        }
    ]);