import React, { memo } from 'react';
import { Modal } from 'react-bootstrap';

const DefaultModal = memo((props) => (
  <Modal {...props} aria-labelledby="contained-modal-title-vcenter" backdrop="static">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body className="show-grid">{props.content}</Modal.Body>
  </Modal>
));

export default DefaultModal;
