const brandRoute = require('./brandRoute')
const categoryRoute = require('./categoryRoute')
const productRoute = require('./productRoute')
const couponRoute = require('./couponeRoute')



const mountRoutes = (app) =>
{
    app.use('/api/v1/Categorys', categoryRoute)
    app.use('/api/v1/brands', brandRoute)
    app.use('/api/v1/coupons', couponRoute)
    app.use('/api/v1/products', productRoute)

}

module.exports = mountRoutes;