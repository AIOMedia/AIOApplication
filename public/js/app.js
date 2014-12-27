(function() {
// File : app/Administration/module.js
/**
 * Administration Module
 */
angular.module('AdministrationModule', [
    'ngRoute'
]);
// File : app/Administration/routes.js
/**
 * Administration routes
 */
angular.module('AdministrationModule').config([
    '$routeProvider',
    function ($routeProvider) {
        var admin = {
            name: 'admin',
            templateUrl: '../app/Administration/Partials/index.html',

            pageInfo: {
                icon:  'wrench',
                title: 'Parameters',
                help:  true
            }
        };

        $routeProvider.when('/admin', admin);
    }]
);
// File : app/Dashboard/module.js
/**
 * Dashboard Module
 */
angular
    .module('DashboardModule', [
        'ngRoute'
    ])
    .run([
        'MenuService',
        function (MenuService) {
            MenuService.addItem({
                id: 'dashboard',
                position: 1,
                icon: 'dashboard',
                title: 'Dashboard',
                url: '#/dashboard'
            });
        }
    ]);
// File : app/Dashboard/Controllers/DashboardController.js
/**
 * Dashboard controller
 */
angular.module('DashboardModule').controller('DashboardController', [
    function () {

    }
]);
// File : app/Dashboard/routes.js
/**
 * Dashboard routes
 */
angular.module('DashboardModule').config([
    '$routeProvider',
    function ($routeProvider) {
        var dashboard = {
            name: 'dashboard',
            url: '/dashboard',
            templateUrl: '../app/Dashboard/Partials/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'controller',

            pageInfo: {
                icon: 'dashboard',
                title: 'Dashboard',
                description: 'Control panel',
                help: true,
                config: true
            }
        };

        $routeProvider.when('/dashboard', dashboard);
    }]
);
// File : app/Search/module.js
/**
 * Search Module
 */
angular.module('SearchModule', []);
// File : app/Search/Controllers/SidebarPanelController.js
/**
 * Sidebar panel Controller
 */
angular.module('SearchModule').controller('SidebarPanelController', [
    function () {
        this.collapsed = false;
    }
]);
// File : app/Search/Directives/SidebarPanelDirective.js
/**
 * Sidebar Panel Directive
 * @param boolean collapsed
 */
angular.module('SearchModule').directive('searchSidebarPanel', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../app/Search/Partials/sidebar-panel.html',
            scope: {
                collapsed: '=?'
            },
            controller:   'SidebarPanelController',
            controllerAs: 'sidebarPanel',
            link: function (scope, element, attrs, sidebarPanel) {
                // Define defaults
                if (typeof scope.collapsed === 'undefined') {
                    scope.collapsed = sidebarPanel.collapsed;
                }

                // Watch for attribute changes
                scope.$watch('collapsed', function (newValue) {
                    sidebarPanel.collapsed = newValue;
                });
            }
        };
    }
]);
// File : app/Notification/module.js
/**
 * Notification Module
 */
angular.module('NotificationModule', []);
// File : app/Notification/Controllers/ConfigController.js


// File : app/Notification/Directives/ConfigDirective.js
angular.module('NotificationModule').directive('notificationConfig', [
    function () {

    }
]);
// File : app/Home/module.js
/**
 * Home Module
 */
angular.module('HomeModule', [
    'ngRoute',
    'DashboardModule'
]);
// File : app/Home/routes.js
/**
 * Home routes
 */
angular.module('HomeModule').config([
    '$routeProvider',
    function ($routeProvider) {
        var home = {
            name: 'home',
            url: '/home',
            templateUrl: '../app/Home/Partials/index.html',

            pageInfo: {
                icon: 'dashboard',
                title: 'Dashboard',
                description: 'Control panel'
            }
        };

        $routeProvider.when('/home', home);
    }]
);
// File : app/User/module.js
/**
 * User Module
 */
angular.module('UserModule', [
    'ngRoute',
    'NotificationModule'
]);
// File : app/User/Controllers/AuthenticationController.js
angular.module('UserModule').controller('AuthenticationController', [
    'AuthenticationService',
    function (AuthenticationService) {
        this.logIn = function (username, password) {
            if (username && password) {
                AuthenticationService
                    .logIn(username, password)
                    .success(function (response) {

                    })
                    .error(function (response) {

                    });
            }
        };

        this.logOut = function () {

        };
    }
]);
// File : app/User/Controllers/ProfileController.js
angular.module('UserModule').controller('ProfileController', [
    'HeaderService',
    function (HeaderService) {
        // Add create button
        HeaderService.addButton({
            icon: 'pencil',
            iconOnly: true,
            label: 'Edit profile',
            action: {
                func: function () {
                    console.log('profile edit');
                }
            }
        });
    }
]);
// File : app/User/Controllers/Sidebar/SidebarPanelController.js
/**
 * Sidebar panel Controller
 */
