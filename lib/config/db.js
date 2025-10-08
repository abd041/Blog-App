import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    try{
    await mongoose.connect('mongodb+srv://abdullahrauf440_db_user:f4lj5REEHbStM5ym@cluster0.2cp6mmp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/blog-app')
    console.log("Db Connected")
    }
    catch(error){
        console.error("Mongo Db connection failed" , error)
    }

}