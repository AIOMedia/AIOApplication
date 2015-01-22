/**
 * Administration routes
 */
angular.module('AdministrationModule').config([
    '$routeProvider',
    'ConfigurationProvider',
    function ($routeProvider, ConfigurationProvider) {
        var admin = {
            name: 'admin',
            templateUrl: ConfigurationProvider.defaults.srcPath.core + '/Administration/Partials/index.html',

            pageInfo: {
                icon:  'wrench',
                title: 'Parameters',
                help:  true
            }
        };

        $routeProvider.when('/admin', admin);
    }]
);