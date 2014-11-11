/**
 * Menu Service
 */
(function () {
    'use strict';

    angular.module('UIModule').factory('MenuService', [
        function () {
            var items = [];

            var item = {
                id:          '', // required
                position:     1,
                icon:        '',
                title:       '', // required
                description: '',
                active:      false,
                opened:      false,
                url:         '', // required unless item has children
                children: [],
                notification: {
                    color: '',
                    value: ''
                }
            }

            return {
                getItems: function () {
                    return items;
                },

                addItem: function (item) {
                    if (this.validateItem(item)) {
                        items.push(item);
                    } else {
                        console.error('Menu : Try to add an invalid item to menu.');
                    }

                    return this;
                },

                validateItem: function (item) {

                    return true;
                }
            };
        }
    ]);
})();