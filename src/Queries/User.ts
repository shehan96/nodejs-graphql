import { GetUsers, GetUser } from './../Resolvers/User';
import { GraphQLList, GraphQLInt } from "graphql";
import { UserType } from "../TypeDefs/User";

export const GetAllUsers = {
    type : new GraphQLList(UserType),
    description : "Get All Users",
    resolve : (parent, args) => {
        return GetUsers(parent, args);
    }
};

export const GetSingleUser = {
    type : UserType,
    description : "Get Single User",
    args : {
        id : { type : GraphQLInt }
    },
    resolve : (parent, args) => {
        return GetUser(parent, args);
    }
}