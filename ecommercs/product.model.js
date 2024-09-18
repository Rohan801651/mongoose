import mongoose, { model } from "mongoose";

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    name: {
        required: true,
        type: String,
    },
    productImage: {
        type: String, // upload imgs on cloudnary and it will send a URL to display it on public domain  
    },
    price: {
        type: Number,
        default: 0,
    },
    stock: {
       default: 0,
       type: Number, 
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category", // compulsory to write
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
},{timestamps: true});

export const Product = model("Product", productSchema);  // Product this should be same 
