const express = require('express');
const expressGraphql = require('express-graphql').graphqlHTTP;
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const app = express();

const query = new GraphQLObjectType({
    name : "HelloQuery",
    fields : () => ({
        message : {
            type : GraphQLString,
            resolve : () => 'Hello World'
        }
    })
});

const schema = new GraphQLSchema({
    query : query
});

app.use('/graphql', expressGraphql({
    schema : schema,
    graphiql : true
}));

module.exports = app;