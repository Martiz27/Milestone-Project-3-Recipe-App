import { Container, Card, Button, ButtonToolbar } from 'react-bootstrap'
import { BsEmojiSmileUpsideDown, BsEmojiSmileUpsideDownFill, BsEmojiDizzyFill, BsEmojiSunglasses, BsEmojiWink } from 'react-icons/bs';

// About Page
function About() {
    return (
        <Container className='my-5 mx-auto pb-5 vh-100 d-flex '>
            <Card className='w-75 mx-auto align-self-center text-center'>
                <Card.Header>
                    <Card.Title>
                        <h1>About<span className='text-warning'> Feast Mode</span></h1>
                    </Card.Title>
                </Card.Header>
                <Card.Body>

                    {/* App About */}
                    <Card.Text className='fs-4 lh-lg'>
                        A Recipe App inspired by derailed conversations of ramen
                        <br />
                        In this app, you'll be able to store your most enjoyed recipes
                    </Card.Text>
                </Card.Body>

                {/* Collaborators Github Redirects to New Tab in Window */}
                <Card.Footer>
                    <p className='fw-bold'>COLLABORATORS</p>
                    <ButtonToolbar className='d-flex justify-content-between gap-3'>
                        <Button variant='danger' size='md' href='https://github.com/Mediczilla' target='_'>
                            <BsEmojiSunglasses className='mb-1' /> Joshua Lopez
                        </Button>
                        <Button variant='warning' size='md' href='https://github.com/Martiz27' target='_'>
                            <BsEmojiSmileUpsideDownFill className='mb-1' /> Martiz Ware
                        </Button>
                        <Button variant='success' size='md' href='https://github.com/jhaywood86' target='_'>
                            <BsEmojiWink className='mb-1' /> Jamaine Haywood
                        </Button>
                        <Button variant='warning' size='md' href='https://github.com/n-jaramillo' target='_'>
                            <BsEmojiDizzyFill className='mb-1' /> Nikki Jaramillo
                        </Button>
                        <Button variant='primary' size='md' href='https://github.com/jbmangat' target='_'>
                            <BsEmojiSmileUpsideDown className='mb-1' /> Jagbir Mangat
                        </Button>
                    </ButtonToolbar>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default About;