angular.module('UserModule').controller('SidebarPanelController', [
    function () {
        this.collapsed = false;
    }
]);
// File : app/User/Controllers/User/UserController.js
/**
 * User Controller
 */
angular.module('UserModule').controller('UserController', [
    'HeaderService',
    'users',
    function (HeaderService, users) {
        this.users = users;

        this.selectedUsers = [];

        // Add create button
        HeaderService.addButton({
            icon: 'plus',
            iconOnly: true,
            label: 'Create User',
            url: '#/user/create'
        });
    }
]);
// File : app/User/Controllers/User/UserEditController.js
/**
 * User Edit Controller
 */
angular.module('UserModule').controller('UserEditController', [
    '$location',
    'UserService',
    'user',
    function ($location, UserService, user) {
        this.user = user;

        this.save = function () {
            UserService.save(this.user).then(
                // Save success
                function (user) {
                    // Redirect to users list
                    $location.path('/user');
                },
                // Save failed
                function (errors) {

                }
            );
        };

        this.cancel = function () {
            // Redirect to users list
            $location.path('/user');
        };
    }
]);
// File : app/User/Directives/Sidebar/SidebarPanelDirective.js
/**
 * Sidebar Panel Directive
 * @param boolean collapsed
 */
angular.module('UserModule').directive('userSidebarPanel', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../app/User/Partials/Sidebar/user-panel.html',
            scope: {
                collapsed: '=?'
            },
            controller:   'SidebarPanelController',
            controllerAs: 'sidebarPanel',
            link: function (scope, element, attrs, sidebarPanel) {
                // Define defaults
                if (typeof scope.collapsed === 'undefined') {
                    scope.collapsed = sidebarPanel.collapsed;
                }

                // Watch for attribute changes
                scope.$watch('collapsed', function (newValue) {
                    sidebarPanel.collapsed = newValue;
                });
            }
        };
    }
]);
// File : app/User/Services/AuthenticationService.js
angular.module('UserModule').factory('AuthenticationService', [
    function () {
        var auth = {
            isLogged: false
        };

        return {
            isLogged: function () {
                return auth.isLogged;
            },

            setLogged: function (loggedStatus) {
                auth.isLogged = loggedStatus;

                return this;
            },

            logIn: function (username, password) {
                return $http.post('http://localhost:3000/user/login', {
                    username: username,
                    password: password
                });
            },

            logOut: function () {

            }
        }
    }
]);
// File : app/User/Services/UserService.js
angular.module('UserModule').factory('UserService', [
    '$http',
    '$q',
    function ($http, $q) {
        return {
            new: function () {
                return {
                    _id: null,
                    firstName: null,
                    lastName: null,
                    login: null
                };
            },

            list: function () {
                var deferred = $q.defer();

                $http
                    .get('http://localhost:3000/user')
                    .success(function (reponse) {
                        deferred.resolve(reponse.data);
                    })
                    .error(function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
            },

            get: function (userId) {
                var deferred = $q.defer();

                $http
                    .get('http://localhost:3000/user/' + userId)
                    .success(function (reponse) {
                        deferred.resolve(reponse.data);
                    })
                    .error(function (reponse) {
                        deferred.reject(reponse);
                    });

                return deferred.promise;
            },

            save: function (user) {
                var deferred = $q.defer();

                if (user._id) {
                    // Edit mode
                    var request = $http.put('http://localhost:3000/user/' + user._id, user);
                } else {
                    // Create mode
                    var request = $http.post('http://localhost:3000/user/', user);
                }

                request
                    .success(function (reponse) {
                        deferred.resolve(reponse.data);
                    })
                    .error(function (reponse) {
                        deferred.reject(reponse);
                    });

                return deferred.promise;
            }
        };
    }
]);
// File : app/User/routes.js
/**
 * User routes
 */
angular.module('UserModule').config([
    '$routeProvider',
    function ($routeProvider) {
        var profile = {
            name: 'profile',
            url: '#/user/profile',
            templateUrl: '../app/User/Partials/profile.html',
            controller: 'ProfileController',
            controllerAs: 'profileCtrl',

            pageInfo: {
                icon:  'user',
                title: 'My profile'
            }
        };

        // List Users
        var user = {
            name: 'user',
            url: '#/user',
            templateUrl: '../app/User/Partials/User/list.html',
            controller: 'UserController',
            controllerAs: 'userCtrl',

            resolve: {
                users: [
                    'UserService',
                    function (UserService) {
                        return UserService.list();
                    }
                ]
            },

            pageInfo: {
                icon:  'users',
                title: 'Users'
            }
        };

        // Create new User
        var userCreate = {
            name: 'user.create',
            url: '#/user/create',
            parent: user,
            templateUrl:  '../app/User/Partials/User/edit.html',
            controller:   'UserEditController',
            controllerAs: 'userEditCtrl',

            resolve: {
                user: [
                    'UserService',
                    function (UserService) {
                        return UserService.new();
                    }
                ]
            },

            pageInfo: {
                title: 'Create'
            }
        };

        // Edit an existing User
        var userEdit = {
            name: 'user.edit',
            url: '#/user/edit',
            parent: user,
            templateUrl:  '../app/User/Partials/User/edit.html',
            controller:   'UserEditController',
            controllerAs: 'userEditCtrl',

            resolve: {
                user: [
                    '$route',
                    'UserService',
                    function ($route, UserService) {
                        return UserService.get($route.current.params.userId);
                    }
                ]
            },

            pageInfo: {
                title: 'Edit'
            }
        };

        // Register states
        $routeProvider
            .when('/user/profile',           profile)
            .when('/user',              user)
            .when('/user/create',       userCreate)
            .when('/user/edit/:userId', userEdit);
    }]
);
// File : app/UI/module.js
/**
 * UI Module
 */
angular.module('UIModule', [
    'UserModule',
    'SearchModule'
]);
// File : app/UI/Controllers/SidebarController.js
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
// File : app/UI/Directives/HeaderDirective.js
/**
 * Header Directive
 */
angular.module('UIModule').directive('uiHeader', [
    'HeaderService',
    function (HeaderService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            templateUrl: '../app/UI/Partials/header.html',
            link: function (scope, element, attrs) {
                scope.info    = HeaderService.getInfo();
                scope.path    = HeaderService.getPath();
                scope.buttons = HeaderService.getButtons();

                scope.buttonClick = function (button) {
                    if (button.action && typeof button.action.func === 'function') {
                        if (button.action.params) {
                            button.action.func.apply(null, button.action.params);
                        } else {
                            button.action.func();
                        }
                    }
                }
            }
        };
    }
]);
// File : app/UI/Directives/MenuDirective.js
/**
 * Menu Directive
 * @param boolean collapsed
 */
