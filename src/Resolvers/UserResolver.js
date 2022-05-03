const UserData = require('../../MOCK_DATA.json');

const GetUsers = (parent, args) => {
    return UserData;
}

const GetUser = (parent, args) => {
    let user = UserData.find(user => user.id == args.id);
    return user;
}

module.exports = { GetUsers,GetUser };