import React, { Component } from "react";
import WineModal from "./wine-modal"
import FoodModal from "./food-modal"
import Footer from "../Footer"
import { withRouter } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import { Container, Button, Card } from 'react-bootstrap';

class Home extends Component {

  state = { 
    modalWineShow: false, 
    modalFoodShow: false, 
    title: '',
    grape: '',
    food: ''
  };

  render () {
    let modalWineClose = () => this.setState({ modalWineShow: false });
    let modalFoodClose = () => this.setState({ modalFoodShow: false });

    return (
      <>
        <div className="home-header">
          <h1 className="display-1">grapes</h1>
          <p>Find the perfect lover for your wine and food</p>
        </div>
        <Container className="home-background vertical-center">
          <div className="home-wrap-cards">
            <Card style={{ width: '18rem' }} bg="" text="dark" className="mb-2 home-cards">                  
              <Card.Body>
                <Card.Title>WINE</Card.Title>
                <Card.Text>
                  Match your wine with food!
                </Card.Text>
                  <div className="buttons-wine">
                    <Button 
                      onClick={() => this.setState({ modalWineShow: true, title: 'Wine', grape: 'red' })}
                      style={{ width: '7rem' }}
                    >
                      Red <span role="img" aria-label="RedWine">🍷</span>
                    </Button>
                    <Button 
                      onClick={() => this.setState({ modalWineShow: true, title: 'Wine', grape: 'white' })}
                      style={{ width: '7rem' }}
                    >
                      White <span role="img" aria-label="WhiteWine">🥂</span>
                    </Button>
                  </div>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} text="dark" className="mb-2 home-cards">                  
              <Card.Body>
                <Card.Title>FOOD</Card.Title>
                <Card.Text>
                  Match your food with wine!
                </Card.Text>
                <div className="buttons-wine">
                  <Button 
                    onClick={() => this.setState({ modalFoodShow: true, title: 'Food', food: 'meat' })}
                    style={{ width: '7rem' }}
                  >
                    Meat <span role="img" aria-label="Meat">🍖</span>
                  </Button>
                  <Button 
                    onClick={() => this.setState({ modalFoodShow: true, title: 'Food', food: 'cheese' })}
                    style={{ width: '7rem' }}
                  >
                    Cheese <span role="img" aria-label="Cheese">🧀</span>
                  </Button>
                  </div>
                  <div className="buttons-wine mt-2">
                    <Button 
                      onClick={() => this.setState({ modalFoodShow: true, title: 'Food', food: 'fish' })}
                      style={{ width: '7rem' }}
                    >
                      Fish <span role="img" aria-label="Fish">🐟</span>
                    </Button>
                    <Button 
                      onClick={() => this.setState({ modalFoodShow: true, title: 'Food', food: 'rice' })}
                      style={{ width: '7rem' }}
                    >
                      Rice <span role="img" aria-label="Pasta">🍚</span>
                    </Button>
                  </div>
                  <div className="buttons-wine mt-2">
                    <Button 
                      onClick={() => this.setState({ modalFoodShow: true, title: 'Food', food: 'cuisine' })}
                      style={{ width: '7rem' }}
                    >
                      Cuisine <span role="img" aria-label="Veggies">🇮🇹</span>
                    </Button>
                    <Button 
                      onClick={() => this.setState({ modalFoodShow: true, title: 'Food', food: 'dessert' })}
                      style={{ width: '7rem' }}
                    >
                      Dessert <span role="img" aria-label="Dessert">🧁</span>
                    </Button>
                  </div>
              </Card.Body>
            </Card>

              <WineModal
                show={this.state.modalWineShow}
                onHide={modalWineClose}
                title={this.state.title}
                grape={this.state.grape}
              />

              <FoodModal
                show={this.state.modalFoodShow}
                onHide={modalFoodClose}
                title={this.state.title}
                food={this.state.food}
              />

          </div>
          <Footer />
        </Container>
      </>
    );
  }
}

export default withAuth(withRouter(Home));


