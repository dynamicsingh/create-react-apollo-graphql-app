const graphql = require('graphql');
const {
    GraphQLID,
} = graphql;

const {VehicleType} = require('./../types');
const VehicleModel = require('./../../models/vehicle');

const vehicleQuery = {
    type: VehicleType,
    args: {id: {type: GraphQLID}}, //GraphQLID lets pass type id i.e string or number type this id is passed into the query,
    resolve(parent, args) {//this is where we get data from db
        //args.id we get string here, even we have passed number from query(graphiql), can be used to query db to grab that data
        //using mongoose model to interact with db
        return VehicleModel.findById(args.id);

    }
};

module.exports = vehicleQuery;