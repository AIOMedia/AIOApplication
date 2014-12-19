/**
 * Header Directive
 */
(function () {
    'use strict';

    angular.module('UIModule').directive('uiHeader', [
        'PageInfoService',
        function (PageInfoService) {
            return {
                restrict: 'E',
                replace: true,
                scope: {},
                templateUrl: '../app/UI/Partials/header.html',
                link: function (scope, element, attrs) {
                    scope.info = PageInfoService.getInfo();
                    scope.path = PageInfoService.getPath();
                }
            };
        }
    ]);
})();