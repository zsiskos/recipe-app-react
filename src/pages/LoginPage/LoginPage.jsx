import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService'
import './LoginPage.css'

class LoginPage extends Component {
    state = {
        email: '',
        pw: ''
    };
    
    handleChange = (e) => {
        this.setState({
            // Using ES2015 Computed Property Names
            [e.target.name]: e.target.value
        });
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await userService.login(this.state);
          this.props.handleSignupOrLogin();
          // Successfully signed up
          this.props.history.push('/account');
        } catch (err) {
          // Invalid user data (probably duplicate email)
          alert('Invalid');
        }
    }
    
    render() {
        return (
            <div className="LoginPage">
                <header className="header-footer">Log In</header>
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                <div className="form-group">
                    <div className="col-sm-12">
                    <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12 text-center">
                        <button className="btn-submit">Log In</button>&nbsp;&nbsp;&nbsp;
                        <Link className="btn-cancel" to='/'>Cancel</Link>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}
    
    export default LoginPage;
    
