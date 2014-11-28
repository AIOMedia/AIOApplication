var express = require('express');
var router = express.Router();

var controller = require('./Controllers/UserController');

/* GET users listing. */
router.get('/', function (req, res) {
    var userList = controller.list();

    res.json(userList);
});

router.get('/:id', function (req, res) {
    var user = controller.get(req.params.id);

    res.json(user);
});

router.post('/', function (req, res) {
    var user = controller.create();

    res.json(user);
});

router.put('/:id', function (req, res) {
    var user = controller.update(req.params.id);

    res.json(user);
});

router.delete('/:id', function (req, res) {
    var success = controller.delete(req.params.id);

    res.json(success);
});

module.exports = router;
