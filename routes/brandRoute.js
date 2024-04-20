const express = require('express')
const brandController = require('../controller/brandController')
const router = express.Router();



router.route('/')
    .get(brandController.getBrands)
    .post(brandController.createBrand)

router.route('/:id')
    .get(brandController.getBrand)
    .put(brandController.updateBrand)
    .delete(brandController.deleteBrand)

module.exports = router