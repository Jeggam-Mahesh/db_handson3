const express=require('express')
const connectdb=require('./db/connection')
const router=require('./route/router')
require('dotenv').config();
const app=express();
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("home");
})
app.use("/",router)
const startdb= async(req,res)=>{
    try{ 
        await connectdb(process.env.MONGO_URL);
        console.log("db connected")
        app.listen(5000,()=>{
            console.log("server 5000")
        })
    }
    catch(e){
        console.log("error",e);
    }
   
}
startdb()
