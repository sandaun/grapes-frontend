import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Form, Button, Container } from 'react-bootstrap';

class Login extends Component {
  state = {
    username: "",
    password: "",
    validated: false,
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   const { username, password } = this.state;
  //   this.props.login({ username, password });
  // };

  handleSubmit(event) {
    const form = event.currentTarget;
    const { username, password } = this.state;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.props.login({ username, password });
    }
    this.setState({ validated: true });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, validated } = this.state;
    return (
      <>
      <Container className="login-background vertical-center">
        <div>
          <h3 className="mt-4 mb-4 text-white">Log in</h3>
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
                required
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={this.handleChange}              
              />
              <Form.Control.Feedback type="invalid">
                Password is required.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Well done!</Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" className="login-button">Login!</Button>
          </Form>
        </div>
      </Container>

      {/* <form onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />
      </form> */}
      </>
    );
  }
}

export default withAuth(Login);
