import { GetAllTodos } from './Queries/Todo';
import { GetAllBooks } from './Queries/Book';
import { GetAllUsers, GetSingleUser } from './Queries/User';
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import mongoose from 'mongoose';
import { TodoModel } from './Models/Todo';

const app = express();

const connection = async () => { 
    try{
        await mongoose.connect("mongodb+srv://shehan:shehan@myfirstcluster.h9a6u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {  });
    }
    catch(ex){
       return "Error : " + ex;
    }
};

console.log("Mongo ; ", connection());


const run = async () => {
    try {
        let todo = await TodoModel.create({
            id : 1,
            userId : 1,
            title : "Test title",
            completed : true
        });
        console.log("Todo", todo);
    }
    catch(ex){
        return "Error : " + ex;
    }
}

run();


const rootQuery = new GraphQLObjectType({
    name : "Query",
    fields : {
        GetAllUsers,
        GetSingleUser,
        GetAllBooks,
        GetAllTodos
    }
});

const schema = new GraphQLSchema({
    description : "This is main schema",
    query : rootQuery
});

app.use('/graphql', graphqlHTTP({
    schema : schema,
    graphiql : true
}));

const port : number = 5000;

app.listen(port, () => { console.log("🚀 Server is running under port 5000 🚀")});