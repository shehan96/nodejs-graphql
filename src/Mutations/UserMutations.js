const { GraphQLString } = require('graphql');
const UserType = require('../TypeDefs/UserType');

const CreateUser = {
    type : UserType,
    description: UserType.description,
    args : {
        first_name : { type : GraphQLString }
    }
};

module.exports = { CreateUser }