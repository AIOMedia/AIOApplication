angular.module('UIModule').directive('uiAlerts', [
    'AlertService',
    function (AlertService) {
        var types = {
            success : { icon: 'check',   class: 'success' },
            error   : { icon: 'times',   class: 'danger' },
            warning : { icon: 'warning', class: 'warning' },
            info    : { icon: 'info',    class: 'info' }
        };

        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../app/UI/Partials/alerts.html',
            scope: {},
            link: function (scope, element, attrs) {
                scope.alertTypes = types;
                scope.alerts = AlertService.all();

                scope.getNext = AlertService.getNext;
            }
        }
    }
]);