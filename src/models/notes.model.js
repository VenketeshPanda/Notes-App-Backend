import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    content:{
        type:String,
        required:true,
    }
},{timestamps:true})

export const Note = mongoose.model('Note',noteSchema)