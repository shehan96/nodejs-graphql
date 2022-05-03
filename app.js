const express = require('express');
const { GraphQLSchema } = require('graphql');
const expressGraphql = require('express-graphql').graphqlHTTP;
const rootQuery = require('./src/index');

const app = express();

const schema = new GraphQLSchema({
    description : "This is main schema",
    query : rootQuery
});

app.use('/graphql', expressGraphql({
    schema : schema,
    graphiql : true
}));


module.exports = app;