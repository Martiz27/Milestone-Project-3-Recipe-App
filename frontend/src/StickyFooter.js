import { useNavigate } from 'react-router-dom'
import { Container, Navbar, Nav, Button, Form, InputGroup } from 'react-bootstrap'
import { BsSearch, BsStarFill, BsPlus, BsEgg, BsEggFill } from 'react-icons/bs'
import Cookies from 'universal-cookie'

// TODO: Make nav horizontally aligned and positioned on the bottom
function StickyFooter() {
    const navigate = useNavigate()

    const cookies = new Cookies()

    const token = cookies.get('TOKEN')

    const logout = () => {
        // destroy cookie
        cookies.remove('TOKEN', { path: '/' })
        navigate('/')
    }

    return (
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
                            <Button variant='light' size='sm' onClick={() => navigate('/')}>
                                <BsStarFill className='mb-1' /> Favorites
                            </Button>
                        </Nav.Item>
                        <Nav.Item className='d-flex p-1'>
                            <Button variant='light' size='sm' onClick={() => navigate('/recipes/new')}>
                                <BsPlus className='mb-1' /> Add Recipe
                            </Button>
                        </Nav.Item>
                        <Nav.Item className='d-flex p-1'>
                            <Button variant='light' size='sm' onClick={() => navigate('/')}>
                                <BsEgg className='mb-1' /> Help
                            </Button>
                        </Nav.Item>
                        {/* TODO: Update Navigate Path For Logout Button */}
                        <Nav.Item className='d-flex p-1'>
                            <Button variant='danger' size='sm' type='submit' onClick={() => logout()}>
                                <BsEggFill className='mb-1' /> Logout
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default StickyFooter;