const express = require('express');
const app= express();
const port =5000;
const expressLayouts = require('express-ejs-layouts');

const cookieParser = require('cookie-parser');
// user for session cookie
const session = require('express-session');
const db= require("./config/mongoose");
// for authentication
//need to require both, for this to work
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');

app.use(expressLayouts);
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());

// tell app to use it in the middleware, because whn requets is coming in the cooklie need to be parsed
app.use(cookieParser());
//mongo store is used to store session cookie
app.use(session({
    name: 'codeial',
    secret:"secret",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl: 'mongodb://localhost/Placemen_Cell',
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongodb setup ok');
        })
}));

app.use(passport.initialize());
app.use(passport.session());

//set current user's usage
app.use(passport.setAuthenticatedUser);


app.listen(port, function(err){
    if(err) {
        console.log(`Error in loading server ${err}`);
    } else {
        console.log(`Server is up and running :: ${port}`);    
    } 
});