const express = require('express');
const categoryModel = require('../models/categoryModel')
const productModel = require('../models/productModel')
const productRouter = express.Router();


productRouter.post('/addProduct', async (req, res) => {
    try {
        const { name, description, richDescription, image, brand, price, category, countInStock, rating, numReviews, isFeatured } = req.body
        const categoryItem = await categoryModel.findById(category);
        if (!categoryItem) {
            return res.status(400).send({ message: "Invalid Product" });
        }
        const productItem = new productModel({ name, description, richDescription, image, brand, price, category: categoryItem, countInStock, rating, numReviews, isFeatured });
        await productItem.save();
        return res.status(201).send({ success: true, messgae: "Product added successfully", productItem })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Error occured in creating product", error })
    }
})

productRouter.get('/singleProduct/:id', async (req, res) => {
    try {
        const { id } = req.params
        const singleProduct = await productModel.findById(id).populate('category');
        return res.status(200).send({ success: true, messgae: "Single Product is", singleProduct })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: "Error occured in fetching single product", error })
    }
})
module.exports = productRouter