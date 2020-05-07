import React from 'react'
import Card from 'react-bootstrap/Card'
import './RecipeCard.css'


const RecipeCard = props => {
    let recipeCard = props.location === '/account' ?
        <Card >
            <Card.Img 
                variant="top"
                src='https://i.imgur.com/51COkw0.png'
                // src={props.recipe.photo ? props.recipe.photo : 'https://i.imgur.com/iPRrXaM.jpg'}
            />
            <Card.Body>
                <Card.Title>{props.recipe.title} ({props.recipe.category})</Card.Title>
                <Card.Text>{props.recipe.tags}</Card.Text>
                <Card.Text>Created by: {props.user.userName} ME</Card.Text>
            </Card.Body>
        </Card>
        :
        <Card >
            <Card.Img 
                variant="top"
                src='https://i.imgur.com/51COkw0.png'
                // src={props.recipe.photo ? props.recipe.photo : 'https://i.imgur.com/iPRrXaM.jpg'}
            />
            <Card.Body>
                <Card.Title>{props.recipe.title} ({props.recipe.category})</Card.Title>
                <Card.Text>{props.recipe.tags}</Card.Text>
                <Card.Text>Created by: {props.recipe.createdBy}</Card.Text>
            </Card.Body>
        </Card>

    return (
        <div>
            {recipeCard}
        </div>

        // <Card >
        //     <Card.Img 
        //         variant="top"
        //         src='https://i.imgur.com/51COkw0.png'
        //         // src={props.recipe.photo ? props.recipe.photo : 'https://i.imgur.com/iPRrXaM.jpg'}
        //     />
        //     <Card.Body>
        //         <Card.Title>{props.recipe.title} ({props.recipe.category})</Card.Title>
        //         <Card.Text>{props.recipe.tags}</Card.Text>
        //         <Card.Text>Created by: {props.recipe.createdBy}</Card.Text>
        //     </Card.Body>
        // </Card>
    );
}

export default RecipeCard;