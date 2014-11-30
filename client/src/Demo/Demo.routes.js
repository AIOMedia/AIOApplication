/**
 * Demo routes
 */
(function () {
    'use strict';

    angular.module('DemoModule').config([
        '$routeProvider',
        function ($routeProvider) {
            // Widgets
            $routeProvider.when('/widgets', {
                templateUrl: 'src/Demo/Partials/widgets.html',

                pageInfo: {
                    icon:        'th',
                    title:       'Widgets',
                    description: 'Preview page',
                    help:        true,
                    config:   true
                }
            });

            // UI - General
            $routeProvider.when('/ui/general', {
                templateUrl: 'src/Demo/Partials/UI/general.html',

                pageInfo: {
                    icon:        'laptop',
                    title:       'UI Elements',
                    description: 'General',
                    help:     true,
                    config:   true
                }
            });

            // UI - Buttons
            $routeProvider.when('/ui/buttons', {
                templateUrl: 'src/Demo/Partials/UI/buttons.html',

                pageInfo: {
                    icon:        'laptop',
                    title:       'UI Elements',
                    description: 'Buttons',
                    help:     true,
                    config:   true
                }
            });

            // UI - Sliders
            $routeProvider.when('/ui/sliders', {
                templateUrl: 'src/Demo/Partials/UI/sliders.html',

                pageInfo: {
                    icon:        'laptop',
                    title:       'UI Elements',
                    description: 'Sliders',
                    help:     true,
                    config:   true
                }
            });

            // UI - Timeline
            $routeProvider.when('/ui/timeline', {
                templateUrl: 'src/Demo/Partials/UI/timeline.html',

                pageInfo: {
                    icon:        'laptop',
                    title:       'UI Elements',
                    description: 'Timeline',
                    help:     true,
                    config:   true
                }
            });

            // Forms - General elements
            $routeProvider.when('/forms/general', {
                templateUrl: 'src/Demo/Partials/forms/general.html',

                pageInfo: {
                    icon:        'edit',
                    title:       'Forms',
                    description: 'General elements',
                    help:     true,
                    config:   true
                }
            });

            // Forms - Advanced elements
            $routeProvider.when('/forms/advanced', {
                templateUrl: 'src/Demo/Partials/forms/advanced.html',

                pageInfo: {
                    icon:        'edit',
                    title:       'Forms',
                    description: 'Advanced elements',
                    help:     true,
                    config:   true
                }
            });

            // Forms - Editors
            $routeProvider.when('/forms/editors', {
                templateUrl: 'src/Demo/Partials/forms/editors.html',

                pageInfo: {
                    icon:        'edit',
                    title:       'Forms',
                    description: 'Editors',
                    help:     true,
                    config:   true
                }
            });

            // Tables
            $routeProvider.when('/tables', {
                templateUrl: 'src/Demo/Partials/tables.html',

                pageInfo: {
                    icon:        'table',
                    title:       'Tables',
                    description: 'preview of simple tables',
                    help:     true,
                    config:   true
                }
            });

            // Calendar
            $routeProvider.when('/calendar', {
                templateUrl: 'src/Demo/Partials/calendar.html',

                pageInfo: {
                    icon:        'calendar',
                    title:       'Calendar',
                    help:     true,
                    config:   true
                }
            });

            // Mailbox
            $routeProvider.when('/mailbox', {
                templateUrl: 'src/Demo/Partials/mailbox.html',

                pageInfo: {
                    icon:        'envelope',
                    title:       'Mailbox',
                    help:     true,
                    config:   true
                }
            });

            // Examples - Blank page
            $routeProvider.when('/blank', {
                templateUrl: 'src/Demo/Partials/examples/blank.html',

                pageInfo: {
                    icon:        'folder',
                    title:       'Blank page',
                    description: 'it all starts here',
                    help:     true,
                    config:   true
                }
            });
        }]
    );
})();