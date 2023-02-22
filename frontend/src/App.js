import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import WelcomePage from './WelcomePage'
import StickyFooter from './StickyFooter'
import Error404 from './Error404';
import RecipeIndex from './recipes/RecipeIndex'
import CurrentRecipe from './recipes/CurrentRecipe'
import NewRecipeForm from './recipes/NewRecipeForm'
import EditRecipeForm from './recipes/EditRecipeForm'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'

function App() {
  return (
    // <CurrentUserProvider>
      <BrowserRouter>
        <StickyFooter />
        <Routes>
          <Route exact path='/' element={<WelcomePage />} />
          <Route exact path='/users/signup' element={<SignUpForm />} />
          <Route exact path='/users/login' element={<LoginForm />} />
          <Route exact path='/recipes' element={<RecipeIndex />} />
          <Route exact path='/recipes/:recipeId' element={<CurrentRecipe />} />
          <Route exact path='/recipes/new' element={<NewRecipeForm />} />
          <Route exact path='/recipes/:recipeId/edit' element={<EditRecipeForm />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    //</CurrentUserProvider> 
  );
}

export default App;
