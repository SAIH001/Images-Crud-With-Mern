const express = require('express')
const app = express();
 require('dotenv').config();

 const connectDb = require("./config/DB")



 app.use('/api/imgcrud',require('./routes/imgRoutes'))







app.listen(process.env.PORT,()=>{
    connectDb();
    console.log(`server is running on the port ${process.env.PORT}`)
})