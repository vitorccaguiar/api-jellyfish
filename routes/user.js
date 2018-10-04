var express = require('express');
var controller = require('../controllers/userController');
var router = express.Router();
var userController = new controller();

router.get('/', function(req, res, next) {
  res.json(userController.getUsers(req, res));
});

router.get('/:id', function(req, res, next) {
  res.json(userController.getUser(req, res, req.params.id));
});

module.exports = router;