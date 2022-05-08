import mongoose from "mongoose";

export const TodoModel = mongoose.model("Todo", new mongoose.Schema({
    id : Number,
    userId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        default: "Hello",
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
}));