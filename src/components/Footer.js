import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import { Nav, Image, NavItem } from 'react-bootstrap';
import '../app.css';

class Buttonsbottom extends Component {
  render() {
    const { isLoggedin } = this.props;
    if (isLoggedin) {
      return (

        <Nav className="justify-content-center white fixed-bottom">
          <NavItem>
            <Link to='/contacts'><Image src="/images/1.png" /></Link>
          </NavItem>

          <NavItem>
            <Link to='/scan' className="mr-1 ml-2"><Image src="/images/2.png" /></Link>
          </NavItem>

          <NavItem>
            <Link to='/tasks'><Image src="/images/3.png" /></Link>
          </NavItem>
        </Nav>

      )
    } else {
      return <div>
      </div>
    }

  }
}

export default withAuth(Buttonsbottom);