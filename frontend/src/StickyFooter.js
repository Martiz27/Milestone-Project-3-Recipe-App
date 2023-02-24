import { CurrentUser } from './contexts/CurrentUser';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, Button, Form, InputGroup } from 'react-bootstrap'
import { BsSearch, BsStarFill, BsPlus, BsEgg, BsEggFill } from 'react-icons/bs'
// import Cookies from 'universal-cookie'

// Sticky Footer Navigation Component
function StickyFooter() {

    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    const navigate = useNavigate()
    // const cookies = new Cookies()
    // const token = cookies.get('token')

    // Function to handle logout
    // Clear token, setCurrentUser to null, redirect to home page
    async function logout(e) {
        try {
            e.preventDefault()

            // TODO: TO REMOVE USER FROM STATE AND DESTROY TOKENS
            // let res = await fetch(`http://localhost:5000/user/logout`, {
            //     method: 'DELETE',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(currentUser)
            // })

            // Destroy token and setCurrentUser context to null
            console.log('Logging out... Destroying token...')
            // cookies.remove(token, { path: '/' })
            localStorage.clear()
            setCurrentUser(null)
        } catch (err) {
            console.log(`Logout Error: ${err}`)
        }
        navigate('/home')
    }

    // Set loginActions variable to return navbar if no user is logged in
    // Home, Features, About available
    let loginActions = (
        <>
            <Navbar bg='light' fixed='bottom' fill='true'>
                <Container>
                    <Navbar.Brand onClick={() => navigate('/home')}>
                        FEAST MODE
                    </Navbar.Brand>
                    <Nav variant='pills' className='justify-content-around g-2' style={{ flex: 1 }}>
                        <Nav.Item className='d-flex p-1'>
                            <Button variant='warning' size='sm' onClick={() => navigate('/info/features')}>
                                <BsEgg className='mb-1' /> Features
                            </Button>
                        </Nav.Item>
                        <Nav.Item className='d-flex p-1'>
                            <Button variant='warning' size='sm' type='submit' onClick={() => navigate('/info/about')}>
                                <BsEggFill className='mb-1' /> About
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

    // If currentUser is not empty return navbar if user is logged in
    // Recipes, Search, Favorites, Add Recipe, Help, and Logout available
    // TODO: Search Query Functionality
    // TODO: Favorites Query Functionality
    if (currentUser != null) {
        if (Object.keys(currentUser).length) {
            console.log(`Sticky Footer: Checking current user id... ${JSON.stringify(Object(currentUser))}`)

            loginActions = (
                <>
                    <Navbar collapseOnSelect expand='lg' bg='light' fixed='bottom' fill='true'>
                        <Container>
                            <Navbar.Brand onClick={() => navigate('/recipes')} className='text-danger'>
                                FEAST MODE
                            </Navbar.Brand>
                            <Navbar.Toggle className='my-2' />
                            <Navbar.Collapse id='responsive-navbar-nav' >
                                <Nav variant='pills' className='justify-content-around g-2' style={{ flex: 1 }}>
                                    <Nav.Item>
                                        <InputGroup className='d-flex p-1'>
                                            <InputGroup.Text id='search'><BsSearch /></InputGroup.Text>
                                            <Form.Control
                                                placeholder='Search for Category'
                                            />
                                        </InputGroup>
                                    </Nav.Item>
                                    <Nav.Item className='d-flex p-1'>
                                        <Button variant='light' size='sm' onClick={() => navigate('/recipes?favorites=true')}>
                                            <BsStarFill className='mb-1' /> Favorites
                                        </Button>
                                    </Nav.Item>
                                    <Nav.Item className='d-flex p-1'>
                                        <Button variant='light' size='sm' onClick={() => navigate('/recipes/new')}>
                                            <BsPlus className='mb-1' /> Add Recipe
                                        </Button>
                                    </Nav.Item>
                                    <Nav.Item className='d-flex p-1'>
                                        <Button variant='light' size='sm' onClick={() => navigate('/recipes/info/help')}>
                                            <BsEgg className='mb-1' /> Help
                                        </Button>
                                    </Nav.Item>
                                    <Nav.Item className='d-flex p-1'>
                                        <Button variant='danger' size='sm' type='submit' onClick={(e) => logout(e)}>
                                            <BsEggFill className='mb-1' /> Logout
                                        </Button>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </>
            )
        }
    }
    // Return the loginActions navbar
    return (
        <>
            {loginActions}
        </>
    )
}

export default StickyFooter;