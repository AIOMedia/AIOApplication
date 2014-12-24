(function () {
    'use strict';

    angular.module('UserModule').factory('AuthenticationService', [
        function () {
            var auth = {
                isLogged: false
            };

            return {
                isLogged: function () {
                    return auth.isLogged;
                },

                setLogged: function (loggedStatus) {
                    auth.isLogged = loggedStatus;

                    return this;
                },

                logIn: function (username, password) {
                    return $http.post('http://localhost:3000/user/login', {
                        username: username,
                        password: password
                    });
                },

                logOut: function () {

                }
            }
        }
    ]);
})();