/**
 * Menu Controller
 */
(function () {
    'use strict';

    angular.module('UIModule').controller('MenuController', [
        'MenuService',
        function (MenuService) {
            this.collapsed = false;
            this.items     = MenuService.getItems();
        }
    ]);
})();