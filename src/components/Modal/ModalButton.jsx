import React, {useState} from 'react'
import { Container,Button } from 'react-bootstrap'
import ModalComponent from './ModalComponent';

export default function ModalButton() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Container style={{padding: "50px"}}>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button>
    
          <ModalComponent
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Container>
      );
}
