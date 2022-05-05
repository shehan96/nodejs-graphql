import { GraphQLInt,GraphQLObjectType,GraphQLNonNull,GraphQLString } from 'graphql';

export const UsersType = new GraphQLObjectType({
    name : "UsersType",
    description : "This represent users type",
    fields : () => ({
        id : { type : new GraphQLNonNull(GraphQLInt)},
        name : { type : GraphQLString },
        username : { type : GraphQLString },
        email : { type : GraphQLString }
    })
});