import { InsertTodo } from './Mutations/Todo';
import { GetAllTodos } from './Queries/Todo';
import { GetAllBooks } from './Queries/Book';
import { GetAllUsers, GetSingleUser } from './Queries/User';
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import mongoose from 'mongoose';

const app = express();

const connection = async () => { 
    try{
        await mongoose.connect("mongodb+srv://shehan:shehan@myfirstcluster.h9a6u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {  });
    }
    catch(ex){
       return "Mongo DB Connection Error : " + ex;
    }
};

connection();

const rootQuery = new GraphQLObjectType({
    name : "Query",
    fields : {
        GetAllUsers,
        GetSingleUser,
        GetAllBooks,
        GetAllTodos
    }
});

const rootMutation = new GraphQLObjectType({
    name : "Mutation",
    fields : {
        InsertTodo
    }
});

const schema = new GraphQLSchema({
    description : "This is main schema",
    query : rootQuery,
    mutation : rootMutation
});

app.use('/graphql', graphqlHTTP({
    schema : schema,
    graphiql : true
}));

const port : number = 5000;

app.listen(port, () => { console.log("🚀 Server is running under port 5000 🚀")});