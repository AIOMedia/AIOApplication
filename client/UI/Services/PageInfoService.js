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
                get: function () {
                    return info;
                },

                set: function (pageInfo) {
                    if (typeof pageInfo === 'object') {
                        info.icon        = pageInfo.icon        ? pageInfo.icon        : null;
                        info.title       = pageInfo.title       ? pageInfo.title       : null;
                        info.description = pageInfo.description ? pageInfo.description : null;
                        info.hasHelp     = pageInfo.hasHelp     ? pageInfo.hasHelp     : false;
                        info.hasConfig   = pageInfo.hasConfig   ? pageInfo.hasConfig   : false;
                    }

                    return this;
                }
            }
        }
    ]);
})();