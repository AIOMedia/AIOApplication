/**
 * Home routes
 */
angular.module('HomeModule').config([
    '$routeProvider',
    'ConfigurationProvider',
    function ($routeProvider, ConfigurationProvider) {
        var home = {
            name: 'home',
            url: '/home',
            templateUrl: ConfigurationProvider.defaults.srcPath.core + '/Home/Partials/index.html',

            pageInfo: {
                icon: 'dashboard',
                title: 'Dashboard',
                description: 'Control panel'
            }
        };

        $routeProvider.when('/home', home);
    }]
);