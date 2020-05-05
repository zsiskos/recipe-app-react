import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateRecipeForm extends Component {

    state = {
        title: '',
        category: '',
        ingredients: '',
        instructions: '',
        tags: [],
        createdBy: ''
    };
  
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
            {/* <div className="form-group">
              <div className="col-sm-12 text-center">
                <button className="btn btn-default" disabled={this.isFormInvalid()}>Submit</button>&nbsp;&nbsp;
                <Link to='/'>Cancel</Link>
              </div>
            </div> */}
          </form>
        </div>
      );
    }
}
  
  export default CreateRecipeForm;