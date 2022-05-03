const { GraphQLInt } = require('graphql');
const TodoType = require('../TypeDefs/TodoType');
const { GetTodo } = require('../Resolvers/TodoResolver');

const GetSingleTodo = {
    type : TodoType,
    description : "Single Todo",
    args : {
        id : { type : GraphQLInt }
    },
    resolve : (parent, args) => {
        let data = await GetTodo(parent, args);
        console.log(data);
        return data;
    }
}

module.exports = { GetSingleTodo };