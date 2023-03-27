import mongoose from "mongoose";

const userScema = mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName : {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email : {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password : {
        type: String,
        required: true,
        max: 5,
    },
    tag : {
        type: Array,
        default : [],
    },
    location : String,
    contact : Number,
},
{ timestamps: true })

const userModel = mongoose.model('user', userScema)

export default userModel;