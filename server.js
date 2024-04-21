const path = require('path');

const express = require('express');

const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const ApiError = require('./utils/apiError')

require('dotenv').config();

const dbConnection = require('./config/database');
const mountRoutes = require('./routes')
const globalError = require('./middlewares/errorHandler')

/// DATABASE CONNECTION
dbConnection();

// Express APP
const app = express()

// Enable Cors Tecno
app.use(cors())
app.options('*', cors())

// Handle Request body 
app.use(express.json({ limit: '20kb' }))
app.use(express.static(path.join(__dirname, 'uploads')))

if (process.env.NODE_ENV === "development")
{
    app.use(morgan('dev'))
    console.log(`Mode : ${process.env.NODE_ENV}`);

}

// Limit 100 request for 15 min form the same IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message:
        "Too many accounts created from this IP, please try again after an hour"
})

// Apply an limiter for all requests 
app.use('/api', limiter)

// mountRoutes(app)
mountRoutes(app)

app.all('*', (req, res, next) =>
{
    // res.send('Lol')
    console.log(`Not yet`);
    next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400))
})

// Global error handling middleware for express
app.use(globalError);


const port = process.env.PORT || 8000

app.listen(port, () =>
{
    console.log(`App running running on port ${port}`);
})

