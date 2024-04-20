const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, 'Too Short Brand Name'],
        maxLength: [100, 'Too Long Brand Name']
    },
    slug: {
        type: String,
        lowercase: true
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        minlength: [20, 'Too short product description'],
    },
    quantity: {
        type: Number,
        required: [true, 'Product quantity is required'],
    },
    sold: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        trim: true,
        max: [200000, 'Too long product price'],
    },
    priceAfterDiscount: {
        type: Number,
    },
    colors: [String],
    imageCover: {
        type: String,
        required: [true, 'Product Image cover is required'],
    },
    images: [String],
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Product must be belong to category'],
    },
    subcategories: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'SubCategory',
        },
    ],
    brand: {
        type: mongoose.Schema.ObjectId,
        ref: 'Brand',
        required: [true, "Product must belong to brand"]
    },
    ratingsAverage: {
        type: Number,
        min: [1, 'Rating must be above or equal 1.0'],
        max: [5, 'Rating must be below or equal 5.0'],
        // set: (val) => Math.round(val * 10) / 10, // 3.3333 * 10 => 33.333 => 33 => 3.3
    },
    ratingsQuantity: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
    // To enable virtual 

})

const setImage = doc =>
{
    if (doc.image)
    {
        const imageUrl = `../uploads/brands/${doc.image}`
    }
}

// brandSchema.post('init', (doc) =>
// {
//     setImage(doc)
// })
// brandSchema.post('save', (doc) =>
// {
//     setImage(doc)
// })

module.exports = mongoose.model('Product', productSchema)