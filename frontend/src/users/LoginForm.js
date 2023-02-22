import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, FormLabel, FloatingLabel, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'
import { BsEgg, BsEggFill, BsEggFried } from 'react-icons/bs'
import { CurrentUser } from '../contexts/CurrentUser'

function LoginForm() {

    const navigate = useNavigate()

    const {setCurrentUser} = useContext(CurrentUser)

    // TODO: SET USER SCHEMA FIRST 
    // TODO: INITIALIZE USESTATE
    const [userCred, setUserCred] = useState({

    })

    async function handleSubmit(e) {
        e.preventDefault()
        navigate('/recipes')
    }

    return (
        <Container className='my-5 mx-auto pb-5'>
            <h1 className='text-warning'>Login</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Label>
                    <h3 className='text-primary'>Enter Email and Password</h3>
                </Form.Label>
                <Row className='mb-3 g-3'>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlID='floatingInput'
                                label='Email'>
                                <Form.Control
                                    required
                                    type='email'
                                    placeholder='Email'
                                    id='email'
                                    name='email'
                                    value={userCred.email}
                                    onChange={e => setUserCred({ ...userCred, email: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlID='floatingInput'
                                label='Password'>
                                <Form.Control
                                    required
                                    type='password'
                                    placeholder='Password'
                                    id='password'
                                    name='password'
                                    value={userCred.password}
                                    onChange={e => setUserCred({ ...userCred, password: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <ButtonToolbar className='d-flex justify-content-end gap-3'>
                    <Button variant='light' size='sm' type='submit' onClick={() => navigate('/signup')}>
                        <BsEgg className='mb-1' /> Go to Sign Up Page
                    </Button>
                    <Button variant='danger' size='sm' onClick={() => navigate('/')}>
                        <BsEggFill className='mb-1' /> Cancel
                    </Button>
                    <Button variant='warning' size='sm' type='submit'>
                        <BsEggFried className='mb-1' /> Login
                    </Button>
                </ButtonToolbar>
            </Form>
        </Container>
    )
}

export default LoginForm;