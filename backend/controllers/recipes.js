const router = require('express').Router()
const db = require('../models')
const mongoose = require('mongoose')

const { Recipe } = db

// TODO: RECIPE INDEX
router.get('/', async (req, res) => {
    const recipes = await Recipe.find().sort({ title: 1 })
    res.json(recipes)
})

// TODO: NEW FORM
router.get('/new', async (req, res) => {
    res.json({ Response: 'New recipe' })
})

// TODO: POST NEW
router.post('/', async (req, res) => {
    res.json({ Response: 'Successfully created recipe' })
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
    res.json({ Response: 'Successfully updated recipe' })
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
    Recipe.findOneAndDelete(req.params.recipeId)
        .then((deletedRecipe) => {
            res.status(303).redirect('/recipes')
        })
})

module.exports = router;