const multer = require('multer')
const ApiError = require('./apiError')



const updloadImage = (imageName, model) =>
{
    const storage = multer.diskStorage({
        destination: (req, file, cb) =>
        {
            cb(null, `uploads/${model}`)
        }
        , filename: (req, file, cb) =>
        {
            const ext = file.mimetype.split('/')[1]
            cb(null, `${model}-${Math.random()}.${ext}`)
        }

    })
    const filters = (req, file, cb) =>
    {
        if (file.mimetype.startsWith('image'))
        {
            cb(null, true)
        } else
        {
            cb(new ApiError('Not an image, Please upload images only', 400), false)
        }

    }

    const upload = multer({
        storage: storage,
        fileFilter: filters
    })
    return upload.single(imageName)

}

module.exports = updloadImage 