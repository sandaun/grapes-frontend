import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";


class Profile extends Component {
  render() {
    return (
      <>
      <Navbar />
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <Link to="/update">Update profile</Link>
      </div>
      </>
    );
  }
}

export default withAuth(Profile);
