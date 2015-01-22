/**
 * Artist Controller
 */
angular.module('MusicModule').controller('ArtistController', [
    'HeaderService',
    'artists',
    function (HeaderService, artists) {
        // Add create button
        HeaderService.addButton({
            icon: 'plus',
            iconOnly: true,
            label: 'Create Artist',
            url: '#/music/artist/create'
        });

        this.artists = artists.data;

        this.delete = function (artist) {
            artist.$delete();
        };
    }
]);