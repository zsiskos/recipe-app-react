import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import NavBar from '../NavBar/NavBar'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'


const Header = (props) => {  
    let header = props.user ?
    <Container className='con-head' fluid>
        <Container>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}
                fixed="top"
            />
            <Jumbotron>
                <h1>Add to your recipe box</h1>
                <p>
                    Create your own or search look though other people's recipes below
                </p>
                <p>
                <Button variant="outline-info" className='join-btn'>
                    <Link
                        to='/newRecipe'
                    >
                        Create
                    </Link>
                </Button>
                </p>
            </Jumbotron>
        </Container>
    </Container>
    :
    <Container className='con-head' fluid>
        <Container>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}
                fixed="top"
            />
            <Jumbotron>
                <h1>My Recipe Box</h1>
                <p>
                    Create, share, and find your favourite recipes. 
                </p>
                <p>
                <Button variant="outline-info" className='join-btn'>
                    <Link
                        to='/signup'
                    >
                        Join
                    </Link>
                </Button>
                </p>
            </Jumbotron>
        </Container>
    </Container>
    
    return (
        <div className='NavBar'>
            {header}
        </div>
    )
}

export default Header;