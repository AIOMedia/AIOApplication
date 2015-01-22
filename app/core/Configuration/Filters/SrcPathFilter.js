/**
 * Filters for building paths to the app src files
 */
angular.module('AioConfiguration')
    /**
     * Get path to a module
     * Usage :
     *  - in template : {{ MODULE_NAME | aio_path_module }}
     *  - in js :
     */
    .filter('aio_path_module', function () {
        return function (moduleName) {

            return moduleName;
        };
    })

    /**
     * Get path to a module template
     * Usage :
     *  - in template : {{ TEMPLATE_NAME | aio_path_template:MODULE_NAME }}
     *  - in js :
     */
    .filter('aio_path_template', function () {
        return function (moduleName, templateName) {

            return moduleName;
        };
    });