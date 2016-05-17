var express = require('express');
var router = express.Router();

require('../models');

var User = require('mongoose').model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().then(function(users){
    console.log(users);
    res.render('users', {users: users.map(function(u){
        return u.username;
      })
    });
  }).catch(console.log);
});

module.exports = router;
