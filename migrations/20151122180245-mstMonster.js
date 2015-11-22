var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
　db.createTable('mstMonster', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string'},
    maxHp: { type: 'int', notNull: true, defaultValue: 0},
    strength: { type: 'int', notNull: true, defaultValue: 0},
    imagePath: { type: 'string'},
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('mstMonster', callback);
};
