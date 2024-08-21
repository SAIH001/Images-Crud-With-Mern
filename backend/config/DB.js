const mongoose = require("mongoose");

async function connectDb(){
    const conn = await mongoose.connect(process.env.MONGO_DB_URL)


    console.log(`atlas connected with ${conn.connection.host} `)


}

module.exports = connectDb;