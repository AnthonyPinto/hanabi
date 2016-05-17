'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema({
    username     : String,
    email      : String
});

mongoose.model('User', UserSchema);