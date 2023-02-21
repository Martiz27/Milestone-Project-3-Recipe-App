// currentuser context after login or sign up
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Button, ButtonGroup, ButtonToolbar, ToggleButton } from 'react-bootstrap'
import { BsPencilSquare, BsTrashFill, BsStarFill, BsStar } from 'react-icons/bs'

function CurrentRecipe() {

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

    if (recipe === null) {
        return <h1>Loading</h1>
    }

    return (
        <Container className='mb-5 mx-auto p-5'>
            <Card style={{ maxWidth: '1400px' }} className=''>
                <Row className='g-0'>
                    <Col className='col-md-4'>
                        <Card.Img src={recipe.image} className='img-fluid rounded-2'></Card.Img>
                        <Row className='mt-4 mx-4'>
                            <Col>
                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button variant='light' size='md'><BsPencilSquare /> Edit</Button>
                                        <Button variant='warning' size='md'><BsTrashFill /> Delete</Button>
                                    </ButtonGroup>
                                    {/* 
                                    TODO: Radio Button, Active State: Remove from Favorites,
                                    Inactive / Default State: Add to Favorites.
                                    Update Favorites value in Recipes
                                    */}
                                </ButtonToolbar>
                            </Col>
                            <Col>
                                <ToggleButton variant='danger' size='md' className='' >
                                    {
                                        recipe.favorite
                                            ? <Col><BsStarFill /> Remove From Favorites</Col>
                                            : <Col><BsStar /> Add to Favorites</Col>
                                    }
                                </ToggleButton>
                            </Col>
                        </Row>
                        <Card.Text className='fst-italic fw-bold p-4'>{recipe.description}</Card.Text>
                    </Col>
                    <Col className='col-md-8'>
                        <Card.Body>
                            <Card.Title><h1>{recipe.title}</h1></Card.Title>
                            <Row className='text-muted fst-italic mb-3'>
                                {
                                    recipe.breakfast
                                        ? <Col key='breakfast'> #breakfast</Col>
                                        : ' '
                                }
                                {
                                    recipe.lunch
                                        ? <Col key='lunch'> #lunch</Col>
                                        : ' '
                                }
                                {
                                    recipe.dinner
                                        ? <Col key='dinner'> #dinner</Col>
                                        : ' '
                                }
                                {
                                    recipe.dessert
                                        ? <Col key='dessert'> #dessert</Col>
                                        : ' '
                                }
                            </Row>
                            <hr />
                            <h5>Ingredients</h5>
                            <ul>
                                {recipe.ingredients.split(/\r?\n/).map((ingredient, index) => {
                                    return <li key={index} className='py-1'>{ingredient}</li>
                                })}
                            </ul>
                            <hr />
                            <h5>Directions</h5>
                            <ol>
                                {recipe.directions.split(/\r?\n/).map((direction, index) => {
                                    return <li key={index} className='py-1'>{direction}</li>
                                })}
                            </ol>
                        </Card.Body>
                    </Col>
                    <Card.Footer className='text-center text-muted fst-italic'>Source: {recipe.source}</Card.Footer>
                </Row>
            </Card>
        </Container>
    )
}

export default CurrentRecipe;