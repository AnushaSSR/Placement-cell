// require passport
const { models } = require('mongoose');
const passport = require('passport');
// require the strategy
const LocalStrategy = require('passport-local').Strategy; 

// require user

const user= require('../models/user');


// tell passport to use it
passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    function(req, email, password, done){
        // find a user and establish the identity
        User.findOne({email: email}, function(err, user)  {
            if (err){console.log("Error in finding user --> Passport"); return done(err);}
            
            if (!user || user.password != password){ console.log("Invalid Username/Password"); return done(null, false);}

            
        });
    }

    
));

passport.serializeUser(function(user,done){
    done(null, user.id);

});

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){ console.log("Error in finding user -->Passport"); return done(err);
        }
        return done(null,user);
    });
});

// chcek if user is authenticated

passport.checkAuthentication = function(req,res,next) {
    //if the user is signed in then pass on request to next function which is controller's action)
    if (req.isAuthenticated()){
        return next();
    }

    // if the user is ot signedin 
    return res.redirect('/employee/sign-in');
} 

passport.setAuthenticatedUser = function(req,res,next) {
    if(req.isAuthenticated()){
        //req.user cmtains the current signed in user from the session cookie and we are just sending this to locals for the views 
        res.locals.user = req.user;
        console.log(res.locals.user);
    }

    next();
}

module.exports= passport;



