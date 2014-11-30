/**
 * Page Info Service
 * Contains information about current page
 */
(function () {
    'use strict';

    angular.module('UIModule').factory('PageInfoService', [
        function () {
            var info = {
                icon:        null,
                title:       null,
                description: null,
                hasHelp:     false,
                hasConfig:   false
            }

            return {
                get: function (key) {
                    var ret = null;

                    if (key) {
                        // Check if requested key exists
                        if (info[key]) {
                            ret = info[key];
                        }
                    } else {
                        // Return all info if no key provided
                        ret = info;
                    }

                    return ret;
                },

                set: function (pageInfo) {
                    if (typeof pageInfo === 'object') {
                        info.icon        = pageInfo.icon        ? pageInfo.icon        : null;
                        info.title       = pageInfo.title       ? pageInfo.title       : null;
                        info.description = pageInfo.description ? pageInfo.description : null;
                        info.help        = pageInfo.help        ? pageInfo.help        : false;
                        info.config      = pageInfo.config      ? pageInfo.config      : false;
                    }

                    return this;
                }
            }
        }
    ]);
})();