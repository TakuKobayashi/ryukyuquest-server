var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({ id: id } , function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    authTokenField: 'authToken'
  },
  function(authToken, done) {

    User.findOne({ authToken: authToken}, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect mailAddress.' });
      }

      var returnUser = {
        authToken: user.authToken,
        id: user.id
      };
      return done(null, returnUser, {
        message: 'Logged In Successfully'
      });
    });
  }
));

module.exports = {  
  express: {
    customMiddleware: function(app){
      // app: express() オブジェクト
      console.log("passport module initialize");
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
};