const Product=require('../Models/Product');

const productController={};

productController.getProducts= async(req,res)=>{
    try{
        const products= await Product.find();
        res.send(products);
    }catch(error){
        res.send({respuesta:"Error al listar productos."});
    }
 
}

//Método de creación de producto
productController.createProduct=async (req,res)=>{
    try{
    //extracción de propiedades que se reciben en los parámetros req.body
    const {name,size,price,img,description}=req.body;

    //instancia al modelo para ingresar los valores obtenidos a la bd
    const newRegister= new Product({
        name,
        size,
        price,
        img,
        description
    });

    //guarda los datos transpasados a las propiedades del modelo
    await newRegister.save();

    res.json({respuesta:'Producto creado.'});

    }catch(error){
        res.json({respuesta:"Error al crear producto."});
    }
    

}

module.exports=productController;

