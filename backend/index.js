// Modules and Globals
require('dotenv').config()
const express = require("express")
const PORT = process.env.PORT
const app = express()

// Express Settings
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

// Controllers and Routes
app.use('/recipes', require('./controllers/recipes.js'))
app.use('/users', require('./controllers/users.js'))

// Listen for Connections
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})