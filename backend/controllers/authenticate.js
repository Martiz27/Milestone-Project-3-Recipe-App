const router = require('express').Router()
const db = require('../models')

// Import for password comparison and token creation
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { User } = db

// Login User Route
router.post('/', async (req, res) => {

    // Find user in User collection by username input
    User.findOne({ username: req.body.username })

        // If found then continue to check password
        .then((user) => {
            console.log('Login auth... found user... performing password check')

            // Use bcrypt to compare user input with hashed password in User collection
            bcrypt.compare(req.body.password, user.password)
                .then((passwordCheck) => {

                    // If passwords do not match then send 400 bad request status
                    if (!passwordCheck) {
                        console.log('Login auth... passwords do not match... bad request')
                        return res.status(400).send({ message: 'Passwords do not match', err })
                    }

                    // Create jwt token with user id, username, and set token expiration
                    console.log('Login auth... password match found... creating token')
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userUserName: user.username
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: '24h' }
                    )

                    console.log('Login auth... token created... login successful')

                    // Send OK status with message, user, and token
                    res.status(200).send({
                        message: 'Login Successful',
                        user: user,
                        token: token
                    })
                })

                // If bycrypt compare fails then send 400 bad request status
                .catch(err => {
                    console.log('Login auth... password verification failed... bad request')
                    res.status(400).send({ message: 'Password does not exist or does not match', err })
                })
        })

        // Username not found
        .catch(err => {
            console.log('Login auth... user not found, username error')
            res.status(404).send({ message: 'Username not found', err })
        })
})

// TODO: GET AUTH ROUTE
// Auth GET Route
router.get('/', async (req, res) => {

    // Send OK Status with currentUser
    res.status(200).send(req.currentUser)
})

module.exports = router 
