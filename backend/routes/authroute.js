const express = require('express');
const userModel = require('../models/userModel');
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


router.post('/register',async(req,res)=>{
    try {
        const {name , email , password , phone ,address} = req.body
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[a-zA-Z]).{8,}$/;
        if(!name || !email || !password || !phone || !address){
            return res.send({message:"Please Enter all the fields"})
        }
        if(!name){
            return res.send({message:"Name is required"})
        }
        if(!email){
            return res.send({message:"email is required"})
        }
        if(!emailRegex.test(email)){
            return res.send({message:"Please enter a valid email address"})
        }
        if(!password){
            return res.send({message:"password is required"})
        }
        if(!passwordRegex.test(password)){
            return res.send({message:"Please enter a valid password"})
        }
        if(!phone){
            return res.send({message:"Phone Number is required"})
        }
        if(phone.length < 10 || phone.length>10){
            return res.send({message:"Please Enter 10 digit mobile number"})
        }
        if(!address){
            return res.send({message:"address is required"})
        }
        // existig user
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.send({message:"User already exists"})
        }
        // hashed password
        const hashedPassword = await bcrypt.hash(password,10)
        // User Registration
        const user = new userModel({name,email,password:hashedPassword,phone,address})
        await user.save();
        res.status(201).send({success:true,message:"User Register Successfully",user})
    } catch (error) {
        console.log(error);
        return res.status(500).send({success:false,message:"Error in registration",error})
    }
})

router.post('/login',async(req, res,) => {
    try {
    const {email , password } = req.body;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const userEmail = await userModel.findOne({email})
    if(!email || !password){
        return res.status(404).send({message:"Invalid email or password"})
    }
    if(!emailRegex.test(email)){
        return res.send({message:"Please enter a valid email"})
    }
    if(!userEmail){
        return res.send({message:"Invalid Credentials"})
    }
    const isPasswordValid = await bcrypt.compare(password, userEmail.password);
    if(!isPasswordValid){
        return res.status(401).send({ message: 'Authentication failed' });
    }
    const token = jwt.sign({email},process.env.JWT_SECRET_KEY);
    return res.send({success:true,message:"Login successful",token,userEmail})
    } catch (error) {
        console.log(error);
        return res.status(500).send({success:false,message:"Error in login",error})
    }
})
module.exports = router;