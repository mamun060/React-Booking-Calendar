import React, {useState} from 'react'
import { Container,Button } from 'react-bootstrap'
import ChooseBarberModal from './ChooseBarberModal';


export default function ChooseBarbarButton() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Container style={{padding: "50px"}}>
            
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Continue
            </Button>
    
          <ChooseBarberModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />

        </Container>
      );
}
