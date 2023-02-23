const mongoose = require('mongoose')
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10;

// Resources for creating a user schema and validation
// https://gist.github.com/jzellis/41038ac461433b32174a8c556f5aff76
// https://thinkster.io/tutorials/node-json-api/creating-the-user-model

const userSchema = Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "Can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
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
    email: {
        type: String,
        lowercase: true,
        required: [true, "Can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        minLength: 6,
        maxLength: 127,
        index: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 127,
        match: [/[\w\W]/, 'only letters, numbers, and special characters are allowed']
    },
    recipeList: [{
        type: Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
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

// compare password
userSchema.methods.comparePassword = function (plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password));
}

const User = mongoose.model('User', userSchema)

module.exports = User