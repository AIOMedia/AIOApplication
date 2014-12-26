/**
 * User Controller
 */
angular.module('UserModule').controller('UserController', [
    'HeaderService',
    'users',
    function (HeaderService, users) {
        this.users = users;

        this.selectedUsers = [];

        // Add create button
        HeaderService.addButton({
            icon: 'plus',
            iconOnly: true,
            label: 'Create User',
            url: '#/user/create'
        });
    }
]);