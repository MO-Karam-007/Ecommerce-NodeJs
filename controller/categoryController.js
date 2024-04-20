const Category = require('../models/Category')
const factory = require('./handleFactory')







// @desc    Get specific Category
// @route   GET /api/v1/Categorys/:id
// @access  Private
exports.getCategorys = factory.getAll(Category)


// @desc    Get specific Category
// @route   GET /api/v1/Categorys/:id
// @access  Private
exports.getCategory = factory.getOne(Category)


// @desc    Create specific Category
// @route   CREATE /api/v1/Categorys
// @access  Private
exports.createCategory = factory.createOne(Category)

// @desc    Update specific Category
// @route   PUT /api/v1/Categorys/:id
// @access  Private
exports.updateCategory = factory.updateOne(Category)

// @desc    Delete specific Category
// @route   DELETE /api/v1/Categorys/:id
// @access  Private
exports.deleteCategory = factory.deleteOne(Category)



