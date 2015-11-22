/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    lastLoginedAt: { type: 'datetime'},
    authToken: { type: 'string'},
    toJSON: function() {
      var obj = this.toObject();
      return obj;
    }
  },
  beforeCreate: function(user, cb) {
    user.lastLoginedAt = new Date();
    cb();
  }
};

