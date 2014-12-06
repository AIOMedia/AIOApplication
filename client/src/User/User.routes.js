/**
 * User routes
 */
(function () {
    'use strict';

    angular.module('UserModule').config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/user/profile', {
                templateUrl: 'src/User/Partials/profile.html',

                pageInfo: {
                    icon:        'user',
                    title:       'My profile',
                    description: ''
                }
            });

            // List Users
            $routeProvider.when('/user', {
                templateUrl: 'src/User/Partials/User/list.html',
                controller: 'UserController',
                controllerAs: 'userCtrl',

                resolve: {
                    users: function (UserService) {
                        return UserService.list();
                    }
                },

                pageInfo: {
                    icon:        'users',
                    title:       'Users',
                    description: 'Authorized users in the application'
                }
            });

            // Create new User
            $routeProvider.when('/user/create', {
                templateUrl:  'src/User/Partials/User/edit.html',
                controller:   'UserEditController',
                controllerAs: 'userEditCtrl',

                resolve: {
                    user: function (UserService) {
                        return UserService.new();
                    }
                },

                pageInfo: {
                    icon:        'plus',
                    title:       'Create new User',
                    description: ''
                }
            });

            $routeProvider.when('/user/edit/:userId', {
                templateUrl:  'src/User/Partials/User/edit.html',
                controller:   'UserEditController',
                controllerAs: 'userEditCtrl',

                resolve: {
                    user: function ($route, UserService) {
                        return UserService.get($route.current.params.userId);
                    }
                },

                pageInfo: {
                    icon:        'pencil',
                    title:       'Edit User',
                    description: ''
                }
            });
        }]
    );
})();