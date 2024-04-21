const mongoose = require('mongoose')


const subcategotySchema = new mongoose.Schema({
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
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "Subcategory must belong to category"]

    },
}, {
    timestamps: true
})
const subcategory = mongoose.model('Subcategory', subcategotySchema)
module.exports = subcategory