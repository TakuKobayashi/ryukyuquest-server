/**
* Monster.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    userId: { type: 'int'},
    key: { type: 'string'},
    hp: { type: 'int'},
    encountedAt: { type: 'datetime'},
    mstMonsterId: { type: 'int'},
    isActive: function() {
      var obj = this.toObject();
      var now = new Date();
      //30分前
      return obj.encountedAt.getTime() >= now.getTime() - (30 * 60 * 1000);
    }
  },
  beforeCreate: function(monster, cb) {
    var uuid = require('node-uuid');
    var ran = uuid.v4().split('-').join('');
    monster.encountedAt = new Date();
    monster.key = ran;
    cb();
  }
};

