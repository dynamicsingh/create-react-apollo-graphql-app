const MakerModel = require('./../models/maker');
const VehicleModel = require('./../models/vehicle');

//sample data
const makerSampleData = require("./maker.json");
const vehicleSampleData = require("./vehicle.json");

function insertData() {
    MakerModel.findById(makerSampleData[0]._id, (err, res)=>{
        if(!res){
            console.log("maker added");
            MakerModel.insertMany(makerSampleData);
        }
    });
    VehicleModel.findById(vehicleSampleData[0]._id, (err, res)=>{
        if(!res){
            console.log("vehicle added");
            VehicleModel.insertMany(makerSampleData);
        }
    });
}

module.exports = insertData;
