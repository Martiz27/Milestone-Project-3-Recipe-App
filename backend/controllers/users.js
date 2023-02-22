const router = require('express').Router()
const db = require('../models')
const mongoose = require('mongoose')

const { User } = db

// TODO: GET USERS
router.get('/login', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

// TODO: POST USERS
router.post('/', async (req, res) => {
    const newUser = await User.create(req.body)
    res.json(newUser)
})

module.exports = router