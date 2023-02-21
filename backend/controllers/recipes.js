const router = require('express').Router()
const db = require('../models')
const mongoose = require('mongoose')

const { Recipe } = db

// TODO: RECIPE INDEX
router.get('/', async (req, res) => {
    const recipes = await Recipe.find().sort({title: 1})
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

// TODO: EDIT FORM
router.get('/:recipeId/edit', async (req, res) => {
    res.json({ Response: 'Edit recipe form' })
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
        return res.status(404).json({message: 'Recipe does not exist.'})
    }
    console.log(recipe)
    res.status(200).json(recipe)
})

// TODO: SHOW BY CATEGORY
router.get('/:categoryId', async (req, res) => {
    res.json({ Response: 'Show recipes in this category' })
})

// TODO: DELETE
router.delete('/:recipeId', async (req, res) => {
    res.json({ Response: 'Successfully deleted recipe' })
})

module.exports = router;