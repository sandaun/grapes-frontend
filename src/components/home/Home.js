import React, { Component } from "react";
// import SearchItem from "./SearchItem";
import { Link, withRouter } from "react-router-dom";
import { Container, Button} from 'react-bootstrap';


class Home extends Component {

  handleClick = (event) => {
    console.log('hello');
    return <Link to={"/login"}></Link>
  }

  render () {
    return (
      <>
        <Container>
          <div className="vertical-center">
            <div className="test">
              <div><h1>grapes</h1></div>
              <div>
                <div><p>Pair Wine with Food </p><Link to={"/wine"}> Wine ME! </Link></div>
                <div><p>Pair Food with Wine </p><Link to={"/food"}> I'm Hungry </Link></div>
              </div><br></br>
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


