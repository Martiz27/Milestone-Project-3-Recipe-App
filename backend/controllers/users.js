const router = require('express').Router()
const db = require('../models')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { User } = db

// TODO: GET USERS
router.get('/', async (req, res) => {
    console.log('get route for user')
    res.json({ message: 'success' })
})

// Login User Route
router.post('/login', async (req, res) => {
    User.findOne({ username: req.body.username })
        .then((user) => {
            console.log('found user')
            console.log('password check')
            bcrypt.compare(req.body.password, user.password)
                .then((passwordCheck) => {
                    if (!passwordCheck) {
                        console.log('password match error')
                        return res.status(400).send({ message: 'Passwords do not match', err })
                    }
                    console.log('passwords match')
                    console.log('creating token')
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userUserName: user.username
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: '24h' }
                    )
                    console.log('token created')
                    console.log(token)
                    console.log('login successful')
                    res.status(200).send({
                        message: 'Login Successful',
                        username: user.username,
                        token
                    })
                })
                .catch(err => {
                    console.log('password error')
                    res.status(400).send({ message: 'Password does not exist or does not match', err })
                })
        })
        .catch(err => {
            console.log('username error')
            res.status(404).send({ message: 'Username not found', err })
        })
    // res.json(user)
})

// Sign Up User Route
router.post('/signup', async (req, res) => {
    const newUser = await User.create(req.body)
    res.json(newUser)
})

module.exports = router