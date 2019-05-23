import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { withAuth } from "../../lib/AuthProvider";
import Recipes from "../../lib/recipe-service";
import Back from "../../components/BackButton";
import Footer from "../../components/Footer"
import { Container, Card, Button, Spinner, ListGroup, ListGroupItem } from 'react-bootstrap';

class FoodList extends Component {

  state = {
    isLoading: true,
    favoritesArray: [],
    favoritesDataArray: [],
  }

  async componentDidMount() {
    const getFavoriteRecipesIds = await Recipes.readFavorites().then(( data ) => data);
    const getFavoriteRecipesIdsToNumber = await getFavoriteRecipesIds.map(Number);
    const getFavoriteRecipesData = await this.getFavoritesInfo(getFavoriteRecipesIds);
    this.setState({
      isLoading: false,
      favoritesArray: getFavoriteRecipesIdsToNumber,
      favoritesDataArray: getFavoriteRecipesData,
    })
  }

  getFavoritesInfo = async (favorites) => {
    const favoritesData = [];

    for (let favoriteRecipe of favorites) {
      const receiveFavoritesData = await Recipes.getFavoriteRecipes(favoriteRecipe).then(( data ) => data);
      favoritesData.push(receiveFavoritesData);
    }
    return favoritesData;
  }

  capitalizeFoodNames = (text) => {
    text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return text
  }

  deleteRecipe = async (recipeId) => {
    const { favoritesArray } = this.state;
    const recipeIndex = favoritesArray.indexOf(recipeId);
    if (recipeIndex !== -1) {
      await Recipes.deleteFavoriteRecipe( recipeId ).then(( data ) => data);
      const getFavoriteRecipesIds = await Recipes.readFavorites().then(( data ) => data);
      const getFavoriteRecipesIdsToNumber = await getFavoriteRecipesIds.map(Number);
      const getFavoriteRecipesData = await this.getFavoritesInfo(getFavoriteRecipesIds);
      this.setState({
        favoritesArray: getFavoriteRecipesIdsToNumber,
        favoritesDataArray: getFavoriteRecipesData,
      })
    }
  }


  render () {
    const { isLoading, favoritesDataArray } = this.state;

    return isLoading ? (
      <div className="vertical-center list-background">
        <Spinner animation="border" role="status" variant="light">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    ) : (
      <>
        <Container className="list-background vertical-center">
          <Back />
          <div className="mt-4 text-center" style={{ width: '18rem' }}>
            <h4 className="text-white"> <span className="list-text">{this.props.user.username}</span>, check your favorite recipes</h4>
          </div>
          <div>
            {favoritesDataArray.map((favorites, index) => {
              return (
                <div key={index}>
                  <Card style={{ width: '18rem' }} className="mt-3 mb-3 recipe-background">
                    <Card.Img variant="top"
                      src={favorites.image}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">{this.capitalizeFoodNames(favorites.title)}</Card.Title>
                    </Card.Body>
                    <ListGroup>
                      <ListGroupItem className="recipe-background-lines"><span className="recipe-ingredients">Servings:</span> {favorites.servings} people</ListGroupItem>
                      <ListGroupItem className="recipe-background-lines"><span className="recipe-ingredients">Ready in:</span> {favorites.readyInMinutes} minutes</ListGroupItem>
                    </ListGroup>
                    <div className="list-favorite-buttons">
                      <div className="list-buttons justify-content-center mt-2 mb-2 w-100">
                        <Button 
                          onClick={() => {
                              this.deleteRecipe(favorites.id);
                            } 
                          }
                          className="w-75"
                          variant="primary">
                          Remove
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
          <Footer />
        </Container>
      </>
    );
  }
}

export default withAuth(withRouter(FoodList));
