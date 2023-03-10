import { useNavigate } from 'react-router'
import { Container, Card, Button, ButtonToolbar } from 'react-bootstrap'
import brand from './images/brand.jpg'
import { BsEggFried, BsEgg } from 'react-icons/bs';

function WelcomePage() {
    const navigate = useNavigate()

    return (
        <Container className='my-5 mx-auto pb-5'>
            <Card className='w-75 mx-auto'>
                <Card.Img src={brand} className='img-fluid rounded-2' />
                <Card.ImgOverlay className='bg-dark bg-opacity-75 text-light '>
                    <Card.Title className='text-start position-absolute bottom-0 mb-3'>
                        <h1 className='text-warning'>FEAST MODE</h1>
                        <h3>A Recipe Library App</h3>
                    </Card.Title>
                    <ButtonToolbar className='d-flex justify-content-end gap-3'>
                        <Button variant='light' size='sm'  onClick={() => navigate('/users/login')}>
                            <BsEggFried className='mb-1'/> Login
                        </Button>
                        <Button variant='warning' size='sm' onClick={() => navigate('/users/signup')}>
                            <BsEgg className='mb-1'/> Sign Up
                        </Button>
                    </ButtonToolbar>
                </Card.ImgOverlay>
            </Card>
        </Container>
    )
}

export default WelcomePage;