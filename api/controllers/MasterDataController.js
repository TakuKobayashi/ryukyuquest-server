/**
 * MasterDataController
 *
 * @description :: Server-side logic for managing masterdatas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
  	
    return res.json(mst);
  }
};

