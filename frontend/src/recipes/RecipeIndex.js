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
            <Col key={index} className='p-1'>
                <Card style={{ width: '300px' }}>
                    {/* TODO: Get Recipe Name */}
                    <Card.Img src={recipe.image} className='img-fluid rounded-0'></Card.Img>
                    <Card.ImgOverlay>
                        <Card.Title><h3>{recipe.title}</h3></Card.Title>
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
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        )
    })

    return (
        <Container className='my-5 mx-5'>
            <Row xs={1} md={2} lg={3} xxl={4} className="g-3">
                {recipesFormatted}
            </Row>
        </Container>
    )
}

export default RecipeIndex;