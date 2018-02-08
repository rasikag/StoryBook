const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema 
const UserSchema = new Schema({
    googleID:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    image: {
        type: String
    }
});