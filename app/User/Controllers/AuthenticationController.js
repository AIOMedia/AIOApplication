angular.module('UserModule').controller('AuthenticationController', [
    'AuthenticationService',
    function (AuthenticationService) {
        this.logIn = function (username, password) {
            if (username && password) {
                AuthenticationService
                    .logIn(username, password)
                    .success(function (response) {

                    })
                    .error(function (response) {

                    });
            }
        };

        this.logOut = function () {

        };
    }
]);