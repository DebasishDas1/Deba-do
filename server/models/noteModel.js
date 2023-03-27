import mongoose from "mongoose";

const noteScema = mongoose.Schema({
    title: String,
    message: String,
    creater: String,
    tags: [String],
    selectedFile : String,
    importanceCount : {
        type: Number,
        default: 0,
    },
    crtatedAt: {
        type: Date,
        default : new Date,
    }
})

const noteModel = mongoose.model('note', noteScema)

export default noteModel;