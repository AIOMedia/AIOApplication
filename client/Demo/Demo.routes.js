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
                templateUrl: 'client/Demo/Partials/widgets.html',

                pageInfo: {
                    icon:        'th',
                    title:       'Widgets',
                    description: 'Preview page',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });

            // UI - General
            $routeProvider.when('/ui/general', {
                templateUrl: 'client/Demo/Partials/UI/general.html',

                pageInfo: {
                    icon:        'laptop',
                    title:       'UI Elements',
                    description: 'General',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });

            // UI - Buttons
            $routeProvider.when('/ui/buttons', {
                templateUrl: 'client/Demo/Partials/UI/buttons.html',

                pageInfo: {
                    icon:        'laptop',
                    title:       'UI Elements',
                    description: 'Buttons',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });

            // UI - Sliders
            $routeProvider.when('/ui/sliders', {
                templateUrl: 'client/Demo/Partials/UI/sliders.html',

                pageInfo: {
                    icon:        'laptop',
                    title:       'UI Elements',
                    description: 'Sliders',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });

            // UI - Timeline
            $routeProvider.when('/ui/timeline', {
                templateUrl: 'client/Demo/Partials/UI/timeline.html',

                pageInfo: {
                    icon:        'laptop',
                    title:       'UI Elements',
                    description: 'Timeline',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });

            // Forms - General elements
            $routeProvider.when('/forms/general', {
                templateUrl: 'client/Demo/Partials/forms/general.html',

                pageInfo: {
                    icon:        'edit',
                    title:       'Forms',
                    description: 'General elements',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });

            // Forms - Advanced elements
            $routeProvider.when('/forms/advanced', {
                templateUrl: 'client/Demo/Partials/forms/advanced.html',

                pageInfo: {
                    icon:        'edit',
                    title:       'Forms',
                    description: 'Advanced elements',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });

            // Forms - Editors
            $routeProvider.when('/forms/editors', {
                templateUrl: 'client/Demo/Partials/forms/editors.html',

                pageInfo: {
                    icon:        'edit',
                    title:       'Forms',
                    description: 'Editors',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });

            // Tables
            $routeProvider.when('/tables', {
                templateUrl: 'client/Demo/Partials/tables.html',

                pageInfo: {
                    icon:        'table',
                    title:       'Tables',
                    description: 'preview of simple tables',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });

            // Calendar
            $routeProvider.when('/calendar', {
                templateUrl: 'client/Demo/Partials/calendar.html',

                pageInfo: {
                    icon:        'calendar',
                    title:       'Calendar',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });

            // Mailbox
            $routeProvider.when('/mailbox', {
                templateUrl: 'client/Demo/Partials/mailbox.html',

                pageInfo: {
                    icon:        'envelope',
                    title:       'Mailbox',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });

            // Examples - Blank page
            $routeProvider.when('/blank', {
                templateUrl: 'client/Demo/Partials/examples/blank.html',

                pageInfo: {
                    icon:        'folder',
                    title:       'Blank page',
                    description: 'it all starts here',
                    hasHelp:     true,
                    hasConfig:   true
                }
            });
        }]
    );
})();