angular.module('TaskModule').factory('TaskService', [
    '$http',
    '$q',
    function ($http, $q) {
        return {
            new: function () {
                return {
                    _id: null,
                    name: null,
                    done: false
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