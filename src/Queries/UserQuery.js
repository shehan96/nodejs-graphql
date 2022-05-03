const UserType = require('../TypeDefs/UserType');
const { GetUsers, GetUser } = require('../Resolvers/UserResolver');

const { GraphQLList, GraphQLInt } = require("graphql");

const GetAllUsers = {
    type : new GraphQLList(UserType),
    description : "Get All Users",
    resolve : (parent, args) => {
        return GetUsers(parent, args);
    }
}

const GetSingleUser = {
    type : UserType,
    args : {
        id : { type : GraphQLInt }
    },
    resolve : (parent, args) => {
        return GetUser(parent, args);
    }
}

module.exports = { GetAllUsers,GetSingleUser };