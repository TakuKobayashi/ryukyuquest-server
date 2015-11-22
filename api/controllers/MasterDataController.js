/**
 * MasterDataController
 *
 * @description :: Server-side logic for managing masterdatas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    var fs = require('fs');
    var mst = fs.readFileSync('./mst.json', 'utf8');
    return res.json(mst);
  }
};

