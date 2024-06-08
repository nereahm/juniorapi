const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bunyan = require('bunyan');
const productosRouter = require('./routes/productosRouter');
const PORT = process.env.PORT || 3000

const app = express();
app.use(cors());
app.use('/productos',productosRouter);


app.get('/', (req, res, next)=>{
    try {
        res.status(200).json("Haciendo GET en /")
    } catch (error) {
        next(error)
    }
})

const logger = bunyan.createLogger({name: 'Actividad asincrona'})

try {
    mongoose.connect("mongodb+srv://nerea:nerea123@cluster0.m2hn5pg.mongodb.net/tienda", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    logger.info("Conectado a MongoDB con éxito");
} catch (error) {
    logger.error("Error en la conexión a MongoDB: " + error);
}
app.use((req,res)=>{
    res.status(404).json({mensaje: 'No se ha encontrado la ruta'})
})

app.use((err,req,next)=>{
    res.status(500).json({mensaje: err})
})

app.listen(PORT, () => {
    console.log('Servidor encendido');
});