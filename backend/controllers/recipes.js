const router = require('express').Router()
const db = require('../models')
const mongoose = require('mongoose')

const { Recipe } = db

// TODO: Send User.id into recipe index route to set filter for find, only show current user's recipes

// TODO: Fix ObjectId type error check in edit form and show recipe routes

// TODO: update post and put recipe routes to match new recipe schema

// Recipe Index Route
router.get('/', async (req, res) => {
    if(req.query.favorites) {
        
    }
    const recipes = await Recipe.find().sort({ title: 1 })
    res.json(recipes)
})

// Post New Recipe Route
router.post('/', async (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }
    if (!req.body.source) {
        req.body.source = undefined
    }
    const recipe = await Recipe.create(req.body)
    recipe.save((err, saved) => {
        if(err){
            next(err)
        }
        const ID = saved._id
    })
    res.status(200).json(recipe)
})

// Get Edit Recipe Form Route
router.get('/:recipeId/edit', async (req, res) => {
    let id = req.params.recipeId
    // if (!mongoose.Types.ObjectId.isValid(req.param.recipeId)) {
    //     return res.status(404).json({message: 'Recipe id is not valid'})
    // }
    const recipe = await Recipe.findById(id)
    if (!recipe) {
        return res.status(404).json({ message: 'Recipe does not exist.' })
    }
    console.log(recipe)
    res.status(200).json(recipe)
})

// Put Updated Recipe Route
router.put('/:recipeId', async (req, res) => {
    if (req.body.fav) {
        await Recipe.updateOne(
            { _id: req.params.recipeId },
            [{ '$set': { 'favorite': { '$eq': [false, '$favorite'] } } }]
        )
        console.log('tried to update fav')
    }
    if (!req.body.image) {
        req.body.image = 'https://images.unsplash.com/photo-1576186726580-a816e8b12896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
    }
    if (!req.body.source) {
        req.body.source = `Grandma's Cookbook`
    }
    Recipe.findByIdAndUpdate(req.params.recipeId, req.body, { new: true })
        .then(() => {
            res.redirect(`/${req.params.recipeId}`)
        })

})

// Show Individual Recipe Route
router.get('/:recipeId', async (req, res) => {
    let id = req.params.recipeId
    // FIXIT: id error check
    // if (!mongoose.Types.ObjectId.isValid(req.param.recipeId)) {
    //     return res.status(404).json({message: 'Recipe id is not valid'})
    // }
    const recipe = await Recipe.findById(id)
    if (!recipe) {
        return res.status(404).json({ message: 'Recipe does not exist.' })
    }
    console.log(recipe)
    res.status(200).json(recipe)
})

// Delete Recipe Route
router.delete('/:recipeId', async (req, res) => {
    let id = req.params.recipeId
    Recipe.findByIdAndDelete(id)
        .then(() => {
            res.status(303).redirect('/recipes')
        })
})

module.exports = router;