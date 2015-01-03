/**
 * Artist Resource
 */
angular.module('MusicModule').factory('ArtistResource', [
    'ApiResource',
    function (ApiResource) {
        return ApiResource('music/artist', '_id');
    }
]);