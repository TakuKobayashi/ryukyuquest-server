var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('user', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    lastLoginedAt: { type: 'datetime', notNull: true },
    authToken: { type: 'string', notNull: true },
    updatedAt: 'datetime',
    createdAt: 'datetime'
  }, function(){
    db.addIndex('user', 'user_last_logined_at_index', 'lastLoginedAt', function(){
      db.addIndex('user', 'user_auth_token_index', ['authToken'], callback)
    })
  });
};

exports.down = function(db, callback) {
  db.dropTable('user', callback);
};
