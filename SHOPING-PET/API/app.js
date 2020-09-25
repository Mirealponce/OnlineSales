const express=require('express');
const bodyParser=require('body-parser');
const productRoute=require('./routes/productRoute');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());

app.use('/public',express.static(`${__dirname}/storage/images`));

app.use('/product',productRoute);

module.exports=app;