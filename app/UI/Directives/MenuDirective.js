/**
 * Menu Directive
 * @param boolean collapsed
 */
(function () {
    'use strict';

    angular.module('UIModule').directive('uiMenu', [
        'MenuService',
        function (MenuService) {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    collapsed: '=?'
                },
                templateUrl: '../app/UI/Partials/menu.html',
                link: function (scope, element, attrs) {
                    scope.items = MenuService.getItems();

                    scope.toggleItemMenu = function (event, item) {
                        if (MenuService.toggleItemMenu(item)) {
                            event.preventDefault();
                        }
                    };
                }
            };
        }
    ]);
})();