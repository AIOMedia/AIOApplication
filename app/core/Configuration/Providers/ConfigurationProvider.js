/**
 * Configuration Provider
 */
angular.module('AioConfiguration').provider('Configuration', [
    function () {
        var provider = this;

        this.defaults = {
            srcPath: {
                core    : '../app/core',
                modules : '../app/modules'
            }
        };

        this.$get = [
            function () {
                return {
                    App: {
                        getCorePath: function () {
                            return provider.defaults.srcPath.core;
                        },

                        getModulesPath: function () {
                            return provider.defaults.srcPath.modules;
                        }
                    }
                };
            }
        ];
    }
]);