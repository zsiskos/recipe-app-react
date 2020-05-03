import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeBox from '../../components/RecipeBox/RecipeBox'
import NavBar from '../../components/NavBar/NavBar'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          My Recipe Box
        </header>
        <NavBar />
        <RecipeBox />
      </div>
    );
  }
}

export default App;
