/**
 * User Controller
 */
(function () {
    'use strict';

    angular.module('UserModule').controller('UserController', [
        'users',
        function (users) {
            this.users = users;

            this.selectedUsers = [];
        }
    ]);
})();