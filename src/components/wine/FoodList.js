import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Pairing from "../../lib/wine-service";
import { Container, Card, Button } from 'react-bootstrap';

class FoodList extends Component {

  state = {
    foodList: [],
  }

  async componentDidMount() {
    const { item } = this.props.match.params;
    const search = await Pairing.searchFood({ item }).then(( data ) => data.pairings);
    this.setState({
      foodList: search,
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
    const { foodList } = this.state
    const { item } = this.props.match.params;
    return (
      <>
      <Container className="list-background vertical-center">
        <div className="mt-4" >
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
              <div key={index} className="">
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
