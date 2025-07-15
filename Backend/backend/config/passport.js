const { Strategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
const Func = require('../models/funcs');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'chave_secreta_super_segura' 
};

module.exports = (passport) => {
  passport.use(new Strategy(opts, async (jwt_payload, done) => {
    try {
      const user = await Func.findById(jwt_payload.id);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (err) {
      console.error(err);
      return done(err, false);
    }
  }));
};
