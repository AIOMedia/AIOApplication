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
                templateUrl: 'src/UI/Partials/breadcrumb.html'
            };
        }
    ]);
})();