import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Form, FloatingLabel, Row, Col, Button } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs'

function EditRecipeForm() {
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/recipes/${recipeId}`)
            const resData = await response.json()
            if (response.ok) {
                setRecipe(resData)
            }
        }
        fetchData()
    }, [])

    // TODO: Update Loading, Add Loading Component?
    if (recipe === null) {
        return <h1>Loading</h1>
    }

    let ingredientLen = recipe.ingredients.split(/\r?\n/).length
    let directionLen = recipe.directions.split(/\r?\n/).length

    return (
        <Container className='my-4 mx-auto pb-5'>
            <h1>Update <span className='text-primary'>{recipe.title}</span></h1>
            <hr />
            <Form>
                <Form.Label>
                    Recipe Information
                </Form.Label>
                <Row className='mb-3'>
                    <Form.Group>
                        <FloatingLabel
                            controlID='floatingInput'
                            label='Recipe Title'
                            className=''
                        >
                            <Form.Control
                                type='text'
                                placeholder='Enter Recipe Title'
                                defaultValue={recipe.title}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Row className='mb-3'>
                    <Form.Group>
                        <FloatingLabel
                            controlID='floatingInput'
                            label='Description'
                            className=''
                        >
                            <Form.Control
                                type='text'
                                placeholder='Enter Description'
                                defaultValue={recipe.description}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>

                <Row className='mb-3 g-3'>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlID='floatingInput'
                                label='Recipe Image'
                                className=''
                            >
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Recipe Image'
                                    defaultValue={recipe.image}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlID='floatingInput'
                                label='Recipe Source'
                                className=''
                            >
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Recipe Source'
                                    defaultValue={recipe.source}
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
                            defaultChecked={recipe.breakfast} />
                    </Form.Group>

                    <Form.Group as={Col} id="LunchCheck">
                        <Form.Check
                            type="checkbox"
                            label="Lunch"
                            defaultChecked={recipe.lunch} />
                    </Form.Group>

                    <Form.Group as={Col} id="DinnerCheck">
                        <Form.Check
                            type="checkbox"
                            label="Dinner"
                            defaultChecked={recipe.dinner} />
                    </Form.Group>

                    <Form.Group as={Col} id="DessertCheck">
                        <Form.Check
                            type="checkbox"
                            label="Dessert"
                            defaultChecked={recipe.dessert} />
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
                        className='mt-2 lh-lg'
                        defaultValue={recipe.ingredients}
                        rows={ingredientLen}
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
                        className='mt-2 lh-lg'
                        defaultValue={recipe.directions}
                        rows={directionLen}
                    />
                </Form.Group>

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