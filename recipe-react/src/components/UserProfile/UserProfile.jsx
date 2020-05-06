import React from 'react';
import NavBar from '../NavBar/NavBar'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { format } from 'date-fns'

const UserProfile = (props) => { 
    let date = new Date(props.user.createdAt);
    let formattedDate = format(date, "MMMM d, yyyy");   
    return (
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
                    <p>Member since: {formattedDate}</p>
                    
                </Col>
            </Row>
        </Container>
    );
}

export default UserProfile;