const { check, body } = require('express-validator')
const validationMidlleware = require("../../middlewares/validateMiddleware")
const slugify = require('slugify')
// const Category = require('../../models/Category')
// const Brand = require('../../models/Brand')


exports.validateCreateProduct = [
    check('title', "Title doesn't exists")
        .isLength({ min: 3 })
        .withMessage('the title must be more than 3 letters')
        .custom((val, { req }) =>
        {
            req.body.slug = slugify(val)
            return true

        }),
    check('description')
        .notEmpty()
        .withMessage('Product description is requried')
        .isLength({ max: 2000 })
        .withMessage('Too long description max 2000 letters'),
    check('quantity')
        .notEmpty()
        .withMessage('Define how many product do you have')
        .isNumeric()
        .withMessage('Accept numbers only'),
    check('price', "Product price is required")
        .isNumeric().withMessage('Price must be a number'),
    check('priceAfterDiscount')
        .optional()
        .isNumeric()
        .custom((val, { req }) =>
        {
            if (req.body.price <= val)
            {
                throw new Error('priceAfterDiscount must be lower than price');
            }
            return true
        }),
    check('colors').isArray().optional(),
    check('categoryId')
        .notEmpty()
        .withMessage('Product must belong to category')
        .isMongoId()
        .withMessage('Invalid mongo ID')
        .custom((id) =>
        {
            return Category.findById(id).then(cat =>
            {
                if (cat)
                {
                    return Promise.reject(new Error(`Not category with this id: ${id}`))
                }
            })
        }),
    check('brand')
        .notEmpty()
        .withMessage('Product must belong to brand')
        .isMongoId()
        .withMessage('Invalid mongo ID')
        .custom((id) =>
        {
            return Brand.findById(id).then(brand =>
            {
                if (!brand)
                {
                    return Promise.reject(new Error(`Not brand with this id: ${brand}`))
                }
                return true
            })
        })
    ,
    validationMidlleware
]


exports.getProductValidator = [
    check('id')
        .isMongoId()
        .withMessage('Invalid ID formate'),
    validationMidlleware,
];

exports.updateProductValidator = [
    check('id').isMongoId().withMessage('Invalid ID formate'),
    body('title')
        .optional()
        .custom((val, { req }) =>
        {
            req.body.slug = slugify(val);
            return true;
        }),
    validationMidlleware,
];