import React, { Component } from "react";
import WineModal from "./wine-modal"
import FoodModal from "./food-modal"
import { Link, withRouter } from "react-router-dom";
import { Container, Button, Card } from 'react-bootstrap';

class Home extends Component {

  state = { 
    modalWineShow: false, 
    modalFoodShow: false, 
    title: '',
    grape: '',
    food: ''
  };

  handleClick = (event) => {
    console.log('hello');
    return <Link to={"/login"}></Link>
  }

  render () {
    let modalWineClose = () => this.setState({ modalWineShow: false });
    let modalFoodClose = () => this.setState({ modalFoodShow: false });
    return (
      <>
        <Container className="home-background vertical-center">
          <div>
            <div><h1 className="text-danger display-1 text-center">grapes</h1></div>
            <div>
              <Card style={{ width: '18rem' }} bg="" text="dark" className="mb-2 home-cards">                  
                <Card.Body>
                  {/* <Card.Img src="images/wine_glass.jpg" alt="Card image" /> */}
                  {/* <Card.ImgOverlay> */}
                  <Card.Title>WINE</Card.Title>
                  <Card.Text>
                    Let's find the perfect pairing for your bottle!
                  </Card.Text>
                    <Button 
                      variant="danger"
                      onClick={() => this.setState({ modalWineShow: true, title: 'Wine', grape: 'red' })}
                      className=''
                      style={{ width: '6rem' }}
                    >
                      Red <span role="img" aria-label="RedWine">🍷</span>
                    </Button>
                    <Button 
                      variant="warning"
                      onClick={() => this.setState({ modalWineShow: true, title: 'Wine', grape: 'white' })}
                      className='ml-5'
                      style={{ width: '6rem' }}
                    >
                      White <span role="img" aria-label="WhiteWine">🥂</span>
                    </Button>
                  {/* </Card.ImgOverlay> */}
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }} text="dark" className="mb-2 home-cards">                  
                <Card.Body>
                  {/* <Card.Img src="images/wine_glass.jpg" alt="Card image" /> */}
                  {/* <Card.ImgOverlay> */}
                  <Card.Title>FOOD</Card.Title>
                  <Card.Text>
                    Hungry...? Get the matching wine for your food!
                  </Card.Text>
                    <Button 
                      variant="dark"
                      onClick={() => this.setState({ modalFoodShow: true, title: 'Food', food: 'meat' })}
                      className=''
                      style={{ width: '6rem' }}
                    >
                      Meat <span role="img" aria-label="Meat">🍖</span>
                    </Button>
                    <Button 
                      // variant="warning"
                      onClick={() => this.setState({ modalFoodShow: true, title: 'Food', food: 'cheese' })}
                      className='ml-4'
                      style={{ width: '7rem', background: 'green' }}
                    >
                      Cheese <span role="img" aria-label="Cheese">🧀</span>
                    </Button>
                  {/* </Card.ImgOverlay> */}
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
                          
              <div>
                <Button onClick={() => {this.props.history.push('/login')} }>Login</Button>
                <div><br></br><Link to={"/signup"}> or Sign up</Link></div>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default withRouter(Home);


