/**
 * Application
 */
(function () {
    'use strict';

    angular.module('App', [
        'UIModule',
        'AdministrationModule',
        'DashboardModule',

        // To remove
        'DemoModule'
    ]);
})();