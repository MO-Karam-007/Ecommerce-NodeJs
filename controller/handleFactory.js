const asyncHandler = require('express-async-handler')
const ApiError = require('../utils/apiError')
const ApiFeatures = require('../utils/ApiFeatures')


exports.deleteOne = (Model) =>
    asyncHandler(async (req, res, nxt) =>
    {
        const { id } = req.params
        const doc = await Model.findByIdAndDelete(id)

        if (!doc) return nxt(new ApiError(`No docment for this id ${id}`, 404))
        // If exists
        doc.remove();
        res.status(204).send()
    })




exports.updateOne = (Model) =>
    asyncHandler(
        async (req, res, nxt) =>
        {
            const { id } = req.params
            const doc = await Model.findByIdAndUpdate(id, req.body, { new: true })

            if (!doc) return nxt(new ApiError(`No docment for this id ${id}`, 404))
            // If exists
            doc.save()
            res.status(200).json({ data: doc })
        }
    )



exports.createOne = (Model) =>
    asyncHandler(
        async (req, res, nxt) =>
        {
            let doc = await Model.create(req.body)

            res.status(201).json({ data: doc })
        }
    )

exports.getOne = (Model, populationOption, option2) =>
    asyncHandler(
        async (req, res, nxt) =>
        {
            const { id } = req.params

            const doc = populationOption ? await Model.findById(id).populate(populationOption).populate(option2) : await Model.findById(id)

            // If not exists
            if (!doc) return nxt(new ApiError(`No docment for this id ${id}`, 404))

            res.status(200).json({ data: doc })
        }
    )



exports.getAll = Model =>
    asyncHandler(async (req, res) =>
    {
        let query = req.query

        query = new ApiFeatures(query).filter()
        // 
        console.log(`query findall`, query);

        // { '$and': [{ price: { $gte: 10000, $lte: 50000 } }], priceAfterDiscount: 15000 }
        const doc = await Model.find(query)
        // .select('-_id')


        res.status(200).json({ data: doc })

    })