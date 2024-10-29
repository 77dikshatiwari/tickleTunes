import mongoose from "mongoose";

const soundSchema = new mongoose.Schema({
    key:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    soundFile: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {timeStamps: true})

const Sound = mongoose.model("Sound", soundSchema);

export default Sound