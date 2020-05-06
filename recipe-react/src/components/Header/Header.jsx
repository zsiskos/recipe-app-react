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
    let header = props.user ?
    <Container className='Header'>
        <NavBar 
            user={props.user}
            handleLogout={props.handleLogout}
        />
        <Row>
            <Col className='col-small-user' sm={4}>
            <Image 
                src="https://quiviracoalition.org/wp-content/uploads/2019/02/generic-person-icon-300x300.png" 
                roundedCircle
                style={{
                    height: 171,
                    width: 180,
                    border: '1px solid grey',
                  }}
            />
            </Col>
            <Col className='col-bigger' sm={8}>
                <p className='userName'>{props.user.userName}</p>
                <p>Food preferences:{props.user.foodPreferences}</p>
                <p>Member since: {props.user.createdAt}</p>
            </Col>
        </Row>
    </Container>
    :
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
    return (
        <div className='NavBar'>
            {header}
        </div>
    )
}

export default Header;