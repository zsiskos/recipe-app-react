import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeBox from './components/RecipeBox/RecipeBox'

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>

          </p>
        </header>
        <RecipeBox />
      </div>
    );
  }
}

export default App;
