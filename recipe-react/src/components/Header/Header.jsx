import React from 'react';
import NavBar from '../NavBar/NavBar'
import './Header.css'

const Header = (props) => {
    return (
        <div className='HeaderHome'>
            <img src="https://i.imgur.com/iPRrXaM.jpg" className="img-fluid" alt="ingredients to make spaghetti"/>
             <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}/>
        </div>
    )
}


export default Header;