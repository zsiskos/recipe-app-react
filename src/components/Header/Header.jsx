import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import NavBar from '../NavBar/NavBar'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Header = (props) => {  
    let header = props.user ?
    <Container className='Header'>
        <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
            sticky="top"
        />
    </Container>
    :
    <Container >
        <Row>
        <Col className='col-small' sm={4}>
            <Image src="https://i.imgur.com/YUceMfV.png" fluid />
                <Button variant="info">
                    <Link
                        to='/signup'
                        className='NavBar-link'
                    >
                        Join
                    </Link>
                </Button>
            </Col>
            <Col className='col-bigger' sm={8}>
                 <Image src="https://i.imgur.com/HKcS8Cx.png" fluid />
            </Col>
        </Row>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}
                sticky="top"
            />
    </Container>
    return (
        <div className='NavBar'>
            {header}
        </div>
    )
}

export default Header;