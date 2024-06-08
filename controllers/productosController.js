const Productos = require('../models/Productos');

const productosController = {
    getProductos(req,res){
        Productos.find().then(producto =>{
            res.json(producto).status(200);
        })
    },

}


module.exports = productosController;