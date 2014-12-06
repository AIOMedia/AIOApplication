var express = require('express');
var router = express.Router();

var controller = require('./Controllers/UserController');

/* GET users listing. */
router.get('/',       controller.list);
router.get('/:id',    controller.get);
router.post('/',      controller.create);
router.put('/:id',    controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
