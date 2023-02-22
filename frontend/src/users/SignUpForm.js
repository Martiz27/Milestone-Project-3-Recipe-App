import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, FloatingLabel, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'
import { BsEgg, BsEggFill, BsEggFried } from 'react-icons/bs'

function SignUpForm() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    async function handleSubmit(e) {
        e.preventDefault()
        await fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        navigate('/')
    }

    return (
        <Container className='my-5 mx-auto pb-5'>
            <h1 className='text-warning'>Sign Up</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Label>
                    <h3 className='text-primary'>
                        Personal Information
                        <br />
                        {user.firstName}
                        <br />
                        {user.lastName}
                        <br />
                        {user.email}
                    </h3>
                </Form.Label>
                <Row className='mb-3 g-3'>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                id='floatingFirstName'
                                label='First Name' >
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
                                id='floatingLastName'
                                label='Last Name' >
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
                            id='floatingEmail'
                            label='Email' >
                            <Form.Control
                                required
                                type='text'
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
                <Form.Label>
                    <h3 className='text-primary'>
                        Login Information
                        <br />
                        {user.username}
                        <br />
                        {user.password}
                    </h3>
                </Form.Label>
                <Row className='mb-3 g-3'>
                    <Form.Group>
                        <FloatingLabel
                            id='floatingUsername'
                            label='Username'>
                            <Form.Control
                                required
                                type='text'
                                placeholder='Username'
                                id='username'
                                name='username'
                                value={user.username}
                                onChange={e => setUser({ ...user, username: e.target.value })}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                id='floatingPassword'
                                label='Password'>
                                <Form.Control
                                    required
                                    type='text'
                                    placeholder='Password'
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
                    <Button variant='light' size='sm' onClick={() => navigate('/users/login')}>
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