/**
 * Button Confirm
 * A button which will display a confirm message to user and execute a callback on validation
 */
angular.module('UIModule').directive('uiButtonConfirm', [
    'Configuration',
    function (Configuration) {
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: Configuration.App.getCorePath() + '/UI/Partials/Buttons/button-confirm.html',
            scope: {
                confirmMessage  : '@',
                callbackConfirm : '@',
                callbackCancel  : '@'
            },
            link: function (scope, element, attrs) {
                scope.confirmMessage = scope.confirmMessage ||'Are you sure ?';
                scope.confirmDisplayed = false;

                scope.confirm = function () {
                    if (scope.confirmDisplayed) {
                        // Call confirm callback
                        if (typeof (scope.callbackConfirm) === 'function') {
                            scope.callbackConfirm.call();
                        }
                    } else {
                        scope.confirmDisplayed = true;
                    }
                };

                scope.cancel = function () {
                    scope.confirmDisplayed = false;

                    if (typeof (scope.callbackCancel) === 'function') {
                        scope.callbackCancel.call();
                    }
                };

                // Destroy events
                scope.$on('$destroy', function() {

                });
            }
        }
    }
]);