const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/' , (req, res) => {
    res.send('Get');
});

const port = process.env.PORT || 8081;

app.listen(port, () =>{
    console.log(`Server started on port: ${port }`);
});