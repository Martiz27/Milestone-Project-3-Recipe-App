import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, FloatingLabel, Row, Col, Button } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs'

function NewRecipeForm() {

    const navigate = useNavigate()

    const [recipe, setRecipe] = useState({
        "title": '',
        "breakfast": null,
        "lunch": null,
        "dinner": null,
        "dessert": null,
        "favorite": false,
        "ingredients": '',
        "directions": '',
        "image": '',
        "source": '',
        "description": ''
    })

    async function handleSubmit(e) {
        e.preventDefault()
        await fetch(`http://localhost:5000/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        navigate('/recipes')
    }

    return (
        <Container className='my-4 mx-auto pb-5'>
            <h1 className='text-primary'>Add New Recipe</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Label>
                    Recipe Information
                </Form.Label>
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

                <Row className='mb-3 g-3'>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                id='floatingInput'
                                label='Recipe Image' >
                                <Form.Control
                                    type='url'
                                    placeholder='Enter Recipe Image'
                                    id='image'
                                    name='image'
                                    value={recipe.image}
                                    onChange={e => setRecipe({ ...recipe, image: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

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

                <Row className='mb-4'>
                    <Form.Label>
                        Categories
                    </Form.Label>
                    <Form.Group as={Col} id="BreakfastCheck">
                        <Form.Check
                            type="checkbox"
                            label="Breakfast"
                            id='breakfast'
                            name='breakfast'
                            onChange={e => setRecipe({ ...recipe, breakfast: e.target.checked })}
                        />
                    </Form.Group>
                    <Form.Group as={Col} id="LunchCheck">
                        <Form.Check
                            type="checkbox"
                            label="Lunch"
                            id='lunch'
                            name='lunch'
                            onChange={e => setRecipe({ ...recipe, lunch: e.target.checked })}
                        />
                    </Form.Group>
                    <Form.Group as={Col} id="DinnerCheck">
                        <Form.Check
                            type="checkbox"
                            label="Dinner"
                            id='dinner'
                            name='dinner'
                            onChange={e => setRecipe({ ...recipe, dinner: e.target.checked })}
                        />
                    </Form.Group>
                    <Form.Group as={Col} id="DessertCheck">
                        <Form.Check
                            type="checkbox"
                            label="Dessert"
                            id='dessert'
                            name='dessert'
                            onChange={e => setRecipe({ ...recipe, dessert: e.target.checked })}
                        />
                    </Form.Group>
                </Row>

                <hr />

                <Form.Group className='mb-4'>
                    <Form.Label>Ingredients</Form.Label>
                    <Row>
                        <Form.Text>
                            Separate ingredients by writing them on a new line.
                        </Form.Text>
                    </Row>
                    <Form.Control
                        as='textarea'
                        className='mt-2'
                        id='ingredients'
                        name='ingredients'
                        value={recipe.ingredients}
                        onChange={e => setRecipe({ ...recipe, ingredients: e.target.value })}
                    />
                </Form.Group>

                <hr />

                <Form.Group className='mb-3'>
                    <Form.Label>Directions</Form.Label>
                    <Row>
                        <Form.Text>
                            Separate directions by writing them on a new line.
                        </Form.Text>
                    </Row>
                    <Form.Control
                        as='textarea'
                        className='mt-2'
                        id='directions'
                        name='directions'
                        value={recipe.directions}
                        onChange={e => setRecipe({ ...recipe, directions: e.target.value })}
                    />
                </Form.Group>

                <Form.Group as={Row}>
                    <Col className='text-center'>
                        <Button type="submit"><BsPlus className='mb-1' /> Add Recipe</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default NewRecipeForm;