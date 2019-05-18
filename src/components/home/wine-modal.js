import React, { Component } from "react";
import { Modal} from 'react-bootstrap';
import SearchItem from "./SearchItem";



class WineModal extends Component {
  render() {
    const { title, grape } = this.props;
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
            Choose your {grape} wine!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SearchItem title={title} grape={grape}/>
        </Modal.Body>
      </Modal>
    );
  }
}

export default WineModal;