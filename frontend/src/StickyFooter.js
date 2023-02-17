import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

// TODO: Make nav horizontally aligned and positioned on the bottom
function StickyFooter() {
    return (
        <Navbar bg='light' fixed='bottom' expand='md' fill className='justify-content-center'>
            <Container>
                <Navbar.Brand href=''>FEAST MODE</Navbar.Brand>
                <Nav variant='pills'>
                    <NavDropdown align='end' drop='up' title='Categories' id='categories-dropdown'>
                        <NavDropdown.Item>
                            Breakfast
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            Lunch
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            Dinner
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            Dessert
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link href=''>
                            Favorites
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href=''>
                            Add New Recipe
                        </Nav.Link>
                    </Nav.Item>

                    {/* TODO: User Context */}
                    <NavDropdown align='end' drop='up' title='User' id='user-dropdown'>
                        <NavDropdown.Item>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default StickyFooter;