// currentuser context after login or sign up
import { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, ButtonGroup, ButtonToolbar, ToggleButton } from 'react-bootstrap'
// Button Group with Edit Anchor, Delete Anchor, Favorites Radio

function RecipeIndex(data) {
    const [recipes, setRecipes] = useState([])

    // ${process.env.REACT_APP_SERVER_URL}
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/recipes`)
            const resData = await response.json()
            setRecipes(resData)
        }
        fetchData()
    }, [])

    let recipesFormatted = recipes.map((recipe, index) => {
        return (
            <Col key={index}>
                <Card style={{ width: '300px' }}>
                    {/* TODO: Get Recipe Name */}
                    <Card.Header><h3>{recipe.title}</h3></Card.Header>
                    <Card.Img src={recipe.image} className='img-fluid rounded-0'></Card.Img>
                    <Card.Body>
                        <Row className='text-muted'>
                            {
                                recipe.breakfast
                                    ? <Col key='breakfast'> #breakfast </Col>
                                    : ' '
                            }
                            {
                                recipe.lunch
                                    ? <Col key='lunch'> #lunch </Col>
                                    : ' '
                            }
                            {
                                recipe.dinner
                                    ? <Col key='dinner'> #dinner </Col>
                                    : ' '
                            }
                            {
                                recipe.dessert
                                    ? <Col key='dessert'> #dessert </Col>
                                    : ' '
                            }
                        </Row>
                        <br />
                        <ButtonToolbar className='mb-3'>
                            <ButtonGroup className='me-5'>
                                <Button variant='light' size='sm'>Edit</Button>
                                <Button variant='warning' size='sm'>Delete</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                {/* TODO: Radio Button, Active State: Remove from Favorites,
                                    Inactive / Default State: Add to Favorites. 
                                    Update Favorites value in Recipes 
                                */}
                                <ToggleButton variant='danger' size='sm'>Add to Favorites</ToggleButton>
                            </ButtonGroup>
                        </ButtonToolbar>
                        <h5>Ingredients</h5>
                        <ul>
                            {recipe.ingredients.split('.').map((ingredient, index) => {
                                return <li key={index}>{ingredient}</li>
                            })}
                        </ul>
                        <h5>Directions</h5>
                        <ol>
                            {recipe.directions.split('.').map((direction, index) => {
                                return <li key={index}>{direction}</li>
                            })}
                        </ol>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    return (
        <Container className='my-5 mx-5'>
            <Row xs={1} md={2} lg={4} className="g-3">
                {recipesFormatted}
            </Row>
        </Container>
    )
}

export default RecipeIndex;