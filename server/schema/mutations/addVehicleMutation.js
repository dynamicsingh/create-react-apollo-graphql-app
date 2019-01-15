const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} = graphql;

const {VehicleType} = require('./../types');
const VehicleModel = require('./../../models/vehicle');

const addVehicleMutation =  {
    type: VehicleType,
    args: {
        name: {type: new GraphQLNonNull(GraphQLString)},//using GraphQLNonNull user can't pass empty or null values
        type: {type: new GraphQLNonNull(GraphQLString)},//using GraphQLNonNull user can't pass empty or null values
        makerId: {type: new GraphQLNonNull(GraphQLID)}////using GraphQLNonNull user can't pass empty or null values
    },
    resolve(parent, args) {
        let vehicle = new VehicleModel({//new vehicle of model type vehicle
            name: args.name,
            type: args.type,
            makerId: args.makerId
        });
        //moongose will save using save() will give the save object back
        return vehicle.save();
    }
};

module.exports = addVehicleMutation;