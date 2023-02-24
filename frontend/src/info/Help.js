import { useNavigate } from 'react-router'
import { Container, Card, Button, ButtonToolbar } from 'react-bootstrap'

function Help() {
    const navigate = useNavigate()

    return (
        <Container className='my-5 mx-auto pb-5 vh-100 d-flex '>
            Help Section
        </Container>
    )
}

export default Help;