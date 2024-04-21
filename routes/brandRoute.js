const express = require('express')
const brandController = require('../controller/brandController')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')


router.route('/')
    .get(brandController.getBrands)
    .post(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin', 'manger'),

        brandController.createBrand)

router.route('/:id')
    .get(brandController.getBrand)
    .put(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin', 'manger'),
        brandController.updateBrand)
    .delete(authMiddleware.protect,
        authMiddleware.restrictTo('admin', 'manger'),
        brandController.deleteBrand)

module.exports = router