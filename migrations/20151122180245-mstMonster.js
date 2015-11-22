var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
　db.createTable('mstMonster', {
    id: { type: 'integer', primaryKey: true, autoIncrement: true },
    name: { type: 'string'},
    maxHp: { type: 'integer', notNull: true, defaultValue: 0},
    strength: { type: 'integer', notNull: true, defaultValue: 0},
    imagePath: { type: 'string'},
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('mstMonster', callback);
};
