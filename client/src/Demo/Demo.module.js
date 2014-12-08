/**
 * Demo Module
 */
(function () {
    'use strict';

    angular
        .module('DemoModule', [
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
                    url: '#/demo/widgets',
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
                        { id: 'general',  title: 'General',  url: '#/demo/ui/general' },
                        { id: 'buttons',  title: 'Buttons',  url: '#/demo/ui/buttons' },
                        { id: 'tables',   title: 'Tables',   url: '#/demo/ui/tables' },
                        { id: 'forms',    title: 'Forms',    url: '#/demo/ui/forms' },
                        { id: 'timeline', title: 'Timeline', url: '#/demo/ui/timeline' }
                    ]
                });

                // Calendar
                MenuService.addItem({
                    id: 'calendar',
                    icon: 'calendar',
                    title: 'Calendar',
                    url: '#/demo/calendar',
                    notification: {
                        color: 'red',
                        value: 3
                    }
                });

                // Examples
                MenuService.addItem({
                    id: 'examples',
                    icon: 'folder',
                    title: 'Examples',
                    children: [
                        { id: '404error',   title: '404 Error',  url: '#/error/404' },
                        { id: '500error',   title: '500 Error',  url: '#/error/500' },
                        { id: 'blank',      title: 'Blank Page', url: '#/demo/blank' }
                    ]
                });
            }
    ]);
})();