angular.module('UIModule').directive('uiMenu', [
    'MenuService',
    function (MenuService) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                collapsed: '=?'
            },
            templateUrl: '../app/UI/Partials/menu.html',
            link: function (scope, element, attrs) {
                scope.items = MenuService.getItems();

                scope.toggleItemMenu = function (event, item) {
                    if (MenuService.toggleItemMenu(item)) {
                        event.preventDefault();
                    }
                };
            }
        };
    }
]);
// File : app/UI/Directives/ScrollbarDirective.js
/**
 * Scrollbar directive
 * Based on jQuery plugin SlimScroll v1.3.3
 */
angular.module('UIModule').directive('uiScrollbar', [
    '$window',
    '$timeout',
    function ($window, $timeout) {
        var defaults = {
            width            : 'auto',         // width in pixels of the visible scroll area
            height           : 'auto',         // height in pixels of the visible scroll area
            size             : '7px',          // width in pixels of the scrollbar and rail
            color            : '#000',         // scrollbar color, accepts any hex/color value
            position         : 'right',        // scrollbar position - left/right
            distance         : '1px',          // distance in pixels between the side edge and the scrollbar
            start            : 'top',          // default scroll position on load - top / bottom / $('selector')
            opacity          : .4,             // sets scrollbar opacity
            alwaysVisible    : false,          // enables always-on mode for the scrollbar
            disableFadeOut   : false,          // check if we should hide the scrollbar when user is hovering over
            railVisible      : false,          // sets visibility of the rail
            railColor        : '#333',         // sets rail color
            railOpacity      : .2,             // sets rail opacity
            railDraggable    : true,           // whether  we should use jQuery UI Draggable to enable bar dragging
            railClass        : 'uiScrollRail', // default CSS class of the scroll rail
            barClass         : 'uiScrollBar',  // default CSS class of the scroll bar
            wrapperClass     : 'uiScrollDiv',  // default CSS class of the scroll wrapper
            allowPageScroll  : false,          // check if mouse wheel should scroll the window if we reach top/bottom
            wheelStep        : 20,             // scroll amount applied to each mouse wheel step
            touchScrollStep  : 200,            // scroll amount applied when user is using gestures
            borderRadius     : '0px',          // sets border radius
            railBorderRadius : '0px'           // sets border radius of the rail
        };

        return {
            restrict: 'A',
            scope: {},
            link: function (scope, element, attrs) {
                // used in event handlers and for better minification
                var me = $(element);

                // Merge default options with user options
                var o = angular.extend({}, defaults);
                if (typeof attrs.uiScrollbar === 'object') {
                    o = angular.extend(options, attrs.uiScrollbar);
                }

                var isOverPanel, isOverBar, isDrag, queueHide, touchDif,
                    barHeight, percentScroll, lastScroll,
                    divS = '<div></div>',
                    minBarHeight = 30,
                    releaseScroll = false,
                    heightAuto = false;

                // optionally set height to the parent's height
                if ('auto' == o.height) {
                    o.height = me.parent().height();
                    heightAuto = true;
                }

                // wrap content
                var wrapper = $(divS)
                    .addClass(o.wrapperClass)
                    .css({
                        position: 'relative',
                        overflow: 'hidden',
                        width: o.width,
                        height: o.height
                    });

                // update style for the div
                me.css({
                    overflow: 'hidden',
                    width: o.width,
                    height: o.height
                });

                // create scrollbar rail
                var rail = $(divS)
                    .addClass(o.railClass)
                    .css({
                        width: o.size,
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        display: (o.alwaysVisible && o.railVisible) ? 'block' : 'none',
                        'border-radius': o.railBorderRadius,
                        background: o.railColor,
                        opacity: o.railOpacity,
                        zIndex: 90
                    });

                // create scrollbar
                var bar = $(divS)
                    .addClass(o.barClass)
                    .css({
                        background: o.color,
                        width: o.size,
                        position: 'absolute',
                        top: 0,
                        opacity: o.opacity,
                        display: o.alwaysVisible ? 'block' : 'none',
                        'border-radius' : o.borderRadius,
                        BorderRadius: o.borderRadius,
                        MozBorderRadius: o.borderRadius,
                        WebkitBorderRadius: o.borderRadius,
                        zIndex: 99
                    });

                // set position
                var posCss = (o.position == 'right') ? { right: o.distance } : { left: o.distance };
                rail.css(posCss);
                bar.css(posCss);

                // wrap it
                me.wrap(wrapper);

                // append to parent div
                me.parent().append(bar);
                me.parent().append(rail);

                // make it draggable and no longer dependent on the jqueryUI
                if (o.railDraggable){
                    bar.bind("mousedown", function(e) {
                        var $doc = $(document);
                        isDrag = true;
                        var t = parseFloat(bar.css('top'));
                        var pageY = e.pageY;

                        $doc.bind("mousemove.slimscroll", function(e){
                            var currTop = t + e.pageY - pageY;
                            bar.css('top', currTop);
                            scrollContent(0, bar.position().top, false);// scroll content
                        });

                        $doc.bind("mouseup.slimscroll", function(e) {
                            isDrag = false;hideBar();
                            $doc.unbind('.slimscroll');
                        });
                        return false;
                    }).bind("selectstart.slimscroll", function(e){
                        e.stopPropagation();
                        e.preventDefault();
                        return false;
                    });
                }

                // on rail over
                rail.hover(function(){
                    showBar();
                }, function(){
                    hideBar();
                });

                // on bar over
                bar.hover(function(){
                    isOverBar = true;
                }, function(){
                    isOverBar = false;
                });

                // show on parent mouseover
                me.hover(function(){
                    isOverPanel = true;
                    showBar();
                    hideBar();
                }, function(){
                    isOverPanel = false;
                    hideBar();
                });

                // support for mobile
                me.bind('touchstart', function(e,b){
                    if (e.originalEvent.touches.length) {
                        // record where touch started
                        touchDif = e.originalEvent.touches[0].pageY;
                    }
                });

                me.bind('touchmove', function(e){
                    // prevent scrolling the page if necessary
                    if(!releaseScroll) {
                        e.originalEvent.preventDefault();
                    }
                    if (e.originalEvent.touches.length) {
                        // see how far user swiped
                        var diff = (touchDif - e.originalEvent.touches[0].pageY) / o.touchScrollStep;
                        // scroll content
                        scrollContent(diff, true);
                        touchDif = e.originalEvent.touches[0].pageY;
                    }
                });

                // set up initial height
                getBarHeight();

                // check start position
                if (o.start === 'bottom') {
                    // scroll content to bottom
                    bar.css({ top: me.outerHeight() - bar.outerHeight() });
                    scrollContent(0, true);
                }
                else if (o.start !== 'top') {
                    // assume jQuery selector
                    scrollContent($(o.start).position().top, null, true);

                    // make sure bar stays hidden
                    if (!o.alwaysVisible) { bar.hide(); }
                }

                // attach scroll events
                attachWheel();

                // If height of scroll is "auto" resize scroll on element resize
                $window.addEventListener('resize', resize);

                // Destroy the scrollbar when directive is destroyed
                scope.$on('$destroy', function() {
                    // Remove wrapper
                    me.unwrap();

                    // Remove rail
                    rail.remove();

                    // Remove bar
                    bar.remove();

                    removeWheel();

                    $window.removeEventListener('resize', resize);
                });

                function resize() {
                    if (heightAuto) {
                        var height = me.parent().parent().height();
                        me.parent().css('height', height);
                        me.css('height', height);
                    }
                }

                function _onWheel(e) {
                    // use mouse wheel only when mouse is over
                    if (!isOverPanel) { return; }

                    var e = e || window.event;

                    var delta = 0;
                    if (e.wheelDelta) { delta = -e.wheelDelta/120; }
                    if (e.detail) { delta = e.detail / 3; }

                    var target = e.target || e.srcTarget || e.srcElement;
                    if ($(target).closest('.' + o.wrapperClass).is(me.parent())) {
                        // scroll content
                        scrollContent(delta, true);
                    }

                    // stop window scroll
                    if (e.preventDefault && !releaseScroll) { e.preventDefault(); }
                    if (!releaseScroll) { e.returnValue = false; }
                }

                function scrollContent(y, isWheel, isJump) {
                    releaseScroll = false;
                    var delta = y;
                    var maxTop = me.outerHeight() - bar.outerHeight();

                    if (isWheel)
                    {
                        // move bar with mouse wheel
                        delta = parseInt(bar.css('top')) + y * parseInt(o.wheelStep) / 100 * bar.outerHeight();

                        // move bar, make sure it doesn't go out
                        delta = Math.min(Math.max(delta, 0), maxTop);

                        // if scrolling down, make sure a fractional change to the
                        // scroll position isn't rounded away when the scrollbar's CSS is set
                        // this flooring of delta would happened automatically when
                        // bar.css is set below, but we floor here for clarity
                        delta = (y > 0) ? Math.ceil(delta) : Math.floor(delta);

                        // scroll the scrollbar
                        bar.css({ top: delta + 'px' });
                    }

                    // calculate actual scroll amount
                    percentScroll = parseInt(bar.css('top')) / (me.outerHeight() - bar.outerHeight());
                    delta = percentScroll * (me[0].scrollHeight - me.outerHeight());

                    if (isJump)
                    {
                        delta = y;
                        var offsetTop = delta / me[0].scrollHeight * me.outerHeight();
                        offsetTop = Math.min(Math.max(offsetTop, 0), maxTop);
                        bar.css({ top: offsetTop + 'px' });
                    }

                    // scroll content
                    me.scrollTop(delta);

                    // fire scrolling event
                    me.trigger('slimscrolling', ~~delta);

                    // ensure bar is visible
                    showBar();

                    // trigger hide when scroll is stopped
                    hideBar();
                }

                function attachWheel() {
                    if ($window.addEventListener) {
                        element[0].addEventListener('DOMMouseScroll', _onWheel, false );
                        element[0].addEventListener('mousewheel', _onWheel, false );
                    } else {
                        $window.document.attachEvent('onmousewheel', _onWheel);
                    }
                }

                function removeWheel() {
                    if ($window.removeEventListener) {
                        element[0].removeEventListener('DOMMouseScroll', _onWheel, false );
                        element[0].removeEventListener('mousewheel',     _onWheel, false );
                    } else {
                        $window.document.removeEvent('onmousewheel', _onWheel);
                    }
                }

                function getBarHeight() {
                    // calculate scrollbar height and make sure it is not too small
                    barHeight = Math.max((me.outerHeight() / me[0].scrollHeight) * me.outerHeight(), minBarHeight);
                    bar.css({ height: barHeight + 'px' });

                    // hide scrollbar if content is not long enough
                    var display = barHeight == me.outerHeight() ? 'none' : 'block';
                    bar.css({ display: display });
                }

                function showBar() {
                    // recalculate bar height
                    getBarHeight();
                    $timeout.cancel(queueHide);

                    // when bar reached top or bottom
                    if (percentScroll == ~~percentScroll) {
                        //release wheel
                        releaseScroll = o.allowPageScroll;

                        // publish approporiate event
                        if (lastScroll != percentScroll) {
                            var msg = (~~percentScroll == 0) ? 'top' : 'bottom';
                            me.trigger('slimscroll', msg);
                        }
                    } else {
                        releaseScroll = false;
                    }
                    lastScroll = percentScroll;

                    // show only when required
                    if (barHeight >= me.outerHeight()) {
                        //allow window scroll
                        releaseScroll = true;
                        return;
                    }

                    bar.stop(true,true).fadeIn('fast');

                    if (o.railVisible) {
                        rail.stop(true,true).fadeIn('fast');
                    }
                }

                function hideBar() {
                    // only hide when options allow it
                    if (!o.alwaysVisible) {
                        queueHide = $timeout(function() {
                            if (!(o.disableFadeOut && isOverPanel) && !isOverBar && !isDrag) {
                                bar.fadeOut('slow');
                                rail.fadeOut('slow');
                            }
                        }, 1000);
                    }
                }
            }
        };
    }
]);
// File : app/UI/Directives/SidebarDirective.js
/**
 * Sidebar Directive
 */
