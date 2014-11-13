/**
 * Menu Service
 */
(function () {
    'use strict';

    angular.module('UIModule').factory('MenuService', [
        function () {
            var items = [];

            var item = {
                id:          '', // required
                position:     1,
                icon:        '',
                title:       '', // required
                active:      false,
                opened:      false,
                url:         '', // required unless item has children
                children: [],
                notification: {
                    color: '',
                    value: ''
                }
            }

            return {
                getItems: function () {
                    // Add demo data
                    this.addItem({
                        id: 'dashboard',
                        icon: 'dashboard',
                        title: 'Dashboard',
                        url: '#/dashboard'
                    });

                    this.addItem({
                        id: 'widgets',
                        icon: 'th',
                        title: 'Widgets',
                        url: '#/dashboard',
                        notification: {
                            color: 'green',
                            value: 'new'
                        }
                    });

                    this.addItem({
                        id: 'charts',
                        icon: 'bar-chart-o',
                        title: 'Charts',
                        children: [
                            { id: 'moris',         title: 'Moris',         url: '#/dashboard' },
                            { id: 'flot',          title: 'Flot',          url: '#/dashboard' },
                            { id: 'inline-charts', title: 'Inline Charts', url: '#/dashboard' }
                        ]
                    });

                    this.addItem({
                        id: 'ui-elements',
                        icon: 'laptop',
                        title: 'UI Elements',
                        children: [
                            { id: 'general',  title: 'General',  url: '#/dashboard' },
                            { id: 'icons',    title: 'Icons',    url: '#/dashboard' },
                            { id: 'buttons',  title: 'Buttons',  url: '#/dashboard' },
                            { id: 'sliders',  title: 'Sliders',  url: '#/dashboard' },
                            { id: 'timeline', title: 'Timeline', url: '#/dashboard' }
                        ]
                    });

                    this.addItem({
                        id: 'forms',
                        icon: 'edit',
                        title: 'Forms',
                        children: [
                            { id: 'general-elements',  title: 'General Elements',  url: '#/dashboard' },
                            { id: 'advanced-elements', title: 'Advanced Elements', url: '#/dashboard' },
                            { id: 'editors',           title: 'Editors',           url: '#/dashboard' }
                        ]
                    });

                    this.addItem({
                        id: 'tables',
                        icon: 'table',
                        title: 'Tables',
                        children: [
                            { id: 'simple-tables', title: 'Simple tables', url: '#/dashboard' },
                            { id: 'data-tables',   title: 'Data tables',   url: '#/dashboard' }
                        ]
                    });

                    this.addItem({
                        id: 'calendar',
                        icon: 'calendar',
                        title: 'Calendar',
                        url: '#/dashboard',
                        notification: {
                            color: 'red',
                            value: 3
                        }
                    });

                    this.addItem({
                        id: 'mailbox',
                        icon: 'envelope',
                        title: 'Mailbox',
                        url: '#/dashboard',
                        notification: {
                            color: 'yellow',
                            value: 12
                        }
                    });

                    this.addItem({
                        id: 'examples',
                        icon: 'folder',
                        title: 'Examples',
                        children: [
                            { id: 'invoice',    title: 'Invoice',    url: '#/dashboard' },
                            { id: 'login',      title: 'Login',      url: '#/dashboard' },
                            { id: 'register',   title: 'Register',   url: '#/dashboard' },
                            { id: 'lockscreen', title: 'Lockscreen', url: '#/dashboard' },
                            { id: '404error',   title: '404 Error',  url: '#/error/404' },
                            { id: '500error',   title: '500 Error',  url: '#/error/500' },
                            { id: 'blank',      title: 'Blank Page', url: '#/dashboard' }
                        ]
                    });

                    return items;
                },

                addItem: function (item) {
                    if (this.validateItem(item)) {
                        items.push(item);
                    } else {
                        console.error('Menu : Try to add an invalid item to menu.');
                    }

                    return this;
                },

                validateItem: function (item) {
                    var valid = true;

                    if (!item.id || !item.title) {
                        valid = false;
                    } else {
                        // Set some defaults
                        if (!item.position) {
                            item.position = items.length + 1;
                        }

                        if (!item.url) {
                            item.url = '';
                        }

                        if (!item.children) {
                            item.children = [];
                        }
                    }

                    return valid;
                }
            };
        }
    ]);
})();