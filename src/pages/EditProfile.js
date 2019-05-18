import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Form, Button, Container } from 'react-bootstrap';
import { Link, Redirect } from "react-router-dom";
import Back from "../components/BackButton";

class EditProfile extends Component {
  state = {
    username: '',
    email: '',
    redirect: false,
    validated: false
  }

  componentDidMount(){
    this.setState({
      username: this.props.user.username,
      email: this.props.user.email
    })
  }

  handleSubmit = event => {
    const form = event.currentTarget;
    const { username, email } = this.state;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      this.props.update({ username, email })
      this.setState({
        redirect: true,
        validated: true,
        // username: username,
        // email: email 
      })
    }
    // this.setState({ validated: true, });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, email, validated, redirect } = this.state;
    return (
      <Container className="edit-background vertical-center">
        <Back />
        {redirect && <Redirect to="/profile" />}
        <div>
          <h3 className="mt-4 mb-4 text-white">Edit Profile</h3>
        </div>
        <div className="col-9">
          <Form
            noValidate
            validated={validated}
            onSubmit={this.handleSubmit}
            className="text-center"
          >
            <Form.Group controlId="validationCustom01">
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
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}              
              />
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
