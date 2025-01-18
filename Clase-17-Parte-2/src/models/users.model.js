import { model, Schema } from "mongoose";

const userCollection = 'Users'
const userSchema = new Schema({
    first_name: {
        type: String,
        index: true
    },
    last_name: String,
    email: {
        type: String,
        unique: true,
    },
    gender: String
})

export const UserModel = model(userCollection, userSchema)
