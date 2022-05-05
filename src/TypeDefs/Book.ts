import { UserType } from './User';
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';
import USER_DATA from "../TempData/USER_DATA.json";

export const BookType = new GraphQLObjectType({
    name : "BookType",
    description : "This Represent a Book Type",
    fields : () => ({
        id : { type : new GraphQLNonNull(GraphQLInt)},
        isbn : { type : GraphQLString },
        book_name : { type : GraphQLString },
        author_id : { type : GraphQLInt },
        author : { 
            type : UserType,
            resolve : (parent, args) => {
                return USER_DATA.find(user => user.id == parent.author_id);
            }
        }
    })
});