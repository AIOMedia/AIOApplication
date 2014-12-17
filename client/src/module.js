/**
 * Application
 */
(function () {
    'use strict';

    angular
        .module('App', [
            'ngRoute',
            'UIModule',
            'AdministrationModule',
            'DashboardModule',
            'TaskModule',

            // To remove
            'DemoModule'
        ])
        .config([
            '$httpProvider',
            function ($httpProvider) {
                $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }
        ])
        .run([
            '$rootScope',
            'PageInfoService',
            'MenuService',
            function ($rootScope, PageInfoService, MenuService) {
                $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
                    // Store previous state
                    PageInfoService.setPrevious(current);

                    // Store current state
                    PageInfoService.setCurrent(next);

                    MenuService.checkRoute(next.regexp, true);

                    // Close all sidebar menus
                    MenuService.closeItemMenus();
                });
            }
        ])
})();