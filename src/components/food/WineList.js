import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Pairing from "../../lib/wine-service";
import { Container, Card, Spinner } from 'react-bootstrap';
import Back from "../BackButton";
import Footer from "../../components/Footer"

class WineList extends Component {

  state = {
    wineList: [],
    isLoading: true,
  }

  async componentDidMount() {
    const { item } = this.props.match.params;
    const search = await Pairing.searchWine({ item }).then(( data ) => data);
    const { pairedWines } = search;
    this.setState({
      wineList: pairedWines,
      isLoading: false,
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
    const { wineList, isLoading } = this.state
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
          <h4 className="text-white">Pairing wines for <span className="list-text">{item}</span> food</h4>
        </div>
        <div>
          {wineList.map((wine, index) => {
            return (
              <div key={index}>
                <Card style={{ width: '18rem' }} className="mt-3 mb-3 list-cards">
                  <Card.Img variant="top" src="/images/wine.jpg" />
                  <Card.Body>
                    <Card.Title className="text-center">{this.capitalizeWineNames(wine)}</Card.Title>
                    {/* <div className="list-buttons justify-content-center">
                      <Button variant="primary">Get Wine!</Button>
                    </div> */}
                  </Card.Body>
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

export default withRouter(WineList);
