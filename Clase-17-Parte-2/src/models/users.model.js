import { model, Schema } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

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

userSchema.plugin(mongoosePaginate)

export const UserModel = model(userCollection, userSchema)
