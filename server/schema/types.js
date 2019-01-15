const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = graphql;

const VehicleModel = require('./../models/vehicle');
const MakerModel = require('./../models/maker');

const VehicleType = new GraphQLObjectType({
    name: 'Vehicle', //name of the object type
    fields: () => ({ //use function as will have multiple types
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        type: {type: GraphQLString},
        maker: {
            type: MakerType,
            resolve(parent, args) {//we define resolve here as its child to vehicle type
                //using mongoose model to interact with db
                return MakerModel.findById(parent.makerId);
            }
        }
    })
});

const MakerType = new GraphQLObjectType({
    name: 'Maker', //name of the object type
    fields: () => ({ //use function as will have multiple types and this let us run the function when everything is defined
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        foundedIn: {type: GraphQLInt},
        vehicles: {
            type: new GraphQLList(VehicleType),
            resolve(parent, args) {
                //using mongoose model to interact with db
                return VehicleModel.find({makerId: parent.id});
            }
        }
    })
});

module.exports = {VehicleType, MakerType};