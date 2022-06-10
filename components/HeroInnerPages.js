import React from 'react'
import {Container,Row,Col} from "reactstrap";


export default function HeroInnerPages(props) {
    return (
        <div>
                        <section className="section section-lg section-shaped" >
                <div className="shape shape-style-u1 shape-darks">
                    <span className="span-75" />
                    <span className="span-150" />
                    <span className="span-50" />
                    <span className="span-75" />
                    <span className="span-200" />
                    <span className="span-75" />
                    <span className="span-50" />
                    <span className="span-100" />
                    <span className="span-50" />
                    <span className="span-100" />
                </div>
                <Container className="shape-container d-flex align-items-center py-md-4 py-lg-6 py-sm-1">
                    <div className="col px-0">
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center" lg="10"  data-aos="zoom-in">
                                <p className="display-4 mb-0 text-white" style={{  textTransform:"uppercase" }}>
                                    {props.heading}
                                </p>
                                <p className="h5 text-udfc-orange">
                                    {props.textdetail}
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    )
}
