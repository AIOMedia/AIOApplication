/**
 * Demo routes
 */
(function () {
    'use strict';

    angular.module('DemoModule').config([
        '$routeProvider',
        function ($routeProvider) {
            var demo = {
                name: 'demo',
                abstract: true,

                pageInfo: {
                    title: 'Demo'
                }
            };

            var demoWidgets = {
                name: 'demo.widgets',
                url: '#/demo/ui/widgets',
                parent: demo,
                templateUrl: 'app/Demo/Partials/widgets.html',

                pageInfo: {
                    icon:   'th',
                    title:  'Widgets',
                    help:   true,
                    config: true
                }
            };

            var demoUI = {
                name: 'demo.ui',
                abstract: true,
                parent: demo,

                pageInfo: {
                    icon:   'laptop',
                    title:  'UI Elements'
                }
            };

            // UI - General
            var demoUIGeneral = {
                name: 'demo.ui.general',
                url: '#/demo/ui/general',
                parent: demoUI,
                templateUrl: 'app/Demo/Partials/general.html',

                pageInfo: {
                    title:  'General',
                    help:   true,
                    config: true
                }
            };

            // UI - Buttons
            var demoUIButtons = {
                name: 'demo.ui.buttons',
                url: '#/demo/ui/buttons',
                parent: demoUI,
                templateUrl: 'app/Demo/Partials/buttons.html',

                pageInfo: {
                    title:  'Buttons',
                    help:   true,
                    config: true
                }
            };

            // UI - Tables
            var demoUITables = {
                name: 'demo.ui.tables',
                url: '#/demo/ui/tables',
                parent: demoUI,
                templateUrl: 'app/Demo/Partials/tables.html',

                pageInfo: {
                    title:  'Tables',
                    help:   true,
                    config: true
                }
            };

            // UI - Forms
            var demoUIForms = {
                name: 'demo.ui.forms',
                url: '#/demo/ui/forms',
                parent: demoUI,
                templateUrl: 'app/Demo/Partials/forms.html',

                pageInfo: {
                    title:  'Forms',
                    help:   true,
                    config: true
                }
            };

            // UI - Timeline
            var demoUITimeline = {
                name: 'demo.ui.timeline',
                url: '#/demo/ui/timeline',
                parent: demoUI,
                templateUrl: 'app/Demo/Partials/timeline.html',

                pageInfo: {
                    title:  'Timeline',
                    help:   true,
                    config: true
                }
            };

            // Blank page
            var demoBlank = {
                name: 'demo.blank',
                url: '#/demo/blank',
                parent: demo,
                templateUrl: 'app/Demo/Partials/blank.html',

                pageInfo: {
                    icon:  'folder',
                    title: 'Blank page'
                }
            };

            // Register states
            $routeProvider
                .when('/demo/ui/widgets',  demoWidgets)
                .when('/demo/ui/general',  demoUIGeneral)
                .when('/demo/ui/buttons',  demoUIButtons)
                .when('/demo/ui/tables',   demoUITables)
                .when('/demo/ui/forms',    demoUIForms)
                .when('/demo/ui/timeline', demoUITimeline)
                .when('/demo/blank',       demoBlank);
        }]
    );
})();