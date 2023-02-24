import { Container, Card, Row, Col } from 'react-bootstrap'

// Import App Feature Photos
import category from '../images/demo/categoriesDisplay.png'
import recipeIndex from '../images/demo/recipeIndex.png'
import newRecipe from '../images/demo/newRecipe.png'
import newRecipeBP from '../images/demo/newRecipeBP.png'
import showRecipe from '../images/demo/showRecipe.png'
import showRecipeBP from '../images/demo/showRecipeBP.png'
import updateRecipe from '../images/demo/updateRecipe.png'
import updateRecipeBP from '../images/demo/updateRecipeBP.png'

import landing from '../images/demo/landingPage.png'
import signup from '../images/demo/userSignup.png'
import signupErr from '../images/demo/userSignupError.png'
import login from '../images/demo/userLogin.png'
import loginErr from '../images/demo/userLoginError.png'

// Features Page
function Features() {
    return (
        <Container className='my-5 mx-auto '>
            <Row className='g-5'>
                <Card.Title className='text-center text-danger'><h1 className='fw-bold'>Features</h1></Card.Title>

                {/* Landing Page Images */}
                <Card className='mx-auto align-self-center text-center p-3'>
                    <Card.Title>
                        <h3 className='text-warning text-center'>Landing Page</h3>
                    </Card.Title>

                    <Card.Body>
                        <Row><Card.Img src={landing} className='img-fluid rounded-2'></Card.Img></Row>
                        <hr />
                        <Row><Card.Img src={signupErr} className='img-fluid rounded-2'></Card.Img></Row>
                        <hr />
                        <Row><Card.Img src={signup} className='img-fluid rounded-2'></Card.Img></Row>
                        <hr />
                        <Row><Card.Img src={loginErr} className='img-fluid rounded-2'></Card.Img></Row>
                        <hr />
                        <Row><Card.Img src={login} className='img-fluid rounded-2'></Card.Img></Row>
                    </Card.Body>
                </Card>

                {/* Recipe Index Images */}
                <Card className='mx-auto align-self-center text-center p-3'>
                    <Card.Title><h3 className='text-warning text-center'>Recipe Index</h3></Card.Title>
                    <Card.Body>
                        <Row><Card.Img src={recipeIndex} className='img-fluid rounded-2'></Card.Img></Row>
                        <hr />
                        <Row><Card.Img src={category} className='img-fluid rounded-2'></Card.Img></Row>
                    </Card.Body>
                </Card>

                {/* Recipe Collection Images */}
                <Card className='mx-auto align-self-center text-center p-3'>
                    <Card.Title><h3 className='text-warning text-center'>Recipe Collection</h3></Card.Title>
                    <Card.Body>
                        <Row><Card.Img src={newRecipe} className='img-fluid rounded-2'></Card.Img></Row>
                        <hr />
                        <Row><Card.Img src={showRecipe} className='img-fluid rounded-2'></Card.Img></Row>
                        <hr />
                        <Row><Card.Img src={updateRecipe} className='img-fluid rounded-2'></Card.Img></Row>
                    </Card.Body>
                </Card>

                {/* Breakpoint Images */}
                <Card className='mx-auto align-self-center text-center p-3'>
                    <Card.Title><h3 className='text-warning text-center'>Breakpoints</h3></Card.Title>
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

export default Features;