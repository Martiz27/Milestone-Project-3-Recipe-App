const router = require('express').Router()
const db = require('../models')
const mongoose = require('mongoose')

const { User } = db

// TODO: GET USERS
router.get('/', async (req, res) => {
    console.log('get route for user')
    res.json({ message: 'success' })
})

// Sign Up User Route
router.post('/signup', async (req, res) => {
    const newUser = await User.create(req.body)
    res.json(newUser)
})

module.exports = router