const mongoose=require('mongoose');
const {configApp}=require('../config');



const ProductSchema= mongoose.Schema(
    {
    name:String, 
    size:String,
    price:Number,
    img:String,
    description:String,
    

}, {
    timestamps:true
})

ProductSchema.methods.setImg= function setImg(nameImg){
    const {port,host}=configApp;
    this.img=`${host}:${port}/public/${nameImg}`
}






module.exports= mongoose.model('Product',ProductSchema)