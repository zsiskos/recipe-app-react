import React, { Component } from 'react';

const Search = (props) => {
    return (
        <div className='Search'>
            <form className="form-horizontal" >
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Search" name="" />
              </div>
            </div>
            </form>
        </div>
    )
}

export default Search;