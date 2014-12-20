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
            'HeaderService',
            'MenuService',
            function ($rootScope, HeaderService, MenuService) {
                $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
                    // Store previous state
                    HeaderService.setPrevious(current);

                    // Store current state
                    HeaderService.setCurrent(next);

                    MenuService.checkRoute(next.regexp, true);

                    // Close all sidebar menus
                    MenuService.closeItemMenus();
                });
            }
        ])
})();