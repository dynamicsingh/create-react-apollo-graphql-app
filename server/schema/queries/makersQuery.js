const graphql = require('graphql');
const {
    GraphQLList,
} = graphql;

const {VehicleType, MakerType} = require('./../types');
const MakerModel = require('./../../models/maker');

const makersQuery = {
    type: new GraphQLList(MakerType),
    resolve(parent, args) {
        //using mongoose model to interact with db
        return MakerModel.find({});
    }
};

module.exports = makersQuery;