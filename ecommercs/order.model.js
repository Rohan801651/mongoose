import mongoose from "mongoose";
import { Product } from "./product.model";

const orderItemSchema = new mongoose.Schema({ // we dont have to export it bcz we just have to use it in orderItems
    productId: { // mongoDB automatically gives a unique ID which we do not need to set
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
    },
}); // time stamps does not make sense here 

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems: {
        type: [orderItemSchema],
    },
    address: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELED", "DELIVERED"],
        default: "PENDING",
    },
},{timestamps: true});

export const Order = mongoose.model("Order", orderSchema)