module.exports = function(grunt) {

    // All upfront config goes in a massive nested object.
    grunt.initConfig({
        distFolder: 'public/js',

        // Concatenate task
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
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/angular/angular.min.js',
                    'node_modules/angular-route/angular-route.min.js',
                    'node_modules/angular-ui-sortable/src/sortable.js'
                ],
                dest: '<%= distFolder %>/lib.js'
            },

            // Concatenate app
            app: {
                src: [
                    'app/Administration/module.js',
                    'app/Administration/**/*.js',
                    'app/Dashboard/module.js',
                    'app/Dashboard/**/*.js',
                    'app/Search/module.js',
                    'app/Search/**/*.js',
                    'app/Notification/module.js',
                    'app/Notification/**/*.js',
                    'app/Home/module.js',
                    'app/Home/**/*.js',
                    'app/User/module.js',
                    'app/User/**/*.js',
                    'app/UI/module.js',
                    'app/UI/**/*.js',
                    'app/Task/module.js',
                    'app/Task/**/*.js',
                    'app/Demo/module.js',
                    'app/Demo/**/*.js',

                    'app/**/*.js',
                    'app/app.js'
                ],
                dest: '<%= distFolder %>/app.js'
            }
        },

        // Uglify task
        uglify: {
            // Uglify app
            app: {
                src: [
                    '<%= distFolder %>/app.js'
                ],
                dest: '<%= distFolder %>/app.min.js'
            }
        }
    });


    // Load Grunt task runners
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register our own custom task alias.
    grunt.registerTask('build', ['concat', 'uglify']);
};