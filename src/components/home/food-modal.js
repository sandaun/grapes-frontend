import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import SearchItem from "./SearchItem";



class FoodModal extends Component {
  render() {
    const {title, food} = this.props;
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
            Choose your {food} type!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SearchItem title={title} food={food}/>
        </Modal.Body>
      </Modal>
    );
  }
}

export default FoodModal;