import { useNavigate } from 'react-router'
import { Container, Card, Button, ButtonToolbar } from 'react-bootstrap'
import { BsEggFried, BsEgg } from 'react-icons/bs';

function Features() {
    const navigate = useNavigate()

    return (
        <Container className='my-5 mx-auto pb-5 vh-100 d-flex '>
            Features Section
        </Container>
    )
}

export default Features;