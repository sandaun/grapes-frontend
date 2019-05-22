import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { withAuth } from "../../lib/AuthProvider";
import Recipes from "../../lib/recipe-service";
import { Container, Card, Button, Spinner, ListGroup, ListGroupItem } from 'react-bootstrap';

class FoodList extends Component {

  state = {
    searchBaseUri: '',
    searchRecipiesResults: [],
    isLoading: true,
    favoriteRecipes: [],
    isFavorited: true,
  }

  async componentDidMount() {
    const { individualFood } = this.props;
    const search = await Recipes.seaechRecipes({ individualFood }).then(( data ) => data);
    const { results, baseUri } = search;
    console.log(results);
    const getFavoriteRecipes = await Recipes.readFavorites().then(( data ) => data);
    console.log(getFavoriteRecipes, 'this should be favorites');
    this.setState({
      searchBaseUri: baseUri,
      searchRecipiesResults: results,
      isLoading: false,
      favoriteRecipes: getFavoriteRecipes,
    })
  }

  capitalizeFoodNames = (text) => {
    text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return text
  }

  handleBack = () => {
    this.props.isRenderingFoodList();
  }

  isRecipeFavorited = (recipeId) => {
    console.log(this.state.isFavorited)
    this.state.isFavorited ? this.favoriteRecipe(recipeId) : this.deleteRecipe(recipeId);
  }

  favoriteRecipe = async (recipeId) => {
    const { favoriteRecipes } = this.state;    
      await Recipes.addFavoriteRecipe( recipeId ).then(( data ) => data);
      console.log(favoriteRecipes, 'this is state favorite recipe array');
      this.setState({
        favoriteRecipes: [...favoriteRecipes, recipeId],
      })
  }

  deleteRecipe = async (recipeId) => {
    const { favoriteRecipes } = this.state;
    const recipeIndex = favoriteRecipes.indexOf(recipeId);
    if (recipeIndex !== -1) {
      const newFavorites = [...favoriteRecipes];
      newFavorites.splice(recipeIndex, 1);
      await Recipes.deleteFavoriteRecipe( recipeId ).then(( data ) => data);
      this.setState({
        favoriteRecipes: newFavorites,
      })
    }
  }

  render () {
    const { searchRecipiesResults, searchBaseUri, isLoading } = this.state
    const { individualFood } = this.props;
    console.log(this.state.favoriteRecipes, 'render')

    return isLoading ? (
      <div className="vertical-center list-background">
        <Spinner animation="border" role="status" variant="light">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    ) : (
      <>
      <Container className="list-background vertical-center">
        <div onClick={this.handleBack} className="fixed-top ml-3 mt-3 text-white">
          <i className="fa fa-arrow-circle-left fa-3x"></i>
        </div>
        <div className="mt-4 text-center" style={{ width: '18rem' }}>
          <h4 className="text-white">Recipies for <span className="list-text">{individualFood}</span></h4>
        </div>
        <div>
          {searchRecipiesResults.map((recipies, index) => {
            return (
              <div key={index}>
                <Card style={{ width: '18rem' }} className="mt-3 mb-3 recipe-background">
                  <Card.Img variant="top"
                    src={searchBaseUri + recipies.image}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">{this.capitalizeFoodNames(recipies.title)}</Card.Title>
                  </Card.Body>
                  <ListGroup>
                    <ListGroupItem className="recipe-background-lines"><span className="recipe-ingredients">Servings:</span> {recipies.servings} people</ListGroupItem>
                    <ListGroupItem className="recipe-background-lines"><span className="recipe-ingredients">Ready in:</span> {recipies.readyInMinutes} minutes</ListGroupItem>
                  </ListGroup>
                  <div className="list-buttons justify-content-center mt-2 mb-2">
                    <Button onClick={() => this.isRecipeFavorited(recipies.id)} variant="primary">Favorite</Button>
                  </div>
                  <div className="list-buttons justify-content-center mt-2 mb-2">
                    <Button onClick={() => this.deleteRecipe(recipies.id)} variant="primary">DELETE</Button>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </Container>
      </>
    );
  }
}

export default withAuth(withRouter(FoodList));
