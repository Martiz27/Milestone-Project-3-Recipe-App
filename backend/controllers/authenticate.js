const router = require('express').Router()
const db = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// const userAuth = require('../authorization/defineUser')

const { User } = db

// Login User Route
router.post('/', async (req, res) => {
    User.findOne({ username: req.body.username })
        .then((user) => {
            // console.log('login auth: found user')
            // console.log('login auth: perfoming password check')
            bcrypt.compare(req.body.password, user.password)
                .then((passwordCheck) => {
                    if (!passwordCheck) {
                        // console.log('login auth: password match error')
                        return res.status(400).send({ message: 'Passwords do not match', err })
                    }
                    // console.log('login auth: passwords match')
                    // console.log('login auth: creating token')
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userUserName: user.username
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: '24h' }
                    )
                    // console.log('login auth: token created')
                    console.log(token)
                    // console.log('login auth: login successful')
                    res.status(200).send({
                        message: 'Login Successful',
                        user: user,
                        token: token
                    })
                    // res.json({
                    // message: 'Login Successful',
                    // user: user,
                    // token: token
                    // })
                    // res.status(200).json(token)
                    // console.log(`this is the response: ${JSON.stringify(res)}`)
                    // console.log(`this is the response: ${res.token}`)
                })
                .catch(err => {
                    // console.log('login auth error: password error')
                    res.status(400).send({ message: 'Password does not exist or does not match', err })
                })
        })
        .catch(err => {
            // console.log('login auth error: username error')
            res.status(404).send({ message: 'Username not found', err })
        })
})

router.get('/', async (req, res) => {
    // console.log(`This is the request: ${JSON.stringify(req)}`)
    // console.log(`This is the current user: ${JSON.stringify(req.currentUser)}`)
    // console.log(`This is the user: ${JSON.stringify(req.user)}`)
    // console.log(`This is the auth response: ${JSON.stringify(req.headers)}`)
    res.status(200).send(req.currentUser)
})
module.exports = router 
