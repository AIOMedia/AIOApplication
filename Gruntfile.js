module.exports = function (grunt) {

    // All upfront config goes in a massive nested object.
    grunt.initConfig({
        distFolder: 'public',

        // Concatenate JS task
        concat: {
            // Common options for all concatenate task
            options: {
                process: function(src, filepath) {
                    return '// File : ' + filepath + '\n' + src;
                }
            },

            // Concatenate libraries
            lib: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/jquery-ui/jquery-ui.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'bower_components/ng-file-upload/angular-file-upload-shim.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                    'bower_components/angular-ui-sortable/sortable.js',
                    'bower_components/ng-file-upload/angular-file-upload.js'
                ],
                dest: '<%= distFolder %>/js/lib.js'
            },

            lib_min: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/jquery-ui/jquery-ui.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/ng-file-upload/angular-file-upload-shim.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    'bower_components/angular-ui-sortable/sortable.min.js',
                    'bower_components/ng-file-upload/angular-file-upload.min.js'
                ],
                dest: '<%= distFolder %>/js/lib.min.js'
            },

            // Concatenate app
            app: {
                // Wrap all application into an anonymous auto-callable function using 'use strict' env ( as recommended for angular app)
                options: {
                    banner: '(function() {\n',
                    footer: '\n})();'
                },
                src: [
                    // Load module files
                    'app/core/**/module.js',
                    'app/modules/**/module.js',

                    // Load src code
                    'app/core/**/*.js',
                    'app/modules/**/*.js',

                    // Load routes
                    'app/core/**/routes.js',
                    'app/modules/**/routes.js',

                    // Load app root file when all others are loaded
                    'app/app.js'
                ],
                dest: '<%= distFolder %>/js/app.js'
            }
        },

        // Uglify JS task
        uglify: {
            // Uglify app
            app: {
                src: [
                    '<%= distFolder %>/js/app.js'
                ],
                dest: '<%= distFolder %>/js/app.min.js'
            }
        },

        // Compile LESS files task
        less: {
            options: {
                compress: true,
                yuicompress: true,
                optimization: 2
            },
            app: {
                src: [
                    'less/bootstrap-app.less'
                ],
                dest: '<%= distFolder %>/css/app.min.css'
            }
        }
    });

    // Load Grunt task runners
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Register our own custom task alias.
    grunt.registerTask('build', ['concat', 'uglify', 'less']);
};