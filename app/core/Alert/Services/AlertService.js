/**
 * Alert Service
 */
angular.module('Alert').factory('AlertService', [
    function () {
        var alerts = [];

        return {
            types: {
                SUCCESS : { icon: 'check',   class: 'success' },
                ERROR   : { icon: 'times',   class: 'danger' },
                WARNING : { icon: 'warning', class: 'warning' },
                INFO    : { icon: 'info',    class: 'info' }
            },

            all: function () {
                return alerts;
            },

            add: function (type, message) {
                if (message) {
                    if (type) {
                        type = this.types.INFO;
                    }

                    alerts.push({
                        type: type,
                        text: message
                    });
                } else {
                    console.warn('Alert needs a text message to displayed.');
                }

                return this;
            },

            getNext: function () {
                if (alerts.length > 0) {
                    alerts.shift();
                }
            }
        };
    }
]);