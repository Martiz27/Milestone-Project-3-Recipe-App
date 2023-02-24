const mongoose = require('mongoose')
const { Schema } = mongoose;

const recipeSchema = Schema({

    // Reference the User model of type Object ids
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },

    // TODO: Update frontend forms to check for unique items before handling submission
    // Category has 20 max items that must be unique
    category: {
        type: Array,
        items: {
            type: String
        },
        maxItems: [20, 'That is a lot of tags'],
        uniqueItems: true
    },
    favorite: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: String,
        require: [true, 'How will you know what to add into your recipe?']
    },
    directions: {
        type: String,
        require: [true, 'At least one direction would be nice?']
    },
    image: {
        type: String,
        default: 'https://images.unsplash.com/photo-1576186726580-a816e8b12896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' //Photo by No Revisions on Unsplash
    },
    source: {
        type: String,
        default: `Grandma's Cookbook`
    },
    description: {
        type: String,
        required: true
    }

    // Create timestamps
}, { timestamps: true })

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe