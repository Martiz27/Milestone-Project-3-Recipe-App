import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, Button, Form, InputGroup } from 'react-bootstrap'
import { BsSearch, BsStarFill, BsPlus, BsEgg, BsEggFill } from 'react-icons/bs'
// import Cookies from 'universal-cookie'
import { CurrentUser } from './contexts/CurrentUser';

// TODO: Make nav horizontally aligned and positioned on the bottom
function StickyFooter() {

    const navigate = useNavigate()

    // const cookies = new Cookies()

    // const token = cookies.get('token')

    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    console.log(`sticky before if: current user ${JSON.stringify(Object.keys(currentUser))}`)

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

            console.log('Logging out... Destroying token...')
            // cookies.remove(token, { path: '/' })
            localStorage.clear()
            setCurrentUser(null)
            navigate('/home')
        } catch (err) {
            console.log(`Logout Error: ${err}`)
        }
    }

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

    if (Object.keys(currentUser).length) {
        console.log(`sticky: current user ${JSON.stringify(Object.keys(currentUser))}`)
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

    return (
        <>
            {loginActions}
        </>
    )
}

export default StickyFooter;