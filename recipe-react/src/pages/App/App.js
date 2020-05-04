import React, { Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import userService from '../../utils/userService'
import Header from '../../components/Header/Header'
import RecipeBox from '../../components/RecipeBox/RecipeBox'
import SignupPage from '../../pages/SignupPage/SignupPage'


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  render () {
    return (
      <div className="App">
        <Header />
        <RecipeBox />
        <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
            />
          }/>
      </div>
    );
  }
}

export default App;
