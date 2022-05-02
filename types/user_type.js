const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } = require("graphql");

const userType = new GraphQLObjectType({
    name : "UserType",
    description : "Represent user",
    fields : () => ({
        id : { type : new GraphQLNonNull(GraphQLInt) },
        first_name :  { type : GraphQLString },
        last_name :  { type : GraphQLString },
        email :  { type : GraphQLString },
        gender :  { type : GraphQLString },
        ip_address :  { type : GraphQLString }
    })
});

module.exports = userType;