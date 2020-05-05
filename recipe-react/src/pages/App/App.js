import React, { Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import userService from '../../utils/userService'
import Header from '../../components/Header/Header'
import RecipeBox from '../../components/RecipeBox/RecipeBox'
import SignupPage from '../../pages/SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
    console.log(this.user)
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  render () {
    return (
      <div className="App">
        <Header 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <RecipeBox />
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
      </div>
    );
  }
}

export default App;
