import React, { Component } from 'react';
import './CreateRecipePage.css'
import CookingLottie from '../../components/CookingLottie/CookingLottie';
import { Link } from 'react-router-dom';
import recipeService from '../../utils/recipesService'


class CreateRecipePage extends Component {
  state = {
      message: '',
      title: '',
      category: '',
      ingredients: '',
      instructions: ''
    }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  handleChange = (e) => {
      this.updateMessage('');
      this.setState({
        [e.target.name]: e.target.value
      });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const recipe = await recipeService.create(this.state);
      this.props.handleNewRecipe(recipe);
      } catch (err) {
        this.updateMessage(err.message);
      }   
    } 


  render() {
    return (
      <div className='CreateRecipePage'>
        <div className="lottie">
          <CookingLottie />
        </div>
        <div>
          <header className="header-footer">Create a new recipe!</header>
          <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <div className="form-group">
              <div className="col-sm-12">
                <input 
                  className="form-control" 
                  placeholder="Recipe Title" 
                  value={this.state.title} 
                  name="title" 
                  onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Category" value={this.state.category} name="category" onChange={this.handleChange} 
              />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input 
                  className="form-control" 
                  placeholder="Ingredients" 
                  value={this.state.ingredients} 
                  name="ingredients" 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input 
                  className="form-control"
                  placeholder="Instructions" 
                  value={this.state.instructions} name="instructions" 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button 
                  type="submit"
                  className="btn btn-default"
                  disabled={this.state.invalidForm}
                >
                  Submit
                </button>
                &nbsp;&nbsp;
                <Link 
                  to='/account'
                >
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default CreateRecipePage;