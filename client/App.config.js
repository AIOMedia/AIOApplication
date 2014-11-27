/**
 * Application config
 */
(function () {
    'use strict';

    angular.module('App').run([
        '$rootScope',
        'PageInfoService',
        'MenuService',
        function ($rootScope, PageInfoService, MenuService) {
            $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
                // Update Page info
                if (next.pageInfo) {
                    PageInfoService.set(next.pageInfo);
                }

                MenuService.checkRoute(next.regexp, true);

                // Close all sidebar menus
                MenuService.closeItemMenus();
            });
        }
    ]);
})();