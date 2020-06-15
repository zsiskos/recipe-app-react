import React from 'react'
import Card from 'react-bootstrap/Card'
import './RecipeCard.css'
import { Link } from 'react-router-dom';

const RecipeCard = props => {
  
    return (
          <Card >
            <Link to={`/recipe/${props.recipe._id}`}>
              <Card.Img 
                  variant="top"
                  src={props.recipe.photo[0] ? props.recipe.photo[0] : 'https://i.imgur.com/51COkw0.png'}
              />
              <Card.Body>
                  <Card.Title>{props.recipe.title} ({props.recipe.category})</Card.Title>
                  <Card.Text>{props.recipe.tags}</Card.Text>
                  <Card.Text>Created by: {props.recipe.createdBy}</Card.Text>
              </Card.Body>
            </Link>
        </Card>
    );
}

export default RecipeCard;