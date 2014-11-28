/**
 * User Controller
 */
var UserController = {
    list: function () {
        return { message: 'User list' };
    },

    get: function (id) {
        return { message: 'User get ' + id };
    },

    create: function () {
        return { message: 'User create' };
    },

    update: function (userData) {
        return { message: 'User update', data: userData };
    },

    delete: function (id) {
        return { message: 'User delete ' + id };
    }
};

module.exports = UserController;