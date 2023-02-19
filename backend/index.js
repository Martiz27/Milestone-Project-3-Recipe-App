// Modules and Globals
require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()
const PORT = process.env.PORT

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Controllers and Routes
app.use('/recipes', require('./controllers/recipes.js'))
app.use('/users', require('./controllers/users.js'))

// Listen for Connections
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})