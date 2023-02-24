// Authorization
const db = require('../models')
const jwt = require('jsonwebtoken')

const { User } = db

// Function to handle defining currentUser in CurrentUser context provider
async function defineCurrentUser(req, res, next) {
    try {
        console.log(`Defining User... Headers: ${req.json()}`)
        const [method, token] = await req.headers.authorization.split(" ")

        console.log(`Defining User... Method: ${method}, Token: ${token}`)

        // If header method is Bearer verify token and find user from token
        // Send the user to context provider
        if (method == 'Bearer') {
            const decodedToken = await jwt.verify( token, 'RANDOM-TOKEN')
            const { id } = decodedToken.value
            let user = await User.findOne({ userId: id })
            req.currentUser = user
            console.log(`Defining user... check: ${user}`)
            console.log(`Defining user... request sent: ${req.currentUser}`)
        }
        next()

    } catch (err) {
        // TODO: FIX UNAUTHORIZED STATUS ERROR
        // res.status(401).json({
        //     err: new Error('Invalid request!')
        // })
        req.currentUser = null
        next()
    }

    // TESTING CODE
    // try {
    //     console.log(`Auth: req: ${req.json()}`)

    //     console.log(`Auth: defining user headers auth: ${req.headers.authorization}`) // undefined
    //     const token = await req.headers.authorization.split(' ')[1]

    //     console.log(`Auth: reading token: ${token}`)
    //     const decodedToken = await jwy.verify(token, "RANDOM-TOKEN")

    //     console.log(`Auth: decoded token ${decodedToken}`)
    //     const user = await decodedToken

    //     console.log(`Auth: defining user: ${user}`)
    //     req.user = user

    //     console.log(`Auth: defining current user: ${req.currentUser}`)
    //     res.json(user)
    //     next()
    // } catch (error) {
    //     // console.log(`defining current user error: ${error}`)
    //     req.currentUser = null
    //     next()
    // }
}

module.exports = defineCurrentUser