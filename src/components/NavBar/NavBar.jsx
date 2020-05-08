import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'


const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Navbar variant='light' bg="white" expand="lg">
                <Navbar.Brand>
                    <Link 
                        to='/account'
                    >
                        My Recipe Box
                    </Link>
                </Navbar.Brand>
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
                            to='/'
                            className='NavBar-link'
                        >
                            Home
                        </Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link
                            to='/'
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
            <Navbar varient='light' bg="light" expand="lg">
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
                            to=''
                            className='NavBar-link'
                        >
                            About
                        </Link>
                    </Nav>
                    <Form inline>
                        <Search />
                    </Form>
                </Navbar.Collapse>
            </Navbar>

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );

}

export default NavBar;