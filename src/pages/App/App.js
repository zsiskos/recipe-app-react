import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../../utils/userService';
import recipeService from '../../utils/recipesService'
import Header from '../../components/Header/Header'
import RecipeBox from '../../components/RecipeBox/RecipeBox'
import SignupPage from '../../pages/SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage';
import CreateRecipePage from '../CreateRecipePage/CreateRecipePage';
import UserProfile from '../../components/UserProfile/UserProfile';
import NavBar from 'react-bootstrap/Nav'


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      recipes: []
    };
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleUpdateRecipes = (recipes) => {
    this.setState({ recipes });
  }

  handleNewRecipe = (recipe) => {
    console.log(recipe)
    this.setState(state => ({
      recipes: [...state.recipes, recipe]
    }),
    () => {
      this.props.history.push('/')})
  }

  async componentDidMount() {
    const recipes = await recipeService.index();
    this.setState({recipes});
  }

  render () {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => 
            <>
            <Header 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />

            <RecipeBox 
              user={this.state.user}
              recipes={this.state.recipes}
              handleUpdateRecipes={this.handleUpdateRecipes}
            />
            </>
          }/>
          <Route exact path='/account' render={({ location }) => 
            <>
            <UserProfile 
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
            <RecipeBox 
              location={location}
              user={this.state.user}
              recipes={this.state.recipes}
              handleUpdateRecipes={this.handleUpdateRecipes}

            />
            </>
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
          }/>
          <Route 
            path='/newRecipe' 
            render={({ history }) => (
              userService.getUser() ?
                <CreateRecipePage
                  history={history} 
                  handleNewRecipe={this.handleNewRecipe}
                />
              :
              <Redirect to='/login' />
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;