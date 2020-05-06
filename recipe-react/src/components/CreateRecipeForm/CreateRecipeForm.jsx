import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import recipeService from '../../utils/recipesService'
import './CreateRecipeForm.css'


class CreateRecipeForm extends Component {
    state = {
        title: '',
        category: '',
        ingredients: '',
        instructions: ''
    };

    handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await recipeService.create(this.state);
        this.props.handleNewRecipe();
        } catch (err) {
          this.props.updateMessage(err.message);
        }   
      } 
      
      handleChange = (e) => {
          this.props.updateMessage('');
          this.setState({
            [e.target.name]: e.target.value
          });
      }

    render() {
      return (
        <div>
          <header className="header-footer">Create a new recipe!</header>
          <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Recipe Title" value={this.state.title} name="title" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Category" value={this.state.category} name="category" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Ingredients" value={this.state.ingredients} name="ingredients" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Instructions" value={this.state.instructions} name="instructions" onChange={this.handleChange} />
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
                  to='/'
                >
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      );
    }
}
  
  export default CreateRecipeForm;