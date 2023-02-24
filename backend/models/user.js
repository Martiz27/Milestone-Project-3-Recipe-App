const mongoose = require('mongoose')
const { Schema } = mongoose;

// Import for unique validation and hashing
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10;

// Typical email regex for browsers (reference)
// ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const userSchema = Schema({

    // Username must be unique, between 6 and 32 characters, and match a combination of letters and digits
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "Can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        minLength: 6,
        maxLength: 32,
        index: true
    },
    firstName: {
        type: String,
        required: [true, "Can't be blank"]
    },
    lastName: {
        type: String,
        required: [true, "Can't be blank"]
    },

    // TODO: Update email regex with more robust pattern
    // Email must be between 6 and 127 characters and match a the regex of an email
    email: {
        type: String,
        lowercase: true,
        required: [true, "Can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        minLength: 6,
        maxLength: 127,
        index: true
    },

    // Password must be between 6 and 127 characters
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 127,
    },

    // Reference the Recipe model in type Array of Object ids
    recipeList: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }]

    // Create timestamps
}, { timestamps: true })

// unique validator for username
userSchema.plugin(uniqueValidator, { message: 'is already taken.' });

// bcrypt user password
userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
    next();
})

const User = mongoose.model('User', userSchema)

module.exports = User