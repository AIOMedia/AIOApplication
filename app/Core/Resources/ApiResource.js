/**
 * API Resource Provider
 */
angular.module('CoreModule').provider('ApiResource', [
    function () {
        var provider = this;

        // Set default config for the provider
        this.defaults = {
            // Server to call
            server: {
                protocol: 'http',
                host:     'localhost',
                port:     3000
            },

            // Configure API communication
            actions: {
                get: {
                    method: 'GET',
                    isCollection: false,
                    requireIdentifier: true,
                    alert: [ 'onError' ]
                },
                query: {
                    method: 'GET',
                    isCollection: true,
                    requireIdentifier: false,
                    alert: [ 'onError' ]
                },
                update: {
                    method: 'PUT',
                    isCollection: false,
                    requireIdentifier: true,
                    alert: [ 'onSuccess', 'onError' ]
                },
                create: {
                    method: 'POST',
                    isCollection: false,
                    requireIdentifier: false,
                    alert: [ 'onSuccess', 'onError' ]
                },
                delete: {
                    method: 'DELETE',
                    isCollection: false,
                    requireIdentifier: true,
                    alert: [ 'onSuccess', 'onError' ]
                }
            }
        };

        /**
         * Build the Server path string from server information
         * @returns {string} - the path to the server API
         */
        this.getServerPath = function () {
            var protocol = this.defaults.server.protocol ? this.defaults.server.protocol   : 'http';
            var host     = this.defaults.server.host     ? this.defaults.server.host       : 'localhost';
            var port     = this.defaults.server.port     ? ':' + this.defaults.server.port : '';

            // Remove trailing slashes from host
            host = host.replace(/\/+$/, '');

            // Remove trailing slashes from port if it's provided as a string
            if (typeof port !== 'number') {
                port = port.replace(/\/+$/, '');
            }

            return protocol + '://' + host + port;
        };

        this.$get = ['$http', '$q', 'AlertService', function ($http, $q, AlertService) {
            function resourceFactory (url, idField) {
                function Resource (data) {
                    this.url = url;
                    this.status = {};

                    this.data = data || {};
                    this.isNew = this.data[idField] ? false : true;
                };

                angular.forEach(provider.defaults.actions, function (action, actionName) {
                    // Append Action to Resource object, so they can be called without instantiated resource
                    Resource[actionName] = function (urlParams, data) {
                        if (this instanceof Resource) {
                            var resource = this;
                        } else {
                            var resource = new Resource(action.isCollection ? [] : {});
                        }

                        if (!urlParams) {
                            var urlParams = {};
                        }

                        // Build URL to resource (add base server path, resource sub path and optional identifier)
                        var requestUrl = provider.getServerPath() + '/' + url;
                        if (action.requireIdentifier) {
                            if (urlParams[idField]) {
                                requestUrl += '/' + urlParams[idField];

                                delete urlParams[idField];
                            } else if (resource.data[idField]) {
                                requestUrl += '/' + resource.data[idField];
                            } else {
                                console.error('Resource : action "' + actionName + '" require @id field to be populated');
                            }
                        }

                        // Post data if needed
                        var dataSend = {};
                        if ('POST' === action.method || 'PUT' === action.method) {
                            if (data) {
                                dataSend = data;
                            } else if (resource.data) {
                                dataSend = resource.data;
                            }
                        }

                        // Call the server
                        var deferred = $q.defer();
                        $http({
                            method : action.method,
                            url    : requestUrl,
                            params : urlParams,
                            data   : dataSend
                        }).then(
                            function success(response) {
                                // Grab the api body response
                                var apiResponse = response.data;

                                // Update resource status
                                resource.populate(resource.status, apiResponse.status);

                                // We need to display a success alert for this request
                                if (-1 !== action.alert.indexOf('onSuccess')) {
                                    AlertService.add({ type: 'success', text: apiResponse.status.message });
                                }

                                // Add data to resource
                                if (apiResponse.data instanceof Array) {
                                    resource.data.length = 0;

                                    for (var i = 0; i < apiResponse.data.length; i++) {
                                        resource.data.push(new Resource(apiResponse.data[i]));
                                    }
                                } else if (typeof apiResponse.data === 'object') {
                                    resource.populate(resource.data, apiResponse.data);

                                    resource.isNew = resource.data[idField] ? false : true;
                                }

                                // Return server data
                                deferred.resolve(resource);
                            },
                            function error(response) {
                                if (typeof response.data === 'string') {
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

                                resource.populate(resource.status, apiResponse.status);

                                // We need to display an error alert for this request
                                if (-1 !== action.alert.indexOf('onError')) {
                                    AlertService.add({ type: 'error', text: apiResponse.status.message });
                                }

                                // Return status code, message and errors
                                deferred.reject(resource);
                            }
                        );

                        return deferred.promise;
                    };

                    // Append Action to Resource prototype, so they can be called for an instantiated resource
                    Resource.prototype['$' + actionName] = function (urlParams, data) {
                        return Resource[actionName].call(this, urlParams, data);
                    };
                });

                /**
                 * Populate resource property without destroy array and object reference
                 * It will empty the destination before fill it
                 *
                 * @param   {array|object} dst - the object to fill
                 * @param   {array|object} src - the object to fill with
                 *
                 * @returns {array|object}     - the populated object
                 */
                Resource.prototype.populate = function (dst, src) {
                    var dst = dst || {};

                    // Empty destination
                    if (dst instanceof Array) {
                        dst.length = 0; // Reset array
                    } else {
                        // Reset object
                        angular.forEach(dst, function (value, key) {
                            delete dst[key];
                        });
                    }

                    // Fill destination with src
                    for (var key in src) {
                        if (src.hasOwnProperty(key)) {
                            if (dst instanceof Array) {
                                dst.push(src[key]);
                            } else {
                                dst[key] = src[key];
                            }
                        }
                    }
                };

                /**
                 * Save the resource
                 * It will automatically check if it needs to perform an UPDATE or a CREATE regarding the @id field
                 *
                 * @param   {object} [urlParams] - some additional params to bind to server URL
                 * @param   {object} [data]      - data object to be saved
                 *
                 * @returns {Resource}           - the updated Resource
                 */
                Resource.prototype.$save = function (urlParams, data) {
                    var actionName = 'create';
                    if (this.data[idField]) {
                        actionName = 'update';
                    }

                    return Resource[actionName].call(this, urlParams, data);
                };

                return Resource;
            }

            return resourceFactory;
        }];
    }
]);