const mongoose = require('mongoose');


async function conexion(user, pass,dbName) {
    const url = `mongodb+srv://${user}:${pass}@cluster0.hk74j.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    await  mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
}
mongoose.connection.on('open',()=>console.log('conexion exitosa'));


module.exports=conexion

