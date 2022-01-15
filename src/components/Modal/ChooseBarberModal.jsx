/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Container, Modal, Button} from 'react-bootstrap';
import ChooseBarber from '../services/ChooseBarber';


export default function ChooseBarberModal(props) {
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
            <ChooseBarber />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        </Container>
      );
}
