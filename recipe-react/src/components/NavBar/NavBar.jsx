import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search'

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Link to='' className='NavBar-link' onClick={props.handleLogout} >Log out</Link>
            <Search />
        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>Log in</Link>
            <Link to='/signup' className='NavBar-link'>Register</Link>
        </div>

        return (
            <div className='NavBar'>
              {nav}
            </div>
          );
}

export default NavBar;