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

            this.toggleItem = function (item) {
                if (item.children) {
                    item.opened = !item.opened;
                }
            }
        }
    ]);
})();