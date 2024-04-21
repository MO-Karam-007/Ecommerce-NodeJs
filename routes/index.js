const brandRoute = require('./brandRoute')
const categoryRoute = require('./categoryRoute')
const subCategoryRoute = require('./subCategoryRoute')
const productRoute = require('./productRoute')
const couponRoute = require('./couponeRoute')
const authRoute = require('./authRoute')



const mountRoutes = (app) =>
{
    app.use('/api/v1', authRoute)
    app.use('/api/v1/categorys', categoryRoute)
    app.use('/api/v1/brands', brandRoute)
    app.use('/api/v1/coupons', couponRoute)
    app.use('/api/v1/products', productRoute)
    app.use('/api/v1/subcategorys', subCategoryRoute)

}

module.exports = mountRoutes;