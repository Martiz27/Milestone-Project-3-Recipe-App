// currentuser context after login or sign up
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Button, ButtonGroup, ButtonToolbar, ToggleButton } from 'react-bootstrap'
import { BsPencilSquare, BsTrashFill, BsStarFill, BsStar } from 'react-icons/bs'

function CurrentRecipe() {

    const navigate = useNavigate()

    const { recipeId } = useParams()

    const [recipe, setRecipe] = useState(null)

    const [fav, setFav] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/recipes/${recipeId}`)
            const resData = await response.json()
            if (response.ok) {
                setRecipe(resData)
            }
        }
        fetchData()
    }, [recipeId])

    useEffect(() => {

    })
    // TODO: Update Loading, Add Loading Component?
    if (recipe === null) {
        return <h1>Loading</h1>
    }

    async function deleteRecipe() {
        await fetch(`http://localhost:5000/recipes/${recipe._id}`, { method: 'DELETE' })
        navigate('/recipes')
    }

    async function updateFavorite(e) {
        let toggleFavorite = { fav: true }
        e.preventDefault()
        await fetch(`http://localhost:5000/recipes/${recipe._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(toggleFavorite)
        })
    }

    // function toggleFavorite() {
    //     if (recipe.favorite) {
    //         setFav(<Col><BsStar /> Add to Favorites</Col>)
    //     } else {
    //         setFav(<Col><BsStar /> Add to Favorites</Col>)
    //     }
    // }

    return (
        <Container className='mb-5 mx-auto p-5'>
            <Card.Title><h1 className='text-primary'>{recipe.title}</h1></Card.Title>
            <Card style={{ maxWidth: '1400px' }} className=''>
                <Row className='g-0'>
                    {/*className='col-xs-12 col-sm-12 col-md-12'*/}
                    <Col sm={12} md={6} lg={4}>
                        <Card.Body>
                            <Card.Img src={recipe.image} className='img-fluid rounded-2'></Card.Img>
                            <Card.Text className='fst-italic fw-bold p-1'>{recipe.description}</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col sm={12} md={6} lg={8}>
                        <Card.Body>
                            <Row className='mb-4 text-center'>
                                <Col>
                                    <ButtonToolbar className='d-inline-flex gap-3 justify-content-center'>
                                        <ButtonGroup className=''>
                                            <Button variant='light' size='md' onClick={() => navigate(`/recipes/${recipe._id}/edit`)}>
                                                <BsPencilSquare className='mb-1' /> Edit
                                            </Button>
                                            <Button variant='warning' size='md' type='submit' onClick={deleteRecipe}>
                                                <BsTrashFill className='mb-1' /> Delete
                                            </Button>
                                        </ButtonGroup>
                                        {/*
                                        TODO: Radio Button, Active State: Remove from Favorites,
                                        Inactive / Default State: Add to Favorites.
                                        Update Favorites value in Recipes
                                        */}
                                        <ToggleButton variant='danger' size='md' type='checkbox' onClick={() => (recipe.favorite ? setFav(<Col><BsStarFill className='mb-1' /> Remove From Favorites</Col>) : setFav(<Col><BsStar className='mb-1' /> Add to Favorites</Col>))} checked={recipe.favorite} onChange={updateFavorite}>{fav}</ToggleButton>
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                            <h5>Ingredients</h5>
                            <ul>
                                {recipe.ingredients.split(/\r?\n/).map((ingredient, index) => {
                                    return <li key={index} className='py-1'>{ingredient}</li>
                                })}
                            </ul>
                            <hr />
                            <h5>Directions</h5>
                            <ol>
                                {recipe.directions.split(/\r?\n/).map((direction, index) => {
                                    return <li key={index} className='py-1'>{direction}</li>
                                })}
                            </ol>
                        </Card.Body>
                    </Col>
                    <Card.Footer className='text-center text-muted fst-italic'>
                        Source: {recipe.source}
                        <Row className='text-muted fst-italic my-1'>
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
                    </Card.Footer>
                </Row>
            </Card>
        </Container >
    )
}

export default CurrentRecipe;