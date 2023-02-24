// Authorization
const db = require('../models')
const jwt = require('jsonwebtoken')

const { User } = db

async function defineCurrentUser(req, res, next) {
    try {
        console.log(`headers: ${req.json()}`)
        const [method, token] = await req.headers.authorization.split(" ")
        console.log(`Method: ${method}, Token: ${token}`)
        if (method == 'Bearer') {
            const decodedToken = await jwt.verify( token, 'RANDOM-TOKEN')
            const { id } = decodedToken.value
            let user = await User.findOne({ userId: id })
            req.currentUser = user
            console.log(`check define user: ${user}`)
            console.log(`defining user: ${req.currentUser}`)
        }
        next()

    } catch (err) {
        // TODO: FIX STATUS ERROR
        // res.status(401).json({
        //     err: new Error('Invalid request!')
        // })
        req.currentUser = null
        next()
    }
    
    // try {
    //     // console.log(`req: ${JSON.stringify(req)}`)
    //     // console.log(`req.body: ${JSON.stringify(req.body)}`)
    //     // console.log(`req.headers: ${JSON.stringify(req.headers)}`)
    //     // res.send(req)
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