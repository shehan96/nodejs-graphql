import { TodoType } from './../TypeDefs/Todo';
import { GraphQLList } from 'graphql';
import { GetTodos } from '../Resolvers/Todo';

export const GetAllTodos = {
    type : new GraphQLList(TodoType),
    description : "Get All Todos",
    resolve : async (parent, args) => {
        let result = await GetTodos(parent, args);
        return result;
    }
};