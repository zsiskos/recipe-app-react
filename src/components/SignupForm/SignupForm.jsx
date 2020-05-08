import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';


class SignupForm extends Component {

    state = {
      userName: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  
    handleChange = (e) => {
      this.props.updateMessage('');
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await userService.signup(this.state);
        this.props.handleSignupOrLogin();
        this.props.history.push('/account');
      } catch (err) {
        this.props.updateMessage(err.message);
      }
    }
  
    isFormInvalid() {
      return !(this.state.userName && this.state.email && this.state.password === this.state.passwordConf);
    }
  
    render() {
      return (
        <div>
          <header className="header-footer">Sign Up</header>
          <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <div className="form-group">
              <div className="col-sm-12">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="User Name" 
                  value={this.state.userName} 
                  name="userName" 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Email" 
                  value={this.state.email} 
                  name="email" 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Password" 
                  value={this.state.password} 
                  name="password" 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Confirm Password" 
                  value={this.state.passwordConf} 
                  name="passwordConf" 
                  onChange={this.handleChange} 
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button 
                  className="btn-submit" 
                  disabled={this.isFormInvalid()}
                >
                    Sign Up
                </button>
                &nbsp;&nbsp;
                <Link 
                  className="btn-cancel" 
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
  
  export default SignupForm;