const graphql = require('graphql');
const {
    GraphQLID,
} = graphql;

const {MakerType} = require('./../types');
const MakerModel = require('./../../models/maker');

const makerQuery = {
    type: MakerType,
    args: {id: {type: GraphQLID}},
    resolve(parent, args) {
        //args.id can be used
        //using mongoose model to interact with db
        return MakerModel.findById(args.id);
    }
};

module.exports = makerQuery;