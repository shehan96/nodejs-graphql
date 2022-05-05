import axios from "axios";

export const GetTodos = async (parent, args) => {
    let result = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return result.data;
};