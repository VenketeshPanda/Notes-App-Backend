import dotenv from "dotenv"
import mongoose from "mongoose";
import connectDB from "./db/dbConnect.js";
import {app} from "./app.js"

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8787, ()=>{
        console.log(`Process started at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed!",err);
})

