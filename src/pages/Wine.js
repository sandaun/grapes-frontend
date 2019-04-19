import React, { Component } from "react";
import wine from "../lib/wine-service"
// import { withAuth } from "../lib/AuthProvider";

class Grape extends Component {
  state = {
    grapes: "",
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { grapes } = this.state;
    // this.props.history.location.search = grapes;
    wine.search( { grapes });
    console.log(this.props.history.location);
    // this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { grapes } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Grape:</label>
        <input
          type="text"
          name="grapes"
          value={grapes}
          onChange={this.handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Grape;
