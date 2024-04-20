const express = require('express');
const couponController = require('../controller/couponController')

const router = express.Router()


router.route('/')
    // .get()
    .post(couponController.createCoupon);



router.route('/:id')
    // .get()
    .put(couponController.updateCoupon)
    .delete(couponController.deleteCoupon);


module.exports = router