const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({

    nombre: {type: String},
    descripcion: {type: String},
    persona: {type:String},

})

module.exports = mongoose.model('Producto',productoSchema);