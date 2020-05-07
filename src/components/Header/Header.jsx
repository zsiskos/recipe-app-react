import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import NavBar from '../NavBar/NavBar'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'


const Header = (props) => {  
    let header = props.user ?
    <Container className='con-head'>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}
            />
    </Container>
    :
    <Container className='con-head' fluid>
        <Container>
            <Jumbotron>
                <h1>My Recipe Box</h1>
                <p>
                    Create, share, and find your favourite recipes. 
                </p>
                <p>
                <Button variant="light">
                    <Link
                        to='/signup'
                    >
                        Join
                    </Link>
                </Button>
                </p>
            </Jumbotron>
        </Container>
            <NavBar 
                    user={props.user}
                    handleLogout={props.handleLogout}
                    fixed="top"
            />

    </Container>
    
    return (
        <div className='NavBar'>
            {header}
        </div>
    )
}

export default Header;