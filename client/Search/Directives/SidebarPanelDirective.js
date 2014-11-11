/**
 * Sidebar Panel Directive
 * @param boolean collapsed
 */
(function () {
    'use strict';

    angular.module('SearchModule').directive('searchSidebarPanel', [
        function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'client/Search/Partials/sidebar-panel.html',
                scope: {
                    collapsed: '=?'
                },
                controller:   'SidebarPanelController',
                controllerAs: 'sidebarPanel',
                link: function (scope, element, attrs, sidebarPanel) {
                    // Define defaults
                    if (typeof scope.collapsed === 'undefined') {
                        scope.collapsed = sidebarPanel.collapsed;
                    }

                    // Watch for attribute changes
                    scope.$watch('collapsed', function (newValue) {
                        sidebarPanel.collapsed = newValue;
                    });
                }
            };
        }
    ]);
})();