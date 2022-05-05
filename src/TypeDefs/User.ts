import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
    name : "UserType",
    description : "This Represent a User Type",
    fields : () => ({
        id : { type : new GraphQLNonNull(GraphQLInt) },
        first_name : { type : GraphQLString },
        last_name : { type : GraphQLString },
        email : { type : GraphQLString },
        gender : { type : GraphQLString },
        ip_address : { type : GraphQLString }
    })
});