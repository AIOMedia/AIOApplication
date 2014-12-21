(function () {
    'use strict';

    angular.module('UserModule').factory('AuthenticationService', [
        function () {
            var auth = {
                isLogged: false
            };

            return {
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