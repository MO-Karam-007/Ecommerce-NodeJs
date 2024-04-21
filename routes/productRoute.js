const express = require('express')
const productController = require('../controller/productController')
const router = express.Router();
const { validateCreateProduct, getProductValidator, updateProductValidator } = require('../utils/validators/productValidator')
const authMiddleware = require('../middlewares/authMiddleware')
const multer = require('multer')
const uploadImage = require('../utils/uploadImages')


// \uploads\products


// const uploadFIle = (req, res, nxt) =>
// {
//     console.log(`File : `, req.file);
//     console.log(`body : `, req.body);
//     nxt()
// }


router.route('/')
    .get(productController.getProducts)
    .post(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin', 'manger'),
        validateCreateProduct,
        // upload.single('photo'),
        // uploadFIle,
        productController.createProduct)

router.route('/:id')
    .get(
        getProductValidator,
        productController.getProduct)
    .put(
        // authMiddleware.protect,
        // authMiddleware.restrictTo('admin', 'manger'),
        // updateProductValidator,
        uploadImage('imageCover', 'Products'),
        productController.updateProduct)
    .delete(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin'),
        productController.deleteProduct)

module.exports = router