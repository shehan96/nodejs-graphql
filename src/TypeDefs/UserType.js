const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } = require("graphql");

const UserType = new GraphQLObjectType({
    name : "UserType",
    description : "User Type",
    fields : () => ({
        id : { type : new GraphQLNonNull(GraphQLInt), description : "User ID" },
        first_name : { type : GraphQLString, description : "User First Name" },
        last_name : { type : GraphQLString, description : "User Last Name" },
        email : { type : GraphQLString, description : "User Email" },
        gender : { type : GraphQLString, description : "User Gender" },
        ip_address : { type : GraphQLString, description : "User IP Address" }
    })
});

module.exports = UserType;