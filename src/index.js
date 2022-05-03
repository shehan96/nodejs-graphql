const { GraphQLObjectType } = require('graphql');
const { GetAllUsers,GetSingleUser } = require('./Queries/UserQuery');
const { GetSingleTodo } = require('./Queries/TodoQuery');

const rootQuery = new GraphQLObjectType({
    name : "rootQuery",
    fields : {
        GetAllUsers,
        GetSingleUser,
        GetSingleTodo
    }
});

module.exports = rootQuery;