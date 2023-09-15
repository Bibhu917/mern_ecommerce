const express = require('express');
const connection = require('./config/db')
const authRoute = require('./routes/authroute')
const categoryRoute = require('./routes/category')
const productRouter = require('./routes/product')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express();

dotenv.config();
// middleware
app.use(express.json())
app.use(cors())
//routes
app.use('/api/auth',authRoute)
app.use('/api/category',categoryRoute)
app.use('/api/product',productRouter)

app.use('/',async(req,res)=>{
    return res.send({message:"Hello World from Indexf"})
})

app.listen(process.env.PORT,async()=>{
    await connection();
   console.log(`Listen on Port ${process.env.PORT}`)
})