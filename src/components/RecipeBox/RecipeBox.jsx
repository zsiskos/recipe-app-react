import React, { Component } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeBox.css'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import recipesService from '../../utils/recipesService'
import userService from '../../utils/userService'
import Nav from 'react-bootstrap/Nav'


class RecipeBox extends Component {
    
    async componentDidMount() {
        const recipes = await recipesService.index();
        this.props.handleUpdateRecipes(recipes);
    }

    render() {
        let myRecipes = this.props.recipes.filter(myRecipe => {
            return myRecipe.createdBy === this.props.user._id

        });

        const myRecipeCard = myRecipes.map((recipe, idx) => (
            <RecipeCard key={idx} recipe={recipe} location={this.props.location} createdBy={recipe.createdBy}/>
        ));
        
        const recipeCard = this.props.recipes.map((recipe, idx) => (
            <RecipeCard key={idx} recipe={recipe} location={this.props.location} createdBy={recipe.createdBy}/>
        ));

        let recipeBox = this.props.user ?
            <Container>
               {this.props.location && this.props.location.pathname === "/account" && <Nav variant="tabs" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link href="/">{this.props.user.userName}'s Recipes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"> Saved Recipes</Nav.Link>
                    </Nav.Item>
                </Nav>}
                {this.props.location && this.props.location.pathname === "/account" && <CardColumns>
                    {myRecipeCard}
                </CardColumns>}
                {this.props.location && this.props.location.pathname === "/" && <CardColumns>
                    {recipeCard}
                </CardColumns>}
            </Container>
            :
            <Container>
                <CardColumns>
                    {recipeCard}
                </CardColumns>
            </Container>
        
        return (
            <div>
                {recipeBox}
            </div>

        )
    }
}

export default RecipeBox;