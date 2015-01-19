/**
 * Music Module
 */
angular
    .module('MusicModule', [
        'ngRoute',
        'CoreModule'
    ])
    .run([
        'MenuService',
        function (MenuService) {
            MenuService.addItem({
                id: 'music',
                position: 4,
                icon: 'music',
                title: 'Music',
                children: [
                    { id: 'artists', icon: 'microphone', title: 'Artists', url: '#/music/artist' },
                    { id: 'albums',  icon: 'circle', title: 'Albums', url: '#/music/album' },
                    { id: 'songs',   icon: 'music',     title: 'Songs',  url: '#/music/song' }
                ]
            });
        }
    ]);