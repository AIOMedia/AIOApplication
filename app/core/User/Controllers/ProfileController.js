angular.module('UserModule').controller('ProfileController', [
    'HeaderService',
    function (HeaderService) {
        // Add create button
        HeaderService.addButton({
            icon: 'pencil',
            iconOnly: true,
            label: 'Edit profile',
            action: {
                func: function () {
                    console.log('profile edit');
                }
            }
        });
    }
]);