var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var keys = require('./keys');
var user = require('../models/user.model');

passport.serializeUser((user,done)=>{
    console.log(user.id);
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    user.findById(id).then((err,data)=>{
        if(err){
            throw err;
        }
        done(null,data);
    });
});

passport.use(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {
        user.find({ googleId: profile.id }, (error,data) => {
            console.log(data);
            if (data.length>0) {
                console.log('Already Existing User');
                done(null,data[0]);
            } else {
                var record = new user({
                    userName: profile.displayName,
                    googleId: profile.id
                });
                user(record).save((error, data) => {
                    if (error) {
                        throw error;
                    }
                    done(null,data);
                    console.log('Data saved successfully');
                });
            }
        });
    })
)

module.exports = passport;
