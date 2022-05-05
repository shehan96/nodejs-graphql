import USER_DATA from "../TempData/USER_DATA.json";

export const GetUsers = (parent, args) => {
    return USER_DATA;
}

export const GetUser = (parent, args) => {
    let user = USER_DATA.find(user => user.id === args.id);
    return user;
}