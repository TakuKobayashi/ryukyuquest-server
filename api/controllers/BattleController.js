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
        User.findOne({id: req.user.id}).exec(function(err, user){
          user.hp = user.hp - mstMonster.strength;
          user.save(function(err,u){
            monster.hp = monster.hp - user.strength;
            monster.save(function(err,m){
              return res.json({user_hp: u.hp, monster_hp: m.hp, monster_max_hp: mstMonster.maxHp});
            });
          });
        });
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

