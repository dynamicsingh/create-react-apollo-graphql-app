const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} = graphql;

const {MakerType} = require('./../types');
const MakerModel = require('./../../models/maker');

const addMakerMutation = {
    type: MakerType,
    args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        foundedIn: {type: new GraphQLNonNull(GraphQLInt)}
    },
    resolve(parent, args) {
        let maker = new MakerModel({
            name: args.name,
            foundedIn: args.foundedIn
        });
        //mongoose will save using save() will give the save object back
        return maker.save();
    }
};

module.exports = addMakerMutation;