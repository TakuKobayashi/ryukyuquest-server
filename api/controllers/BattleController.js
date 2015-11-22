/**
 * BattleController
 *
 * @description :: Server-side logic for managing battles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    Monster.findOne({key: req.param('key')}).exec(function(err, monster){
      if (err) res.send(err);
      return res.view({user: user, monster: monster});
    });
  },
  attack: function(req, res) {
    Monster.findOne({key: req.param('key')}).exec(function(err, monster){
      if (err) res.send(err);
      MstMonster.findOne({id: monster.mstMonsterId}).exec(function(err, mstMonster){
        return res.json({user_hp: user.hp, monster_hp: monster.hp, monster_max_hp: mstMonster.maxHp});
      });
    });
  },
  encount: function(req, res) {
    Monster.create({userId: req.user.id, mstMonsterId: req.param('mst_monster_id')}).exec(function(err, monster){
      if (err) res.send(err);
      return res.redirect("/battle/?key=" + monster.key);
    });
  },
};

