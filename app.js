const express = require('express');
const { GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } = require('graphql');
const expressGraphql = require('express-graphql').graphqlHTTP;
const getAllUsers = require('./queries/get_all_users');
const getSingleUser = require('./queries/get_single_user');

const app = express();

const rootQuery = new GraphQLObjectType({
    name : "rootQuery",
    fields : { 
        getAllUsers,
        getSingleUser
    }
});

const schema = new GraphQLSchema({
    description : "This is main schema",
    query : rootQuery
});

app.use('/graphql', expressGraphql({
    schema : schema,
    graphiql : true
}));

app.use('/graphql-sec', expressGraphql({
    schema : schema,
    graphiql : true
}));

module.exports = app;