angular.module('UIModule').directive('uiSidebar', [
    function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '../app/UI/Partials/sidebar.html',
            scope: {
                collapsed: '@collapsed',
                toggle   : '@toggle'
            },
            controller:   'SidebarController',
            controllerAs: 'sidebar',
            bindToController: true,
            link: function (scope, element, attrs, sidebar) {
                // Define defaults
                if (typeof scope.toggle === 'undefined') {
                    scope.toggle = sidebar.toggle;
                }

                if (typeof scope.collapsed === 'undefined') {
                    scope.collapsed = sidebar.collapsed;
                }

                // Watch for attribute changes
                scope.$watch('toggle', function (newValue) {
                    sidebar.toggle = newValue;
                });

                scope.$watch('collapsed', function (newValue) {
                    sidebar.collapsed = newValue;
                });
            }
        };
    }
]);
// File : app/UI/Services/AlertService.js
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
// File : app/UI/Services/HeaderService.js
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

        var addHomeToPath = true;

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
// File : app/UI/Services/MenuService.js
/**
 * Menu Service
 */
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

            browseItems: function (items, callback) {
                var callbackResult = null;
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];

                    callbackResult = callback(item);
                    if (callbackResult) {
                        break;
                    } else if (item.children) {
                        callbackResult = this.browseItems(item.children, callback);
                        if (callbackResult) {
                            break;
                        }
                    }
                }

                return callbackResult;
            },

            /**
             * Find an item by id
             * @param itemId
             */
            findItem: function (itemId) {
                return this.browseItems(items, function (item) {
                    return item.id === itemId ? item : null;
                });
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
                                this.setActive(collection[i].id);
                            }
                            break;
                        }
                    }
                    if (!match && activate) {
                        this.setActive(null);
                    }
                    return match;
                }.bind(this);
                if (route) {
                    return checkItems(items);
                } else {
                    if (activate) {
                        this.setActive(null);
                    }
                    return false;
                }
            }
        };
    }
]);
// File : app/Task/module.js
/**
 * Task Module
 */
