/**
* MstMonster.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: { type: 'integer'},
    name: { type: 'string'},
    maxHp: { type: 'integer'},
    strength: { type: 'integer'},
    imagePath: { type: 'string'},
  }
};

