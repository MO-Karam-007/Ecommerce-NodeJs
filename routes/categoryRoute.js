const express = require('express')
const categoryController = require('../controller/categoryController')
const router = express.Router();



router.route('/')
    .get(categoryController.getCategorys)
    .post(categoryController.createCategory)

router.route('/:id')
    .get(categoryController.getCategory)
    .put(categoryController.updateCategory)
    .delete(categoryController.deleteCategory)

module.exports = router