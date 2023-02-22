import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, FormLabel, FloatingLabel, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'
import { BsEgg, BsEggFill, BsEggFried } from 'react-icons/bs'

function SignUpForm() {

    const navigate = useNavigate()

    // TODO: SET USER SCHEMA FIRST 
    // TODO: INITIALIZE USESTATE
    const [user, setUser] = useState({

    })

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://localhost:5000/users/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        navigate('/recipes')
    }

    return (
        <Container className='my-5 mx-auto pb-5'>
            <h1 className='text-warning'>Sign Up</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Label>
                    <h3 className='text-primary'>Personal Information</h3>
                </Form.Label>
                <Row className='mb-3 g-3'>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlID='floating-input'
                                label='First Name'
                            >
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='First Name'
                                    id='firstName'
                                    name='firstName'
                                    value={user.firstName}
                                    onChange={e => setUser({ ...user, firstName: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlID='floating-input'
                                label='Last Name'
                            >
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Last Name'
                                    id='lastName'
                                    name='lastName'
                                    value={user.lastName}
                                    onChange={e => setUser({ ...user, lastName: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
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
                                value={user.email}
                                onChange={e => setUser({ ...user, email: e.target.value })}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <hr />
                {/* TODO: MATCHING PASSWORD INPUT CONFIRMATION */}
                <FormLabel>
                    <h3 className='text-primary'>Login Information</h3>
                </FormLabel>
                <Row className='mb-3 g-3'>
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
                                    value={user.password}
                                    onChange={e => setUser({ ...user, password: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                controlID='floatingInput'
                                label='Confirm Password'>
                                <Form.Control
                                    required
                                    type='password'
                                    placeholder='Confirm Password'
                                    id='password'
                                    name='password'
                                    value={user.password}
                                    onChange={e => setUser({ ...user, password: e.target.value })}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                </Row>
                <ButtonToolbar className='d-flex justify-content-end gap-3'>
                    <Button variant='light' size='sm' onClick={() => navigate('/login')}>
                        <BsEggFried className='mb-1' /> Go to Login Page
                    </Button>
                    <Button variant='danger' size='sm' onClick={() => navigate('/')}>
                        <BsEggFill className='mb-1' /> Cancel
                    </Button>
                    <Button variant='warning' size='sm' type='submit' >
                        <BsEgg className='mb-1' /> Sign Up
                    </Button>
                </ButtonToolbar>
            </Form>
        </Container>
    )
}

export default SignUpForm;