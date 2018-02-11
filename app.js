const express = require('express');
var exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Load user model
require('./models/User');

// Passport configuration 
require('./config/passport')(passport);

// Load routes 
const index = require('./routes/index');
const auth = require('./routes/auth');


const keys = require('./config/keys');

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI,{
    
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const app = express();

app.engine('handlebars', exphbs({
     defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(cookieParser());
app.use(session({
    secret : 'secret',
    resave : false,
    saveUninitialized : false
}));

// Passport middleware 
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

// use auth route
app.use('/auth', auth);
app.use('/',index);

const port = process.env.PORT || 8081;

app.listen(port, () =>{
    console.log(`Server started on port: ${port }`);
});