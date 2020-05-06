import React from 'react'
import Card from 'react-bootstrap/Card'


const RecipeCard = props => {
    return (
        <Card>
            <Card.Img variant="top" src="{{props.recipe.photo}}" />
            <Card.Body>
            <Card.Title>{props.recipe.title} ({props.recipe.category})</Card.Title>
            <Card.Text>{props.recipe.tags}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default RecipeCard;