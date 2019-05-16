import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';


import Navbar from "../components/Navbar";

class Profile extends Component {

  render() {
    const { username, email } = this.props.user;
    return (
    <>
    <div className="home-header">
      <h1 className="display-4">User Profile</h1>
      {/* <p>Find the perfect lover for your wine and food</p> */}
    </div>
    <Container className="login-background vertical-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/wine.jpg" />
        <Card.Body>
          <Card.Title className="text-center">Welcome {username} !</Card.Title>
          {/* <Card.Text>
            Find below your data :)
          </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Email: {email}</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body className="text-center">
          <Card.Link href="/update">Update Profile</Card.Link>
          {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
    </Container>



      <Navbar />
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <Link to="/update">Update profile</Link>
      </div>
      <Footer />
      </>
    );
  }
}

export default withAuth(Profile);
