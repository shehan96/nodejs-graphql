import { GraphQLBoolean, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLObjectType } from 'graphql';

export const TodoType = new GraphQLObjectType({
    name : "TodoType",
    description : "This represent todo type",
    fields : () => ({
        id : { type : new GraphQLNonNull(GraphQLInt) },
        userId : { type : new GraphQLNonNull(GraphQLInt) },
        title : { type : GraphQLString },
        completed : { type : GraphQLBoolean }
    })
});