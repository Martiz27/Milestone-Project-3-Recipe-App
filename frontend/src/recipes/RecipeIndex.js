// currentuser context after login or sign up
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import { Container, Row, Col, Card, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { BsArrowRightShort, BsStarFill } from 'react-icons/bs'
import Masonry from 'react-masonry-css'
import { CurrentUser } from '../contexts/CurrentUser';

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
    const { currentUser, setCurrentUser } = useContext(CurrentUser)


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
        const popover = <Popover id={index}>
            <Popover.Header as='h3' className='text-primary'>{recipe.title} <span className='text-danger'>Tags</span></Popover.Header>
            <Popover.Body style={{ "minHeight": "10px", "minWidth": "100px" }} className='fst-italic'>
                {recipe.category.slice(1).map((tag, index) => {
                    return <Col key={index}># {tag}</Col>
                })}
            </Popover.Body>
        </Popover>

        return (
            <Card key={index} style={{ width: '300px' }}>
                <Card.Img src={recipe.image} className='img-fluid rounded-2' />
                <Card.ImgOverlay className='bg-dark bg-opacity-75 text-light '>
                    <Card.Title><h3>{recipe.title}</h3></Card.Title>
                    <Row className='fst-italic'>
                        {
                            recipe.category.length >= 2
                                ? <Col>#{recipe.category[0]} <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={popover}><span className='text-warning fw-normal text-decoration-underline'> more tags</span></OverlayTrigger></Col>
                                :
                                recipe.category.map((tag, index) => {
                                    return <Col key={index}># {tag}</Col>
                                })
                        }
                    </Row>
                    <Row className='ms-0.5 mb-3 position-absolute bottom-0 w-100'>
                        <Col className='me-4'>
                            <Button variant='light' size='sm' onClick={() => navigate(`/recipes/${recipe._id}`)}>
                                Open Recipe <BsArrowRightShort />
                            </Button>
                        </Col>
                        {
                            recipe.favorite
                                ? <Col>
                                    <Button variant='danger' size='sm'>
                                        <BsStarFill className='mb-1' /> In Favorites
                                    </Button>
                                </Col>
                                : <span></span>
                        }
                    </Row>
                </Card.ImgOverlay>
            </Card>
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