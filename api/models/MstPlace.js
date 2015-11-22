/**
* MstPlace.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    id: { type: 'float'},
    name: { type: 'string'},
    lat: { type: 'float'},
    lon: { type: 'float'},
    mstMonsterId: { type: 'int'}
  }
};

