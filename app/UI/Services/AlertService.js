/**
 * Alert Service
 */
angular.module('UIModule').factory('AlertService', [
    function () {
        var alerts = [];

        return {
            all: function () {
                return alerts;
            },

            add: function (alert) {
                if (alert.text) {
                    if (!alert.type) {
                        alert.type = 'info';
                    }

                    alerts.push(alert);
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