import React, { Component } from "react";

import { Accordion, Col } from "react-bootstrap";

export default function Accordians(props) {
  {
    return (
      <>
        <Col lg="12">
          {/* <Accordion defaultActiveKey="0"> */}
          <Accordion >
            <Accordion.Item eventKey="0">
              <Accordion.Header>{props.header}</Accordion.Header>
              <Accordion.Body>{props.body}</Accordion.Body>
            </Accordion.Item>
            <br />
          </Accordion>
        </Col>
      </>
    );
  }
}
