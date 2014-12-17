/**
 * User routes
 */
(function () {
    'use strict';

    angular.module('UserModule').config([
        '$routeProvider',
        function ($routeProvider) {
            var profile = {
                name: 'profile',
                url: '#/profile',
                templateUrl: 'src/User/Partials/profile.html',

                pageInfo: {
                    icon:  'user',
                    title: 'My profile'
                }
            };

            // List Users
            var user = {
                name: 'user',
                url: '#/user',
                templateUrl: 'src/User/Partials/User/list.html',
                controller: 'UserController',
                controllerAs: 'userCtrl',

                resolve: {
                    users: [
                        'UserService',
                        function (UserService) {
                            return UserService.list();
                        }
                    ]
                },

                pageInfo: {
                    icon:  'users',
                    title: 'Users'
                }
            };

            // Create new User
            var userCreate = {
                name: 'user.create',
                url: '#/user/create',
                parent: user,
                templateUrl:  'src/User/Partials/User/edit.html',
                controller:   'UserEditController',
                controllerAs: 'userEditCtrl',

                resolve: {
                    user: function (UserService) {
                        return UserService.new();
                    }
                },

                pageInfo: {
                    title: 'Create'
                }
            };

            // Edit an existing User
            var userEdit = {
                name: 'user.edit',
                url: '#/user/edit',
                parent: user,
                templateUrl:  'src/User/Partials/User/edit.html',
                controller:   'UserEditController',
                controllerAs: 'userEditCtrl',

                resolve: {
                    user: [
                        '$route',
                        'UserService',
                        function ($route, UserService) {
                            return UserService.get($route.current.params.userId);
                        }
                    ]
                },

                pageInfo: {
                    title: 'Edit'
                }
            };

            // Register states
            $routeProvider
                .when('/profile',           profile)
                .when('/user',              user)
                .when('/user/create',       userCreate)
                .when('/user/edit/:userId', userEdit);
        }]
    );
})();