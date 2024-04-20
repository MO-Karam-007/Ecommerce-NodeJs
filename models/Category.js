const mongoose = require('mongoose')


const categotySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, "Categoy is required"],
        minlength: [3, 'Too short category name'],
        maxlength: [32, 'Too short category name']
    },
    slug: {
        type: String,
        lowercase: true,
    },
    image: String,
}, {
    timestamps: true
})
const categoryModel = mongoose.model('Category', categotySchema)
module.exports = categoryModel