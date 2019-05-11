import React, { Component } from "react";
import {Button, Modal} from 'react-bootstrap';
import SearchItem from "./SearchItem";



class FoodModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered='true'
        scrollable='true'
        className='modals'
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            CHOOSE YOUR FOOD!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <SearchItem title={this.props.title} food={this.props.food}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FoodModal;