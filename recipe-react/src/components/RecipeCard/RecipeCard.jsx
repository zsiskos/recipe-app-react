import React from 'react'
import Card from 'react-bootstrap/Card'


const RecipeCard = props => {
    return (
        <Card>
            <Card.Img 
                variant="top" 
                src={props.recipe.photo ? props.recipe.photo : 'https://i.imgur.com/iPRrXaM.jpg'}
            />
            <Card.Body>
            <Card.Title>{props.recipe.title} ({props.recipe.category})</Card.Title>
            <Card.Text>{props.recipe.tags}</Card.Text>
            <Card.Text>Created by: {props.recipe.createdBy}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default RecipeCard;