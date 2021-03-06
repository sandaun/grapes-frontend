import React, { Component } from "react";
import { withRouter, Redirect } from 'react-router-dom';
import Pairing from "../../lib/wine-service";
import { Container, Card, Button, Spinner } from 'react-bootstrap';
import { withAuth } from '../../lib/AuthProvider';
import Back from "../BackButton";
import Recipes from "./foodRecipes";
import Footer from "../../components/Footer"

class FoodList extends Component {

  state = {
    foodList: [],
    foodUrlImage: [],
    isLoading: true,
    isRenderingFoodList: true,
    individualFoodText: '',
  }

  async componentDidMount() {
    const { item } = this.props.match.params;
    const search = await Pairing.searchFood({ item }).then(( data ) => data);
    const { pairedFoodwithWine, foodUrlArray } = search;
    this.setState({
      foodList: pairedFoodwithWine,
      foodUrlImage: foodUrlArray,
      isLoading: false,
    })
  }

  getFoodUrlImages = (index) => {
    const { foodUrlImage } = this.state;
    return foodUrlImage[index];
  }

  capitalizeFoodNames = (text) => {
    text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return text
  }

  isRenderingFoodList = () => {
    this.setState({
      isRenderingFoodList: true,
    })
  }

  render () {
    const { foodList, isLoading, isRenderingFoodList } = this.state
    const { item } = this.props.match.params;
    const { isLoggedin } = this.props

    return isLoading ? (
      <div className="vertical-center list-background">
        <Spinner animation="border" role="status" variant="light">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    ) : isRenderingFoodList ? 
    ( 
      <>
      <Container className="list-background vertical-center">
        <Back />
        <div className="mt-4 text-center" style={{ width: '18rem' }}>
          <h4 className="text-white">Pairing food for <span className="list-text">{item}</span> wines</h4>
        </div>
        <div>
          {foodList.map((food, index) => {
            return (
              <div key={index}>
                <Card style={{ width: '18rem' }} className="mt-3 mb-3 list-cards">
                  <Card.Img variant="top" 
                    src={this.getFoodUrlImages(index) === null ? '/images/food/foodDefault.jpg' : this.getFoodUrlImages(index)} 
                  />
                  <Card.Body>
                    <Card.Title className="text-center">{this.capitalizeFoodNames(food)}</Card.Title>
                    <div className="list-buttons justify-content-center">
                      <Button onClick={() => this.setState({ isRenderingFoodList: false, individualFoodText: food })} variant="primary">Get recipe!</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
        <Footer />
      </Container>
      </>
    ) : isLoggedin ? ( 
          <Recipes individualFood={this.state.individualFoodText} isRenderingFoodList={this.isRenderingFoodList} />
        ) : ( 
              <Redirect to="/login" />
            )
  }
}

export default withAuth(withRouter(FoodList));
