import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Import Contexts
import PrivateRoutes from './contexts/PrivateRoutes';
import CurrentUserProvider from './contexts/CurrentUser'

// Import Info Components
import About from './info/About'
import Features from './info/Features'
import Help from './info/Help'

// Import Recipe Components
import CurrentRecipe from './recipes/CurrentRecipe'
import EditRecipeForm from './recipes/EditRecipeForm'
import NewRecipeForm from './recipes/NewRecipeForm'
import RecipeIndex from './recipes/RecipeIndex'

// Import User Components
import LoginForm from './users/LoginForm'
import SignUpForm from './users/SignUpForm'

// Import Src Components
import Error404 from './Error404';
import StickyFooter from './StickyFooter'
import WelcomePage from './WelcomePage'

function App() {
  return (
    <Router>
      <Fragment>
        <CurrentUserProvider>
          {/* <BrowserRouter> */}
          <StickyFooter />
          <Routes>
            {/* If there exists a token then allow access to private routes in /recipes path using PrivateRoutes */}
            <Route path='/' element={<PrivateRoutes component={{ Help, RecipeIndex, CurrentRecipe, NewRecipeForm, EditRecipeForm }} />} />
            <Route exact path='/recipes' element={<RecipeIndex />} />
            <Route exact path='/recipes/new' element={<NewRecipeForm />} />
            <Route exact path='/recipes/:recipeId' element={<CurrentRecipe />} />
            <Route exact path='/recipes/:recipeId/edit' element={<EditRecipeForm />} />
            <Route exact path='/recipes/info/help' element={<Help />} />

            {/* Public routes */}
            <Route exact path='/info/about' element={<About />} />
            <Route exact path='/info/features' element={<Features />} />
            <Route exact path='/auth/login' element={<LoginForm />} />
            <Route exact path='/user/signup' element={<SignUpForm />} />
            <Route exact path='/home' element={<WelcomePage />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
          {/* </BrowserRouter> */}
        </CurrentUserProvider>
      </Fragment>
    </Router>
  );
}

export default App;
