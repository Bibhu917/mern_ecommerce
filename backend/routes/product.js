const express = require('express');
const categoryModel = require('../models/categoryModel')
const productModel = require('../models/productModel')
const productRouter = express.Router();


productRouter.post('/addProduct', async (req, res) => {
    try {
        const { name, description, image, brand, price, category, countInStock, rating, numReviews, isFeatured } = req.body
        const categoryItem = await categoryModel.findById(category);
        if (!categoryItem) {
            return res.status(400).send({ message: "Invalid Product" });
        }
        const productItem = new productModel({ name, description, image, brand, price, category: categoryItem, countInStock, rating, numReviews, isFeatured });
        await productItem.save();
        return res.status(201).send({ success: true, messgae: "Product added successfully", productItem })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error occured in creating product", error })
    }
})

productRouter.get('/listOfProducts',async(req,res)=>{
    try {
        const listOfProducts = await productModel.find().populate('category',"name image");
        return res.status(200).send({success:true,message:"Product list are",listOfProducts})   
    } catch (error) {
        console.log(error);
        return res.status(500).send({success:false,message:"Server error occured",error})
    }
})

productRouter.get('/listOfcategoryProduct',async(req,res)=>{
    // this one added
    try {
        let filter = {};
        if(req.query.categories){
            filter={category:req.query.categories.split(',')}
        }
        const listOfcategoryProducts = await productModel.find(filter).populate('category');
        return res.status(200).send({success:true,message:"Product list are",listOfcategoryProducts})   
    } catch (error) {
        console.log(error);
        return res.status(500).send({success:false,message:"Server error occured",error})
    }
})

productRouter.get('/singleProduct/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const singleProduct = await productModel.findById(id).populate('category');
        return res.status(200).send({ success: true, messgae: "Single Product is", singleProduct })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: "Error occured in fetching single product", error })
    }
})

productRouter.put('/updateProduct/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const updateProduct = req.body 
        const updateItem = await productModel.findByIdAndUpdate(id,updateProduct,{new:true})
        return res.status(200).send({success:true,message:"Product updated successfully",updateItem})
    } catch (error) {
        console.log(error);
        return res.status(500).send({success:false,message:"Error occured in updating single product",error })
    }
})

productRouter.get('/featuredProduct',async(req,res)=>{
    try {
        const featuredProduct = await productModel.find({isFeatured:true})
        return res.status(200).send({success:true,message:"Featured list are",featuredProduct})
    } catch (error) {
        console.log(error);
        return res.sta(500).send({success:false,messgae:"Error occured in featured list",error})
    }
})

module.exports = productRouter