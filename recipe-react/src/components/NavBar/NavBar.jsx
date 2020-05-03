import React, { Component } from 'react';
import Search from '../Search/Search'

class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                NavBar
                <button> Login</button>
                <Search />
            </div>
        )
    }
}

export default NavBar;