import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        // reference of other model
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo",
        }
    ] // array of sub TOdos

}, {timestamps: true});

export const todo = mongoose.model("Todo", todoSchema)