/**
 * Application config
 */
(function () {
    'use strict';

    angular.module('App').run([
        '$rootScope',
        '$window',
        'PageInfoService',
        'MenuService',
        function ($rootScope, $window, PageInfoService, MenuService) {
            $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
                // Update Page info
                if (next.pageInfo) {
                    PageInfoService.set(next.pageInfo);

                    // Change HTML <head> title
                    $window.document.title = PageInfoService.get('title');
                }

                MenuService.checkRoute(next.regexp, true);

                // Close all sidebar menus
                MenuService.closeItemMenus();
            });
        }
    ]);
})();