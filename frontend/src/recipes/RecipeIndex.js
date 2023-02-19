// currentuser context after login or sign up
import { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button, ButtonGroup, ButtonToolbar, ToggleButton } from 'react-bootstrap'
// TODO: Add Recipe Data Param
// Set up map to add recipes to Col tags within the Row tag
// Card.Header: Recipe Title
// Card.Img: Recipe Image
// Button Group with Edit Anchor, Delete Anchor, Favorites Radio
// Ingredients split into unordered list
// Directions split into ordered list
// Card.Footer: Categories
function RecipeIndex(data) {
    console.log(data)
    const [recipes, setRecipes] = useState([])

    // ${process.env.REACT_APP_SERVER_URL}
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/recipes`)
            console.log(response)
            const resData = await response.json()
            console.log(resData)
            setRecipes(resData)
        }
        fetchData()
    }, [])

    let recipesFormatted = recipes.map((recipe) => {
        return (
            <Col>
                <Card style={{ width: '300px' }}>
                    {/* TODO: Get Recipe Name */}
                    <Card.Header><h3>{recipe.title}</h3></Card.Header>
                    <Card.Img src={recipe.image} className='img-fluid rounded-0'></Card.Img>
                    <Card.Body>
                        {/* TODO: Fill row with col categories, if statements -> concat  #<category> */}

                        <Card.Footer className='text-muted'>
                            Categories:
                            {/* TODO: Fill span with categories, if statements -> concat  #<category> */}
                            <span>
                                #breakfast
                            </span>
                        </Card.Footer>
                        <Row className='text-muted'>
                            <Col>#breakfast</Col>
                            <Col>#lunch</Col>
                            <Col>#dinner</Col>
                            <Col>#dessert</Col>
                        </Row>
                        <ButtonToolbar className='mb-3'>
                            <ButtonGroup className='me-5'>
                                <Button variant='light' size='sm'>Edit</Button>
                                <Button variant='warning' size='sm'>Delete</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                {/* TODO: Radio Button, Active State: Remove from Favorites, Inactive / Default State: Add to Favorites. Update Favorites value in Recipes */}
                                <ToggleButton variant='danger' size='sm'>Add to Favorites</ToggleButton>
                            </ButtonGroup>
                        </ButtonToolbar>
                        <h5>Ingredients</h5>
                        {/* TODO: Unordered array list split with . or new line */}
                        <br />
                        <ul>
                            <li>
                                {recipe.ingredients}
                            </li>
                        </ul>
                        <h5>Directions</h5>
                        {/* TODO: Ordered array list split with . or new line */}
                        <br />
                        <ol>
                            <li>
                                {recipe.directions}
                            </li>
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