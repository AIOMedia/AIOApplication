/**
 * Demo Module
 */
angular
    .module('DemoModule', [
        'ngRoute',
        'AioConfiguration',
        'UIModule'
    ])
    .run([
        'MenuService',
        function (MenuService) {
            MenuService.addItem({
                id: 'demo',
                icon: 'laptop',
                title: 'UI Demo',
                notification: {
                    color: 'green',
                    value: 'new'
                },
                children: [
                    { id: 'general',  icon: 'adjust',    title: 'General',    url: '#/demo/ui/general' },
                    { id: 'buttons',  icon: 'hand-o-up', title: 'Buttons',    url: '#/demo/ui/buttons' },
                    { id: 'tables',   icon: 'table',     title: 'Tables',     url: '#/demo/ui/tables' },
                    { id: 'forms',    icon: 'font',      title: 'Forms',      url: '#/demo/ui/forms' },
                    { id: 'widgets',  icon: 'th',        title: 'Widgets',    url: '#/demo/ui/widgets' },
                    { id: 'timeline', icon: 'clock-o',   title: 'Timeline',   url: '#/demo/ui/timeline' },
                    { id: '404error', icon: 'warning',   title: '404 Error',  url: '#/error/404' },
                    { id: '500error', icon: 'warning',   title: '500 Error',  url: '#/error/500' },
                    { id: 'blank',    icon: 'square-o',  title: 'Blank Page', url: '#/demo/blank' }
                ]
            });
        }
    ]);