import Masonry from 'react-masonry-css'
import { CurrentUser } from '../contexts/CurrentUser';
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import { Container, Row, Col, Card, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { BsArrowRightShort, BsStarFill } from 'react-icons/bs'

function RecipeIndex(data) {

    // Bootstrap Breakpoints Reference:
    // xxl: 1400
    // xl: 1200
    // lg: 992
    // md: 768
    // sm: 576
    // xs: <576

    // Masonry-CSS Breakpoints
    const masonryBreakpoint = {
        default: 4,
        1400: 3,
        1000: 2,
        770: 1,
    }

    // useContext for currentUser
    const { currentUser, setCurrentUser } = useContext(CurrentUser)

    const navigate = useNavigate()

    // useState for recipe
    const [recipes, setRecipes] = useState([])


    // useEffect for fetching recipe collection data
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/recipes`)
            const resData = await response.json()
            setRecipes(resData)
        }
        fetchData()
    }, [])

    // Map recipes to cards with popovers
    let recipesFormatted = recipes.map((recipe, index) => {

        // Set popover with additional tags, triggered on hover and focus
        const popover = <Popover id={index}>
            <Popover.Header as='h3' className='text-primary'>
                {recipe.title} <span className='text-danger'>Tags</span>
            </Popover.Header>
            <Popover.Body style={{ "minHeight": "10px", "minWidth": "100px" }} className='fst-italic'>
                {recipe.category.slice(1).map((tag, index) => {
                    return <Col key={index}># {tag}</Col>
                })}
            </Popover.Body>
        </Popover>

        return (
            <Card key={index} style={{ width: '300px' }}>

                {/* Recipe Image */}
                <Card.Img src={recipe.image} className='img-fluid rounded-2' />
                <Card.ImgOverlay className='bg-dark bg-opacity-75 text-light '>

                    {/* Recipe Title */}
                    <Card.Title><h3>{recipe.title}</h3></Card.Title>

                    {/* If recipe category has multiple items add popover */}
                    {/* Else display category on tag */}
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

                            {/* Navigate to CurrentRecipe component (show recipe) */}
                            <Button variant='light' size='sm' onClick={() => navigate(`/recipes/${recipe._id}`)}>
                                Open Recipe <BsArrowRightShort />
                            </Button>
                        </Col>

                        {/* TODO: Add Remove from and add to favorites small button */}
                        {/* If recipe is in favorites (favorite is true) display a favorites button */}
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

            {/* Pass Masonry-CSS breakpoints */}
            <Masonry breakpointCols={masonryBreakpoint}
                className="masonry-grid"
                columnClassName="masonry-grid_column">

                {/* Pass recipes map */}
                {recipesFormatted}
            </Masonry>
        </Container>
    )
}

export default RecipeIndex;