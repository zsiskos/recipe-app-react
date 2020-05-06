import React, { Component} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import userService from '../../utils/userService'
import Header from '../../components/Header/Header'
import RecipeBox from '../../components/RecipeBox/RecipeBox'
import SignupPage from '../../pages/SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage';
import CreateRecipePage from '../CreateRecipePage/CreateRecipePage';
import UserProfile from '../../components/UserProfile/UserProfile'

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
          <Route exact path='/account' render={({ history }) => 
            <>
            <UserProfile 
              user={this.state.user}
            />
            <RecipeBox 
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
          <Route path='/newRecipe' render={(props) => (
            <CreateRecipePage {...props}/>
          )}/>
        </Switch>
      </div>
    );
  }
}

export default App;