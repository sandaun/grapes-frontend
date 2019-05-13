import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render () {
        return (
        <div className="not-found">
            <img src='/images/broken-wine-404-text.jpg' alt='404'/>
            <center><Link to="/">Return to Home Page</Link></center>
        </div>
        );
    }
};

export default NotFound;