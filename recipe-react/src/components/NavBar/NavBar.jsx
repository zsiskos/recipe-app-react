import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'


const NavBar = (props) => {
    let nav = props.user ?
        <div>
            
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>My Recipe Box</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link
                            to='/newRecipe'
                            className='NavBar-link'
                        >
                            New Recipe
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link
                            to=''
                            className='NavBar-link'
                        >
                            Account
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link
                            to=''
                            className='NavBar-link'
                            onClick={props.handleLogout}
                        >
                            Logout
                        </Link>
                    </Nav>
                    <Form inline>
                        <Search />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
        :
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link
                            to='/login'
                            className='NavBar-link'
                        >
                            Login
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link
                            to='/signup'
                            className='NavBar-link'
                        >
                            Register
                        </Link>
                    </Nav>
                    <Form inline>
                        <Search />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );

}

export default NavBar;