const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts); 
router.get('/:id', productController.getProductById); 
router.post('/add', productController.addProduct); 

module.exports = router;
