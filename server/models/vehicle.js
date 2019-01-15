const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({//this object will describe data types
    name: String,
    type: String,
    makerId: String
});

//model creates a collection name vehicles
module.exports = mongoose.model('vehicles', vehicleSchema);

