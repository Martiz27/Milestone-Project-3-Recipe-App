const router = require('express').Router()
const db = require('../models')
const { User } = db

// TODO: POST USERS
router.post('/', async (req, res) => {
    res.send("Update recipe index with user's recipes")
})

// TODO: GET USERS
router.get('/', async (req, res) => {
    res.send("Getting user's information")
})

module.exports = router