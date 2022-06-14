import React from "react";
import Teamhome from "../Teamhome";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { bhushan, mubarak, adinath } from "./Teamconstants";



export default function Teammainret() {
    return (
        <div>
            <Container>
                <Row>
                    {/* <div className="col-sm-6 offset-sm-3 mt-4 mb-4">
                        <h2 className="text-center">Our Expert Team</h2>
                        <p className="text-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry
                        </p>
                    </div> */}
                </Row>
                <Row>
                    <Col lg="4">
                        <Teamhome expert={mubarak} />
                    </Col>
                    <Col lg="4">
                        <Teamhome expert={bhushan} />
                    </Col>
                    <Col lg="4">
                        <Teamhome expert={adinath} />
                    </Col>

                </Row></Container>

        </div>
    );
}