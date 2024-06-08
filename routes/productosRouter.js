const express = require("express");
const productosController = require("../controllers/productosController")

const router = express.Router();

router.get("/", productosController.getProductos);


module.exports = router;