import { GetAllBooks } from './Queries/Book';
import { GetAllUsers, GetSingleUser } from './Queries/User';
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLObjectType, GraphQLSchema } from "graphql";

const app = express();

const rootQuery = new GraphQLObjectType({
    name : "Query",
    fields : {
        GetAllUsers,
        GetSingleUser,
        GetAllBooks
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