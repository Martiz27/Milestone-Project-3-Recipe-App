import mongoose from 'mongoose'

const mongoose = require('mongoose')
const { Schema } = mongoose;

const recipeSchema = Schema({
    title: { 
        type: String, 
        required: true
    },
    breakfast: { 
        type: Boolean, 
        default: false
    },
    lunch: { 
        type: Boolean, 
        default: false
    },
    dinner: { 
        type: Boolean, 
        default: false
    },
    snack: { 
        type: Boolean, 
        default: false
    },
    favorite: { 
        type: Boolean, 
        default: false
    },
    ingredients: { 
        type: array, 
        items: { type: string },
        require: true
    },
    directions: { 
        type: array, 
        items: { type: string },
        require: true
    }
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe