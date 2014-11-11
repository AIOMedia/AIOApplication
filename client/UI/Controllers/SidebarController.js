/**
 * Sidebar Controller
 */
(function () {
    'use strict';

    angular.module('UIModule').controller('SidebarController', [
        function () {
            this.toggle     = true;
            this.collapsed  = false;
            this.searchForm = true;

            this.toggleSidebar = function () {
                this.collapsed = !this.collapsed;
            };
        }
    ]);
})();
