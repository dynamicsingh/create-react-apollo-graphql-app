const graphql = require('graphql');
const {
    GraphQLList,
} = graphql;

const {VehicleType} = require('./../types');
const VehicleModel = require('./../../models/vehicle');

const vehiclesQuery = {
    type: new GraphQLList(VehicleType),
    resolve(parent, args) {
        //using mongoose model to interact with db
        return VehicleModel.find({});
    }
};

module.exports = vehiclesQuery;