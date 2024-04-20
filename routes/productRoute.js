const express = require('express')
const productController = require('../controller/productController')
const router = express.Router();
const { validateCreateProduct, getProductValidator, updateProductValidator } = require('../utils/validators/productValidator')


router.route('/')
    .get(productController.getProducts)
    .post(

        validateCreateProduct,

        productController.createProduct)

router.route('/:id')
    .get(
        getProductValidator,
        productController.getProduct)
    .put(
        updateProductValidator,
        productController.updateProduct)
    .delete(productController.deleteProduct)

module.exports = router