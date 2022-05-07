import { TodoModel } from './../Models/Todo';
import axios from "axios";

export const GetTodos = async (parent, args) => {
    let result = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return result.data;
};

export const InsertSingleTodo = async (parent, args) => {
    
    const { id, userId, title, completed } = args;

    let todo = await TodoModel.create({
        id : id,
        userId : userId,
        title : title,
        completed : completed
    });

    return todo;

}