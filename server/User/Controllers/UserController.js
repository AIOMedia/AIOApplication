/**
 * User Controller
 */
var UserController = {
    list: function (req, res) {
        res.json({ message: 'User list' });
    },

    get: function (req, res) {
        res.json({ message: 'User get ' + req.params.id });
    },

    create: function (req, res) {
        res.json({ message: 'User create' });
    },

    update: function (req, res) {
        res.json({ message: 'User update ' + req.params.id });
    },

    delete: function (req, res) {
        res.json({ message: 'User delete ' + req.params.id });
    }
};

module.exports = UserController;