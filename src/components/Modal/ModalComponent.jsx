/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Modal, Button} from 'react-bootstrap';
import MultiForm from '../MultiForm/MultiForm';
import BookModalPage from '../services/BookModalPage';


export default function ModalComponent(props) {
    return (
        <Container>
            <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
             Book Your Appointment
          </Modal.Header>
          <Modal.Body>
            <MultiForm />
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
        </Modal>
        </Container>
      );
}
