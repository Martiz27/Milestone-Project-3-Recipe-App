import { CurrentUser } from '../contexts/CurrentUser'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { Container, Form, FloatingLabel, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'
import { BsEgg, BsEggFill, BsEggFried } from 'react-icons/bs'
import Cookies from 'universal-cookie'

function LoginForm() {

    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    const navigate = useNavigate()

    const cookies = new Cookies()

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [validated, setValidated] = useState(false)

    const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        try {
            e.preventDefault()
            const form = e.currentTarget

            if (form.checkValidity() === false) {
                e.preventDefault()
                e.stopPropagation()
            }

            console.log(e)
            setValidated(true)
            const response = await fetch(`http://localhost:5000/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            })

            if (response.status === 200) {
                console.log('setting current user and cookie')
                setCurrentUser(credentials)
                console.log(`Current user is logging in... ${credentials.username}`)
                cookies.set('TOKEN', response.token, {
                    path: '/'
                })
                navigate('/recipes')
            }
            console.log(currentUser)
        } catch (err) {
            console.log('error: ' + err)
        }
    }

    return (
        <Container className='my-5 mx-auto pb-5'>
            <h1 className='text-warning'>Login</h1>
            <hr />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Label>
                    <h3 className='text-primary'>Enter Username and Password</h3>
                </Form.Label>
                <Row className='mb-3 g-3'>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                id='floatingUsername'
                                label='Username'>
                                <Form.Control
                                    required
                                    type='text'
                                    minLength='6'
                                    maxLength='32'
                                    placeholder='Username'
                                    id='username'
                                    name='username'
                                    value={credentials.username}
                                    onChange={e => setCredentials({ ...credentials, username: e.target.value })}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your username
                                </Form.Control.Feedback>
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
                                    minLength='6'
                                    maxLength='127'
                                    placeholder='Password'
                                    id='password'
                                    name='password'
                                    value={credentials.password}
                                    onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your password
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <ButtonToolbar className='d-flex justify-content-end gap-3'>
                    <Button variant='light' size='sm' onClick={() => navigate('/user/signup')}>
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