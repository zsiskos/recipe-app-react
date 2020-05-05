import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import NavBar from '../NavBar/NavBar'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const Header = (props) => {
    return (
        <Container>
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
                <Col className='col-bigger' sm={8}><Image src="https://i.imgur.com/iPRrXaM.jpg" fluid /></Col>
            </Row>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}
            />
        </Container>
    )
}


export default Header;