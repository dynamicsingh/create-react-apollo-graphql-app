const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLSchema,
} = graphql;

//queries
const vehicle = require('./queries/vehicleQuery');
const maker = require('./queries/makerQuery');
const vehicles = require('./queries/vehiclesQuery');
const makers = require('./queries/makersQuery');

//mutations
const addMaker = require('./mutations/addMakerMutation');
const addVehicle = require('./mutations/addVehicleMutation');

//schema defines the object types and relation b/w object types
//so the graph will have vehicles and makers as object types

const RootQuery = new GraphQLObjectType({ //how we can jump into graph
    name: 'RootQueryType',
    fields: {
        vehicle,
        maker,
        vehicles,
        makers
    }
});


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addMaker,
        addVehicle
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});