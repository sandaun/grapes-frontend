import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import editProfile from "../lib/EditProfile-service"
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

class EditProfile extends Component {
  state = {
    username: this.props.user.username,
    email: this.props.user.email || '',
    redirect: false,
    validated: false,
  }

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const { username, email } = this.state
  //   editProfile.updateProfile({ username, email })
  // }

  handleSubmit(event) {
    const form = event.currentTarget;
    const { username, email } = this.state;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      editProfile.updateProfile({ username, email });
    }
    this.setState({ validated: true });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, email, validated } = this.state;
    return (
      <Container className="edit-background vertical-center">
        <div>
          <h3 className="mt-4 mb-4 text-white">Edit Profile</h3>
        </div>
        <div className="col-9">
          <Form
            noValidate
            validated={validated}
            onSubmit={e => this.handleSubmit(e)}
            className="text-center"
          >
            <Form.Group controlId="validationCustom01">
              {/* <Form.Label>Username</Form.Label> */}
              <Form.Control
                required
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Username is required.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Nice Username!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom02">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                // required
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}              
              />
              {/* <Form.Control.Feedback type="invalid">
                Email is required.
              </Form.Control.Feedback> */}
              <Form.Control.Feedback>Well done!</Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" className="edit-button">Update</Button>
          </Form>
          <div>
            <p className="row justify-content-center mt-4 text-white">
              Finished editing? Go 
              <Link to={"/"} className="ml-1 edit-text">Home</Link>
            </p>
          </div>
        </div>
      </Container>
    )
  }
}

export default withAuth(EditProfile);
