require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch(err => console.error('Connection error: ', err))
    
module.exports.Recipe = require('./recipe.js')
module.exports.User = require('./user.js')