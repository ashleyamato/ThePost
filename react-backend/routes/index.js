var express = require('express');
var router = express.Router();
var users = require('./users')

router.get('/users', users.getUsers)

module.exports = router;
