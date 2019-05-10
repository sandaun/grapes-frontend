import React, { Component } from "react";
// import SearchItem from "./SearchItem";
import WineModal from "./wine-modal"
import { Link, withRouter } from "react-router-dom";
import { Container, Button, Modal, Card, ButtonToolbar} from 'react-bootstrap';

class Home extends Component {

  state = { 
    modalShow: false, 
  };

  handleClick = (event) => {
    console.log('hello');
    return <Link to={"/login"}></Link>
  }

  render () {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <>
        <Container className="home-background">
          <div className="vertical-center">
            <div className="test">
              <div><h1 className="text-danger display-1">grapes</h1></div>
              {/* <div>
                <div><p>Pair Wine with Food </p><Link to={"/wine"}> Wine ME! </Link></div>
                <div><p>Pair Food with Wine </p><Link to={"/food"}> I'm Hungry </Link></div>
              </div><br></br> */}

              <Card style={{ width: '18rem' }} bg="danger" text="dark" className="mb-2">                  
                {/* <Card.Body> */}
                  <Card.Img src="images/wine_glass.jpg" alt="Card image" />
                  <Card.ImgOverlay>
                  <Card.Title>WINE</Card.Title>
                  <Card.Text>
                    I know what you're thinking... Let's find the perfect pairing for your bottle!
                  </Card.Text>
                  {/* <Link to={"/wine"}>  */}
                    <Button 
                      variant="primary"
                      onClick={() => this.setState({ modalShow: true })}
                    >
                      I'm thirsty
                    </Button>
                  {/* </Link> */}
                  </Card.ImgOverlay>
                {/* </Card.Body> */}
              </Card>

                <WineModal
                  show={this.state.modalShow}
                  onHide={modalClose}
                />
                         
              <div>
                <Button onClick={() => {this.props.history.push('/login')} }>Login</Button>
                <div><br></br><Link to={"/signup"}> or Sign up</Link></div>
                {/* <Button onClick={() => {this.props.history.push('/signup')} }>Signup</Button> */}
              </div>

            </div>
          </div>
          
          {/* <SearchItem title='Wine'/>
          <SearchItem title='Food'/>
          <SearchItem title='Grape'/> */}
        </Container>
      </>
    );
  }
}

export default withRouter(Home);


