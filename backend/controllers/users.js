const router = require('express').Router()
const db = require('../models')
const mongoose = require('mongoose')

const { User } = db

// TODO: GET USERS ROUTE
// Get Users Route
router.get('/', async (req, res) => {
    console.log('get route for user')
    res.json({ message: 'success' })
})

// Sign Up User POST Route
router.post('/signup', async (req, res) => {
    // Create a user in User collection with form information
    const newUser = await User.create(req.body)

    // Send 201: Created status
    res.status(201).json(newUser)
})

module.exports = router