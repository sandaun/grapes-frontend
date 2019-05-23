import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
import { Nav, NavItem } from 'react-bootstrap';
import '../app.css';

class Buttonsbottom extends Component {
  render() {
    const { isLoggedin, logout } = this.props;
      return isLoggedin ? (
        
        <div className="footer-background">
          <Nav className="justify-content-center white fixed-bottom footer-background footer-text">
            <NavItem>
              <Link className="footer-text" to='/'><span role="img" aria-label="Home">🏠Home</span></Link>
            </NavItem>
            <NavItem>
              <Link className="footer-text" to='/profile'><span role="img" aria-label="Profile">👤Profile</span></Link>
            </NavItem>
            <NavItem>
              <Link className="footer-text" to='/favorites'><span role="img" aria-label="Favorites">❤️Favorites</span></Link>
            </NavItem>
            <NavItem>
              <div className="footer-text" onClick={logout}>
                <span role="img" aria-label="Logout">🚶🏻‍♂️Log out</span>
              </div>
            </NavItem>
          </Nav>
        </div>

      ) : (
       <div>
         <Nav className="justify-content-center white fixed-bottom footer-background footer-text">
          <NavItem className="footer-text">
            <Link className="footer-text" to='/login'><span role="img" aria-label="Login">🙋🏻‍♂️Log in</span></Link>
          </NavItem>
          <NavItem>
            <Link className="footer-text" to='/signup'><span role="img" aria-label="Sign up">✍🏼Sign up</span></Link>
          </NavItem>
          {/* <NavItem>
            <Link className="footer-text" to='/profile'><span role="img" aria-label="Favorites">❤️Favorites</span></Link>
          </NavItem> */}
        </Nav>
      </div>
      )
  }
}

export default withAuth(Buttonsbottom);