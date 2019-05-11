import React, { Component } from "react";
import {Button, Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";

import SearchItem from "./SearchItem";



class WineModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            CHOOSE YOUR WINE COLOR
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <SearchItem title={this.props.title} grape={this.props.grape}/>
          <Link to={"/wine"}> 
            <Button variant="primary">
              I'm thirsty
            </Button>
          </Link>
          <p>
            Something to say?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default WineModal;