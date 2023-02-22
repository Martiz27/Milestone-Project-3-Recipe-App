const router = require('express').Router()
const db = require('../models')
const mongoose = require('mongoose')

const { Recipe } = db

// TODO: SEND USER.ID IN ROUTE
// TODO: RECIPE INDEX
router.get('/', async (req, res) => {
    const recipes = await Recipe.find().sort({ title: 1 })
    res.json(recipes)
})

// TODO: POST NEW
router.post('/', async (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }
    if (!req.body.source) {
        req.body.source = undefined
    }
    const recipe = await Recipe.create(req.body)
    res.json(recipe)
})

// // TODO: SHOW BY CATEGORY
// router.get('/:category', async (req, res) => {
//     const recipes = await Recipe.find({[req.params.category]: {$eq: true}})
//     console.log(recipes)
//     res.json(recipes)
// })

// TODO: EDIT FORM
router.get('/:recipeId/edit', async (req, res) => {
    let recipeId = req.params.recipeId
    // if (!mongoose.Types.ObjectId.isValid(req.param.recipeId)) {
    //     return res.status(404).json({message: 'Recipe id is not valid'})
    // }
    const recipe = await Recipe.findById(req.params.recipeId)
    if (!recipe) {
        return res.status(404).json({ message: 'Recipe does not exist.' })
    }
    console.log(recipe)
    res.status(200).json(recipe)
})

// TODO: PUT EDIT
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
// TODO: SHOW
router.get('/:recipeId', async (req, res) => {
    let recipeId = req.params.recipeId
    // FIXIT: id error check
    // if (!mongoose.Types.ObjectId.isValid(req.param.recipeId)) {
    //     return res.status(404).json({message: 'Recipe id is not valid'})
    // }
    const recipe = await Recipe.findById(req.params.recipeId)
    if (!recipe) {
        return res.status(404).json({ message: 'Recipe does not exist.' })
    }
    console.log(recipe)
    res.status(200).json(recipe)
})

// TODO: DELETE
router.delete('/:recipeId', async (req, res) => {
    Recipe.findByIdAndDelete(req.params.recipeId)
        .then(() => {
            res.status(303).redirect('/recipes')
        })
})

module.exports = router;