angular
    .module('TaskModule', [
        'ngRoute',
        'ui.sortable'
    ])
    .run([
        'MenuService',
        function (MenuService) {
            MenuService.addItem({
                id: 'task',
                position: 5,
                icon: 'tasks',
                title: 'Tasks',
                url: '#/task'
            });
        }
    ]);
// File : app/Task/Controllers/TaskController.js
angular.module('TaskModule').controller('TaskController', [
    '$modal',
    'HeaderService',
    'tasks',
    function ($modal, HeaderService, tasks) {
        this.tasks = tasks;

        this.tasks = [
            {id: 1, name: 'Ma premiere tache', done: false },
            {id: 2, name: 'Ma premiere tache', done: false },
            {id: 3, name: 'Ma premiere tache', done: false },
            {id: 4, name: 'Ma premiere tache terminée', done: true }
        ];

        this.toggleDownStatus = function (task) {
            task.done = !task.done;
        };

        this.openForm = function (task) {
            var modalInstance = $modal.open({
                templateUrl: '../app/Task/Partials/edit.html',
                controller: 'TaskEditController',
                controllerAs: 'taskEditCtrl',
                size: 'lg',
                resolve: {
                    task: function () { return task; }
                 }
            });
        };

        // Add create button
        HeaderService.addButton({
            icon: 'plus',
            iconOnly: true,
            label: 'Create Task',
            url: '#/task/create'
        });
    }
]);
// File : app/Task/Controllers/TaskEditController.js
/**
 * Task Edit Controller
 */
