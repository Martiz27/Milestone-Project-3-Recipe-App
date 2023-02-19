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
        type: String,
        require: true
    },
    directions: { 
        type: String,
        require: true
    },
    image: { 
        type: String,
        default: 'https://images.unsplash.com/photo-1576186726580-a816e8b12896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' //Photo by No Revisions on Unsplash
    } 
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe