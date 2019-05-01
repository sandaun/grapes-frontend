import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import editProfile from "../lib/EditProfile-service"

class EditProfile extends Component {
  state = {
    username: this.props.user.username,
    email: this.props.user.email || 'your@email.wine',
    redirect: false,
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, email } = this.state
    editProfile.updateProfile({ username, email })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, email } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={username} onChange={this.handleChange} />
          <label>Email:</label>
          <input type="text" name="email" value={email} onChange={this.handleChange} />
          <input type="submit" value="Do it!" />
      </form >
    )
  }
}

export default withAuth(EditProfile);
