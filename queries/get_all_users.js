const { GraphQLList } = require("graphql");
const userType = require("../types/user_type");
const userData = require('../MOCK_DATA.json');

const getAllUsers = {
    type : new GraphQLList(userType),
    resolve : (parent, id) => {
        return userData
    }
};

module.exports = getAllUsers;