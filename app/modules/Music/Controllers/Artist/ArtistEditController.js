/**
 * Artist Edit Controller
 */
angular.module('MusicModule').controller('ArtistEditController', [
    '$location',
    'artist',
    function ($location, artist) {
        this.artist = artist;

        if (!this.artist.data.images) {
            this.artist.data.images = [];
        }

        this.save = function () {
            this.artist.$save().then(function (data) {
                $location.path('/music/artist');
            });
        };

        this.cancel = function () {
            // Redirect to users list
            $location.path('/music/artist');
        };
    }
]);