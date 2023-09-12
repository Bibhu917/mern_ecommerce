const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dbUrl = () =>{
    try {
        const data = mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database is connecte")
    } catch (error) {
        console.log(error);
    }
}
module.exports = dbUrl;