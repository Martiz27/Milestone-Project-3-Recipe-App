require('dotenv').config()
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    // Console log mongo connection
    .then(() => console.log('Successfully connected to MongoDB.'))
    .catch(err => console.error('MongoDB connection error: ', err))

module.exports.Recipe = require('./recipe.js')
module.exports.User = require('./user.js')