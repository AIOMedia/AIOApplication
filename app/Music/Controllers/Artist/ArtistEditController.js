/**
 * Artist Edit Controller
 */
angular.module('MusicModule').controller('ArtistEditController', [
    '$location',
    'artist',
    function ($location, artist) {
        this.artist = artist;

        console.log(this.artist);

        this.save = function () {
            this.artist.$save().then(
                function success(data) {
                    console.log('success');
                    console.log(data);

                    $location.path('/music/artist');
                },
                function error(response) {
                    console.log('error');
                    console.log(response);
                }
            );
        };

        this.cancel = function () {
            // Redirect to users list
            $location.path('/music/artist');
        };
    }
]);