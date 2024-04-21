const express = require('express')
const subCategoryController = require('../controller/subCategoryController')
const router = express.Router({ mergeParams: true });
const authMiddleware = require('../middlewares/authMiddleware');




router.route('/')
    .get(subCategoryController.getsubcategorys)
    .post(
        // authMiddleware.protect,
        // authMiddleware.restrictTo('admin', 'manger'),
        subCategoryController.createSubcategory

    )



router.route('/:id')
    .get(
        subCategoryController.getSubcategory
    )
    .put(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin', 'manger'),
        subCategoryController.updateSubcategory

    )
    .delete(
        authMiddleware.protect,
        authMiddleware.restrictTo('admin'),
        subCategoryController.deleteSubcategory
    )


module.exports = router