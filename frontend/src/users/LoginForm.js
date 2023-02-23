import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, FloatingLabel, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'
import { BsEgg, BsEggFill, BsEggFried } from 'react-icons/bs'
import { CurrentUser } from '../contexts/CurrentUser'

function LoginForm() {

    const navigate = useNavigate()

    const { setCurrentUser } = useContext(CurrentUser)

    // TODO: SET USER SCHEMA FIRST 
    // TODO: INITIALIZE USESTATE
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    // TODO:
    // API send to MONGODB verify if valid user and pw or invalid user or pw
    // if correct res
    // session on local storage  
    // usersession obj
    // user id in recipe
    // retrieve user list of recipes based on usersession id
    // userContext ^

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
                                id='floatingInput'
                                label='Email'>
                                <Form.Control
                                    required
                                    type='email'
                                    placeholder='Email'
                                    id='email'
                                    name='email'
                                    value={credentials.email}
                                    onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                id='floatingInput'
                                label='Password'>
                                <Form.Control
                                    required
                                    type='password'
                                    placeholder='Password'
                                    id='password'
                                    name='password'
                                    value={credentials.password}
                                    onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <ButtonToolbar className='d-flex justify-content-end gap-3'>
                    <Button variant='light' size='sm' type='submit' onClick={() => navigate('/users/signup')}>
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