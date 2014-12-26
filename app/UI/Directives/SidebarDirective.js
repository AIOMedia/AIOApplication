/**
 * Sidebar Directive
 */
angular.module('UIModule').directive('uiSidebar', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../app/UI/Partials/sidebar.html',
            scope: {
                collapsed: '@collapsed',
                toggle   : '@toggle'
            },
            controller:   'SidebarController',
            controllerAs: 'sidebar',
            bindToController: true,
            link: function (scope, element, attrs, sidebar) {
                // Define defaults
                if (typeof scope.toggle === 'undefined') {
                    scope.toggle = sidebar.toggle;
                }

                if (typeof scope.collapsed === 'undefined') {
                    scope.collapsed = sidebar.collapsed;
                }

                // Watch for attribute changes
                scope.$watch('toggle', function (newValue) {
                    sidebar.toggle = newValue;
                });

                scope.$watch('collapsed', function (newValue) {
                    sidebar.collapsed = newValue;
                });
            }
        };
    }
]);