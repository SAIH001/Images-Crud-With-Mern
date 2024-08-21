
const express = require("express");
const dotenv = require('dotenv').config();



const app  = express();


app.get('/',(req,res)=>{
    req.send({meesage : "hello"});
})



app.listen(5000,()=>{
    console.log(`server is running on the port ${process.env.PORT}`)
})