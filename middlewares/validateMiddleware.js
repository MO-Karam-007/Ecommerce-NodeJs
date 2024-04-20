const { validationResult } = require("express-validator")

const validationMidlleware = (req, res, nxt) =>
{
    const errors = validationResult(req)
    if (!errors.isEmpty())
    {
        return res.status(400).json({ errors: errors.array() })
    }
    nxt()
}

module.exports = validationMidlleware