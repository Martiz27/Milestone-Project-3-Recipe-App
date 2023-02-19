const router = require('express').Router()

// TODO: RECIPE INDEX
router.get('/', async (req, res) => {
    res.send('Recipe index')
})

// TODO: NEW FORM
router.get('/new', async (req, res) => {
    res.send('New recipe')
})

// TODO: POST NEW
router.post('/', async (req, res) => {
    res.send('Successfully created recipe')
})

// TODO: EDIT FORM
router.get('/:recipeId/edit', async (req, res) => {
    res.send('Edit recipe form')
})

// TODO: PUT EDIT
router.put('/:recipeId', async (req, res) => {
    res.send('Successfully updated recipe')
})

// TODO: SHOW BY CATEGORY
router.get('/:categoryId', async (req, res) => {
    res.send('Show recipes in this category')
})

// TODO: SHOW
router.get('/:recipeId', async (req, res) => {
    res.send('Show current recipe')
})

// TODO: DELETE
router.delete('/:recipeId', async (req, res) => {
    res.send('Successfully deleted recipe')
})

module.exports = router;