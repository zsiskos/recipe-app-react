import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search'

const NavBar = (props) => {
    let nav = props.user ?
    <div>
        <Link 
            to='' 
            className='NavBar-link' 
            onClick={props.handleLogout}
        >
            LOG OUT
        </Link>
        <Link 
            to='' 
            className='NavBar-link'
        >
            Create
        </Link>
        <Link 
            to='' 
            className='NavBar-link'
        >
            Account
        </Link>
        <Search />
    </div>
    :
    <div>
        <Link 
            to='/login' 
            className='NavBar-link'
        >
            Log in
        </Link>
        <Link 
            to='/signup'
            className='NavBar-link'
        > 
            Register
        </Link>
        <Search />
    </div>

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
}

export default NavBar;