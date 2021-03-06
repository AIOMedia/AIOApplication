/**
 * Header Service
 * Contains information about current page
 */
angular.module('UIModule').factory('HeaderService', [
    '$window',
    function ($window) {
        var defaultTitle = 'AIOMedia';

        /**
         * Info about the current page
         * @type {{}}
         */
        var info = {
            icon  : null,
            title : null
        };

        var buttons = [];

        /**
         * Path to the current
         * @type {Array}
         */
        var path = [];

        var addHomeToPath = false;

        /**
         * Current state
         * @type {{}}
         */
        var current = null;

        /**
         * Previous state
         * @type {{}}
         */
        var previous = null;

        return {
            getInfo: function (key) {
                var ret = null;

                if (key) {
                    // Check if requested key exists
                    if (info[key]) {
                        ret = info[key];
                    }
                } else {
                    // Return all info if no key provided
                    ret = info;
                }

                return ret;
            },

            getPath: function () {
                return path;
            },

            getButtons: function () {
                return buttons;
            },

            addButton: function (buttonConfig) {
                var button = {
                    icon    : buttonConfig.icon     ? buttonConfig.icon     : null,
                    iconOnly: buttonConfig.iconOnly ? buttonConfig.iconOnly : false,
                    label   : buttonConfig.label    ? buttonConfig.label    : '',
                    url     : buttonConfig.url      ? buttonConfig.url      : '',
                    action  : buttonConfig.action   ? buttonConfig.action   : function () {}
                };

                if (buttonConfig.action) {
                    button.action = {
                        func:   buttonConfig.action.func ? buttonConfig.action.func : function () {},
                        params: buttonConfig.action.params ? buttonConfig.action.params : []
                    }
                }

                buttons.push(button);
            },

            build: function (state, first) {
                if (first) {
                    // We start rebuilding the path, so empty old
                    while (path.length > 0) {
                        path.pop();
                    }

                    while (buttons.length > 0) {
                        buttons.pop();
                    }

                    if (!state.pageInfo) {
                        state.pageInfo = {};
                    }

                    // Get info of the current element (we try to fill missing with parent info, except for help and config)
                    info.icon    = state.pageInfo.icon    ? state.pageInfo.icon    : null;
                    info.title   = state.pageInfo.title   ? state.pageInfo.title   : null;

                    // Add buttons
                    if (state.buttons) {
                        for (var i = 0; i < state.buttons.length; i++) {
                            this.addButton(state.buttons[i]);
                        }
                    }

                    first = false;
                } else {
                    // We are processing the parents of the current state
                    // Check if state has useful info (info of current, if first, or info that have not been provided by children states)
                    if (typeof state.pageInfo === 'object') {
                        // Get page icon
                        if (!info.icon && state.pageInfo.icon) {
                            info.icon = state.pageInfo.icon;
                        }

                        // get page title
                        if (!info.title && state.pageInfo.title) {
                            info.title = state.pageInfo.title;
                        }
                    }

                    if (!state.abstract) {
                        // State is real => add it's title and url into the path
                        path.unshift({
                            title: state.pageInfo.title,
                            url  : state.url
                        });
                    } else {
                        // State is abstract, we will append is name to it's direct child if needed
                        if (state.pageInfo && state.pageInfo.title) {
                            if (path.length !== 0) {
                                if (path[path.length - 1].title !== state.pageInfo.title) {
                                    path[path.length - 1].title = state.pageInfo.title + '-' + path[path.length - 1].title;
                                }
                            } else {
                                if (info.title !== state.pageInfo.title) {
                                    info.title = state.pageInfo.title + ' - ' + info.title;
                                }
                            }
                        }
                    }
                }

                if (state.parent) {
                    this.build(state.parent, first);
                } else {
                    // We are on the top most level
                    if (addHomeToPath) {
                        path.unshift({
                            title: 'Home',
                            url  : '#/'
                        });
                    }
                }
            },

            getCurrent: function () {
                return current;
            },

            setCurrent: function (state) {
                current = state;

                this.build(current, true);

                if (info.title) {
                    $window.document.title = info.title;
                } else {
                    $window.document.title = defaultTitle;
                }

                return this;
            },

            getPrevious: function () {
                return previous;
            },

            setPrevious: function (state) {
                previous = state;

                return this;
            }
        }
    }
]);