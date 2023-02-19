// currentuser context after login or sign up
import { useState } from 'react'
import { Container, Row, Col, Card, Button, ButtonGroup, ButtonToolbar, ToggleButton } from 'react-bootstrap'

// TODO: Add Recipe Data Param
// Set up map to add recipes to Col tags within the Row tag
// Card.Header: Recipe Title
// Card.Img: Recipe Image
// Button Group with Edit Anchor, Delete Anchor, Favorites Radio
// Ingredients split into unordered list
// Directions split into ordered list
// Card.Footer: Categories
function RecipeIndex(recipe) {
    const [open, setOpen] = useState(false);
    return (
        <Container className='my-5 mx-5'>
            <Row xs={1} md={2} lg={4} className="g-3">
                {/* TODO: Each recipe is in a col */}
                <Col>
                    <Card style={{ width: '300px' }}>
                        {/* TODO: Get Recipe Name */}
                        <Card.Header><h3>Open Recipe Mockup</h3></Card.Header>
                        <Card.Img src='https://images.unsplash.com/photo-1576186726580-a816e8b12896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' className='img-fluid rounded-0'></Card.Img>
                        <Card.Body>
                            <Card.Text className='text-muted'>
                                {/* TODO: Fill row with col categories, if statements -> concat  #<category> */}
                                <Row>
                                    <Col>#breakfast</Col>
                                    <Col>#lunch</Col>
                                    <Col>#dinner</Col>
                                    <Col>#dessert</Col>
                                </Row>
                            </Card.Text>
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
                            <Card.Text>
                                <h5>Ingredients</h5>
                                {/* TODO: Unordered array list split with . or new line */}
                                <br />
                                <ul>
                                    <li>
                                        Ingredient Item
                                    </li>
                                </ul>
                            </Card.Text>
                            <Card.Text>
                                <h5>Directions</h5>
                                {/* TODO: Ordered array list split with . or new line */}
                                <br />
                                <ol>
                                    <li>
                                        Direction
                                    </li>
                                </ol>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-muted'>
                            Categories:
                            {/* TODO: Fill span with categories, if statements -> concat  #<category> */}
                            <span>
                                #breakfast
                            </span>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default RecipeIndex;