angular.module('Alert').directive('uiAlerts', [
    'AlertService',
    'Configuration',
    function (AlertService, Configuration) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: Configuration.App.getCorePath() + '/Alert/Partials/alerts.html',
            scope: {},
            link: function (scope, element, attrs) {
                scope.alerts = AlertService.all();

                scope.getNext = AlertService.getNext;
            }
        }
    }
]);