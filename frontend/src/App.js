import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import WelcomePage from './WelcomePage'
import Features from './info/Features'
import About from './info/About'
import Help from './info/Help'
import StickyFooter from './StickyFooter'
import Error404 from './Error404';
import RecipeIndex from './recipes/RecipeIndex'
import CurrentRecipe from './recipes/CurrentRecipe'
import NewRecipeForm from './recipes/NewRecipeForm'
import EditRecipeForm from './recipes/EditRecipeForm'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'
import PrivateRoutes from './contexts/PrivateRoutes';

function App() {
  return (
    <Router>
      <Fragment>
        <CurrentUserProvider>
          {/* <BrowserRouter> */}
          <StickyFooter />
          <Routes>
            <Route path='/' element={<PrivateRoutes component={{ Help, RecipeIndex, CurrentRecipe, NewRecipeForm, EditRecipeForm }} />} />
            <Route exact path='/recipes/info/help' element={<Help />} />
            <Route exact path='/recipes' element={<RecipeIndex />} />
            <Route exact path='/recipes/:recipeId' element={<CurrentRecipe />} />
            <Route exact path='/recipes/new' element={<NewRecipeForm />} />
            <Route exact path='/recipes/:recipeId/edit' element={<EditRecipeForm />} />

            <Route exact path='/home' element={<WelcomePage />} />
            <Route exact path='/info/features' element={<Features />} />
            <Route exact path='/info/about' element={<About />} />
            <Route exact path='/user/signup' element={<SignUpForm />} />
            <Route exact path='/auth/login' element={<LoginForm />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
          {/* </BrowserRouter> */}
        </CurrentUserProvider>
      </Fragment>
    </Router>
  );
}

export default App;
