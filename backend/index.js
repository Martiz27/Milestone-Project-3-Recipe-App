// Modules and Globals
require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const authUser = require('./authorization/defineUser')
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const PORT = process.env.PORT

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(authUser)

// Controllers 
app.use(express.urlencoded({ extended: true }))

app.use('/recipes', require('./controllers/recipes'))
app.use('/user', require('./controllers/users'))
app.use('/auth', require('./controllers/authenticate'))

// Listen for Connections
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})