var express = require('express');
var service = require('../services/userService');
var router = express.Router();
var userService = new service();

router.get('/', function(req, res, next) {
  res.json(userService.getUsers());
});

router.get('/:id', function(req, res, next) {
  var result = userService.getUser(req.params.id);
  if(result === 'User not found') {
    res.status(404).send(result);
  }
  else {
    res.json(result);
  }
});

module.exports = router;
