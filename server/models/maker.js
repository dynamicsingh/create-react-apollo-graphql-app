const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const makerSchema = new Schema({//this object will describe data types
    name: String,
    foundedIn: Number
});

//model creates a collection name makers
module.exports = mongoose.model('makers', makerSchema);