angular.module('TaskModule').controller('TaskEditController', [
    function (task) {
        this.task = task;
    }
]);
// File : app/Task/Services/TaskService.js
angular.module('TaskModule').factory('TaskService', [
    '$http',
    '$q',
    function ($http, $q) {
        return {
            new: function () {
                return {
                    _id: null,
                    name: null
                };
            },

            list: function () {
                var deferred = $q.defer();

                $http
                    .get('http://localhost:3000/task')
                    .success(function (tasks) {
                        deferred.resolve(tasks.data);
                    })
                    .error(function (err) {
                        deferred.reject(err);
                    });

                return deferred.promise;
            },

            get: function (taskId) {
                var deferred = $q.defer();

                $http
                    .get('http://localhost:3000/task/' + taskId)
                    .success(function (task) {
                        deferred.resolve(task.data);
                    })
                    .error(function (err) {
                        deferred.reject(err);
                    });

                return deferred.promise;
            },

            save: function (task) {
                var deferred = $q.defer();

                if (task._id) {
                    // Edit mode
                    var request = $http.put('http://localhost:3000/task/' + task._id, task);
                } else {
                    // Create mode
                    var request = $http.post('http://localhost:3000/task/', task);
                }

                request
                    .success(function (task) {
                        deferred.resolve(task.data);
                    })
                    .error(function (err) {
                        deferred.reject(err);
                    });

                return deferred.promise;
            }
        };
    }
]);
// File : app/Task/routes.js
/**
 * Task routes
 */
