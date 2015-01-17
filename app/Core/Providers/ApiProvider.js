/**
 * API Provider
 */
angular.module('CoreModule').provider('ApiProvider', [
    function () {
        var provider = this;

        // Set default config for the provider
        this.defaults = {
            // Server to call
            server: {
                protocol: 'http',
                host:     'localhost',
                port:     3000
            }
        };

        this.$get = [
            '$http',
            '$q',
            function ($http, $q) {
                var calls = {
                    success   : 0,
                    inProgress: 0,
                    error     : 0
                };

                var server = {};

                return {
                    setServer: function (host, port, protocol) {
                        if (host) {
                            server.host = host.replace(/\/+$/, '');
                        } else {
                            delete server.host;
                        }

                        if (port) {
                            server.port = parseInt(port);
                        } else {
                            delete server.port;
                        }

                        if (protocol) {
                            server.protocol = protocol.replace('://', '').replace(/\/+$/, '');
                        } else {
                            delete server.protocol;
                        }

                        return this;
                    },

                    getServer: function () {
                        var config = angular.extend({}, provider.defaults.server, server);

                        return config;
                    },

                    getServerPath: function () {
                        var config = this.getServer();

                        var port = config.port;
                        if (port) {
                            port = ':' + port;
                        }

                        return config.protocol + '://' + config.host + port;
                    },

                    callServer: function (method, url, params, data) {
                        url    = this.getServerPath() + '/' + url.replace(/\/+$/, '');
                        params = params ? params : {};
                        data   = data ? data : {};

                        // Call the server
                        var deferred = $q.defer();
                        $http({
                            method : method,
                            url    : url,
                            params : params,
                            data   : data
                        }).then(
                            function success(response) {
                                // Grab the api body response
                                var apiResponse = response.data;

                                // Return server data
                                deferred.resolve(apiResponse);
                            },
                            function error(response) {
                                if (typeof response === 'undefined' || null === response || response.length === 0 || response.status == 0) {
                                    // If no response we assume the server is down
                                    var apiResponse = {
                                        status: {
                                            code: 503,
                                            message: 'Service Unavailable'
                                        }
                                    };
                                } else if (typeof response.data === 'string') {
                                    // Not the format we attempt to
                                    var apiResponse = {
                                        status: {
                                            code: response.status,
                                            message: response.data
                                        }
                                    }
                                } else {
                                    // Grab the api body response
                                    var apiResponse = response.data;
                                }

                                // Return status code, message and errors
                                deferred.reject(apiResponse);
                            }
                        );

                        return deferred.promise;
                    }
                };
            }
        ];
    }
]);