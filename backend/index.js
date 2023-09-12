const express = require('express');
const dbUrl = require('./config/db')
const authRoute = require('./routes/authroute')
const categoryRoute = require('./routes/category')
const productRouter = require('./routes/product')
const dotenv = require('dotenv')
const app = express();


dotenv.config();
// middleware
app.use(express.json())

//routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/product',productRouter)

app.use('/',async(req,res)=>{
    return res.send({message:"Hello World from Index"})
})

app.listen(process.env.PORT,async()=>{
    await dbUrl();
   console.log("Listen on Port 8000")
})