const express = require("express")
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT

const app = express()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () => {
    console.log('connected to mongo')
}) 

app.get('/', (req,res) => {
    res.send('oops')
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})