const express=require('express');
const api=express.Router();
const upload=require('../libs/storage')

const {getProducts,createProduct}=require('../controllers/productController');


api.get('/product',getProducts);

api.post('/create',upload.single('image'),createProduct);

module.exports=api;

