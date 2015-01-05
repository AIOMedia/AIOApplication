/**
 * Sidebar Directive
 */
angular.module('UIModule').directive('uiSidebar', [
    'MenuService',
    function (MenuService) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../app/UI/Partials/sidebar.html',
            scope: {
                collapsed: '@collapsed',
                toggle   : '@toggle'
            },
            link: function (scope, element, attrs) {
                scope.menu = MenuService.getItems();
                scope.toggleSidebar = function () {
                    scope.collapsed = !scope.collapsed;
                };

                scope.toggleItemMenu = function (event, item) {
                    if (MenuService.toggleItemMenu(item)) {
                        event.preventDefault();
                    }
                };
            }
        };
    }
]);