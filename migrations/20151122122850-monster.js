var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
　db.createTable('monster', {
    id: { type: 'integer', primaryKey: true, autoIncrement: true },
    userId: { type: 'integer', notNull: true },
    mstMonsterId: { type: 'integer', notNull: true },
    key: { type: 'string', notNull: true },
    hp: { type: 'integer', notNull: true,defaultValue: 0},
    encountedAt: { type: 'datetime'},
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('monster', 'monster_user_id_at_index', 'userId', function(){
      db.addIndex('monster', 'monster_user_encounted_at_index', 'encountedAt', callback)
    })
  });
};

exports.down = function(db, callback) {
  db.dropTable('monster', callback);
};
