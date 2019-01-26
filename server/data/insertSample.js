const MakerModel = require('./../models/maker');
const VehicleModel = require('./../models/vehicle');

//sample data
const makerSampleData = require("./maker.json");
const vehicleSampleData = require("./vehicle.json");

function insertData() {
    MakerModel.findById(makerSampleData[0]._id, (err, res)=>{
        if(!res){
            console.log("maker added to db");
            MakerModel.insertMany(makerSampleData,  {
                "ordered": false
            });
        }
    });
    VehicleModel.findById(vehicleSampleData[0]._id, (err, res)=>{
        if(!res){
            console.log("vehicles added to db");
            VehicleModel.insertMany(vehicleSampleData, {
                "ordered": false
            });
        }
    });
}

module.exports = insertData;
