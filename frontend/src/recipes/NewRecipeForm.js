import { CurrentUser } from '../contexts/CurrentUser';
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, FloatingLabel, Row, Col, Button } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs'
// import Cookies from 'universal-cookie'

function NewRecipeForm() {

    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    const navigate = useNavigate()

    // const cookies = new Cookies()

    const [user, setUser] = useState(null)

    const [recipe, setRecipe] = useState({
        "title": '',
        "category": [],
        "favorite": false,
        "ingredients": '',
        "directions": '',
        "image": '',
        "source": '',
        "description": ''
    })

    async function handleSubmit(e) {
        // console.log(e.target[4].value)
        // let tagArray = e.target[4].value.split(/\r?\n/)
        // console.log(tagArray)
        // setRecipe({ ...recipe, category: tagArray })

        e.preventDefault()
        const response = await fetch(`http://localhost:5000/recipes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(recipe)
        })

        const newRecipe = await response.json()

        // setRecipe({
        //     ...recipe,
        //     author: [
        //         ...recipe.author,
        //         currentUser._id
        //     ]
        // })

        setUser({
            ...user,
            recipeList: [
                ...user.recipeList,
                recipe._id
            ]
        })

        navigate(`/recipes/${newRecipe._id}`)
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
                        onChange={e => setRecipe({ ...recipe, category: e.target.value.split(/\r?\n/) })}
                    />
                </Form.Group>

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