import { CurrentUser } from '../contexts/CurrentUser';
import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Button, ButtonGroup, ButtonToolbar, ToggleButton, Toast, ToastContainer } from 'react-bootstrap'
import { BsPencilSquare, BsTrashFill, BsStarFill, BsStar } from 'react-icons/bs'

// Show Recipe Page
function CurrentRecipe() {

    const navigate = useNavigate()

    // useParams to access recipeId
    const { recipeId } = useParams()

    // useState for initializing the recipe
    const [recipe, setRecipe] = useState(null)

    // const [fav, setFav] = useState()

    // const { currentUser, setCurrentUser } = useContext(CurrentUser)

    // useEffect to fetch recipe data
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

    // TODO: Update Loading, Add Loading Component
    // if recipe is null return a loading screen
    if (recipe === null) {
        return <h1>Loading</h1>
    }

    // Delete recipe function, redirects to recipe index
    async function deleteRecipe() {
        // const deletedRecipeTitle = recipe.title
        await fetch(`http://localhost:5000/recipes/${recipe._id}`, { method: 'DELETE' })

        // TODO: If response is SEE OTHER, use timeoout to display delete toast confirmation then redirect
        // if (response.status === 303) {
        //     return (
        //         <ToastContainer className="p-3" position='top-end'>
        //             <Toast>
        //                 <Toast.Header closeButton={true}>
        //                     {/* <img
        //                         src="holder.js/20x20?text=%20"
        //                         className="rounded me-2"
        //                         alt=""
        //                     /> */}
        //                     <strong className="me-auto">Recipe Deleted</strong>
        //                 </Toast.Header>
        //                 <Toast.Body>{recipe.title} was deleted.</Toast.Body>
        //             </Toast>
        //         </ToastContainer >
        //     )
        // }
        // timeout
        navigate('/recipes')
    }

    // TODO: Update Favorite
    // Change to useEffect later

    // async function updateFavorite(e) {
    //     let toggleFavorite = { fav: true }
    //     e.preventDefault()
    //     await fetch(`http://localhost:5000/recipes/${recipe._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(toggleFavorite)
    //     })
    // }

    // function toggleFavorite() {
    //     if (recipe.favorite) {
    //         setFav(<Col><BsStar /> Add to Favorites</Col>)
    //     } else {
    //         setFav(<Col><BsStar /> Add to Favorites</Col>)
    //     }
    // }

    // Function to Convert Schema JSON Dates
    function convertDate(jsonCreated, jsonUpdated) {
        if (jsonCreated === jsonUpdated) {
            return <Col>Added on {new Date(jsonCreated).toDateString()}</Col>
        } else {
            return (
                <>
                    <Col>Added on {new Date(jsonCreated).toDateString()}</Col>
                    <Col>Updated on {new Date(jsonUpdated).toDateString()}</Col>
                </>
            )
        }
    }


    return (
        <Container className='mb-5 mx-auto p-5'>
            
            {/* Display Recipe title */}
            <Card.Title><h1 className='text-primary'>{recipe.title}</h1></Card.Title>
            <Card style={{ maxWidth: '1400px' }} className=''>
                <Row className='g-0'>
                    <Col sm={12} md={6} lg={4}>
                        <Card.Body>

                            {/* Display recipe image */}
                            <Card.Img src={recipe.image} className='img-fluid rounded-2'></Card.Img>

                            {/* Display recipe description and tags */}
                            <Card.Text className='fst-italic fw-bold p-1'>
                                {recipe.description}
                                <br />
                                <Row className='d-inline-flex fw-normal text-muted fst-italic my-1'>
                                    {recipe.category.map((tag, index) => {
                                        return <Col key={index}>#{tag}</Col>
                                    })}
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Col>

                    <Col sm={12} md={6} lg={8}>
                        <Card.Body>
                            <Row className='mb-4 text-center'>
                                <Col>

                                    {/* Navigate and action buttons for edit recipe form, delete, and favorites toggle */}
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
                                        TODO: Active State: Remove from Favorites,
                                        Inactive / Default State: Add to Favorites.
                                        Update Favorites value in Recipes
                                        */}
                                        {/* <ToggleButton variant='danger' size='md' type='checkbox' onClick={() => (recipe.favorite ? setFav(<Col><BsStarFill className='mb-1' /> Remove From Favorites</Col>) : setFav(<Col><BsStar className='mb-1' /> Add to Favorites</Col>))} checked={recipe.favorite} onChange={updateFavorite}>{fav}</ToggleButton> */}
                                    </ButtonToolbar>
                                </Col>
                            </Row>

                            {/* Split ingredients string and map to a new unordered list tag */}
                            <h5>Ingredients</h5>
                            <ul>
                                {recipe.ingredients.split(/\r?\n/).map((ingredient, index) => {
                                    return <li key={index} className='py-1'>{ingredient}</li>
                                })}
                            </ul>
                            <hr />

                            {/* Split directions string and map to a new ordered list tag */}
                            <h5>Directions</h5>
                            <ol>
                                {recipe.directions.split(/\r?\n/).map((direction, index) => {
                                    return <li key={index} className='py-1'>{direction}</li>
                                })}
                            </ol>
                        </Card.Body>
                    </Col>
                    <Card.Footer className='text-center text-muted fst-italic'>
                        <Col>Source: {recipe.source}</Col>
                        {convertDate(recipe.createdAt, recipe.updatedAt)}
                    </Card.Footer>
                </Row>
            </Card>
        </Container >
    )
}

export default CurrentRecipe;