import React from 'react';
import NavBar from '../NavBar/NavBar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { format } from 'date-fns';
import './UserProfile.css';

const UserProfile = (props) => { 
    let date = new Date(props.user.createdAt);
    let formattedDate = format(date, "MMMM d, yyyy");   
    return (
        <Container className='con-head' fluid>
        <Container>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}
                fixed="top"
            />
            <Jumbotron>
            <Row className='profile'>
             <Col className='col-small-user'>
                <Image 
                    src={props.user.photo ? props.user.photo : "https://quiviracoalition.org/wp-content/uploads/2019/02/generic-person-icon-300x300.png"}
                    style={{
                      alignSelf: 'center',
                      height: 150,
                      width: 150,
                      borderWidth: 1,
                      borderRadius: 75,
                      border: '1px solid white'
                    }}
                />
                </Col>
                <Col className='col-bigger'>
                    <p className='userName'>{props.user.userName}</p>
                    <p>Food preferences:{props.user.foodPreferences}</p>
                    <p>Member since: {formattedDate}</p>                    
                </Col>
            </Row>
             
            </Jumbotron>
        </Container>
    </Container>
    );
}

export default UserProfile;