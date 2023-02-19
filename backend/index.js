// Modules and Globals
require('dotenv').config()
const express = require("express")
// const mongoose = require('mongoose')
const PORT = process.env.PORT
const app = express()

// mongoose.connect(
//     process.env.MONGO_URI, 
//     { useNewUrlParser: true },
//     () => { console.log('connected to mongo') }
// )

// Controllers and Routes
app.use('/recipes', require('./controllers/recipes.js'))
app.use('/users', require('./controllers/users.js'))
// app.get('/', (req, res) => {
//     res.send('oops')
// })

// Listen for Connections
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})