// currentuser context after login or sign up
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import { BsArrowRightShort } from 'react-icons/bs'
import Masonry from 'react-masonry-css'

function RecipeIndex(data) {

    // Bootstrap Breakpoints:
    // xxl: 1400
    // xl: 1200
    // lg: 992
    // md: 768
    // sm: 576
    // xs: <576

    // Masonry Breakpoints
    const masonryBreakpoint = {
        default: 4,
        1400: 3,
        1000: 2,
        770: 1,
    }

    const navigate = useNavigate()

    const [recipes, setRecipes] = useState([])

    // ${process.env.REACT_APP_SERVER_URL}
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/recipes`)
            const resData = await response.json()
            setRecipes(resData)
        }
        fetchData()
    }, [])

    let recipesFormatted = recipes.map((recipe, index) => {
        return (
            < Card style={{ width: '300px' }
            }>
                <Card.Img src={recipe.image} className='img-fluid rounded-0' />
                <Card.ImgOverlay className='bg-dark bg-opacity-75 text-light '>
                    <Card.Title><h3>{recipe.title}</h3></Card.Title>
                    <Card.Body>
                        <Row className='fst-italic fw-bold'>
                            {
                                recipe.breakfast
                                    ? <Col key='breakfast'> #breakfast</Col>
                                    : ' '
                            }
                            {
                                recipe.lunch
                                    ? <Col key='lunch'> #lunch</Col>
                                    : ' '
                            }
                            {
                                recipe.dinner
                                    ? <Col key='dinner'> #dinner</Col>
                                    : ' '
                            }
                            {
                                recipe.dessert
                                    ? <Col key='dessert'> #dessert</Col>
                                    : ' '
                            }
                        </Row>
                    </Card.Body>
                    <Row className='ms-1 mb-3 position-absolute bottom-0'>
                        <Button variant='light' size='sm' onClick={() => navigate(`/recipes/${recipe._id}`)}>Open Recipe <BsArrowRightShort /></Button>
                    </Row>
                </Card.ImgOverlay>
            </Card >
        )
    })

    return (
        <Container className='my-5 mx-auto pb-5'>
            <Masonry breakpointCols={masonryBreakpoint}
                className="masonry-grid"
                columnClassName="masonry-grid_column">
                {recipesFormatted}
            </Masonry>
        </Container>
    )
}

export default RecipeIndex;