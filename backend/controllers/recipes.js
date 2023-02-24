const router = require('express').Router()
const db = require('../models')
const mongoose = require('mongoose')

const { Recipe } = db

// TODO: Send User.id into recipe index route to set filter for find, only show current user's recipes

// TODO: Fix ObjectId type error check in edit form and show recipe routes

// TODO: Update POST and PUT recipe routes to match new recipe schema validation of undefined fields

// Recipe Index GET Route
router.get('/', async (req, res) => {

    // TODO: Query filters for search and favorites page
    // if (req.query.favorites) {

    // }

    // Find all recipes and sort 
    const recipes = await Recipe.find().sort({ title: 1 })

    res.json(recipes)
})

// New Recipe POST Route
router.post('/', async (req, res) => {

    // Set defaults if fields are empty upon form submission
    if (!req.body.image) {
        req.body.image = undefined
    }
    if (!req.body.source) {
        req.body.source = undefined
    }

    // Create recipe in Recipe collection with form information
    const recipe = await Recipe.create(req.body)

    // Save the recipe to access id and redirect user to the created recipe
    recipe.save((err, saved) => {
        if (err) {
            next(err)
        }
        const ID = saved._id
    })

    // Send 201: Created status
    res.status(201).json(recipe)
})

// Edit Recipe Form GET Route
router.get('/:recipeId/edit', async (req, res) => {
    let id = req.params.recipeId

    // FIXIT: id error check
    // if (!mongoose.Types.ObjectId.isValid(req.param.recipeId)) {
    //     return res.status(404).json({message: 'Recipe id is not valid'})
    // }

    // Find recipe by id
    const recipe = await Recipe.findById(id)

    // If recipe is undefined or does not exist send 404 not found status
    if (!recipe) {
        return res.status(404).json({ message: 'Recipe does not exist.' })
    }

    console.log(`Current recipe being shown: ${recipe}`)

    // Send status OK with recipe data
    res.status(200).json(recipe)
})

// Updated Recipe PUT Route
router.put('/:recipeId', async (req, res) => {

    // TODO: Update favorite field based off useEffect in frontend buttons
    if (req.body.fav) {
        await Recipe.updateOne(
            { _id: req.params.recipeId },
            [{ '$set': { 'favorite': { '$eq': [false, '$favorite'] } } }]
        )
        console.log('tried to update fav')
    }

    // Set defaults if user removes fields when updating a recipe
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1576186726580-a816e8b12896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    }
    if (!req.body.source) {
        req.body.source = `Grandma's Cookbook`
    }

    // Find id in Recipe collection and update with form input then redirect to newly updated recipe page
    Recipe.findByIdAndUpdate(req.params.recipeId, req.body, { new: true })
        .then(() => {
            res.redirect(`/${req.params.recipeId}`)
        })

})

// Show Individual Recipe GET Route
router.get('/:recipeId', async (req, res) => {
    let id = req.params.recipeId

    // FIXIT: id error check
    // if (!mongoose.Types.ObjectId.isValid(req.param.recipeId)) {
    //     return res.status(404).json({message: 'Recipe id is not valid'})
    // }

    // Find recipe by id
    const recipe = await Recipe.findById(id)

    // If recipe is undefined or does not exist send 404 not found status
    if (!recipe) {
        return res.status(404).json({ message: 'Recipe does not exist.' })
    }
    console.log(`Current recipe being shown: ${recipe}`)

    // Send status OK with recipe data
    res.status(200).json(recipe)
})

// Delete Recipe DELETE Route
router.delete('/:recipeId', async (req, res) => {

    // Find id in Recipe collection and delete then send 303 See Other status with redirect to recipe index
    Recipe.findByIdAndDelete(req.params.recipeId)
        .then(() => {
            res.status(303).redirect('/recipes')
        })
})

module.exports = router;