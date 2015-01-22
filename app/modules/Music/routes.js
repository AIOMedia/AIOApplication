/**
 * Music routes
 */
angular.module('MusicModule').config([
    '$routeProvider',
    'ConfigurationProvider',
    function ($routeProvider, ConfigurationProvider) {
        var music = {
            name: 'music',
            abstract: true,

            pageInfo: {
                title: 'Music'
            }
        };

        // Artists
        var musicArtist = {
            name: 'music.artist',
            url: '#/music/artist',
            parent: music,
            templateUrl: ConfigurationProvider.defaults.srcPath.modules + '/Music/Partials/Artist/list.html',
            controller: 'ArtistController',
            controllerAs: 'artistCtrl',

            resolve: {
                artists: [
                    'ArtistResource',
                    function (ArtistResource) {
                        return ArtistResource.query();
                    }
                ]
            },

            pageInfo: {
                icon:   'microphone',
                title:  'Artists'
            }
        };

        var musicArtistCreate = {
            name: 'music.artist.create',
            url: '#/music/artist/create',
            parent: musicArtist,
            templateUrl: ConfigurationProvider.defaults.srcPath.modules + '/Music/Partials/Artist/edit.html',
            controller: 'ArtistEditController',
            controllerAs: 'artistEditCtrl',

            resolve: {
                artist: [
                    'ArtistResource',
                    function (ArtistResource) {
                        return new ArtistResource();
                    }
                ]
            },
            pageInfo: {
                icon:   'microphone',
                title:  'Create'
            }
        };

        var musicArtistEdit = {
            name: 'music.artist.edit',
            url: '#/music/artist/edit',
            parent: musicArtist,
            templateUrl: ConfigurationProvider.defaults.srcPath.modules + '/Music/Partials/Artist/edit.html',
            controller: 'ArtistEditController',
            controllerAs: 'artistEditCtrl',

            resolve: {
                artist: [
                    '$route',
                    'ArtistResource',
                    function ($route, ArtistResource) {
                        return ArtistResource.get({ _id: $route.current.params.artistId });
                    }
                ]
            },
            pageInfo: {
                icon:   'microphone',
                title:  'Edit'
            }
        };

        // Albums
        var musicAlbums = {
            name: 'music.album',
            url: '#/music/album',
            parent: music,
            templateUrl: ConfigurationProvider.defaults.srcPath.modules + '/Music/Partials/Album/list.html',

            pageInfo: {
                icon:   'circle',
                title:  'Albums'
            }
        };

        // Songs
        var musicSongs = {
            name: 'music.song',
            url: '#/music/song',
            parent: music,
            templateUrl: ConfigurationProvider.defaults.srcPath.modules + '/Music/Partials/Song/list.html',

            pageInfo: {
                icon:   'music',
                title:  'Songs'
            }
        };

        // Register states
        $routeProvider
            .when('/music/artist',                musicArtist)
            .when('/music/artist/create',         musicArtistCreate)
            .when('/music/artist/edit/:artistId', musicArtistEdit)
            .when('/music/album',                 musicAlbums)
            .when('/music/song',                  musicSongs);
    }]
);