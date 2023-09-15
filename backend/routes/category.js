const express = require('express');
const categoryModel = require('../models/categoryModel')
const categoryRouter = express.Router();


//add category
categoryRouter.post('/addCategory', async (req, res) => {
    try {
        const { name, image } = req.body
        const category = new categoryModel({ name, image })
        await category.save();
        return res.status(201).send({ success: true, message: "Category Created successfully", category });
    } catch (error) {
        console.log(error);
        return res.send({ success: false, message: "Error on Adding Category" })
    }

})

// category list
categoryRouter.get('/listOfCategory', async (req, res) => {
    try {
        const categoryList = await categoryModel.find();
        return res.status(200).send({ success: true, message: "Category lists", categoryList });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: "An error occurred in categoryList", error });
    }
})

// category list by id
categoryRouter.get('/singleCategory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const singleCategoryList = await categoryModel.findById(id);
        return res.status(200).send({ success: true, message: "Single Category", singleCategoryList })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: "An error occured in single CategoryList", error });
    }
})

//category update by id
categoryRouter.put('/updateCategory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateProduct = req.body
        const updateItem = await categoryModel.findByIdAndUpdate(id,updateProduct,{ new: true })
        if(!updateItem){
            return res.status(400).send({message:"the category can not created"})
        }
        return res.status(200).send({ success: true, message: "Category updated successfully", updateItem });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: "an Errror occured in category update", error });
    }
})

//delete Category by id
categoryRouter.delete('/deleteCategory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await categoryModel.findByIdAndDelete(id);
        return res.status(200).send({ success: true, message: "Product deleted successfully", deleteProduct })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: "Server error", error })
    }
})

module.exports = categoryRouter