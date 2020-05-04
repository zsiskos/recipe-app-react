import React, { Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from '../../components/Header/Header'
import RecipeBox from '../../components/RecipeBox/RecipeBox'
import SignupPage from '../../pages/SignupPage/SignupPage'


class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <RecipeBox />
        <Route path='/signup'
          component={ SignupPage } />
      </div>
    );
  }
}

export default App;
