const express = require('express')
const productController = require('../controller/productController')
const router = express.Router();
const { validateCreateProduct, getProductValidator, updateProductValidator } = require('../utils/validators/productValidator')
const authMiddleware = require('../middlewares/authMiddleware')


router.route('/')
    .get(productController.getProducts)
    .post(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin', 'manger'),
        validateCreateProduct,
        productController.createProduct)

router.route('/:id')
    .get(
        getProductValidator,
        productController.getProduct)
    .put(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin', 'manger'),
        updateProductValidator,
        productController.updateProduct)
    .delete(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin'),
        productController.deleteProduct)

module.exports = router