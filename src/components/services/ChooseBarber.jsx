import React, { Fragment } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import DetailStore from './DetailStore'

export default function ChooseBarber() {
    return (
        <div>
            <Fragment>
                <Container>
                    <Row>
                        <Col md={7}>
                            <Form>
                                <Form.Check.Input style={{ margin: "10px" , padding: "5px"}}/>
                                 <Form.Check.Label >
                                     <div>
                                         <h2>Naju</h2>
                                     </div>
                                 </Form.Check.Label>
                            </Form>
                        </Col>

                        <Col md={5}>
                            <DetailStore />
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        </div>
    )
}
