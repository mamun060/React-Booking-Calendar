import React, { Fragment, useState } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import ChooseService from './ChooseService'
import DetailStore from './DetailStore'
import { Link } from 'react-router-dom'
import ChooseBarberModal from '../Modal/ChooseBarbarButton'

export default function BookModalPage() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Fragment>
                <Container>
                    <Row>
                        <Col md={7}>
                            <ChooseService />
                        </Col>
                        <Col md={5}>
                           <DetailStore />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} style={{ textAlign: "right"}}>
                            <ChooseBarberModal />
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        </div>
    )
}
