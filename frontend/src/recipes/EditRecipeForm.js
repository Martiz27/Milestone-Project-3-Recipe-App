import { CurrentUser } from '../contexts/CurrentUser';
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Form, FloatingLabel, Row, Col, Button } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs'

// Edit Recipe Page
function EditRecipeForm() {

    // currentUser context
    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    const navigate = useNavigate()

    // useParams to access recipeId
    const { recipeId } = useParams()

    // useState for recipe
    const [recipe, setRecipe] = useState(null)

    // useEffect to fetch recipe data
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/recipes/${recipeId}`)
            const resData = await response.json()

            // if response status is OK then setRecipe
            if (response.ok) {
                setRecipe(resData)
            }
        }
        fetchData()
    }, [recipeId])

    // Function to handle form submission
    // PUT changes then redirect to updated recipe page
    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:5000/recipes/${recipe._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })

        navigate(`/recipes/${recipe._id}`)
    }

    // TODO: Update Loading, Add Loading Component
    if (recipe === null) {
        return <h1>Loading</h1>
    }

    // Set int of recipe ingredients and directions array and use for textarea to show user as many items in their fields
    let ingredientLen = recipe.ingredients.split(/\r?\n/).length
    let directionLen = recipe.directions.split(/\r?\n/).length

    return (
        <Container className='my-4 mx-auto pb-5'>

            {/* Display recipe title */}
            <h1>Update <span className='text-primary'>{recipe.title}</span></h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Label>
                    Recipe Information
                </Form.Label>

                {/* Recipe Title Field */}
                <Row className='mb-3'>
                    <Form.Group>
                        <FloatingLabel
                            id='floatingInput'
                            label='Recipe Title' >
                            <Form.Control
                                required
                                type='text'
                                placeholder='Enter Recipe Title'
                                id='title'
                                name='title'
                                value={recipe.title}
                                onChange={e => setRecipe({ ...recipe, title: e.target.value })}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                {/*  Recipe Description Field */}
                <Row className='mb-3'>
                    <Form.Group>
                        <FloatingLabel
                            id='floatingInput'
                            label='Description' >
                            <Form.Control
                                required
                                type='text'
                                placeholder='Enter Description'
                                id='description'
                                name='description'
                                value={recipe.description}
                                onChange={e => setRecipe({ ...recipe, description: e.target.value })}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                {/* Recipe Image Field */}
                <Row className='mb-3 g-3'>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                id='floatingInput'
                                label='Recipe Image' >
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Recipe Image'
                                    id='image'
                                    name='image'
                                    value={recipe.image}
                                    onChange={e => setRecipe({ ...recipe, image: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    {/* Recipe Source Field */}
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                id='floatingInput'
                                label='Recipe Source' >
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Recipe Source'
                                    id='source'
                                    name='source'
                                    value={recipe.source}
                                    onChange={e => setRecipe({ ...recipe, source: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>

                <hr />

                {/* Category Array Field */}
                {/* Use defaultValue rather than value to prevent array from splitting early */}
                <Form.Group >
                    <Form.Label>
                        Categories
                    </Form.Label>
                    <Row>
                        <Form.Text>
                            Separate categories by writing them on a new line.
                        </Form.Text>
                    </Row>
                    <Form.Control
                        as="textarea"
                        className='mt-2 lh-lg'
                        id='tags'
                        name='tags'
                        defaultValue={recipe.category.join('\n')}
                        rows={recipe.category.length}
                        onBlur={e => setRecipe({ ...recipe, category: e.target.value.split(/\r?\n/) })}
                    />
                </Form.Group>

                <hr />

                {/* Ingredients String Field */}
                <Form.Group className='mb-4'>
                    <Form.Label>Ingredients</Form.Label>
                    <Row>
                        <Form.Text>
                            Separate ingredients by writing them on a new line.
                        </Form.Text>
                    </Row>
                    <Form.Control
                        as='textarea'
                        className='mt-2 lh-lg'
                        rows={ingredientLen}
                        id='ingredients'
                        name='ingredients'
                        value={recipe.ingredients}
                        onChange={e => setRecipe({ ...recipe, ingredients: e.target.value })}
                    />
                </Form.Group>

                <hr />

                {/* Directions String Field */}
                <Form.Group className='mb-3'>
                    <Form.Label>Directions</Form.Label>
                    <Row>
                        <Form.Text>
                            Separate directions by writing them on a new line.
                        </Form.Text>
                    </Row>
                    <Form.Control
                        as='textarea'
                        className='mt-2 lh-lg'
                        rows={directionLen}
                        id='directions'
                        name='directions'
                        value={recipe.directions}
                        onChange={e => setRecipe({ ...recipe, directions: e.target.value })}
                    />
                </Form.Group>

                {/* Update Recipe Submit Button */}
                <Form.Group as={Row}>
                    <Col className='text-center'>
                        <Button type="submit">
                            <BsCheck className='mb-1' /> Update Recipe
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default EditRecipeForm;