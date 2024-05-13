const ProductModel = require('../models/productModel');

module.exports.getAllProducts = async () => {
    try {
        const products = await ProductModel.find();
        return products;
    } catch (err) {
        console.error(err);
        throw new Error('Error fetching products, please try again later.');
    }
};

    module.exports.getProductById= async (id) => {
        try {
            const product = await ProductModel.findById(id);
            return product;
        } catch (err) {
            console.error(err);
            throw new Error('Error fetching product, please try again later.');
        }
    };

    module.exports.addProduct= async (productInfo) => {
        try {
            const newProduct = new ProductModel({
                name: productInfo.name,
                price: productInfo.price,
imageUrl: productInfo.imageUrl,
            });
            await newProduct.save();
        } catch (err) {
            console.error(err);
            throw new Error('Error adding new product, please try again later.');
        }
    
    };
