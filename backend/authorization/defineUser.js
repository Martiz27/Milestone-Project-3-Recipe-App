// Authorization
const db = require('../models')
const jwt = require('jsonwebtoken')

const { User } = db

async function defineCurrentUser(req, res, next) {
    try {
        const [method, token] = await req.headers.authorization.split(" ") //[1]

        if (method == 'Bearer') {
            const decodedToken = await jwt.verify(
                token,
                'RANDOM-TOKEN'
            )
            const { id } = decodedToken.value
            let user = await User.findOne({ userId: id })

            req.currentUser = user
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
}

module.exports = defineCurrentUser