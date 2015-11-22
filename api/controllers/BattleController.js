/**
 * BattleController
 *
 * @description :: Server-side logic for managing battles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    Monster.findOne({key: req.param('key')}).exec(function(err, monster){
      MstMonster.findOne({id: monster.mstMonsterId}).exec(function(err, mstMonster){
        if (err) res.send(err);
        return res.view({user: req.user, monster: monster, mstMonster: mstMonster});
      });
    });
  },
  attack: function(req, res) {
    Monster.findOne({key: req.param('key')}).exec(function(err, monster){
      if (err) res.send(err);
      var monster_hp = monster.hp - req.user.strength;
      MstMonster.findOne({id: monster.mstMonsterId}).exec(function(err, mstMonster){
        var user_hp = req.user.hp - mstMonster.strength;
        User.update({hp: user_hp}, {id: req.user.id}).exec(function(err, user){
          Monster.update({hp: monster_hp},{id: monster.id}).exec(function(err,m){
            return res.json({user_hp: user_hp, monster_hp: monster_hp, monster_max_hp: mstMonster.maxHp});
          });
        });
      });
    });
  },
  encount: function(req, res) {
    MstMonster.findOne({id: req.param('mst_monster_id')}).exec(function(err, mstMonster){
      Monster.create({userId: req.user.id, mstMonsterId: mstMonster.id, hp: mstMonster.maxHp}).exec(function(err, monster){
        if (err) res.send(err);
        return res.redirect("/battle/?key=" + monster.key);
      });
    });
  },
};