angular.module('TaskModule').config([
    '$routeProvider',
    function ($routeProvider) {
        // List Tasks
        var task = {
            name: 'task',
            url: '#/task',
            templateUrl: '../app/Task/Partials/list.html',
            controller: 'TaskController',
            controllerAs: 'taskCtrl',

            resolve: {
                tasks: [
                    'TaskService',
                    function (TaskService) {
                        return TaskService.list();
                    }
                ]
            },
            pageInfo: {
                icon:  'tasks',
                title: 'My tasks'
            }
        };

        // Create new Task
        var taskCreate = {
            name: 'user.create',
            url: '#/user/create',
            parent: task,
            templateUrl:  '../app/User/Partials/User/edit.html',
            controller:   'TaskEditController',
            controllerAs: 'taskEditCtrl',

            resolve: {
                task: [
                    'TaskService',
                    function (TaskService) {
                        return TaskService.new();
                    }
                ]
            },

            pageInfo: {
                title: 'Create'
            }
        };

        // Edit an existing Task
        var taskEdit = {
            name: 'task.edit',
            url: '#/task/edit',
            parent: task,
            templateUrl:  '../app/Task/Partials/Task/edit.html',
            controller:   'TaskEditController',
            controllerAs: 'taskEditCtrl',

            resolve: {
                task: [
                    '$route',
                    'TaskService',
                    function ($route, TaskService) {
                        return TaskService.get($route.current.params.taskId);
                    }
                ]
            },

            pageInfo: {
                title: 'Edit'
            }
        };

        // Register states
        $routeProvider
            .when('/task',              task)
            .when('/task/create',       taskCreate)
            .when('/task/edit/:taskId', taskEdit);
    }]
);
// File : app/Demo/module.js
/**
 * Demo Module
 */
angular
    .module('DemoModule', [
        'ngRoute',
        'UIModule'
    ])
    .run([
        'MenuService',
        function (MenuService) {
            MenuService.addItem({
                id: 'demo',
                icon: 'laptop',
                title: 'UI Demo',
                notification: {
                    color: 'green',
                    value: 'new'
                },
                children: [
                    { id: 'general',  icon: 'adjust',    title: 'General',    url: '#/demo/ui/general' },
                    { id: 'buttons',  icon: 'hand-o-up', title: 'Buttons',    url: '#/demo/ui/buttons' },
                    { id: 'tables',   icon: 'table',     title: 'Tables',     url: '#/demo/ui/tables' },
                    { id: 'forms',    icon: 'font',      title: 'Forms',      url: '#/demo/ui/forms' },
                    { id: 'widgets',  icon: 'th',        title: 'Widgets',    url: '#/demo/ui/widgets' },
                    { id: 'timeline', icon: 'clock-o',   title: 'Timeline',   url: '#/demo/ui/timeline' },
                    { id: '404error', icon: 'warning',   title: '404 Error',  url: '#/error/404' },
                    { id: '500error', icon: 'warning',   title: '500 Error',  url: '#/error/500' },
                    { id: 'blank',    icon: 'square-o',  title: 'Blank Page', url: '#/demo/blank' }
                ]
            });
        }
    ]);
// File : app/Demo/routes.js
/**
 * Demo routes
 */
