const { GraphQLInt } = require("graphql");
const userType = require("../types/user_type");
const userData = require("../MOCK_DATA.json");

const getSingleUser = {
    type : userType,
    description : "Single User",
    args : {
        id : { type : GraphQLInt }
    },
    resolve : (parent, args) => {
        let data = userData.find(user => user.id === args.id);
        return data;
    }
};

module.exports = getSingleUser;