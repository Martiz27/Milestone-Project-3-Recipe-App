require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

module.exports.Recipe = require('./recipe.js')
module.exports.User = require('./user.js')