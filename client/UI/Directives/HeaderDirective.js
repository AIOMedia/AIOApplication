/**
 * Header Directive
 */
(function () {
    'use strict';

    angular.module('UIModule').directive('uiHeader', [
        function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'client/UI/Partials/header.html'
            };
        }
    ]);
})();