const Subcategory = require('../models/Subcategory')
const factory = require('./handleFactory')







// @desc    Get specific Subcategory
// @route   GET /api/v1/subcategories
// @access  Private
exports.getsubcategorys = factory.getAll(Subcategory)


// @desc    Get specific Subcategory
// @route   GET /api/v1/subcategories/:id
// @access  Private
exports.getSubcategory = factory.getOne(Subcategory)


// @desc    Create specific Subcategory
// @route   CREATE /api/v1/subcategories
// @access  Private
exports.createSubcategory = factory.createOne(Subcategory)

// @desc    Update specific Subcategory
// @route   PUT /api/v1/subcategories/:id
// @access  Private
exports.updateSubcategory = factory.updateOne(Subcategory)

// @desc    Delete specific Subcategory
// @route   DELETE /api/v1/subcategories/:id
// @access  Private
exports.deleteSubcategory = factory.deleteOne(Subcategory)



