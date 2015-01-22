/**
 * Dashboard routes
 */
angular.module('DashboardModule').config([
    '$routeProvider',
    'ConfigurationProvider',
    function ($routeProvider, ConfigurationProvider) {
        var dashboard = {
            name: 'dashboard',
            url: '/dashboard',
            templateUrl: ConfigurationProvider.defaults.srcPath.core + '/Dashboard/Partials/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'controller',

            pageInfo: {
                icon: 'dashboard',
                title: 'Dashboard',
                description: 'Control panel',
                help: true,
                config: true
            }
        };

        $routeProvider.when('/dashboard', dashboard);
    }]
);