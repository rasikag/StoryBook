const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Load user model
require('./models/User');

// Passport configuration 
require('./config/passport')(passport);

// Load routes 
const auth = require('./routes/auth');

const keys = require('./config/keys');

mongoose.Promise = global.Promise;

mongoose.connect(keys.mongoURI,{
    
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const app = express();

app.get('/' , (req, res) => {
    res.send('Get');
});

app.use(cookieParser());
app.use(session({
    secret : 'secret',
    resave : false,
    saveUninitialized : false
}));

// Passport middleware 
app.use(passport.initialize());
app.use(passport.session());

// use auth route
app.use('/auth', auth);

const port = process.env.PORT || 8081;

app.listen(port, () =>{
    console.log(`Server started on port: ${port }`);
});