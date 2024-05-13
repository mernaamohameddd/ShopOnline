const ProductService = require('../services/productService');

module.exports.getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching products, please try again later.' });
    }
};

    module.exports.getProductById= async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const product = await ProductService.getProductById(id);
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error fetching product, please try again later.' });
        }
    };

    module.exports.addProduct= async (req, res) => {
        try {
            const product = req.body;
            await ProductService.addProduct(product);
            res.status(201).json({ message: 'Product added successfully' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error adding new product, please try again later.' });
        }
    };



