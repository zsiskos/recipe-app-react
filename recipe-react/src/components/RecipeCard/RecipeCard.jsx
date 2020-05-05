import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'


const RecipeCard = props => {
    return (
        <Card>
            <Card.Img variant="top" src="https://i.imgur.com/iPRrXaM.jpg" />
            <Card.Body>
            <Card.Title>Title of the Recipe</Card.Title>
            <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default RecipeCard;