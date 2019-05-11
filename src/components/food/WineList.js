import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Pairing from "../../lib/wine-service";
import { ListGroup, Container } from 'react-bootstrap';

class WineList extends Component {

  state = {
    wineList: [],
  }

  async componentDidMount() {
    const { item } = this.props.match.params;
    const search = await Pairing.searchWine({ item }).then(( data ) => data.pairedWines);
    this.setState({
      wineList: search,
    })
  }

  render () {
    const { wineList } = this.state
    const { item } = this.props.match.params;
    return (
      <>
      <Container>
        <div>{`This is wineList with ${item} ingredient`}</div>
        <div>
            <ListGroup variant="" defaultActiveKey="#link">
              {wineList.map((wine, index) => {
                return <ListGroup.Item className="test" action href="#link1" key={index}>
                  {wine}
                  <img src="/images/wine.jpg" style={{ width: '18rem' }} alt='wine'/>
                </ListGroup.Item>
              })}
            </ListGroup>
        </div>
      </Container>
      </>
    );
  }
}

export default withRouter(WineList);
