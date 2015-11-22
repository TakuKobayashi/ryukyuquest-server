/**
 * BattleController
 *
 * @description :: Server-side logic for managing battles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    Monster.findOne({key: req.param('key')}).exec(function(err, monster){
//      MstMonster.findOne({id: monster.mstMonsterId}).exec(function(err, mstMonster){
        if (err) res.send(err);
        return res.view({user: req.user, monster: monster});
//      });
    });
  },
  attack: function(req, res) {
    Monster.findOne({key: req.param('key')}).exec(function(err, monster){
      if (err) res.send(err);
        var user_hp = req.user.hp - 10;
        var monster_hp = monster.hp - req.user.strength;
//      MstMonster.findOne({id: monster.mstMonsterId}).exec(function(err, mstMonster){
        User.update({hp: user_hp}, {id: req.user.id}).exec(function(err, user){
          console.log(user);
          Monster.update({hp: monster_hp},{id: monster.id}).exec(function(err,m){
            console.log(m);
            return res.json({user_hp: user_hp, monster_hp: monster_hp});
          });
        });
//      });
    });
  },
  encount: function(req, res) {
    Monster.create({userId: req.user.id, mstMonsterId: req.param('mst_monster_id')}).exec(function(err, monster){

      if (err) res.send(err);
      return res.redirect("/battle/?key=" + monster.key);
    });
  },
};

