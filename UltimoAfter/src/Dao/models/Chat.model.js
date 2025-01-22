import mongoose, { Schema } from "mongoose";

const chatCollection = 'messages';

const chatSchema = new Schema({
    user: String,
    message: String
})

export const chatModel = mongoose.model(chatCollection, chatSchema)