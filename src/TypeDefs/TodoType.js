const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require("graphql");

const TodoType = new GraphQLObjectType({
    name : "TodoType",
    description : "Todo Type",
    fields : () => ({
        id : { type : GraphQLInt, description : "ID" },
        userId : { type : GraphQLInt, description : "User ID" },
        title : { type : GraphQLString, description : "Title" },
        completed : { type : GraphQLBoolean, description : "Completed Status" }
    })
});

module.exports = TodoType;