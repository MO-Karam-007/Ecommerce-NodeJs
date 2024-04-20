const mongoose = require('mongoose')

const dbConnection = () =>
{
    mongoose.connect(process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD))
        .then((connected) =>
        {
            console.log(`DATABASE CONNEDTED ⚡⚡👍`);
        })
}


module.exports = dbConnection