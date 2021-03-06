const express = require('express');
const productsRoutes = require('./productos/productos.routes');
const carritoRoutes = require('./cart/cart.routes');
const authRoutes = require('./auth/auth.routes');
const router = express.Router();

//Routes
router.use('/auth', authRoutes);
router.use('/productos', productsRoutes);
router.use('/carrito', carritoRoutes);

module.exports = router;