import { Container, Card, Row, Col } from 'react-bootstrap'

// Import App Help Photos
import category from '../images/demo/categoriesDisplay.png'
import recipeIndex from '../images/demo/recipeIndex.png'
import newRecipe from '../images/demo/newRecipe.png'
import newRecipeBP from '../images/demo/newRecipeBP.png'
import showRecipe from '../images/demo/showRecipe.png'
import showRecipeBP from '../images/demo/showRecipeBP.png'
import updateRecipe from '../images/demo/updateRecipe.png'
import updateRecipeBP from '../images/demo/updateRecipeBP.png'

// Help Page
// TODO: Add Text and More Screenshots for How Tos or FAQs
function Help() {
    return (
        <Container className='my-5 mx-auto '>
            <Row className='g-5'>
                <Card.Title className='text-center text-danger'><h1 className='fw-bold'>Help</h1></Card.Title>

                {/* How to Navigate Recipes */}
                <Card className='mx-auto align-self-center text-center p-3'>
                    <Card.Title><h3 className='text-warning text-center'>Navigating The Recipe Index</h3></Card.Title>
                    <Card.Body>
                        <Row><Card.Img src={recipeIndex} className='img-fluid rounded-2'></Card.Img></Row>
                        <hr />
                        <Row><Card.Img src={category} className='img-fluid rounded-2'></Card.Img></Row>
                    </Card.Body>
                </Card>

                {/* How to Interact with Recipes */}
                <Card className='mx-auto align-self-center text-center p-3'>
                    <Card.Title><h3 className='text-warning text-center'>Interacting With The Recipe Collection</h3></Card.Title>
                    <Card.Body>
                        <Row><Card.Img src={newRecipe} className='img-fluid rounded-2'></Card.Img></Row>
                        <hr />
                        <Row><Card.Img src={showRecipe} className='img-fluid rounded-2'></Card.Img></Row>
                        <hr />
                        <Row><Card.Img src={updateRecipe} className='img-fluid rounded-2'></Card.Img></Row>
                    </Card.Body>
                </Card>

                {/* How to Interact with Recipes Breakpoints */}
                <Card className='mx-auto align-self-center text-center p-3'>
                    <Card.Title><h3 className='text-warning text-center'>Interacting With The Recipe Collection On Mobile Devices</h3></Card.Title>
                    <Card.Body>
                        <Row>
                            <Col><Card.Img src={newRecipeBP} className='img-fluid rounded-2'></Card.Img></Col>
                            <Col><Card.Img src={showRecipeBP} className='img-fluid rounded-2'></Card.Img></Col>
                            <Col><Card.Img src={updateRecipeBP} className='img-fluid rounded-2'></Card.Img></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Help;