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
    hp: { type: 'integer'},
    maxHp: { type: 'integer'},
    strength: { type: 'integer', defaultValue: 10},
    toJSON: function() {
      var obj = this.toObject();
      return obj;
    }
  },
  beforeCreate: function(user, cb) {
    user.lastLoginedAt = new Date();
    user.hp = 100;
    user.maxHp = 100;
    user.strength = 10;
    cb();
  }
};

