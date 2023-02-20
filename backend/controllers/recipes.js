const router = require('express').Router()
const db = require('../models')

const { Recipe } = db

// TODO: RECIPE INDEX
router.get('/', async (req, res) => {
    const recipes = await Recipe.find()
    res.json(recipes)
})

// TODO: NEW FORM
router.get('/new', async (req, res) => {
    res.json({Response: 'New recipe'})
})

// TODO: POST NEW
router.post('/', async (req, res) => {
    res.json({Response: 'Successfully created recipe'})
})

// TODO: EDIT FORM
router.get('/:recipeId/edit', async (req, res) => {
    res.json({Response: 'Edit recipe form'})
})

// TODO: PUT EDIT
router.put('/:recipeId', async (req, res) => {
    res.json({Response: 'Successfully updated recipe'})
})

// TODO: SHOW BY CATEGORY
router.get('/:categoryId', async (req, res) => {
    res.json({Response: 'Show recipes in this category'})
})

// TODO: SHOW
router.get('/:recipeId', async (req, res) => {
    res.json({Response : 'Show current recipe'})
})

// TODO: DELETE
router.delete('/:recipeId', async (req, res) => {
    res.json({Response: 'Successfully deleted recipe'})
})

module.exports = router;