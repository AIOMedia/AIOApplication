/**
 * Header Directive
 */
angular.module('UIModule').directive('uiHeader', [
    'Configuration',
    'HeaderService',
    function (Configuration, HeaderService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: Configuration.App.getCorePath() + '/UI/Partials/header.html',
            link: function (scope, element, attrs) {
                scope.info    = HeaderService.getInfo();
                scope.path    = HeaderService.getPath();
                scope.buttons = HeaderService.getButtons();

                scope.buttonClick = function (button) {
                    if (button.action && typeof button.action.func === 'function') {
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