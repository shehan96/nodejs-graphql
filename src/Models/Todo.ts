import mongoose from "mongoose";

export const TodoModel = mongoose.model("Todo", new mongoose.Schema({
    id: Number,
    userId: Number,
    title: { 
        type : String,
        default : "Hello",
        required : true
    },
    completed: Boolean
}));