import React, { Component } from 'react';
import CreateRecipeForm from '../../components/CreateRecipeForm/CreateRecipeForm';
import './CreateRecipePage.css'
import CookingLottie from '../../components/CookingLottie/CookingLottie';


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
        <div className="lottie">
          <CookingLottie />
        </div>
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