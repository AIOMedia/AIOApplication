/**
 * User Edit Controller
 */
(function () {
    'use strict';

    angular.module('UserModule').controller('UserEditController', [
        '$location',
        'UserService',
        'user',
        function ($location, UserService, user) {
            this.user = user;

            this.save = function () {
                UserService.save(this.user).then(
                    // Save success
                    function (user) {
                        // Redirect to users list
                        $location.path('/user');
                    },
                    // Save failed
                    function (errors) {

                    }
                );
            };

            this.cancel = function () {
                // Redirect to users list
                $location.path('/user');
            };
        }
    ]);
})();