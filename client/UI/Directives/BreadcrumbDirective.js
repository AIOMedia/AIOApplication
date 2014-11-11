/**
 * Breadcrumb Directive
 */
(function () {
    'use strict';

    angular.module('UIModule').directive('uiBreadcrumb', [
        function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'client/UI/Partials/breadcrumb.html'
            };
        }
    ]);
})();