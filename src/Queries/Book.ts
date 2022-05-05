import { GetBooks } from './../Resolvers/Book';
import { BookType } from './../TypeDefs/Book';
import { GraphQLList } from 'graphql';

export const GetAllBooks = {
    type : new GraphQLList(BookType),
    description : "Get All Books",
    resolve : (parent, args) => {
        return GetBooks(parent, args);
    }
}