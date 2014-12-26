/**
 * Alert service
 */
angular.module('UIModule').factory('AlertService', [
    function () {
        var alerts = [];

        return {
            add: function (alert) {
                alerts.push();

                return this;
            },

            getNext: function () {

            }
        };
    }
]);