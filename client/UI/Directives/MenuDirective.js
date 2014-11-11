/**
 * Menu Directive
 * @param boolean collapsed
 */
(function () {
    'use strict';

    angular.module('UIModule').directive('uiMenu', [
        function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    collapsed: '=?'
                },
                templateUrl: 'client/UI/Partials/menu.html',
                controller:   'MenuController',
                controllerAs: 'menu',
                link: function (scope, element, attrs, menu) {
                    // Define defaults
                    if (typeof scope.collapsed === 'undefined') {
                        scope.collapsed = menu.collapsed;
                    }

                    // Watch for attribute changes
                    scope.$watch('collapsed', function (newValue) {
                        menu.collapsed = newValue;
                    });
                }
            };
        }
    ]);
})();