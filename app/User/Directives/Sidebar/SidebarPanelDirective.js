/**
 * Sidebar Panel Directive
 * @param boolean collapsed
 */
(function () {
    'use strict';

    angular.module('UserModule').directive('userSidebarPanel', [
        function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'src/User/Partials/Sidebar/user-panel.html',
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