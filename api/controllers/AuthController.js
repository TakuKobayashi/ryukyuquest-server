/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require('passport');

module.exports = {
  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  login: function(req, res) {
    if(!req.isAuthenticated()){
      var loginObj = {authToken: req.param('authToken')};
      User.findOne(loginObj).exec(function(err, user){
        if ((err) || (!user)) {
          var uuid = require('node-uuid');
          var ran = uuid.v4().split('-').join('');
          loginObj["authToken"] = ran;
          User.create(loginObj).exec(function(err, user){
            req.logIn(user, function(err) {
              if (err) res.send(err);
              return res.json(user);
            });
          });
        }else{
          req.logIn(user, function(err) {
            if (err) res.send(err);
            return res.json(user);
          });
        }
      });
    }else{
      return res.json(req.user);
    }
  }
};