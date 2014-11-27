/**
 * Demo Module
 */
(function () {
    'use strict';

    angular.module('DemoModule', [
        'ngRoute',

        'UIModule'
    ])
    .run([
        'MenuService',
        function (MenuService) {
            // Widgets
            MenuService.addItem({
                id: 'widgets',
                icon: 'th',
                title: 'Widgets',
                url: '#/widgets',
                notification: {
                    color: 'green',
                    value: 'new'
                }
            });

            // UI Elements
            MenuService.addItem({
                id: 'ui-elements',
                icon: 'laptop',
                title: 'UI Elements',
                children: [
                    { id: 'general',  title: 'General',  url: '#/ui/general' },
                    { id: 'buttons',  title: 'Buttons',  url: '#/ui/buttons' },
                    { id: 'sliders',  title: 'Sliders',  url: '#/ui/sliders' },
                    { id: 'timeline', title: 'Timeline', url: '#/ui/timeline' }
                ]
            });

            // Forms
            MenuService.addItem({
                id: 'forms',
                icon: 'edit',
                title: 'Forms',
                children: [
                    { id: 'general-elements',  title: 'General Elements',  url: '#/forms/general' },
                    { id: 'advanced-elements', title: 'Advanced Elements', url: '#/forms/advanced' },
                ]
            });

            // Tables
            MenuService.addItem({
                id: 'tables',
                icon: 'table',
                title: 'Tables',
                url: '#/tables'
            });

            // Calendar
            MenuService.addItem({
                id: 'calendar',
                icon: 'calendar',
                title: 'Calendar',
                url: '#/calendar',
                notification: {
                    color: 'red',
                    value: 3
                }
            });

            // Mailbox
            MenuService.addItem({
                id: 'mailbox',
                icon: 'envelope',
                title: 'Mailbox',
                url: '#/mailbox',
                notification: {
                    color: 'yellow',
                    value: 12
                }
            });

            // Examples
            MenuService.addItem({
                id: 'examples',
                icon: 'folder',
                title: 'Examples',
                children: [
                    { id: 'login',      title: 'Login',      url: '#/dashboard' },
                    { id: 'register',   title: 'Register',   url: '#/dashboard' },
                    { id: 'lockscreen', title: 'Lockscreen', url: '#/dashboard' },
                    { id: '404error',   title: '404 Error',  url: '#/error/404' },
                    { id: '500error',   title: '500 Error',  url: '#/error/500' },
                    { id: 'blank',      title: 'Blank Page', url: '#/blank' }
                ]
            });
        }
    ]);
})();