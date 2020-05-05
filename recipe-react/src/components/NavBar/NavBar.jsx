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
                <Navbar.Brand href="#home">My Recipe Box</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link
                                to=''
                                className='NavBar-link'
                            >
                                New Recipe
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                        <Link
                            to=''
                            className='NavBar-link'
                        >
                            Account
                        </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                to=''
                                className='NavBar-link'
                                onClick={props.handleLogout}
                            >
                                Logout
                            </Link>
                        </Nav.Link>
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

                        <Nav.Link>
                            <Link
                                to='/signup'
                                className='NavBar-link'
                            >
                                Register
                            </Link>
                        </Nav.Link>
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