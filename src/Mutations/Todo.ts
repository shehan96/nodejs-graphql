import { GraphQLString, GraphQLBoolean, GraphQLInt } from 'graphql';
import { InsertSingleTodo } from './../Resolvers/Todo';
import { TodoType } from './../TypeDefs/Todo';

export const InsertTodo = {
    type : TodoType,
    args : {
        id : { type : GraphQLInt },
        userId : { type : GraphQLInt },
        title : { type : GraphQLString },
        completed : { type : GraphQLBoolean }
    },
    description : "Insert Single Todo",
    resolve : async (parent, args) => {
        return await InsertSingleTodo(parent, args);
    }
}