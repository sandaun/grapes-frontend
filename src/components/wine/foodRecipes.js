import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Recipes from "../../lib/recipe-service";
import { Container, Card, Button, Spinner, ListGroup, ListGroupItem } from 'react-bootstrap';
import Back from "../BackButton";

class FoodList extends Component {

  state = {
    searchBaseUri: '',
    searchRecipiesResults: [],
    isLoading: true,
  }

  async componentDidMount() {
    const { individualFood } = this.props;
    const search = await Recipes.seaechRecipes({ individualFood }).then(( data ) => data);
    const { results, baseUri } = search;
    this.setState({
      searchBaseUri: baseUri,
      searchRecipiesResults: results,
      isLoading: false,
    })
  }

  capitalizeFoodNames = (text) => {
    text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return text
  }

  render () {
    const { searchRecipiesResults, searchBaseUri, isLoading } = this.state
    const { individualFood } = this.props;

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
                    <Button variant="primary">Favorite</Button>
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

export default withRouter(FoodList);
