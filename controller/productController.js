const Product = require('../models/Product')
const factory = require('./handleFactory')





// @desc    Get specific Products
// @route   GEt /api/v1/Products/:id
// @access  Private
exports.getProducts = factory.getAll(Product)



// @desc    Get specific Product
// @route   GEt /api/v1/Products/:id
// @access  Private
exports.getProduct = factory.getOne(Product, "categoryId", "brand")




// @desc    Create specific Product
// @route   CREATE /api/v1/Products
// @access  Private
exports.createProduct = factory.createOne(Product)

// @desc    Update specific Product
// @route   PUT /api/v1/Products/:id
// @access  Private
exports.updateProduct = factory.updateOne(Product)

// @desc    Delete specific Product
// @route   DELETE /api/v1/Products/:id
// @access  Private
exports.deleteProduct = factory.deleteOne(Product)


