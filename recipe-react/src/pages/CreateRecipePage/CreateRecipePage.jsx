import React, { Component } from 'react';
import CreateRecipeForm from '../../components/CreateRecipeForm/CreateRecipeForm';
import './CreateRecipePage.css'


class CreateRecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className='CreateRecipePage'>
        <CreateRecipeForm 
            {...this.props} 
            updateMessage={this.updateMessage} 
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default CreateRecipePage;