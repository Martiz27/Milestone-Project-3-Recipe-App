import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Routes, Route } from 'react-router-dom'

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
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <StickyFooter />
      <RecipeIndex />
    </div>

    // TODO: Finish Building Out SRC Components
    // <CurrentUserProvider>
    //   <BrowserRouter>
    //     <StickyFooter />
    //     <Routes>
    //       <Route exact path='/' component={WelcomePage} />
    //       <Route exact path='/signup' component={SignUpForm} />
    //       <Route exact path='/login' component={LoginForm} />
    //       <Route exact path='/recipes' component={RecipeIndex} />
    //       <Route exact path='/recipes/:id' component={CurrentRecipe} />
    //       <Route exact path='/recipes/new' component={NewRecipeForm} />
    //       <Route exact path='/recipes/:id/edit' component={EditRecipeForm} />
    //       <Route exact path='/' component={Error404} />
    //     </Routes>
    //   </BrowserRouter>
    // </CurrentUserProvider>
  );
}

export default App;
