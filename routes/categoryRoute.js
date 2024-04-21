const express = require('express')
const categoryController = require('../controller/categoryController')
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')



router.route('/')
    .get(categoryController.getCategorys)
    .post(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin', 'manger'),
        categoryController.createCategory)

router.route('/:id')
    .get(categoryController.getCategory)
    .put(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin', 'manger'),
        categoryController.updateCategory)
    .delete(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin', 'manger'),
        categoryController.deleteCategory)

module.exports = router