import React,{Fragment} from 'react'
import { Container, Row, Col, Form} from 'react-bootstrap'

export default function ChooseService() {
    return (
        <div>
            <Fragment>
                <Container>
                    
                    <Row>

                        <Col md={12}>
                            <div>
                                <h2>Choose your service</h2>
                            </div>
                            <div>
                            <Form>
                                <Form.Check.Input style={{ margin: "10px" , padding: "5px"}}/>
                                 <Form.Check.Label >
                                     <div>
                                         <h2> Smart Haircut </h2>
                                         <p>pice: $10:00</p>
                                     </div>
                                 </Form.Check.Label>
                            </Form>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </Fragment>
        </div>
    )
}
