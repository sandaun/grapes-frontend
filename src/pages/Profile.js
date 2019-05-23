import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Container, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Back from "../components/BackButton";
import Recipes from "../lib/recipe-service";
import Footer from "../components/Footer"

class Profile extends Component {

  state = {
    favoriteRecipes: [],
  }

  async componentDidMount() {
    const getFavoriteRecipes = await Recipes.readFavorites().then(( data ) => data);
    this.setState({
      favoriteRecipes: getFavoriteRecipes,
    })
  }

  render() {
    const { username, email, name } = this.props.user;
    const { favoriteRecipes } = this.state;
    return (
    <>
    <div className="profile-header">
      <h1 className="display-4">User Profile</h1>
    </div>
    <Container className="profile-background vertical-center">
      <Back />
      <Card className="mt-5" style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/images/wine.jpg" />
        <Card.Body>
          <Card.Title className="text-center">Welcome {username} !</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Name: {name}</ListGroupItem>
          <ListGroupItem>Email: {email}</ListGroupItem>
          <ListGroupItem>Favorite recipies: {favoriteRecipes.length}</ListGroupItem>
          {/* <ListGroupItem><Link to='/favorites'>Favorites</Link></ListGroupItem> */}
        </ListGroup>
        <Card.Body className="text-center">
          <Card.Link href="/update" className="profile-text">Update Profile</Card.Link>
        </Card.Body>
      </Card>
      <Footer/>
    </Container>
      </>
    );
  }
}

export default withAuth(Profile);
