const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique: true,
        minLength: [3, 'Too Short Brand Name'],
        maxLength: [32, 'Too Long Brand Name']
    },
    slug: {
        type: String,
        lowercase: true
    },
    image: String
}, {
    timestamps: true
})

// const setImage = doc =>
// {
//     if (doc.image)
//     {
//         const imageUrl = `../uploads/brands/${doc.image}`
//     }
// }

// brandSchema.post('init', (doc) =>
// {
//     setImage(doc)
// })
// brandSchema.post('save', (doc) =>
// {
//     setImage(doc)
// })
const brand = mongoose.model('Brand', brandSchema)

module.exports = brand