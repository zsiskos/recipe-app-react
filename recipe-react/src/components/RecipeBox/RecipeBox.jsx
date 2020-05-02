import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'

class RecipeBox extends Component {
    render() {
        return (
            <div className='RecipeBox'>
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </div>
        )
    }
}

export default RecipeBox;