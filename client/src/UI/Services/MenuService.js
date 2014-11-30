/**
 * Menu Service
 */
(function () {
    'use strict';

    angular.module('UIModule').factory('MenuService', [
        function () {
            var defaultIcon = 'square-o';

            var active = null;

            var items = [];

            return {
                /**
                 * Get all menu items
                 * @returns {Array}
                 */
                getItems: function () {
                    return items;
                },

                /**
                 * Find an item by id
                 * @param itemId
                 */
                findItem: function (itemId) {
                    var searchItem = function (collection, itemId) {
                        var item = null;
                        for (var i = 0; i < collection.length; i++) {
                            if (collection[i].id === itemId) {
                                item = collection[i];
                            } else if (0 !== collection[i].children.length) {
                                // Search in children
                                item = searchItem(collection[i].children, itemId);
                            }

                            if (item) {
                                break;
                            }
                        }

                        return item;
                    };

                    return searchItem(items, itemId);
                },

                setActive: function (itemId) {
                    if (active) {
                        this.setInactive(active);
                    }

                    active = itemId;
                    var newActive = this.findItem(active);
                    if (newActive) {
                        newActive.active = true;
                    }

                    return this;
                },

                setInactive: function (itemId) {
                    // TODO : loop over all items to mark all inactive
                    var item = this.findItem(itemId);
                    if (item) {
                        item.active = false;
                    }

                    return this;
                },

                /**
                 * Check if a route is managed by the menu
                 * @param route RegExp of the current route
                 * @returns {boolean}
                 */
                checkRoute: function (route, activate) {
                    var checkItems = function (collection) {
                        var match = false;
                        for (var i = 0; i < collection.length; i++) {
                            if (0 === collection[i].children.length) {
                                // Check route of current item
                                var toTest = collection[i].url.replace('#', '');
                                match = route.test(toTest);
                            } else {
                                // Check routes of children
                                match = checkItems(collection[i].children);
                            }

                            if (match) {
                                // Route found => stop the search
                                if (activate) {
                                    this.setActive(items[i].id);
                                }

                                break;
                            }
                        }

                        if (!match && activate) {
                            this.setActive(null);
                        }

                        return match;
                    }.bind(this);

                    return checkItems(items);
                },

                /**
                 * Open or close an item sub-menu
                 * @param item
                 * @returns {boolean}
                 */
                toggleItemMenu: function (item) {
                    var toggled = false;

                    // Check if this item has a submenu
                    if (item.children.length > 0) {
                        if (!item.opened) {
                            // Open submenu => close others
                            this.closeItemMenus();
                        }

                        // Toggle open flag
                        item.opened = !item.opened;

                        toggled = true;
                    }

                    return toggled;
                },

                /**
                 * Close all menus of items
                 * @returns {*}
                 */
                closeItemMenus: function () {
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].opened) {
                            items[i].opened = false;
                        }
                    }

                    return this;
                },

                /**
                 * Add new item to menu
                 * @param item
                 * @returns {*}
                 */
                addItem: function (item) {
                    if (this.validateItem(item)) {
                        items.push(item);
                    } else {
                        console.error('Menu : Try to add an invalid item to menu.');
                    }

                    return this;
                },

                /**
                 * Validate item properties and set some defaults
                 * @param item
                 * @returns {boolean}
                 */
                validateItem: function (item) {
                    var valid = true;

                    if (!item.id || !item.title) {
                        valid = false;
                    } else {
                        // Set some defaults
                        if (!item.position) {
                            item.position = items.length + 100;
                        }

                        if (!item.icon) {
                            item.icon = defaultIcon;
                        }

                        if (!item.url) {
                            item.url = '#';
                        }

                        if (!item.children) {
                            item.children = [];
                        } else {
                            for (var i = 0; i < item.children.length; i++) {
                                valid = this.validateItem(item.children[i]);
                            }
                        }
                    }

                    return valid;
                }
            };
        }
    ]);
})();