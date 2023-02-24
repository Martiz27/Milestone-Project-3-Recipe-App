import { useNavigate } from 'react-router'
import { Container, Card, Button, ButtonToolbar } from 'react-bootstrap'
import { BsEggFried, BsEgg } from 'react-icons/bs';

function About() {
    const navigate = useNavigate()

    return (
        <Container className='my-5 mx-auto pb-5 vh-100 d-flex '>
            <Card className='w-75 mx-auto align-self-center text-center'>
                <Card.Header>
                    <Card.Title>
                        <h1>About<span className='text-warning'> Feast Mode</span></h1>
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text className='fs-4 lh-lg'>
                        A Recipe App inspired by derailed conversations of ramen
                        <br />
                        In this app, you'll be able to store your most enjoyed recipes
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <p className='fw-bold'>COLLABORATORS</p>
                    <ButtonToolbar className='d-flex justify-content-between gap-3'>
                        <Button variant='light' size='sm' href='https://github.com/Mediczilla' target='_'>
                            <BsEggFried className='mb-1' /> Joshua Lopez
                        </Button>
                        <Button variant='warning' size='sm' href='https://github.com/Martiz27' target='_'>
                            <BsEgg className='mb-1' /> Martiz Ware
                        </Button>
                        <Button variant='light' size='sm' href='https://github.com/jhaywood86' target='_'>
                            <BsEggFried className='mb-1' /> Jamaine Haywood
                        </Button>
                        <Button variant='warning' size='sm' href='https://github.com/n-jaramillo' target='_'>
                            <BsEgg className='mb-1' /> Nikki Jaramillo
                        </Button>
                        <Button variant='light' size='sm' href='https://github.com/jbmangat' target='_'>
                            <BsEggFried className='mb-1' /> Jagbir Mangat
                        </Button>
                    </ButtonToolbar>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default About;