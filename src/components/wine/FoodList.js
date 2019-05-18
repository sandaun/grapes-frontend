import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Pairing from "../../lib/wine-service";
import { Container, Card, Button, Spinner } from 'react-bootstrap';
import Back from "../BackButton";

class FoodList extends Component {

  state = {
    foodList: [],
    foodUrlImage: [],
    isLoading: true,
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

  capitalizeFoodNames = (text) => {
    text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return text
  }

  render () {
    const { foodList, isLoading } = this.state
    const { item } = this.props.match.params;

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
          <h4 className="text-white">Pairing food for <span className="list-text">{item}</span> wines</h4>
        </div>
        {/* <div>
            <ListGroup variant="" defaultActiveKey="#link">
              {foodList.map((food, index) => {
                return <ListGroup.Item className="test" action href="#link1" key={index}>
                  {food}
                  <img src="/images/wine.jpg" style={{ width: '18rem' }} alt='food'/>
                </ListGroup.Item>
              })}
            </ListGroup>
        </div> */}

        <div>
          {foodList.map((food, index) => {
            return (
              <div key={index}>
                <Card style={{ width: '18rem' }} className="mt-3 mb-3">
                  <Card.Img variant="top" src="/images/wine.jpg" />
                  <Card.Body>
                    <Card.Title>{this.capitalizeFoodNames(food)}</Card.Title>
                    <Card.Text>
                      {this.capitalizeFoodNames(food)}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
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
