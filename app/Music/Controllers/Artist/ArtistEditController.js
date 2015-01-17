/**
 * Artist Edit Controller
 */
angular.module('MusicModule').controller('ArtistEditController', [
    '$location',
    '$upload',
    'ApiProvider',
    'artist',
    function ($location, $upload, ApiProvider, artist) {
        this.artist = artist;

        if (!this.artist.data.images) {
            this.artist.data.images = [];
        }

        this.displayImage = function (image) {
            return 'data:' + image.type + ';base64,' + image.data;
        };

        this.onFileSelect = function ($files) {
            //$files: an array of files selected, each file has name, size, and type.
            for (var i = 0; i < $files.length; i++) {
                this.upload($files[i]);
            }
        };

        this.upload = function (file) {
            file.upload = $upload.upload({
                url: ApiProvider.getServerPath() + '/file/upload', //upload.php script, node.js route, or servlet url
                method: 'POST',
                data: { files: artist.data.images },
                file: file // or list of files ($files) for html5 only
            });

            file.upload.progress(function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });

            file.upload.then(function (response) {
                file.data = response.data;
            }, function(response) {
                /*if (response.status > 0)
                 $scope.errorMsg = response.status + ': ' + response.data;*/
            });
        };

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