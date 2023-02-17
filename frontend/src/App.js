import logo from './logo.svg';
import './App.css';

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
    // Starter React Code
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
