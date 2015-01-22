/**
 * Sidebar Directive
 */
angular.module('UIModule').directive('uiSidebar', [
    'Configuration',
    'MenuService',
    function (Configuration, MenuService) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: Configuration.App.getCorePath() + '/UI/Partials/sidebar.html',
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