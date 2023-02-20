const db = require('../models')
const { Recipe } = db
Recipe.create ([
    {
        title: 'Test Recipe',
        breakfast: false,
        lunch: false,
        dinner: false,
        snack: false,
        favorite: false,
        ingredients: 'Ingredient 1. Ingredient 2',
        directions: 'Direction 1. Direction 2',
        image: 'https://images.unsplash.com/photo-1576186726580-a816e8b12896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' //Photo by No Revisions on Unsplash
    }
])
.then(() => {
    console.log('success!')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})