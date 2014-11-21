/**
 * Scrollbar directive
 * Based on jQuery plugin SlimScroll v1.3.3
 */
(function () {
    'use strict';

    angular.module('UIModule').directive('uiScrollbar', [
        function () {
            var defaultOptions = {
                height: '100%',
                alwaysVisible: false,
                size: '8px',
                wheelStep: 1
            };

            return {
                restrict: 'A',
                scope: {},
                link: function (scope, element, attrs) {
                    // Store element where scrollbar will be attached
                    var $element = $(element);

                    // Merge default options with user options
                    var options = angular.extend({}, defaultOptions);
                    if (typeof attrs.uiScrollbar === 'object') {
                        options = angular.extend(options, attrs.uiScrollbar);
                    }

                    // Initialize scrollbar
                    $element.slimscroll(options);

                    // Destroy the scrollbar when directive is destroyed
                    scope.$on('$destroy', function() {
                        $element.slimscroll({ destroy: true });
                    });
                }
            };
        }
    ]);
})();