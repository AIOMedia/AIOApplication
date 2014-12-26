/**
 * Sidebar Controller
 */
angular.module('UIModule').controller('SidebarController', [
    function () {
        this.toggle     = true;
        this.collapsed  = false;
        this.searchForm = false;

        this.toggleSidebar = function () {
            this.collapsed = !this.collapsed;
        };
    }
]);