angular.module('DemoModule').config([
    '$routeProvider',
    function ($routeProvider) {
        var demo = {
            name: 'demo',
            abstract: true,

            pageInfo: {
                title: 'Demo'
            }
        };

        var demoWidgets = {
            name: 'demo.widgets',
            url: '#/demo/ui/widgets',
            parent: demo,
            templateUrl: '../app/Demo/Partials/widgets.html',

            pageInfo: {
                icon:   'th',
                title:  'Widgets',
                help:   true,
                config: true
            }
        };

        var demoUI = {
            name: 'demo.ui',
            abstract: true,
            parent: demo,

            pageInfo: {
                icon:   'laptop',
                title:  'UI Elements'
            }
        };

        // UI - General
        var demoUIGeneral = {
            name: 'demo.ui.general',
            url: '#/demo/ui/general',
            parent: demoUI,
            templateUrl: '../app/Demo/Partials/general.html',

            pageInfo: {
                title:  'General',
                help:   true,
                config: true
            }
        };

        // UI - Buttons
        var demoUIButtons = {
            name: 'demo.ui.buttons',
            url: '#/demo/ui/buttons',
            parent: demoUI,
            templateUrl: '../app/Demo/Partials/buttons.html',

            pageInfo: {
                title:  'Buttons',
                help:   true,
                config: true
            }
        };

        // UI - Tables
        var demoUITables = {
            name: 'demo.ui.tables',
            url: '#/demo/ui/tables',
            parent: demoUI,
            templateUrl: '../app/Demo/Partials/tables.html',

            pageInfo: {
                title:  'Tables',
                help:   true,
                config: true
            }
        };

        // UI - Forms
        var demoUIForms = {
            name: 'demo.ui.forms',
            url: '#/demo/ui/forms',
            parent: demoUI,
            templateUrl: '../app/Demo/Partials/forms.html',

            pageInfo: {
                title:  'Forms',
                help:   true,
                config: true
            }
        };

        // UI - Timeline
        var demoUITimeline = {
            name: 'demo.ui.timeline',
            url: '#/demo/ui/timeline',
            parent: demoUI,
            templateUrl: '../app/Demo/Partials/timeline.html',

            pageInfo: {
                title:  'Timeline',
                help:   true,
                config: true
            }
        };

        // Blank page
        var demoBlank = {
            name: 'demo.blank',
            url: '#/demo/blank',
            parent: demo,
            templateUrl: '../app/Demo/Partials/blank.html',

            pageInfo: {
                icon:  'folder',
                title: 'Blank page'
            }
        };

        // Register states
        $routeProvider
            .when('/demo/ui/widgets',  demoWidgets)
            .when('/demo/ui/general',  demoUIGeneral)
            .when('/demo/ui/buttons',  demoUIButtons)
            .when('/demo/ui/tables',   demoUITables)
            .when('/demo/ui/forms',    demoUIForms)
            .when('/demo/ui/timeline', demoUITimeline)
            .when('/demo/blank',       demoBlank);
    }]
);
// File : app/app.js
/**
 * Application
 */
angular
    .module('App', [
        'ngRoute',
        'ui.bootstrap',
        'UIModule',
        'AdministrationModule',
        'DashboardModule',
        'TaskModule',
        'DemoModule'
    ])
    .config([
        '$httpProvider',
        function ($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
    ])
    .run([
        '$rootScope',
        '$location',
        'HeaderService',
        'MenuService',
        'AuthenticationService',
        function ($rootScope, $location, HeaderService, MenuService, AuthenticationService) {
            // Check User credentials
            $rootScope.$on("$routeChangeStart", function (event, next, current) {
                if (next.access && next.access.requiredLogin && !AuthenticationService.isLogged()) {
                    // Redirect to login page
                    $location.path('/user/login');
                }
            });

            // Update UI with the new page info
            $rootScope.$on('$routeChangeSuccess', function (event, next, current) {
                // Store previous state
                HeaderService.setPrevious(current);

                // Store current state
                HeaderService.setCurrent(next);

                MenuService.checkRoute(next.regexp, true);

                // Close all sidebar menus
                MenuService.closeItemMenus();
            });

            // Redirect to error page if there is a problem
            $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
                // Get status of the rejection or assume it's our fault with a default 500 error
                var statusCode = rejection && rejection.status && rejection.status.code ? rejection.status.code : 500;

                // Redirect User to the correct error page
                switch (statusCode) {
                    case 404:
                        $location.path('/error/404');
                        break;

                    case 500:
                    default:
                        $location.path('/error/500');
                        break;
                }
            });
        }
    ]);
// File : app/routes.js
/**
 * Application routes
 */
angular.module('App').config([
    '$routeProvider',
    function ($routeProvider) {
        var home = {
            redirectTo: '/home'
        };

        var error = {
            name: 'error',
            abstract: true,

            pageInfo: {
                icon: 'warning',
                title: 'Error'
            }
        };

        var error404 = {
            name: 'error.404',
            parent: error,
            templateUrl: '../app/UI/Partials/error/404.html',

            pageInfo: {
                title: '404 Page not found'
            }
        };

        var error500 = {
            name: 'error.500',
            parent: error,
            templateUrl: '../app/UI/Partials/error/500.html',

            pageInfo: {
                title: '500 Internal server error'
            }
        }

        $routeProvider
            .when('/',          home)
            .when('/error/404', error404)
            .when('/error/500', error500)
            .otherwise({ redirectTo: '/error/404' });
    }
]);
})();