import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import './Header.css'

class Header extends Component {
    render() {
        return (
            //If not logged in show image and join with nav bar at bottom
            <div className='HeaderHome'>
                <img src="https://i.imgur.com/iPRrXaM.jpg" className="img-fluid" alt="ingredients to make spaghetti"/>
                <NavBar />
            </div>

            // //if logged in on /user show nav bar at top and user profile
            // <div className='UserProfile'>
            //     <NavBar />
            //    <UserProfile />
            // </div>

            // //if logged in and looking at recipe or create, just nav
            // <div className='HeaderHome'>
            //     <NavBar />
            // </div>

        )
    }
}

export default Header;