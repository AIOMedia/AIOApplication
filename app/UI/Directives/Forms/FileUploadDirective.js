angular.module('UIModule').directive('uiFormFileUpload', [
    '$upload',
    'ApiProvider',
    function ($upload, ApiProvider) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                multiple: '=',
                files: '=',
                accept: '='
            },
            templateUrl: '../app/UI/Partials/Forms/file-upload.html',
            link: function (scope, element, attrs) {
                scope.displayImage = function (image) {
                    return 'data:' + image.type + ';base64,' + image.data;
                };

                scope.onFileSelect = function ($files) {
                    //$files: an array of files selected, each file has name, size, and type.
                    for (var i = 0; i < $files.length; i++) {
                        this.upload($files[i]);
                    }
                };

                scope.upload = function (file) {
                    file.upload = $upload.upload({
                        url: ApiProvider.getServerPath() + '/file/upload', //upload.php script, node.js route, or servlet url
                        method: 'POST',
                        data: { files: scope.files },
                        file: file // or list of files ($files) for html5 only
                    });

                    file.upload.progress(function (event) {
                        file.progress = Math.min(100, parseInt(100.0 * event.loaded / event.total));
                    });

                    file.upload.then(function (response) {
                        file.data = response.data;
                    }, function(response) {
                        /*if (response.status > 0)
                         $scope.errorMsg = response.status + ': ' + response.data;*/
                    });
                };
            }
        };
    }
]);