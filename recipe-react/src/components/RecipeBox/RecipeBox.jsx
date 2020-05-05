import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeBox.css'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import recipesService from '../../utils/recipesService'


class RecipeBox extends Component {

    async componentDidMount() {
        const recipes = await recipesService.index();
        this.props.handleUpdatesRecipes(recipes);
    }

    render() {
        return (
            <Container>
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
            </Container>    
        )
    }
}

// class RecipeBox extends Component {
//     render() {
//         return (
//             <Container>
//                 <CardColumns>
//                     <RecipeCard />
//                     <RecipeCard />
//                     <RecipeCard />
//                     <RecipeCard />
//                     <RecipeCard />
//                     <RecipeCard />
//                     <RecipeCard />
//                     <RecipeCard />
//                 </CardColumns>   
//             </Container>    
//         )
//     }
// }

export default RecipeBox;