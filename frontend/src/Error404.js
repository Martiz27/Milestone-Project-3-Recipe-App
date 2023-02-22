import { useNavigate } from 'react-router'
import { Container, Card, Row, Button } from 'react-bootstrap'
import errorImg from './images/error404.jpg'
import { BsArrowLeftShort } from 'react-icons/bs';

function Error404() {
    const navigate = useNavigate()

    return (
        <Container className='my-5 mx-auto pb-5'>
            <Card className='w-75 mx-auto'>
                <Card.Img src={errorImg} className='img-fluid rounded-2' />
                <Card.ImgOverlay className='bg-dark bg-opacity-75 text-light text-center'>
                    <Card.Title><h1 className='text-warning'>404</h1></Card.Title>
                    <Card.Body>
                        <Card.Text>
                            <h3>Oops! Looks like the page you were looking for was removed or is temporary not available</h3>
                        </Card.Text>
                        <Row className='mb-3 position-absolute bottom-0'>
                            <Button variant='light' size='sm' onClick={() => navigate(-1)}><BsArrowLeftShort /> Go Back </Button>
                        </Row>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </Container>
    )
}

export default Error404;