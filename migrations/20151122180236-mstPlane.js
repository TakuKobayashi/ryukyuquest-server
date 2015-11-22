var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
　db.createTable('mstPlace', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    name: { type: 'string'},
    lat: { type: 'float', notNull: true, defaultValue: 0},
    lon: { type: 'float', notNull: true, defaultValue: 0},
    mstMonsterId: { type: 'int', notNull: true},
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('mstPlace', callback);
};
