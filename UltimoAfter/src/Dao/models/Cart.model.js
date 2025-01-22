import mongoose, { Schema } from "mongoose";

const cartCollection = 'carts';

const cartSchema = new Schema({
    products: {
        type: [{
            quantity: {
                type: Number,
                default: 0
            },
            product:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products'
            }
        }],
        default: []
    },
});

export const cartModel = mongoose.model(cartCollection, cartSchema)