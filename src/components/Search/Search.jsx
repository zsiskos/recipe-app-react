import React from 'react';
import Button from 'react-bootstrap/Button';

const Search = (props) => {
    return (
        <div className='Search'>
            <input type="text" className="form-control" placeholder="Search" name="" />
            &nbsp;&nbsp;&nbsp;
            <Button variant="outline-info">Search</Button>
        </div>
    )
}

export default Search;