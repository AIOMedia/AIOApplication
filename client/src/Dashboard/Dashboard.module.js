/**
 * Dashboard Module
 */
(function () {
    'use strict';

    angular.module('DashboardModule', [
        'ngRoute'
    ])
    .run([
        'MenuService',
        function (MenuService) {
            MenuService.addItem({
                id: 'dashboard',
                position: 1,
                icon: 'dashboard',
                title: 'Dashboard',
                url: '#/dashboard'
            });
        }
    ]);
})();