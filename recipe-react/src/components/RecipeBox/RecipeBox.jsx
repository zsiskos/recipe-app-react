import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeBox.css'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

class RecipeBox extends Component {
    render() {
        return (
            <CardColumns>
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />
            </CardColumns>       
        )
    }
}

export default RecipeBox;