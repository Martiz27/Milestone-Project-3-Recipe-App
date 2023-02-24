import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form, FloatingLabel, Row, Col, Button, ButtonToolbar } from 'react-bootstrap'
import { BsEgg, BsEggFill, BsEggFried } from 'react-icons/bs'
// import Cookies from 'universal-cookie'

// Sign Up Form Page
function SignUpForm() {

    const navigate = useNavigate()

    // useState for initializing user
    const [user, setUser] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    // useState for form validation
    const [validated, setValidated] = useState(false)
    
    // const cookies = new Cookies()

    // Function to handle form submission
    // Checks validity of form and if the response status is OK then create a user and redirect to login page
    async function handleSubmit(e) {
        try {
            e.preventDefault()

            const form = e.currentTarget

            // Stop form submission if form is invalid
            if (form.checkValidity() === false) {
                e.preventDefault()
                e.stopPropagation()
            }

            // Set form validation to true
            setValidated(true)

            // Create user from form data
            await fetch(`http://localhost:5000/user/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            })

            navigate('/auth/login')

        } catch (err) {
            console.log(`Sign Up Form Error: ${err}`)
        }
    }

    return (
        <Container className='my-5 mx-auto pb-5'>
            <h1 className='text-warning'>Sign Up</h1>
            <hr />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                {/* Personal Information Section */}
                <Form.Label>
                    <h3 className='text-primary'>
                        Personal Information
                    </h3>
                </Form.Label>
                <Row className='mb-3 g-3'>

                    {/* First Name Field */}
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
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please enter your first name
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    {/* Last Name Field */}
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
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    Please enter your last name
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    {/* Email Field */}
                    <Form.Group>
                        <FloatingLabel
                            id='floatingEmail'
                            label='Email' >
                            <Form.Control
                                required
                                type='email'
                                minLength='6'
                                maxLength='127'
                                placeholder='Email'
                                id='email'
                                name='email'
                                value={user.email}
                                onChange={e => setUser({ ...user, email: e.target.value })}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email address with the following format: name@example.com
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <hr />

                {/* Credentials Input Section */}
                <Form.Label>
                    <h3 className='text-primary'>
                        Login Information
                    </h3>
                </Form.Label>
                <Row className='mb-3 g-3'>

                    {/* Username Field */}
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
                                value={user.username}
                                onChange={e => setUser({ ...user, username: e.target.value })}
                            />
                            <Form.Text id="usernameHelp" muted>
                                Your username can be between 6 and 32 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Please choose a username
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>

                    {/* Password Field */}
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                id='floatingPassword'
                                label='Password'>
                                <Form.Control
                                    required
                                    type='password'
                                    minLength='6'
                                    maxLength='127'
                                    placeholder='Password'
                                    id='password'
                                    name='password'
                                    value={user.password}
                                    onChange={e => setUser({ ...user, password: e.target.value })}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a password
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>

                    {/* Match Password Field */}
                    <Col md={12} lg={6}>
                        <Form.Group>
                            <FloatingLabel
                                id='floatingPassword'
                                label='Confirm Password'>
                                <Form.Control
                                    required
                                    type='password'
                                    minLength='6'
                                    maxLength='127'
                                    placeholder='Confirm Password'
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    pattern={user.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Passwords must match
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Col>
                    <Form.Text id="passwordHelp" muted>
                        Your password must be a minimum of 6 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji
                    </Form.Text>
                </Row>

                {/* Navigate to Login Page, Home Page, or Submit Sign Up Form */}
                <ButtonToolbar className='d-flex justify-content-end gap-3'>
                    <Button variant='light' size='sm' onClick={() => navigate('/auth/login')}>
                        <BsEggFried className='mb-1' /> Go to Login Page
                    </Button>
                    <Button variant='danger' size='sm' onClick={() => navigate('/home')}>
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