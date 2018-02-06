const express = require('express');
const mongoose = require('mongoose');

// Load routes 
const auth = require('./routes/auth');
const app = express();

app.get('/' , (req, res) => {
    res.send('Get');
});

// use auth route
app.use('/auth', auth);
//588847944644-5ji47ghqq4vklr0331qf4rspmmmo2hr2.apps.googleusercontent.com
//Ky5oS1-1yHTkyTym17qwM5gc
const port = process.env.PORT || 8081;

app.listen(port, () =>{
    console.log(`Server started on port: ${port }`);
});