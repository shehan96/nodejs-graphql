import BOOK_DATA from "../TempData/BOOK_DATA.json";

export const GetBooks = (parent, args) => {
    return BOOK_DATA;
}