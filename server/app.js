const express = require('express');
const schema = require('./schema/schema');
//allows express to understand graphql
const graphqlHTTP = require('express-graphql');
const cors = require('cors');

//mongoose which is an ORM
const mongoose = require('mongoose');

//sample data insertion script for mongo
const insertData = require("./data/insertSample");

//initiate express
const app = express();

//connect to mongo database
const dbName = 'grapqlDb';
const mongoDBConnectionString = 'mongodb://localhost/' + dbName;

mongoose.connect(mongoDBConnectionString, {useNewUrlParser: true});
mongoose.connection.once('open', function () {
    //insert sample data, you can remove for your own app
    insertData();

    console.log('connected to db');
});

//allow cross origin request
app.use(cors());

//setup middleware and graphqlHTTP handle graphql request
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => console.log('Listening to 4000'));