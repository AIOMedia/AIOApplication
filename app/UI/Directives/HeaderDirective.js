/**
 * Header Directive
 */
(function () {
    'use strict';

    angular.module('UIModule').directive('uiHeader', [
        'HeaderService',
        function (HeaderService) {
            return {
                restrict: 'E',
                replace: true,
                scope: {},
                templateUrl: '../app/UI/Partials/header.html',
                link: function (scope, element, attrs) {
                    scope.info    = HeaderService.getInfo();
                    scope.path    = HeaderService.getPath();
                    scope.buttons = HeaderService.getButtons();

                    scope.buttonClick = function (button) {
                        if (button.action && button.action.func) {
                            if (button.action.params) {
                                button.action.func.apply(null, button.action.params);
                            } else {
                                button.action.func();
                            }
                        }
                    }
                }
            };
        }
    ]);
})();