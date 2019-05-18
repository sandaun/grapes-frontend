import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";


class goBack extends Component {

    render () {
        return (

        <div onClick={this.props.history.goBack} className="fixed-top ml-3 mt-3 text-white">
          <i className="fa fa-arrow-circle-left fa-3x"></i>
        </div>
          // <div>
          //   <Button onClick={this.props.history.goBack}>back</Button>
          // </div>
        );
    }
};

export default withRouter(goBack);