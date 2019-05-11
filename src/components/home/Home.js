import React, { Component } from "react";
import WineModal from "./wine-modal"
import { Link, withRouter } from "react-router-dom";
import { Container, Button, Card } from 'react-bootstrap';

class Home extends Component {

  state = { 
    modalShow: false, 
    title: '',
    grape: ''
  };

  handleClick = (event) => {
    console.log('hello');
    return <Link to={"/login"}></Link>
  }

  render () {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <>
        <Container className="home-background vertical-center">
          <div>
            <div><h1 className="text-danger display-1 text-center">grapes</h1></div>
            <div>
              <Card style={{ width: '18rem' }} bg="white" text="dark" className="mb-2">                  
                <Card.Body>
                  {/* <Card.Img src="images/wine_glass.jpg" alt="Card image" /> */}
                  {/* <Card.ImgOverlay> */}
                  <Card.Title>WINE</Card.Title>
                  <Card.Text>
                    I know what you're thinking... Let's find the perfect pairing for your bottle!
                  </Card.Text>
                    <Button 
                      variant="danger"
                      onClick={() => this.setState({ modalShow: true, title: 'Wine', grape: 'red' })}
                      className=''
                      style={{ width: '6rem' }}
                    >
                      Red
                    </Button>
                    <Button 
                      variant="warning"
                      onClick={() => this.setState({ modalShow: true, title: 'Wine', grape: 'white' })}
                      className='ml-5'
                      style={{ width: '6rem' }}
                    >
                      White
                    </Button>
                  {/* </Card.ImgOverlay> */}
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem' }} bg="white" text="dark" className="mb-2">                  
                <Card.Body>
                  {/* <Card.Img src="images/wine_glass.jpg" alt="Card image" /> */}
                  {/* <Card.ImgOverlay> */}
                  <Card.Title>WINE</Card.Title>
                  <Card.Text>
                    I know what you're thinking... Let's find the perfect pairing for your bottle!
                  </Card.Text>
                    <Button 
                      variant="danger"
                      onClick={() => this.setState({ modalShow: true, title: 'Wine', grape: 'red' })}
                      className=''
                      style={{ width: '6rem' }}
                    >
                      Red
                    </Button>
                    <Button 
                      variant="warning"
                      onClick={() => this.setState({ modalShow: true, title: 'Wine', grape: 'white' })}
                      className='ml-5'
                      style={{ width: '6rem' }}
                    >
                      White
                    </Button>
                  {/* </Card.ImgOverlay> */}
                </Card.Body>
              </Card>

                <WineModal
                  show={this.state.modalShow}
                  onHide={modalClose}
                  title={this.state.title}
                  grape={this.state.grape}
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


