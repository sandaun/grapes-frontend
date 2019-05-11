import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Pairing from "../../lib/wine-service";
import { ListGroup, ListGroupItem, Container } from 'react-bootstrap';

// import SearchItem from "./SearchItem";

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

  render () {
    const { foodList } = this.state
    const { item } = this.props.match.params;
    return (
      <>
      <Container>
        <div>This is foodList with {item} wines</div>
        <div>
            <ListGroup variant="" defaultActiveKey="#link">
              {foodList.map((food, index) => {
                return <ListGroup.Item className="test" action href="#link1" key={index}>
                  {food}
                  <img src="/images/wine.jpg" style={{ width: '18rem' }}/>
                </ListGroup.Item>
              })}
            </ListGroup>
        </div>
        {/* <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action href="#link1">
            Link 1
          </ListGroup.Item>
          <ListGroup.Item action href="#link2" disabled>
            Link 2
          </ListGroup.Item>
        </ListGroup> */}
      </Container>
      </>
    );
  }
}

export default withRouter(FoodList);
