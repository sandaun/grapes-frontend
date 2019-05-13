import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Pairing from "../../lib/wine-service";
import { Container, Card, Button } from 'react-bootstrap';


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

  capitalizeWineNames = (text) => {
    text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return text
  }

  render () {
    const { wineList } = this.state
    const { item } = this.props.match.params;
    return (
      <>
      <Container className="list-background vertical-center">
        <div className="mt-4">
          <h4 className="text-white">Pairing wines for <span className="list-text">{item}</span> food</h4>
        </div>
        <div>
          {wineList.map((wine, index) => {
            return (
              <div key={index}>
                <Card style={{ width: '18rem' }} className="mt-3 mb-3">
                  <Card.Img variant="top" src="/images/wine.jpg" />
                  <Card.Body>
                    <Card.Title>{this.capitalizeWineNames(wine)}</Card.Title>
                    <Card.Text>
                      {this.capitalizeWineNames(wine)}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      </Container>


      {/* <Container>
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
      </Container> */}
      </>
    );
  }
}

export default withRouter(WineList);
