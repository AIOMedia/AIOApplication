/**
 * Header service
 */
(function () {
    'use strict';

    angular.module('UIModule').factory('HeaderService', [
        function () {
            var buttons = {
                help:   true,
                config: true
            };

            return {
                showHelp: function () {
                    buttons.help = true;

                    return this;
                },

                showConfiguration: function () {
                    buttons.help = true;

                    return this;
                }
            };
        }
    ]);
});